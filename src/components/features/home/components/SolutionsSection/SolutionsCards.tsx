"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/shared/ui/3d-card";
import { AnimatedModal, SolutionModalContent } from "@/components/shared/ui/AnimatedModal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Cpu, Code2, Zap } from "lucide-react";
import { useTheme } from "@/providers/ThemeProvider";
import { useLanguage } from "@/providers/LanguageProvider";

interface Solution {
    id: string;
    title: string;
    description: string;
    image: string;
    cta: string;
    icon: React.ReactNode;
    // Modal content - minimal
    tagline: string;
    highlights: string[];
    accentColor: "blue" | "purple" | "emerald";
}



export function SolutionsCards() {
    const { isDark } = useTheme();
    const { t } = useLanguage();

    const solutions: Solution[] = [
        {
            id: "automation",
            title: t.solutions.topics.automation.title,
            description: t.solutions.topics.automation.description,
            image: "/assets/images/automation-abstract.png",
            cta: t.solutions.cta,
            icon: <Cpu className="w-5 h-5" />,
            tagline: t.solutions.topics.automation.tagline,
            highlights: t.solutions.topics.automation.highlights,
            accentColor: "blue"
        },
        {
            id: "development",
            title: t.solutions.topics.development.title,
            description: t.solutions.topics.development.description,
            image: "/assets/images/development-abstract.png",
            cta: t.solutions.cta,
            icon: <Code2 className="w-5 h-5" />,
            tagline: t.solutions.topics.development.tagline,
            highlights: t.solutions.topics.development.highlights,
            accentColor: "purple"
        },
        {
            id: "consulting",
            title: t.solutions.topics.consulting.title,
            description: t.solutions.topics.consulting.description,
            image: "/assets/images/consulting-abstract.png",
            cta: t.solutions.cta,
            icon: <Zap className="w-5 h-5" />,
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

    // Color mappings matching homepage styles - theme-aware
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

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {solutions.map((item, idx) => (
                    <CardContainer key={idx} className="inter-var w-full">
                        <CardBody
                            className={cn(
                                "relative group/card w-full h-auto rounded-2xl p-6",
                                "transition-all duration-300",
                                isDark
                                    ? "bg-neutral-900/40 border border-white/[0.08] hover:border-white/[0.15] hover:shadow-xl hover:shadow-purple-500/[0.05]"
                                    : "bg-white/80 border border-neutral-200 hover:border-neutral-300 hover:shadow-xl hover:shadow-purple-500/[0.1]"
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

                            {/* Image */}
                            <CardItem translateZ="80" className="w-full">
                                <div className="relative overflow-hidden rounded-xl">
                                    <Image
                                        src={item.image}
                                        height="400"
                                        width="600"
                                        className="h-44 w-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                                        alt={item.title}
                                    />
                                    {/* Subtle gradient overlay */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-t via-transparent to-transparent",
                                        isDark ? "from-neutral-900/60" : "from-white/40"
                                    )} />
                                </div>
                            </CardItem>

                            {/* CTA */}
                            <div className="flex justify-start items-center mt-6">
                                <CardItem translateZ={20}>
                                    <button
                                        onClick={() => handleOpenModal(item)}
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium",
                                            "transition-all duration-200",
                                            isDark
                                                ? "bg-white/[0.05] border border-white/[0.1] hover:bg-white/[0.1] hover:border-white/[0.2]"
                                                : "bg-neutral-100 border border-neutral-200 hover:bg-neutral-200 hover:border-neutral-300",
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
