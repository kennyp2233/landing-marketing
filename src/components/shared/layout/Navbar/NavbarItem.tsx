// components/shared/layout/Navbar/NavbarItem.tsx
import React from 'react';
import { cn } from '../../../../lib/utils';
import { NavbarItemProps } from './Navbar.types';

const NavbarItem: React.FC<NavbarItemProps> = ({ item, isDark }) => {
    return (
        <a
            href={item.href}
            className={cn(
                'px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-opacity-10',
                isDark
                    ? 'text-gray-300 hover:text-white hover:bg-white'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
            )}
        >
            {item.label}
        </a>
    );
};

export default NavbarItem;