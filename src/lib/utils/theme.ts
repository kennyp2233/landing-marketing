// lib/utils/theme.ts
import { Theme } from '../types/theme';

export const getThemeClasses = (theme: Theme) => {
    return {
        background: theme === 'dark'
            ? 'bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20'
            : 'bg-white',
        text: theme === 'dark' ? 'text-white' : 'text-gray-900',
        muted: theme === 'dark' ? 'text-gray-300' : 'text-gray-600',
        border: theme === 'dark' ? 'border-gray-700' : 'border-gray-200',
    };
};