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
    defaultTheme = 'dark'
}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const isDark = theme === 'dark';

    // Persist theme preference
    // Initialize theme from localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem('glowup-theme') as Theme;
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    // Apply initial dark class based on state (in case default was used before mount effect runs)
    // Actually, we can just rely on the second effect to sync everything.
    // But to avoid flash, we might want to keep the class logic in the second effect only?
    // The previous code had class application in both which is redundant.
    // Let's simplify.

    useEffect(() => {
        localStorage.setItem('glowup-theme', theme);
        // Apply dark class to document
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
            {children}
        </ThemeContext.Provider>
    );
};