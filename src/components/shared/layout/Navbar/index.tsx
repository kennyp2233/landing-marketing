// components/shared/layout/Navbar/index.tsx
"use client";
import React, { useState } from 'react';
import {
    Navbar as ResizableNavbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/shared/ui/ResizableNavbar";
import { NAVIGATION_ITEMS, BRAND_INFO } from '../../../../lib/constants';
import { ThemeToggle, Button } from '../../ui';
import { NavbarProps } from './Navbar.types';

const Navbar: React.FC<NavbarProps> = ({
    isDark,
    onThemeToggle,
    navigationItems = NAVIGATION_ITEMS
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Transform navigation items to match the new navbar format
    const navItems = navigationItems.map(item => ({
        name: item.label,
        link: item.href,
    }));

    const CustomNavbarLogo = () => {
        return (
            <a
                href="#"
                className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
            >
                <img
                    src="/logo-khannda.png"
                    alt="Khannda Logo"
                    className="h-8 md:h-10 w-auto object-contain"
                />
            </a>
        );
    };

    return (
        <div className="relative w-full">
            <ResizableNavbar isDark={isDark}>
                {/* Desktop Navigation */}
                <NavBody isDark={isDark}>
                    <CustomNavbarLogo />
                    <NavItems items={navItems} isDark={isDark} />
                    <div className="flex items-center gap-4">
                        <div className="relative z-50">
                            <ThemeToggle
                                isDark={isDark}
                                onToggle={onThemeToggle}
                            />
                        </div>
                        <Button
                            variant="primary"
                            size="md"
                        >
                            Contáctanos
                        </Button>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav isDark={isDark}>
                    <MobileNavHeader>
                        <CustomNavbarLogo />
                        <div className="flex items-center gap-2">
                            <div className="relative z-50">
                                <ThemeToggle
                                    isDark={isDark}
                                    onToggle={onThemeToggle}
                                />
                            </div>
                            <MobileNavToggle
                                isOpen={isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                isDark={isDark}
                            />
                        </div>
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                        isDark={isDark}
                    >
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`relative text-base md:text-lg font-medium py-3 transition-colors duration-200 ${isDark
                                    ? "text-gray-200 hover:text-white"
                                    : "text-gray-700 hover:text-gray-900"
                                    }`}
                            >
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4 mt-6">
                            <Button
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                size="lg"
                                className="w-full"
                            >
                                Contáctanos
                            </Button>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </ResizableNavbar>
        </div>
    );
};

export default Navbar;
