// components/shared/layout/Navbar/Navbar.types.ts
import { NavigationItem } from '../../../../lib/types';

export interface NavbarProps {
    isDark: boolean;
    onThemeToggle: () => void;
    navigationItems?: NavigationItem[];
}

export interface NavbarItemProps {
    item: NavigationItem;
    isDark: boolean;
}