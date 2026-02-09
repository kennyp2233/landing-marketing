'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Terminal, ArrowRight, Database, Server, Cpu, Activity } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { HeroSectionProps } from './HeroSection.types';
import { useLanguage } from '@/providers/LanguageProvider';

const KhanndaLogoReveal = ({ progress, isDark }: { progress: any, isDark: boolean }) => {
    // Rotate and scale based on scroll
    // Rotate and scale based on scroll - ZOOM EFFECT (Scale up to 15x)
    const scale = useTransform(progress, [0, 0.4, 0.6], [1, 2, 15]);
    // Opacity fades out as we zoom in
    const opacity = useTransform(progress, [0.4, 0.55], [1, 0]);
    // Blur increases as we zoom in (motion blur effect)
    const blur = useTransform(progress, [0.4, 0.55], [0, 20]);

    return (
        <motion.div
            className="relative flex items-center justify-center pointer-events-none"
            style={{ scale, opacity, filter: useTransform(blur, (v) => `blur(${v}px)`) }}
        >
            <div className="relative w-40 h-40 sm:w-56 sm:h-56 flex items-center justify-center">
                {/* Core Glow */}
                <div className={cn(
                    "absolute inset-0 blur-3xl rounded-full animate-pulse",
                    isDark ? "bg-white/5" : "bg-purple-500/20"
                )} />

                {/* The Logo */}
                <div className="relative z-10 w-full h-full p-4">
                    {/* Render standard Next.js Image for Dark Mode (White via filter) */}
                    <div className={cn("relative w-full h-full transition-opacity duration-300", isDark ? "opacity-100" : "opacity-0 absolute inset-0")}>
                        <Image
                            src="/logo-khannda.png"
                            alt="Khannda Core"
                            fill
                            className="object-contain invert brightness-0"
                            priority
                        />
                    </div>

                    {/* Render Gradient Mask for Light Mode */}
                    <div
                        className={cn(
                            "absolute inset-0 p-4 transition-opacity duration-300",
                            isDark ? "opacity-0" : "opacity-100"
                        )}
                    >
                        <div
                            className="w-full h-full bg-gradient-to-br from-[#592355] via-[#712F6D] to-[#8a3c86]"
                            style={{
                                maskImage: 'url(/logo-khannda.png)',
                                WebkitMaskImage: 'url(/logo-khannda.png)',
                                maskSize: 'contain',
                                WebkitMaskSize: 'contain',
                                maskRepeat: 'no-repeat',
                                WebkitMaskRepeat: 'no-repeat',
                                maskPosition: 'center',
                                WebkitMaskPosition: 'center'
                            }}
                        />
                    </div>
                </div>

                {/* Technical Circles/Lines expanding */}
                <motion.div
                    className={cn("absolute inset-0 border rounded-full", isDark ? "border-white/10" : "border-purple-900/10")}
                    style={{ scale: useTransform(progress, [0, 0.5], [1, 2.5]), opacity: useTransform(progress, [0, 0.2], [1, 0]) }}
                />
                <motion.div
                    className={cn("absolute inset-0 border rounded-full border-dashed", isDark ? "border-white/5" : "border-purple-900/5")}
                    style={{ scale: useTransform(progress, [0, 0.5], [1.2, 3]), rotate: 45 }}
                />
            </div>
        </motion.div>
    );
};

// System Dashboard - The Professional Interface
const SystemDashboard = ({ progress, isDark, t }: { progress: any, isDark: boolean, t: any }) => {
    // Reveal animation
    const opacity = useTransform(progress, [0.5, 0.6], [0, 1]);
    const scale = useTransform(progress, [0.5, 0.65], [0.95, 1]);
    const y = useTransform(progress, [0.5, 0.7], [50, 0]);

    // Content reveal staggered
    const contentOpacity = useTransform(progress, [0.65, 0.8], [0, 1]);
    const contentY = useTransform(progress, [0.65, 0.8], [20, 0]);

    return (
        <motion.div
            className="relative z-10 w-full max-w-5xl mx-auto px-6"
            style={{ opacity, scale, y }}
        >
            {/* Enterprise Dashboard Panel */}
            <div className={cn(
                "relative overflow-hidden rounded-sm border backdrop-blur-xl shadow-2xl transition-colors duration-300",
                isDark
                    ? "border-white/10 bg-neutral-900/80 shadow-black/50"
                    : "border-black/5 bg-white/80 shadow-purple-900/10"
            )}>
                {/* Header - Technical & Minimal */}
                <div className={cn(
                    "flex items-center justify-between px-6 py-4 border-b",
                    isDark ? "border-white/5 bg-white/[0.02]" : "border-black/5 bg-black/[0.02]"
                )}>
                    <div className="flex items-center gap-4 text-xs font-mono text-neutral-500 tracking-wider">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                            <span>SYSTEM_ONLINE</span>
                        </div>
                        <span className="text-neutral-700">|</span>
                        <span>LATENCY: 12ms</span>
                    </div>
                    <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">
                        root / khannda / core_logic
                    </div>
                </div>

                {/* Content Area */}
                <div className={cn(
                    "p-8 md:p-16 min-h-[450px] flex flex-col justify-center relative bg-gradient-to-br",
                    isDark ? "from-transparent via-transparent to-white/[0.01]" : "from-purple-50/50 via-white to-white"
                )}>
                    {/* Background Grid inside */}
                    <div className={cn(
                        "absolute inset-0 bg-[size:100px_100px] pointer-events-none",
                        isDark
                            ? "bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)]"
                            : "bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"
                    )} />

                    <motion.div
                        className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                        style={{ opacity: contentOpacity, y: contentY }}
                    >
                        {/* Left: Main Copy */}
                        <div className="lg:col-span-8 space-y-8">
                            <div className={cn(
                                "inline-flex items-center gap-3 px-3 py-1 border rounded-full",
                                isDark ? "bg-white/5 border-white/10" : "bg-purple-500/5 border-purple-500/10"
                            )}>
                                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Enterprise Class</span>
                            </div>

                            <h1 className={cn(
                                "text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] transition-colors",
                                isDark ? "text-white" : "text-neutral-900"
                            )}>
                                {t.hero.title}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86]">
                                    {t.hero.subtitle}
                                </span>
                            </h1>

                            <p className={cn(
                                "text-lg max-w-xl font-light leading-relaxed transition-colors",
                                isDark ? "text-neutral-400" : "text-neutral-600"
                            )}>
                                {t.hero.description}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 pt-4">
                                <button className="group px-8 py-4 bg-gradient-to-r from-[#592355] to-[#8a3c86] text-white text-sm font-medium tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(138,60,134,0.3)] flex items-center justify-center gap-3 rounded-sm">
                                    {t.hero.cta}
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </button>
                                <button className={cn(
                                    "px-8 py-4 border text-sm font-medium tracking-wide transition-colors flex items-center justify-center gap-3 rounded-sm",
                                    isDark
                                        ? "border-white/10 text-neutral-300 hover:bg-white/5"
                                        : "border-black/10 text-neutral-600 hover:bg-black/5"
                                )}>
                                    <Database className="w-4 h-4 text-purple-400" />
                                    VER CASOS DE ÉXITO
                                </button>
                            </div>
                        </div>

                        {/* Right: Abstract Technical Metrics */}
                        <div className={cn(
                            "lg:col-span-4 hidden lg:block border-l pl-12 py-4",
                            isDark ? "border-white/5" : "border-black/5"
                        )}>
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <div className="text-xs text-purple-400 font-mono">UPTIME GUARANTEE</div>
                                    <div className={cn("text-2xl font-light", isDark ? "text-white" : "text-neutral-900")}>99.99%</div>
                                    <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                                        <div className="h-full w-[99%] bg-gradient-to-r from-[#592355] to-[#8a3c86]" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs text-purple-400 font-mono">ARCHITECTURE</div>
                                    <div className={cn("text-xl font-light flex items-center gap-2", isDark ? "text-white" : "text-neutral-900")}>
                                        <Server className="w-4 h-4 text-neutral-500" />
                                        Serverless / Edge
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-xs text-neutral-500 font-mono">SECURITY</div>
                                    <div className={cn("text-xl font-light flex items-center gap-2", isDark ? "text-white" : "text-neutral-900")}>
                                        <Activity className="w-4 h-4 text-neutral-500" />
                                        End-to-End Encrypted
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useLanguage();
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Smooth physics-based spring for smoother animations
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 20,
        restDelta: 0.001
    });

    // Background Opacity fades out as we scroll deep
    const bgOpacity = useTransform(smoothProgress, [0.8, 1], [1, 0]);

    return (
        <div ref={containerRef} className={cn(
            "relative h-[250vh] w-full overflow-clip transition-colors duration-300",
            isDark ? "bg-neutral-950" : "bg-neutral-50"
        )}>
            {/* Sticky Container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center">

                {/* Background Grid with Depth */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ opacity: bgOpacity }}
                >
                    <div className={cn(
                        "absolute inset-0 bg-[size:60px_60px]",
                        isDark
                            ? "bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
                            : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
                    )} />
                    <div className={cn(
                        "absolute inset-0 [mask-image:radial-gradient(circle_800px_at_50%_50%,transparent_0%,#0a0a0a_100%)]",
                        isDark ? "bg-neutral-950" : "bg-neutral-50"
                    )} />
                </motion.div>

                {/* The Genesis Logo (0% - 60%) */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <KhanndaLogoReveal progress={smoothProgress} isDark={isDark} />
                </div>

                {/* The Professional Dashboard (60% - 100%) */}
                <TerminalInterfaceWrapper progress={smoothProgress} isDark={isDark} t={t} />

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-600"
                    style={{ opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]) }}
                >
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">Scroll to Initialize</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
                </motion.div>
            </div>
        </div>
    );
};

// Aliased for clarity in the main component
const TerminalInterfaceWrapper = SystemDashboard;

export default HeroSection;
