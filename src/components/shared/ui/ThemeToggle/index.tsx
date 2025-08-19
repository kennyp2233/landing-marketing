// components/shared/ui/ThemeToggle/index.tsx
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import { ThemeToggleProps } from './ThemeToggle.types';

const ThemeToggle: React.FC<ThemeToggleProps> = ({
    isDark,
    onToggle,
    className
}) => {
    return (
        <button
            onClick={onToggle}
            className={cn(
                'p-2 rounded-lg transition-colors duration-200 hover:scale-105',
                isDark
                    ? 'text-yellow-400 hover:bg-white/10'
                    : 'text-gray-700 hover:bg-gray-100',
                className
            )}
            aria-label="Toggle theme"
        >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
    );
};

export default ThemeToggle;