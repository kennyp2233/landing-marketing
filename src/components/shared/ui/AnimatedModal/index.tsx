"use client";

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X, ArrowRight } from "lucide-react";

interface AnimatedModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
    overlayClassName?: string;
}

export function AnimatedModal({
    isOpen,
    onClose,
    children,
    className,
    overlayClassName,
}: AnimatedModalProps) {
    // Handle escape key
    const handleEscape = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
            // Prevent scroll on touch devices
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        };
    }, [isOpen, handleEscape]);

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={onClose}
                        className={cn(
                            "fixed inset-0 z-50 bg-black/70 backdrop-blur-xl",
                            overlayClassName
                        )}
                    />

                    {/* Modal Container - NO SCROLL */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{
                            type: "spring",
                            damping: 30,
                            stiffness: 400,
                        }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none"
                    >
                        <div
                            className={cn(
                                "relative max-w-lg w-full pointer-events-auto overflow-hidden",
                                "rounded-3xl",
                                className
                            )}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm group"
                            >
                                <X className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
                            </button>

                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

// Minimal content component for solution details - Liquid Glass style
interface SolutionModalContentProps {
    title: string;
    tagline: string;
    highlights: string[];
    accentColor: string; // Color for subtle glow: "blue" | "purple" | "emerald"
    ctaText?: string;
    onCtaClick?: () => void;
}

export function SolutionModalContent({
    title,
    tagline,
    highlights,
    accentColor,
    ctaText = "Hablemos",
    onCtaClick,
}: SolutionModalContentProps) {
    // Map accent colors to very subtle glow
    const glowMap: Record<string, string> = {
        blue: "shadow-[0_0_80px_-20px_rgba(56,189,248,0.15)]",
        purple: "shadow-[0_0_80px_-20px_rgba(168,85,247,0.15)]",
        emerald: "shadow-[0_0_80px_-20px_rgba(52,211,153,0.15)]",
    };

    const borderGlowMap: Record<string, string> = {
        blue: "before:bg-gradient-to-br before:from-cyan-500/10 before:via-transparent before:to-blue-500/5",
        purple: "before:bg-gradient-to-br before:from-purple-500/10 before:via-transparent before:to-violet-500/5",
        emerald: "before:bg-gradient-to-br before:from-emerald-500/10 before:via-transparent before:to-green-500/5",
    };

    const accentTextMap: Record<string, string> = {
        blue: "text-cyan-400/90",
        purple: "text-purple-400/90",
        emerald: "text-emerald-400/90",
    };

    return (
        <div
            className={cn(
                "relative p-8 md:p-10",
                // Liquid glass base
                "bg-white/[0.03] backdrop-blur-2xl",
                "border border-white/[0.08]",
                // Subtle accent glow
                glowMap[accentColor] || glowMap.purple,
                // Inner gradient shimmer
                "before:absolute before:inset-0 before:rounded-3xl before:pointer-events-none",
                borderGlowMap[accentColor] || borderGlowMap.purple
            )}
        >
            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/[0.02] to-transparent rotate-12" />
            </div>

            {/* Content */}
            <div className="relative z-10">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight"
                >
                    {title}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-white/60 text-lg mb-8 leading-relaxed"
                >
                    {tagline}
                </motion.p>

                {/* Minimal Highlights */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-3 mb-10"
                >
                    {highlights.map((highlight, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 + idx * 0.08 }}
                            className="flex items-center gap-3"
                        >
                            <span className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                accentColor === "blue" && "bg-cyan-400/80",
                                accentColor === "purple" && "bg-purple-400/80",
                                accentColor === "emerald" && "bg-emerald-400/80"
                            )} />
                            <span className="text-white/80 text-sm">{highlight}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button - Liquid glass style */}
                <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    onClick={onCtaClick}
                    className={cn(
                        "group flex items-center gap-2 px-6 py-3",
                        "bg-white/[0.08] hover:bg-white/[0.12]",
                        "border border-white/[0.1] hover:border-white/[0.2]",
                        "rounded-xl backdrop-blur-sm",
                        "transition-all duration-300",
                        accentTextMap[accentColor] || accentTextMap.purple
                    )}
                >
                    <span className="font-medium">{ctaText}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
            </div>
        </div>
    );
}
