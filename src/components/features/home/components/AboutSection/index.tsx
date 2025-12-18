// src/components/features/home/components/AboutSection/index.tsx
"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
    TrendingUp, Server, Database, Cpu, GitCommit, Eye,
    CheckCircle, ShieldCheck, Activity, FileCode
} from 'lucide-react';

interface AboutSectionProps {
    isDark: boolean;
}

export function AboutSection({ isDark }: AboutSectionProps) {
    const [activeCard, setActiveCard] = useState(0);

    const content = [
        {
            title: "Más que código, entendemos tu negocio.",
            description: "Nacimos para cerrar la brecha entre la ingeniería compleja y las necesidades reales de negocio. En KHANNDA, no solo escribimos funciones; diseñamos soluciones que impactan tu rentabilidad desde el día 1.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-0 relative overflow-visible">
                    {/* Revenue Graph Metaphor */}
                    <div className="relative z-10 w-full h-full flex flex-col justify-center">
                        <div className="flex justify-between items-end mb-4 text-xs font-mono text-neutral-500 opacity-60">
                            <span>Start</span>
                            <span>Growth</span>
                        </div>
                        {/* Increased container height and adjusted SVG to prevent clipping */}
                        <div className="h-[300px] w-full relative">
                            <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 500 300" preserveAspectRatio="none">
                                <motion.path
                                    d="M0 280 C 150 280, 200 100, 350 100 S 480 40, 500 20"
                                    fill="none"
                                    stroke="url(#gradient-line)"
                                    strokeWidth="6"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    whileInView={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                                <defs>
                                    <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                                        <stop offset="0%" stopColor="#712F6D" stopOpacity="0.2" />
                                        <stop offset="100%" stopColor="#d946ef" />
                                    </linearGradient>
                                </defs>
                            </svg>

                            {/* Pulse Point */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.5, duration: 0.5 }}
                                className="absolute top-[20px] right-0 transform translate-x-3 -translate-y-1/2 z-20"
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-fuchsia-500 rounded-full animate-ping opacity-50" />
                                    <div className={cn(
                                        "relative backdrop-blur-md text-sm font-bold px-4 py-2 rounded-full border flex items-center gap-2 shadow-[0_0_30px_rgba(217,70,239,0.3)]",
                                        isDark
                                            ? "bg-neutral-900/60 text-white border-fuchsia-500/50"
                                            : "bg-white/90 text-neutral-900 border-fuchsia-500/30"
                                    )}>
                                        <TrendingUp size={16} className={isDark ? "text-fuchsia-400" : "text-fuchsia-600"} />
                                        +320% ROI
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Visión: Arquitectura Invisible.",
            description: "Ser la base sólida detrás de las empresas más eficientes de la región. Nuestro software no se siente; fluye. Es la infraestructura invisible que permite que tu operación escale sin fricción.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-0 relative overflow-visible">
                    {/* Network Topology Metaphor */}
                    <div className="relative z-10 w-full h-[400px] flex items-center justify-center">
                        {/* Center Node */}
                        <div className={cn(
                            "relative z-20 p-6 rounded-full border shadow-[0_0_80px_rgba(168,85,247,0.1)] backdrop-blur-sm",
                            isDark ? "bg-neutral-900/50 border-purple-500/30" : "bg-white border-purple-500/20"
                        )}>
                            <Server className={cn("w-12 h-12", isDark ? "text-purple-400" : "text-purple-600")} />
                        </div>

                        {/* Satellite Nodes Ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 z-10 flex items-center justify-center"
                        >
                            <div className={cn(
                                "absolute top-[10%] left-1/2 -translate-x-1/2 p-3 rounded-full border backdrop-blur-sm",
                                isDark ? "bg-neutral-900/50 border-white/10" : "bg-white border-neutral-200"
                            )}>
                                <Database className={cn("w-6 h-6", isDark ? "text-blue-400" : "text-blue-600")} />
                            </div>
                            <div className={cn(
                                "absolute bottom-[20%] right-[15%] p-3 rounded-full border backdrop-blur-sm",
                                isDark ? "bg-neutral-900/50 border-white/10" : "bg-white border-neutral-200"
                            )}>
                                <Cpu className={cn("w-6 h-6", isDark ? "text-emerald-400" : "text-emerald-600")} />
                            </div>
                            <div className={cn(
                                "absolute bottom-[20%] left-[15%] p-3 rounded-full border backdrop-blur-sm",
                                isDark ? "bg-neutral-900/50 border-white/10" : "bg-white border-neutral-200"
                            )}>
                                <Activity className={cn("w-6 h-6", isDark ? "text-orange-400" : "text-orange-600")} />
                            </div>
                        </motion.div>

                        {/* Connection Lines (Adapted for Light Mode visibility) */}
                        <svg className="absolute inset-0 w-full h-full animate-pulse pointer-events-none opacity-20">
                            <circle cx="50%" cy="50%" r="40%" className={isDark ? "stroke-white" : "stroke-neutral-400"} strokeWidth="1" fill="none" />
                            <circle cx="50%" cy="50%" r="60%" className={isDark ? "stroke-white" : "stroke-neutral-400"} strokeWidth="1" fill="none" strokeDasharray="8 8" />
                        </svg>
                    </div>
                </div>
            ),
        },
        {
            title: "Transparencia & Responsabilidad.",
            description: "Código abierto hacia el cliente. Procesos claros. Ownership total de cada deploy. No vendemos horas de desarrollo, vendemos resultados auditables y garantías de estabilidad.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-0 relative overflow-visible">
                    {/* Timeline Metaphor */}
                    <div className="w-full max-w-sm space-y-10 relative z-10 pl-10">

                        <div className={cn(
                            "absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent to-transparent -z-10",
                            isDark ? "via-white/10" : "via-neutral-300"
                        )} />

                        {/* Item 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 0.4, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center space-x-6"
                        >
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center border z-10",
                                isDark ? "bg-neutral-900 border-white/5" : "bg-white border-neutral-200"
                            )}>
                                <GitCommit className="w-5 h-5 text-neutral-500" />
                            </div>
                            <div className="text-sm font-mono text-neutral-600">Initial Commit</div>
                        </motion.div>

                        {/* Item 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 0.7, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center space-x-6"
                        >
                            <div className={cn(
                                "w-10 h-10 rounded-full flex items-center justify-center border z-10",
                                isDark ? "bg-neutral-900 border-white/5" : "bg-white border-neutral-200"
                            )}>
                                <Eye className="w-5 h-5 text-neutral-400" />
                            </div>
                            <div className={cn("text-sm font-bold", isDark ? "text-neutral-400" : "text-neutral-500")}>Code Review Passed</div>
                        </motion.div>

                        {/* Item 3 (Active) */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center space-x-6"
                        >
                            <div className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center border shadow-[0_0_20px_rgba(34,197,94,0.3)] z-10",
                                isDark ? "bg-green-500/10 border-green-500/50" : "bg-green-100 border-green-500/30"
                            )}>
                                <CheckCircle className={cn("w-6 h-6", isDark ? "text-green-400" : "text-green-600")} />
                            </div>
                            <div className={cn(
                                "border px-5 py-3 rounded-xl backdrop-blur-md shadow-sm",
                                isDark ? "bg-neutral-900/40 border-green-500/20" : "bg-white/90 border-green-500/20"
                            )}>
                                <div className={cn("text-lg font-bold flex items-center gap-2", isDark ? "text-white" : "text-neutral-900")}>
                                    Deploy Verified
                                </div>
                                <div className={cn("text-xs font-mono mt-1", isDark ? "text-green-400/80" : "text-green-600")}>Live on Production</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            ),
        },
        {
            title: "Calidad: Cero Deuda Técnica.",
            description: "Preferimos decir 'no' a una feature apresurada que entregar código sucio. Nuestra ingeniería es robusta para asegurar que tu inversión tecnológica no sea un gasto, sino un activo a largo plazo.",
            content: (
                <div className="h-full w-full flex items-center justify-center p-0 relative overflow-visible">

                    {/* Calidad Redesign: Floating Analyzer */}
                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">

                        {/* Abstract "Code Layers" */}
                        <div className="relative w-full max-w-md [perspective:1000px]">

                            {/* Layer 1: Base Code */}
                            <motion.div
                                initial={{ rotateX: 20, y: 0, opacity: 0.5 }}
                                whileInView={{ rotateX: 20, y: 20, opacity: 0.3 }}
                                transition={{ duration: 1 }}
                                className={cn(
                                    "w-full h-32 border rounded-xl absolute top-0 [transform-style:preserve-3d] overflow-hidden",
                                    isDark ? "bg-neutral-900/30 border-white/5" : "bg-white border-neutral-200"
                                )}
                            >
                                <div className="p-4 space-y-2 opacity-50 font-mono text-[10px] text-neutral-400 dark:text-neutral-600">
                                    <div className={cn("w-3/4 h-2 rounded", isDark ? "bg-neutral-800" : "bg-neutral-200")}></div>
                                    <div className={cn("w-1/2 h-2 rounded", isDark ? "bg-neutral-800" : "bg-neutral-200")}></div>
                                    <div className={cn("w-2/3 h-2 rounded", isDark ? "bg-neutral-800" : "bg-neutral-200")}></div>
                                </div>
                            </motion.div>

                            {/* Layer 2: Validated Code */}
                            <motion.div
                                initial={{ rotateX: 20, y: -20, scale: 0.95 }}
                                whileInView={{ rotateX: 20, y: 0, scale: 1 }}
                                transition={{ duration: 1 }}
                                className={cn(
                                    "w-full relative z-10 backdrop-blur-xl border rounded-xl overflow-hidden shadow-2xl",
                                    isDark ? "bg-neutral-950/80 border-white/10" : "bg-white border-neutral-200"
                                )}
                            >
                                {/* Header */}
                                <div className={cn(
                                    "flex items-center justify-between px-4 py-3 border-b",
                                    isDark ? "border-white/5 bg-white/5" : "border-neutral-100 bg-neutral-50"
                                )}>
                                    <div className="flex space-x-1.5">
                                        <div className={cn("w-2.5 h-2.5 rounded-full", isDark ? "bg-red-500/20" : "bg-red-400")} />
                                        <div className={cn("w-2.5 h-2.5 rounded-full", isDark ? "bg-yellow-500/20" : "bg-yellow-400")} />
                                        <div className={cn("w-2.5 h-2.5 rounded-full", isDark ? "bg-green-500/20" : "bg-green-400")} />
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-500 dark:text-neutral-400">
                                        <FileCode size={12} className={isDark ? "text-purple-400" : "text-purple-500"} />
                                        <span>core_logic.ts</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={cn("p-6 font-mono text-xs leading-relaxed relative", isDark ? "text-white" : "text-neutral-800")}>
                                    {/* Scanning Effect Line */}
                                    <motion.div
                                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent z-20 shadow-[0_0_20px_rgba(16,185,129,0.5)]"
                                        animate={{ top: ["0%", "100%"] }}
                                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    />

                                    <div className="flex items-center gap-2 mb-2">
                                        <span className={isDark ? "text-purple-400" : "text-purple-600"}>interface</span>
                                        <span className={isDark ? "text-yellow-200" : "text-yellow-600"}>SystemArchitecture</span>
                                        <span className={isDark ? "text-white" : "text-neutral-900"}>{'{'}</span>
                                    </div>
                                    <div className="pl-4 space-y-1">
                                        <div className="flex">
                                            <span className={isDark ? "text-blue-300" : "text-blue-600"}>scalability</span>
                                            <span className="text-neutral-500">:</span>
                                            <span className={cn("ml-2", isDark ? "text-emerald-400" : "text-emerald-600")}> 'infinite'</span>;
                                        </div>
                                        <div className="flex">
                                            <span className={isDark ? "text-blue-300" : "text-blue-600"}>security</span>
                                            <span className="text-neutral-500">:</span>
                                            <span className={cn("ml-2", isDark ? "text-emerald-400" : "text-emerald-600")}> 'enterprise-grade'</span>;
                                        </div>
                                        <div className="flex">
                                            <span className={isDark ? "text-blue-300" : "text-blue-600"}>techDebt</span>
                                            <span className="text-neutral-500">:</span>
                                            <span className="text-neutral-500 ml-2"> null</span>;
                                        </div>
                                    </div>
                                    <div className={cn("mt-1", isDark ? "text-white" : "text-neutral-900")}>{'}'}</div>
                                </div>

                            </motion.div>
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -right-4 bottom-10 z-30"
                        >
                            <div className="bg-gradient-to-r from-emerald-500 to-green-600 p-[1px] rounded-full shadow-[0_0_40px_rgba(16,185,129,0.3)]">
                                <div className={cn(
                                    "px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-md",
                                    isDark ? "bg-black/90" : "bg-white"
                                )}>
                                    <ShieldCheck size={16} className={cn(isDark ? "text-emerald-400" : "text-emerald-600")} />
                                    <div className="flex flex-col leading-none">
                                        <span className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase font-bold tracking-wider">Quality Score</span>
                                        <span className={cn("text-sm font-bold", isDark ? "text-white" : "text-neutral-900")}>A+ 100%</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className={cn("relative transition-colors duration-300", isDark ? "bg-neutral-950" : "bg-white")}>
            {/* Horizontal Grid Lines Background - Adapted for light mode visibility */}
            <div className={cn(
                "absolute inset-0 bg-[size:40px_40px] opacity-10 pointer-events-none",
                isDark
                    ? "bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
                    : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
            )} />

            {/* Sticky Scroll Container */}
            <div className="max-w-7xl mx-auto px-6 py-24 relative">

                {/* Header */}
                <div className="text-center mb-24 relative z-10">
                    <div className={cn(
                        "inline-block px-3 py-1 mb-4 rounded-full backdrop-blur-sm border",
                        isDark ? "bg-white/5 border-white/5" : "bg-neutral-100 border-neutral-200"
                    )}>
                        <span className={cn("text-xs font-mono uppercase tracking-widest", isDark ? "text-purple-300" : "text-purple-600")}>Core Values</span>
                    </div>
                    <h2 className={cn("text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6", isDark ? "text-white" : "text-neutral-900")}>
                        Nuestro <span className="gradient-text font-bold">ADN</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side: Sticky Content */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-40 h-[500px] w-full isolate overflow-visible origin-top">
                            {content.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0 }}
                                    animate={{
                                        opacity: activeCard === index ? 1 : 0,
                                        scale: activeCard === index ? 1 : 0.95,
                                        y: activeCard === index ? 0 : 50,
                                        zIndex: activeCard === index ? 10 : 0
                                    }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0 h-full w-full flex items-center justify-center pointer-events-none"
                                >
                                    <div className="w-full h-full relative">
                                        {item.content}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Scrollable Text */}
                    <div className="flex flex-col pb-40 relative z-10">
                        {content.map((item, index) => (
                            <motion.div
                                key={index}
                                className="min-h-[90vh] flex flex-col justify-center py-20"
                                onViewportEnter={() => setActiveCard(index)}
                                viewport={{ margin: "-25% 0px -25% 0px" }}
                            >
                                <motion.h3
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={cn(
                                        "text-3xl md:text-4xl font-bold mb-6 transition-colors duration-500",
                                        activeCard === index
                                            ? (isDark ? "text-white" : "text-neutral-900")
                                            : (isDark ? "text-neutral-700/50" : "text-neutral-300")
                                    )}
                                >
                                    {item.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 }}
                                    className={cn(
                                        "text-lg md:text-xl leading-relaxed max-w-lg transition-colors duration-500",
                                        activeCard === index
                                            ? (isDark ? "text-neutral-400" : "text-neutral-600")
                                            : (isDark ? "text-neutral-800" : "text-neutral-300")
                                    )}
                                >
                                    {item.description}
                                </motion.p>

                                {/* Mobile Content Fallback */}
                                <div className="lg:hidden mt-8 h-80 w-full overflow-visible">
                                    {item.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default AboutSection;