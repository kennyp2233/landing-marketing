"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/shared/ui/3d-card";
import { AnimatedModal, SolutionModalContent } from "@/components/shared/ui/AnimatedModal";
import { cn } from "@/lib/utils";
import {
    Cpu, Code2, Zap,
    Workflow, RefreshCw, Link,
    Smartphone, Globe, Database,
    BarChart3, TrendingUp, Target
} from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { useLanguage } from "@/providers/LanguageProvider";

interface Solution {
    id: string;
    title: string;
    description: string;
    cta: string;
    icon: React.ReactElement;
    satelliteIcons: React.ReactElement[];
    tagline: string;
    highlights: string[];
    accentColor: "blue" | "purple" | "emerald";
}

const floatAnimation = (delay: number) => ({
    y: [0, -8, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay,
    },
});

const pulseGlow = {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
    },
};

function AnimatedIconDisplay({
    mainIcon,
    satelliteIcons,
    accentColor,
    isDark,
}: {
    mainIcon: React.ReactElement;
    satelliteIcons: React.ReactElement[];
    accentColor: "blue" | "purple" | "emerald";
    isDark: boolean;
}) {
    const glowColorMap = {
        blue: isDark ? "bg-cyan-500/20" : "bg-cyan-400/30",
        purple: isDark ? "bg-purple-500/20" : "bg-purple-400/30",
        emerald: isDark ? "bg-emerald-500/20" : "bg-emerald-400/30",
    };

    const iconColorMap = {
        blue: isDark ? "text-cyan-400" : "text-cyan-600",
        purple: isDark ? "text-purple-400" : "text-purple-600",
        emerald: isDark ? "text-emerald-400" : "text-emerald-600",
    };

    const satColorMap = {
        blue: isDark ? "text-cyan-400/60" : "text-cyan-500/70",
        purple: isDark ? "text-purple-400/60" : "text-purple-500/70",
        emerald: isDark ? "text-emerald-400/60" : "text-emerald-500/70",
    };

    const dotBgMap = {
        blue: isDark ? "bg-cyan-500/10" : "bg-cyan-400/15",
        purple: isDark ? "bg-purple-500/10" : "bg-purple-400/15",
        emerald: isDark ? "bg-emerald-500/10" : "bg-emerald-400/15",
    };

    const positions = [
        { top: "8%", left: "15%" },
        { bottom: "12%", left: "10%" },
        { bottom: "15%", right: "12%" },
    ];

    return (
        <div className="relative w-full h-44 flex items-center justify-center overflow-hidden rounded-xl">
            {/* Dot pattern background */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: `radial-gradient(circle, ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"} 1px, transparent 1px)`,
                    backgroundSize: "16px 16px",
                }}
            />

            {/* Glow behind main icon */}
            <motion.div
                className={cn("absolute w-24 h-24 rounded-full blur-2xl", glowColorMap[accentColor])}
                animate={pulseGlow}
            />

            {/* Main icon */}
            <motion.div
                className={cn("relative z-10", iconColorMap[accentColor])}
                animate={floatAnimation(0)}
            >
                {React.cloneElement(mainIcon as React.ReactElement<any>, {
                    className: "w-12 h-12",
                    strokeWidth: 1.5,
                })}
            </motion.div>

            {/* Satellite icons */}
            {satelliteIcons.map((sat, i) => (
                <motion.div
                    key={i}
                    className={cn("absolute z-10", satColorMap[accentColor])}
                    style={positions[i]}
                    animate={floatAnimation(0.5 + i * 0.6)}
                >
                    <div className={cn("p-2 rounded-lg backdrop-blur-sm", dotBgMap[accentColor])}>
                        {React.cloneElement(sat as React.ReactElement<any>, {
                            className: "w-4 h-4",
                            strokeWidth: 1.5,
                        })}
                    </div>
                </motion.div>
            ))}

            {/* Connecting lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{ opacity: isDark ? 0.1 : 0.08 }}>
                <line x1="50%" y1="50%" x2="20%" y2="15%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="15%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="50%" y1="50%" x2="85%" y2="80%" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
        </div>
    );
}

export function SolutionsCards() {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    const solutions: Solution[] = [
        {
            id: "automation",
            title: t.solutions.topics.automation.title,
            description: t.solutions.topics.automation.description,
            cta: t.solutions.cta,
            icon: <Cpu />,
            satelliteIcons: [<Workflow key="w" />, <RefreshCw key="r" />, <Link key="l" />],
            tagline: t.solutions.topics.automation.tagline,
            highlights: t.solutions.topics.automation.highlights,
            accentColor: "blue"
        },
        {
            id: "development",
            title: t.solutions.topics.development.title,
            description: t.solutions.topics.development.description,
            cta: t.solutions.cta,
            icon: <Code2 />,
            satelliteIcons: [<Smartphone key="s" />, <Globe key="g" />, <Database key="d" />],
            tagline: t.solutions.topics.development.tagline,
            highlights: t.solutions.topics.development.highlights,
            accentColor: "purple"
        },
        {
            id: "consulting",
            title: t.solutions.topics.consulting.title,
            description: t.solutions.topics.consulting.description,
            cta: t.solutions.cta,
            icon: <Zap />,
            satelliteIcons: [<BarChart3 key="b" />, <TrendingUp key="t" />, <Target key="ta" />],
            tagline: t.solutions.topics.consulting.tagline,
            highlights: t.solutions.topics.consulting.highlights,
            accentColor: "emerald"
        }
    ];

    const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);

    const handleOpenModal = (solution: Solution) => {
        setSelectedSolution(solution);
    };

    const handleCloseModal = () => {
        setSelectedSolution(null);
    };

    const handleCta = () => {
        window.open(
            `https://wa.me/593995498636?text=${encodeURIComponent(
                `¡Hola! Me interesa conocer más sobre ${selectedSolution?.title}.`
            )}`,
            "_blank"
        );
    };

    const accentColorMap = {
        blue: isDark ? "text-cyan-400" : "text-cyan-600",
        purple: isDark ? "text-purple-400" : "text-purple-600",
        emerald: isDark ? "text-emerald-400" : "text-emerald-600"
    };

    const iconBgMap = {
        blue: isDark ? "bg-cyan-500/10" : "bg-cyan-500/20",
        purple: isDark ? "bg-purple-500/10" : "bg-purple-500/20",
        emerald: isDark ? "bg-emerald-500/10" : "bg-emerald-500/20"
    };

    const cardGradientMap = {
        blue: isDark
            ? "bg-gradient-to-br from-cyan-950/30 via-neutral-900/40 to-neutral-900/40"
            : "bg-gradient-to-br from-cyan-50/80 via-white/80 to-white/80",
        purple: isDark
            ? "bg-gradient-to-br from-purple-950/30 via-neutral-900/40 to-neutral-900/40"
            : "bg-gradient-to-br from-purple-50/80 via-white/80 to-white/80",
        emerald: isDark
            ? "bg-gradient-to-br from-emerald-950/30 via-neutral-900/40 to-neutral-900/40"
            : "bg-gradient-to-br from-emerald-50/80 via-white/80 to-white/80",
    };

    const ctaBgMap = {
        blue: isDark
            ? "bg-cyan-500/10 border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/30"
            : "bg-cyan-50 border-cyan-200 hover:bg-cyan-100 hover:border-cyan-300",
        purple: isDark
            ? "bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-500/30"
            : "bg-purple-50 border-purple-200 hover:bg-purple-100 hover:border-purple-300",
        emerald: isDark
            ? "bg-emerald-500/10 border-emerald-500/20 hover:bg-emerald-500/20 hover:border-emerald-500/30"
            : "bg-emerald-50 border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300",
    };

    const borderGlowMap = {
        blue: isDark
            ? "border-cyan-500/[0.08] hover:border-cyan-500/[0.2] hover:shadow-cyan-500/[0.08]"
            : "border-cyan-200/60 hover:border-cyan-300 hover:shadow-cyan-500/[0.1]",
        purple: isDark
            ? "border-purple-500/[0.08] hover:border-purple-500/[0.2] hover:shadow-purple-500/[0.08]"
            : "border-purple-200/60 hover:border-purple-300 hover:shadow-purple-500/[0.1]",
        emerald: isDark
            ? "border-emerald-500/[0.08] hover:border-emerald-500/[0.2] hover:shadow-emerald-500/[0.08]"
            : "border-emerald-200/60 hover:border-emerald-300 hover:shadow-emerald-500/[0.1]",
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {solutions.map((item, idx) => (
                    <CardContainer key={idx} className="inter-var w-full">
                        <CardBody
                            className={cn(
                                "relative group/card w-full h-auto rounded-2xl p-6",
                                "transition-all duration-300",
                                "border hover:shadow-xl",
                                cardGradientMap[item.accentColor],
                                borderGlowMap[item.accentColor]
                            )}
                        >
                            {/* Icon + Title */}
                            <CardItem translateZ="50" className="flex items-center gap-3 mb-3">
                                <div className={cn(
                                    "p-2 rounded-lg",
                                    iconBgMap[item.accentColor]
                                )}>
                                    <span className={accentColorMap[item.accentColor]}>
                                        {item.icon}
                                    </span>
                                </div>
                                <h3 className={cn("text-xl font-semibold", isDark ? "text-white" : "text-neutral-900")}>
                                    {item.title}
                                </h3>
                            </CardItem>

                            {/* Description */}
                            <CardItem translateZ="60" className="mb-4">
                                <p className={cn("text-sm leading-relaxed", isDark ? "text-neutral-400" : "text-neutral-600")}>
                                    {item.description}
                                </p>
                            </CardItem>

                            {/* Animated Icon Display */}
                            <CardItem translateZ="80" className="w-full">
                                <AnimatedIconDisplay
                                    mainIcon={item.icon}
                                    satelliteIcons={item.satelliteIcons}
                                    accentColor={item.accentColor}
                                    isDark={isDark}
                                />
                            </CardItem>

                            {/* CTA */}
                            <div className="flex justify-start items-center mt-6">
                                <CardItem translateZ={20}>
                                    <button
                                        onClick={() => handleOpenModal(item)}
                                        className={cn(
                                            "px-5 py-2.5 rounded-lg text-sm font-medium",
                                            "transition-all duration-200 border",
                                            ctaBgMap[item.accentColor],
                                            accentColorMap[item.accentColor]
                                        )}
                                    >
                                        {item.cta} →
                                    </button>
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>

            {/* Modal - Liquid Glass Style */}
            <AnimatedModal
                isOpen={selectedSolution !== null}
                onClose={handleCloseModal}
            >
                {selectedSolution && (
                    <SolutionModalContent
                        title={selectedSolution.title}
                        tagline={selectedSolution.tagline}
                        highlights={selectedSolution.highlights}
                        accentColor={selectedSolution.accentColor}
                        ctaText="Hablemos"
                        onCtaClick={handleCta}
                    />
                )}
            </AnimatedModal>
        </>
    );
}
