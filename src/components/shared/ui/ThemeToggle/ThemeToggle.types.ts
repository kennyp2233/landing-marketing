// components/shared/ui/ThemeToggle/ThemeToggle.types.ts
export interface ThemeToggleProps {
    isDark: boolean;
    onToggle: () => void;
    className?: string;
}