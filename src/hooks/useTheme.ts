// hooks/useTheme.ts
import { useState, useEffect, createContext, useContext } from 'react';
import { Theme, ThemeContextType } from '../lib/types/theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const useThemeLogic = () => {
    const [theme, setTheme] = useState<Theme>('dark');

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const isDark = theme === 'dark';

    return {
        theme,
        toggleTheme,
        isDark,
        ThemeContext,
    };
};