// components/shared/layout/Navbar/index.tsx
import React from 'react';
import { cn } from '../../../../lib/utils';
import { NAVIGATION_ITEMS } from '../../../../lib/constants';
import { Logo, Button, ThemeToggle } from '../../ui';
import NavbarItem from './NavbarItem';
import { NavbarProps } from './Navbar.types';

const Navbar: React.FC<NavbarProps> = ({
    isDark,
    onThemeToggle,
    navigationItems = NAVIGATION_ITEMS
}) => {
    return (
        <nav className={cn(
            'relative z-50 px-6 py-4 transition-colors duration-300',
            isDark ? 'text-white' : 'text-gray-900'
        )}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Logo size="md" showText={true} />

                {/* Navigation Items */}
                <div className="hidden md:flex items-center space-x-2">
                    {navigationItems.map((item) => (
                        <NavbarItem
                            key={item.id}
                            item={item}
                            isDark={isDark}
                        />
                    ))}
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <ThemeToggle
                        isDark={isDark}
                        onToggle={onThemeToggle}
                    />
                    <Button
                        variant="primary"
                        size="md"
                    >
                        Contáctanos
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
