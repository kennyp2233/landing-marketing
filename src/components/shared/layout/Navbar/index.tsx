// components/shared/layout/Navbar/index.tsx
"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
    Navbar as ResizableNavbar,
    NavBody,
    NavItems,
    MobileNav,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/shared/ui/ResizableNavbar";
import { NAVIGATION_ITEMS } from '../../../../lib/constants';
import { ThemeToggle, Button } from '../../ui';
import { NavbarProps } from './Navbar.types';
import Image from 'next/image';

const Navbar: React.FC<NavbarProps> = ({
    isDark,
    onThemeToggle,
    navigationItems = NAVIGATION_ITEMS
}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Transform navigation items
    const navItems = navigationItems.map(item => ({
        name: item.label,
        link: item.href,
    }));

    // Check if a nav item is active
    const isActiveLink = (link: string) => {
        if (link === '/') return pathname === '/';
        return pathname.startsWith(link);
    };

    return (
        <React.Fragment>
            {/* 1. Floating Logo - Top Left - Always Visible & Fixed */}
            <div className={cn("fixed top-6 left-6 z-50", isDark ? "mix-blend-difference" : "")}>
                <a href="/" className="flex items-center space-x-3 group">
                    <div className="h-10 w-auto relative transition-transform group-hover:scale-110 duration-300">
                        <Image
                            src="/logo-khannda.png"
                            alt="Khannda Logo"
                            width={120}
                            height={40}
                            className={cn(
                                "object-contain h-full w-auto transition-all duration-300",
                                isDark ? "brightness-0 invert" : "brightness-0" // Invert for white (dark mode), default black for light
                            )}
                            priority
                        />
                    </div>
                    <span className={cn(
                        "font-bold text-xl tracking-tight hidden md:block transition-colors",
                        isDark ? "text-white group-hover:text-neutral-200" : "text-black group-hover:text-neutral-700"
                    )}>
                        KHANNDA
                    </span>
                </a>
            </div>

            {/* 2. Floating Navbar Pill - Top Center - Fixed */}
            <div className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
                <nav className={cn(
                    "flex items-center gap-1 p-1.5 rounded-full transition-all duration-500",
                    isScrolled
                        ? cn(
                            "backdrop-blur-xl border shadow-[0_0_20px_rgba(0,0,0,0.1)]",
                            isDark
                                ? "bg-neutral-900/60 border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.4)]"
                                : "bg-white/60 border-black/10 shadow-[0_0_20px_rgba(0,0,0,0.1)]"
                        )
                        : "bg-transparent border-transparent shadow-none",
                    "hover:bg-neutral-900/80 dark:hover:bg-neutral-900/80 hover:bg-neutral-100 dark:hover:bg-neutral-900/80" // Adjust hover states
                )}>
                    {navItems.map((item, idx) => {
                        const isActive = isActiveLink(item.link);
                        return (
                            <a
                                key={idx}
                                href={item.link}
                                className={cn(
                                    "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                                    isActive
                                        ? isDark
                                            ? "text-purple-400 bg-purple-500/10"
                                            : "text-purple-600 bg-purple-500/10"
                                        : isDark
                                            ? "text-neutral-400 hover:text-white hover:bg-white/10"
                                            : "text-neutral-600 hover:text-black hover:bg-black/5"
                                )}
                            >
                                {item.name}
                            </a>
                        );
                    })}

                    {/* Dividers & Actions */}
                    <div className={cn("w-px h-5 mx-2", isDark ? "bg-white/10" : "bg-black/10")} />

                    {/* Language Toggle */}
                    <div className="flex items-center px-2 space-x-2 text-xs font-mono">
                        <button className={cn("font-bold", isDark ? "text-white" : "text-black")}>ES</button>
                        <span className="text-neutral-600">|</span>
                        <button className={cn("transition-colors", isDark ? "text-neutral-500 hover:text-white" : "text-neutral-400 hover:text-black")}>EN</button>
                    </div>

                    <div className={cn("w-px h-5 mx-2", isDark ? "bg-white/10" : "bg-black/10")} />

                    {/* Theme Toggle */}
                    <button
                        onClick={onThemeToggle}
                        className={cn(
                            "p-2 rounded-full transition-colors",
                            isDark
                                ? "text-neutral-400 hover:text-white hover:bg-white/10"
                                : "text-neutral-600 hover:text-black hover:bg-black/5"
                        )}
                    >
                        {isDark ? '☀︎' : '☾'}
                    </button>
                </nav>
            </div>

            {/* 3. CTA Button - Top Right - Fixed */}
            <div className="fixed top-6 right-6 z-40 hidden md:block">
                <button className={cn(
                    "px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-colors shadow-lg",
                    isDark
                        ? "bg-white text-black hover:bg-neutral-200"
                        : "bg-black text-white hover:bg-neutral-800"
                )}>
                    Start Project
                </button>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="fixed top-6 right-6 z-50 md:hidden">
                <MobileNavToggle
                    isOpen={isMobileMenuOpen}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    isDark={isDark}
                />
            </div>

            {/* Mobile Menu Overlay */}
            <MobileNavMenu
                isOpen={isMobileMenuOpen}
                onClose={() => setIsMobileMenuOpen(false)} // Fix: ensure onClose is passed if component expects it, although ResizableNavbar definition showed it might not use it directly for state but for closing. Actually ResizableNavbar/MobileNavMenu doesn't seem to use onClose in the view I saw, but let's keep it if consistent.
                // Wait, the view of ResizableNavbar/index.tsx definition:
                // export const MobileNavMenu = ({ children, className, isOpen, isDark }: { ...; onClose?: () => void; ... }) => ( ... )
                // It accepts it but doesn't seem to use it in the JSX shown (it just renders children).
                // But the caller passes it. I will keep it.
                isDark={isDark}
            >
                <div className="flex flex-col items-center justify-center space-y-8 mt-12">
                    {navItems.map((item, idx) => {
                        const isActive = isActiveLink(item.link);
                        return (
                            <a
                                key={idx}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={cn(
                                    "text-2xl font-light tracking-widest transition-colors",
                                    isActive
                                        ? "text-purple-400 border-b-2 border-purple-400 pb-1"
                                        : isDark
                                            ? "text-white hover:text-purple-400"
                                            : "text-black hover:text-purple-600"
                                )}
                            >
                                {item.name}
                            </a>
                        );
                    })}
                    <button className={cn(
                        "mt-8 px-8 py-3 rounded-full font-bold transition-colors",
                        isDark ? "bg-white text-black hover:bg-neutral-200" : "bg-black text-white hover:bg-neutral-800"
                    )}>
                        Start Project
                    </button>
                </div>
            </MobileNavMenu>

        </React.Fragment>
    );
};

export default Navbar;
