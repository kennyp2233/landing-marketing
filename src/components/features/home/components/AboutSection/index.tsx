// src/components/features/home/components/AboutSection/index.tsx
"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import {
    Activity, ArrowUpRight, Server, Database, Share2,
    ShieldCheck, Lock, CheckCircle, Terminal, Zap,
    Users, Globe, ShoppingBag, Layers, Search
} from 'lucide-react';

// --- SUB-COMPONENTS FOR THE MONOLITH ---

// 1. GROWTH: The Live Revenue Dashboard
const ViewGrowth = ({ isDark }: { isDark: boolean }) => {
    return (
        <div className="w-full h-full flex flex-col p-6 relative overflow-hidden">
            {/* Background Grid */}
            <div className={cn("absolute inset-0 opacity-20", isDark ? "bg-[size:20px_20px] bg-grid-white/[0.1]" : "bg-[size:20px_20px] bg-grid-black/[0.1]")} />

            {/* Header */}
            <div className="flex justify-between items-center mb-8 z-10">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className={cn("text-xs font-mono font-bold tracking-widest uppercase", isDark ? "text-neutral-400" : "text-neutral-500")}>Live Metrics</span>
                </div>
                <div className={cn("px-2 py-1 rounded text-[10px] font-mono", isDark ? "bg-green-500/20 text-green-400" : "bg-green-100 text-green-700")}>
                    +24.5% vs Last Month
                </div>
            </div>

            {/* Main Metric */}
            <div className="flex items-baseline gap-1 mb-1 z-10">
                <span className={cn("text-5xl font-bold tracking-tighter", isDark ? "text-white" : "text-neutral-900")}>
                    $2.4M
                </span>
                <span className="text-sm font-medium text-neutral-500">/ ARR</span>
            </div>
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-800 rounded-full mb-8 overflow-hidden z-10">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "75%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-green-500"
                />
            </div>

            {/* Simulated Live Graph */}
            <div className="flex-1 flex items-end justify-between gap-2 z-10">
                {[35, 45, 30, 60, 75, 50, 65, 80, 70, 95].map((h, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className={cn(
                            "w-full rounded-t-sm relative group",
                            isDark ? "bg-white/10 hover:bg-green-500" : "bg-purple-900/10 hover:bg-purple-600"
                        )}
                    >
                        {/* Tooltip on hover */}
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] px-2 py-1 rounded pointer-events-none whitespace-nowrap">
                            +{h}% Growth
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Floating 'Success' Badge */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className={cn(
                    "absolute top-1/2 right-10 p-4 rounded-xl border backdrop-blur-md shadow-xl z-20",
                    isDark ? "bg-neutral-900/80 border-green-500/50" : "bg-white/90 border-green-500/30"
                )}
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-green-500/20">
                        <ArrowUpRight size={20} className="text-green-500" />
                    </div>
                    <div>
                        <div className={cn("text-sm font-bold", isDark ? "text-white" : "text-neutral-900")}>ROI Verified</div>
                        <div className="text-xs text-neutral-500">Target Exceeded</div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// 2. ARCHITECTURE: The Liquid Neural Network (Now "Elastic Growth")
const ViewArchitecture = ({ isDark }: { isDark: boolean }) => {
    return (
        <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* Center Core - Business/Platform */}
            <div className="relative z-10">
                <div className={cn(
                    "w-24 h-24 rounded-full flex items-center justify-center border-2 animate-[spin_10s_linear_infinite]",
                    isDark ? "border-purple-500/30 border-t-purple-500" : "border-purple-600/20 border-t-purple-600"
                )}>
                    <div className={cn("w-16 h-16 rounded-full", isDark ? "bg-purple-500/20" : "bg-purple-100")} />
                </div>
                {/* Central Icon: The Platform/Core */}
                <div className="absolute inset-0 m-auto flex items-center justify-center">
                    <div className={cn("p-2 rounded-lg", isDark ? "bg-purple-900/50" : "bg-white")}>
                        <Zap size={24} className={cn(isDark ? "text-purple-400" : "text-purple-600")} />
                    </div>
                </div>
            </div>

            {/* Orbiting Elements - Representing Users, Markets, Expansion */}
            {[0, 1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    className={cn(
                        "absolute p-3 rounded-xl border backdrop-blur-sm z-10 flex items-center gap-2",
                        isDark ? "bg-neutral-900/80 border-white/10" : "bg-white/90 border-purple-200"
                    )}
                    animate={{
                        x: [0, Math.sin(i) * 30, 0],
                        y: [0, Math.cos(i) * 30, 0],
                        rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    style={{
                        top: `${15 + (i * 20)}%`,
                        left: i % 2 === 0 ? '15%' : '65%'
                    }}
                >
                    {/* Varied Icons for "Business Scales" */}
                    {i === 0 && <Users size={18} className="text-blue-500" />}
                    {i === 1 && <Globe size={18} className="text-indigo-500" />}
                    {i === 2 && <ShoppingBag size={18} className="text-pink-500" />}
                    {i === 3 && <Activity size={18} className="text-orange-500" />}

                    <div className="flex flex-col">
                        <span className={cn("text-[10px] font-bold leading-none", isDark ? "text-white" : "text-neutral-900")}>
                            {i === 0 && "Usuarios"}
                            {i === 1 && "Mercados"}
                            {i === 2 && "Ventas"}
                            {i === 3 && "Tráfico"}
                        </span>
                        <span className="text-[9px] text-neutral-500">Escalando...</span>
                    </div>
                </motion.div>
            ))}

            {/* Connecting Lines (svg) - "Flow" */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                <motion.path
                    d="M 100 100 L 250 250 M 400 100 L 250 250 M 100 400 L 250 250 M 400 400 L 250 250"
                    stroke={isDark ? "url(#grad-dark)" : "url(#grad-light)"}
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                />
                <defs>
                    <linearGradient id="grad-dark" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                        <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
                        <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="grad-light" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0" />
                        <stop offset="50%" stopColor="#7c3aed" stopOpacity="1" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Label */}
            <div className={cn(
                "absolute bottom-8 left-0 right-0 mx-auto w-fit px-4 py-1 rounded-full text-xs font-mono border",
                isDark ? "bg-neutral-800 text-neutral-400 border-neutral-700" : "bg-neutral-100 text-neutral-500 border-neutral-200"
            )}>
                Infraestructura Adaptable
            </div>
        </div>
    );
};

// 3. QUALITY: The Security Scanner (Now "Visual Assurance")
const ViewQuality = ({ isDark }: { isDark: boolean }) => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden font-mono text-sm">

            {/* Background "Blueprint" Grid */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className={cn("w-full h-full", isDark ? "bg-[size:30px_30px] bg-grid-white/[0.2]" : "bg-[size:30px_30px] bg-grid-black/[0.2]")} />
            </div>

            {/* Document/System Abstract Representation */}
            <div className={cn(
                "w-3/4 bg-gradient-to-b rounded-2xl border p-6 z-10 flex flex-col gap-4 relative overflow-hidden",
                isDark ? "from-neutral-800 to-neutral-900 border-neutral-700" : "from-white to-neutral-50 border-neutral-200"
            )}>
                {/* Abstract 'Content' blocks */}
                <div className={cn("h-4 w-1/3 rounded", isDark ? "bg-neutral-700" : "bg-neutral-200")} />
                <div className={cn("h-4 w-3/4 rounded", isDark ? "bg-neutral-700" : "bg-neutral-200")} />
                <div className={cn("h-24 w-full rounded border-dashed border-2 flex items-center justify-center", isDark ? "border-neutral-700 bg-neutral-800/50" : "border-neutral-200 bg-neutral-100/50")}>
                    <Layers size={24} className="text-neutral-400" />
                </div>
                <div className={cn("h-4 w-1/2 rounded", isDark ? "bg-neutral-700" : "bg-neutral-200")} />

                {/* The Scanner Beam */}
                <motion.div
                    className={cn("absolute left-0 right-0 top-0 h-2 blur-sm z-20", isDark ? "bg-green-500/50" : "bg-green-400/50")}
                    animate={{ top: ['0%', '120%'], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
            </div>

            {/* Floating Verified Checkmarks appearing */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute top-1/3 right-1/4 bg-green-500 text-white p-1 rounded-full shadow-lg"
                >
                    <CheckCircle size={16} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.2, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute bottom-1/3 left-1/4 bg-green-500 text-white p-1 rounded-full shadow-lg"
                >
                    <CheckCircle size={16} />
                </motion.div>
            </div>

            {/* Central Badge */}
            <div className="absolute inset-0 flex items-center justify-center z-30">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                    className={cn(
                        "p-4 md:p-6 rounded-2xl border backdrop-blur-xl shadow-2xl flex flex-col items-center gap-2",
                        isDark ? "bg-neutral-900/90 border-green-500/30" : "bg-white/95 border-green-500/20"
                    )}
                >
                    <ShieldCheck size={40} className="text-green-500" />
                    <div className="text-center">
                        <div className={cn("text-lg font-bold", isDark ? "text-white" : "text-neutral-900")}>100% Fiable</div>
                        <div className="text-[10px] text-neutral-500 uppercase tracking-widest mt-1">Calidad Certificada</div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

// --- MAIN COMPONENT ---

interface AboutSectionProps {
    isDark: boolean;
}

export function AboutSection({ isDark }: AboutSectionProps) {
    const [activeCard, setActiveCard] = useState(0);

    const content = [
        {
            id: 'growth',
            title: "Resultados Tangibles.",
            description: "No vendemos código, vendemos ROI. Nuestras soluciones están diseñadas para impactar directamente en tu rentabilidad y crecimiento desde el día uno.",
        },
        {
            id: 'architecture',
            title: "Arquitectura Líquida.",
            description: "Infraestructuras que fluyen con tu negocio. Nuestros sistemas escalan orgánicamente, sin fricción, permitiendo que tu operación crezca sin límites técnicos.",
        },
        {
            id: 'quality',
            title: "Código de Cristal.",
            description: "Transparencia radical. Procesos auditables y calidad de ingeniería visible. Construimos confianza con estándares 'Enterprise-Grade' y cero deuda técnica.",
        },
    ];

    return (
        <section className={cn("relative transition-colors duration-300", isDark ? "bg-neutral-950" : "bg-white")}>
            {/* Background Pattern */}
            <div className={cn(
                "absolute inset-0 bg-[size:40px_40px] opacity-5 pointer-events-none",
                isDark
                    ? "bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]"
                    : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
            )} />

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-6 pt-32 pb-0 relative">

                <div className="text-center mb-12 relative z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className={cn(
                            "inline-block px-3 py-1 mb-4 rounded-full backdrop-blur-sm border",
                            isDark ? "bg-white/5 border-white/5" : "bg-neutral-100 border-neutral-200"
                        )}
                    >
                        <span className={cn("text-xs font-mono uppercase tracking-widest", isDark ? "text-purple-300" : "text-purple-600")}>Core Values</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className={cn("text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-6", isDark ? "text-white" : "text-neutral-900")}
                    >
                        Nuestro <span className="gradient-text font-bold">ADN</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    {/* LEFT: THE DIGITAL MONOLITH (Sticky) */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-0 h-screen w-full flex items-center justify-center py-12">
                            {/* The Container Frame */}
                            <div className={cn(
                                "relative w-full h-[500px] max-h-[60vh] rounded-[2rem] border overflow-hidden transition-colors duration-500",
                                isDark
                                    ? "bg-neutral-900/50 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                                    : "bg-white border-neutral-200 shadow-[0_0_50px_rgba(0,0,0,0.05)]"
                            )}>
                                {/* Glass Reflection */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-50" />

                                {/* Inner Glow */}
                                <div className={cn(
                                    "absolute inset-0 blur-3xl opacity-20 pointer-events-none transition-colors duration-500",
                                    activeCard === 0 ? "bg-green-500/20" :
                                        activeCard === 1 ? "bg-purple-500/20" : "bg-blue-500/20"
                                )} />

                                {/* View Switcher */}
                                <AnimatePresence mode="wait">
                                    {activeCard === 0 && (
                                        <motion.div
                                            key="growth"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <ViewGrowth isDark={isDark} />
                                        </motion.div>
                                    )}
                                    {activeCard === 1 && (
                                        <motion.div
                                            key="architecture"
                                            initial={{ opacity: 0, rotateX: 20 }}
                                            animate={{ opacity: 1, rotateX: 0 }}
                                            exit={{ opacity: 0, rotateX: -20 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <ViewArchitecture isDark={isDark} />
                                        </motion.div>
                                    )}
                                    {activeCard === 2 && (
                                        <motion.div
                                            key="quality"
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute inset-0"
                                        >
                                            <ViewQuality isDark={isDark} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: SCROLLABLE NARRATIVE */}
                    <div className="flex flex-col relative z-10 pt-20">
                        {content.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="min-h-screen flex flex-col justify-center py-20"
                                onViewportEnter={() => setActiveCard(index)}
                                viewport={{ margin: "-50% 0px -50% 0px" }}
                            >
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className={cn(
                                        "pl-8 border-l-2 transition-colors duration-500",
                                        activeCard === index
                                            ? (isDark ? "border-purple-500" : "border-purple-600")
                                            : (isDark ? "border-neutral-800" : "border-neutral-200")
                                    )}
                                >
                                    <div className="mb-6 flex items-center gap-3">
                                        <div className={cn(
                                            "w-12 h-12 rounded-full flex items-center justify-center border transition-colors duration-500",
                                            activeCard === index
                                                ? (isDark ? "bg-white text-black border-white" : "bg-black text-white border-black")
                                                : (isDark ? "bg-transparent text-neutral-600 border-neutral-800" : "bg-transparent text-neutral-300 border-neutral-200")
                                        )}>
                                            {index === 0 && <Zap size={20} />}
                                            {index === 1 && <Share2 size={20} />}
                                            {index === 2 && <ShieldCheck size={20} />}
                                        </div>
                                        <span className={cn(
                                            "text-sm font-mono uppercase tracking-widest",
                                            activeCard === index ? (isDark ? "text-purple-400" : "text-purple-600") : "text-neutral-500"
                                        )}>
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3 className={cn(
                                        "text-5xl md:text-6xl font-bold mb-8 transition-colors duration-500",
                                        activeCard === index
                                            ? (isDark ? "text-white" : "text-neutral-900")
                                            : (isDark ? "text-neutral-800" : "text-neutral-300")
                                    )}>
                                        {item.title}
                                    </h3>
                                    <p className={cn(
                                        "text-xl md:text-2xl leading-relaxed max-w-lg transition-colors duration-500 font-light",
                                        activeCard === index
                                            ? (isDark ? "text-neutral-300" : "text-neutral-600")
                                            : (isDark ? "text-neutral-900/20" : "text-neutral-200")
                                    )}>
                                        {item.description}
                                    </p>
                                </motion.div>

                                {/* Mobile Fallback: Mini-Monolith */}
                                <div className="lg:hidden mt-12 h-[350px] w-full rounded-2xl border overflow-hidden relative">
                                    <div className={cn("absolute inset-0", isDark ? "bg-neutral-900" : "bg-neutral-100")} />
                                    {index === 0 && <ViewGrowth isDark={isDark} />}
                                    {index === 1 && <ViewArchitecture isDark={isDark} />}
                                    {index === 2 && <ViewQuality isDark={isDark} />}
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