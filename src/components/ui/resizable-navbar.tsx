"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
    isDark?: boolean;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
    isDark?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
    isDark?: boolean;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
    isDark?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
    isDark?: boolean;
}

export const Navbar = ({ children, className, isDark }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-0 z-40 w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                        child as React.ReactElement<{ visible?: boolean; isDark?: boolean }>,
                        { visible, isDark },
                    )
                    : child,
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible, isDark }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "95%" : "100%",
                y: visible ? 20 : 0,
                paddingLeft: visible ? "32px" : "24px",
                paddingRight: visible ? "32px" : "24px",
                paddingTop: visible ? "16px" : "12px",
                paddingBottom: visible ? "16px" : "12px",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            style={{
                minWidth: "1000px",
            }}
            className={cn(
                "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent transition-colors duration-300 lg:flex",
                visible && (isDark ? "bg-black/50 border border-white/10" : "bg-white/95 border border-gray-200/30"),
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick, isDark }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-8 text-sm font-medium transition duration-200 lg:flex",
                className,
            )}
        >
            {items.map((item, idx) => (
                <a
                    onMouseEnter={() => setHovered(idx)}
                    onClick={onItemClick}
                    className={cn(
                        "relative px-4 py-2 transition-colors duration-200 font-medium",
                        isDark ? "text-gray-200 hover:text-white" : "text-gray-700 hover:text-gray-900"
                    )}
                    key={`link-${idx}`}
                    href={item.link}
                >
                    {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className={cn(
                                "absolute inset-0 h-full w-full rounded-full",
                                isDark ? "bg-white/15" : "bg-gray-100/80"
                            )}
                        />
                    )}
                    <span className="relative z-20">{item.name}</span>
                </a>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible, isDark }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "95%" : "100%",
                paddingRight: visible ? "20px" : "16px",
                paddingLeft: visible ? "20px" : "16px",
                borderRadius: visible ? "16px" : "2rem",
                y: visible ? 20 : 0,
                paddingTop: visible ? "16px" : "12px",
                paddingBottom: visible ? "16px" : "12px",
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent transition-colors duration-300 lg:hidden",
                visible && (isDark ? "bg-black/95 border border-white/10" : "bg-white/95 border border-gray-200/30"),
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className,
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose,
    isDark,
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg px-6 py-8 shadow-lg backdrop-blur-md",
                        isDark
                            ? "bg-black/98 border border-white/10"
                            : "bg-white/98 border border-gray-200/30",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
    isDark,
}: {
    isOpen: boolean;
    onClick: () => void;
    isDark?: boolean;
}) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "p-2 rounded-lg transition-colors duration-200",
                isDark ? "hover:bg-white/10" : "hover:bg-gray-100"
            )}
            aria-label="Toggle menu"
        >
            {isOpen ? (
                <IconX
                    className={isDark ? "text-white" : "text-gray-800"}
                    size={24}
                />
            ) : (
                <IconMenu2
                    className={isDark ? "text-white" : "text-gray-800"}
                    size={24}
                />
            )}
        </button>
    );
};

export const NavbarLogo = ({ isDark }: { isDark?: boolean }) => {
    return (
        <a
            href="#"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
        >
            <img
                src="https://assets.aceternity.com/logo-dark.png"
                alt="logo"
                width={30}
                height={30}
            />
            <span className={cn(
                "font-medium",
                isDark ? "text-white" : "text-gray-900"
            )}>
                Startup
            </span>
        </a>
    );
};

export const NavbarButton = ({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    isDark,
    ...props
}: {
    href?: string;
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "dark" | "gradient";
    isDark?: boolean;
} & (
        | React.ComponentPropsWithoutRef<"a">
        | React.ComponentPropsWithoutRef<"button">
    )) => {
    const baseStyles =
        "px-4 py-2 rounded-md text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    const getVariantStyles = () => {
        switch (variant) {
            case "primary":
                return cn(
                    "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
                    isDark ? "bg-white text-black" : "bg-white text-black"
                );
            case "secondary":
                return cn(
                    "bg-transparent shadow-none",
                    isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"
                );
            case "dark":
                return "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";
            case "gradient":
                return "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]";
            default:
                return "";
        }
    };

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, getVariantStyles(), className)}
            {...props}
        >
            {children}
        </Tag>
    );
};
