// src/providers/LanguageProvider.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { es, en, Translations } from '@/lib/i18n';

export type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Convenience hook for just getting translations
export const useTranslation = () => {
    const { t, language } = useLanguage();
    return { t, language };
};

interface LanguageProviderProps {
    children: React.ReactNode;
    defaultLanguage?: Language;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
    children,
    defaultLanguage = 'es'
}) => {
    const [language, setLanguageState] = useState<Language>(defaultLanguage);
    const [mounted, setMounted] = useState(false);

    // Get translations based on current language
    const t = language === 'es' ? es : en;

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        if (typeof window !== 'undefined') {
            localStorage.setItem('khannda-language', lang);
        }
    }, []);

    // Load saved language preference on mount
    useEffect(() => {
        setMounted(true);
        const savedLanguage = localStorage.getItem('khannda-language') as Language;
        if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
            setLanguageState(savedLanguage);
        }
    }, []);

    // Don't render with wrong language during SSR
    // Return default language until mounted to avoid hydration mismatch
    const effectiveT = mounted ? t : (defaultLanguage === 'es' ? es : en);

    return (
        <LanguageContext.Provider value={{
            language: mounted ? language : defaultLanguage,
            setLanguage,
            t: effectiveT
        }}>
            {children}
        </LanguageContext.Provider>
    );
};
