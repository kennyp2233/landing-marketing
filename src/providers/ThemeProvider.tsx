// providers/ThemeProvider.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, ThemeContextType } from '../lib/types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    defaultTheme = 'system'
}) => {
    // 1. Initialize with defaultTheme so Server and Client 1st pass match
    const [theme, setTheme] = useState<Theme>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    const toggleTheme = () => {
        setTheme(prev => {
            const next = prev === 'dark' ? 'light' : 'dark';
            // When toggling manually, we explicitly set light/dark and exit system mode logic temporarily if intended, 
            // but for simple toggle:
            return next;
        });
    };

    // Calculate effective dark mode based on theme state + system preference
    // If theme is 'system', we need to check matchMedia
    const getEffectiveTheme = (t: Theme) => {
        if (t === 'system') {
            if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
            return 'light'; // default system light
        }
        return t;
    };

    // 2. Hydration Mismatch Fix: Only access window/localStorage AFTER mount
    useEffect(() => {
        setMounted(true);

        const savedTheme = localStorage.getItem('glowup-theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        } else if (defaultTheme === 'system') {
            // If nothing saved and default is system, we leave it as 'system' 
            // and let the effective calculator handle the class
        }
    }, [defaultTheme]);

    // 3. Sync DOM class whenever state changes (but only if mounted to avoid mismatches if needed, 
    // though classes on html usually done via effect are fine)
    useEffect(() => {
        if (!mounted) return;

        localStorage.setItem('glowup-theme', theme);

        const effective = getEffectiveTheme(theme);
        const root = document.documentElement;

        // Remove both first to clear state
        root.classList.remove('dark', 'light');

        if (effective === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.add('light');
        }
    }, [theme, mounted]);

    // Derived state for consumers
    // Note: During SSR, 'system' might default to false or true depending on preference. 
    // Usually usage of isDark in UI requires mounted check or suppressing hydration warning.
    // We will return false (light) or defaultTheme logic for SSR safety.
    const isDark = mounted ? getEffectiveTheme(theme) === 'dark' : (defaultTheme === 'dark');

    // Prevent hydration mismatch for children using the context
    // Optionally return null until mounted if the UI heavily depends on correct theme
    // but that causes layout shift. Better to just let it update.

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};