"use client";

import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/shared/ui/3d-card";
import { AnimatedModal, SolutionModalContent } from "@/components/shared/ui/AnimatedModal";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Cpu, Code2, Zap } from "lucide-react";

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

const solutions: Solution[] = [
    {
        id: "automation",
        title: "Automatización",
        description: "Flujos de trabajo inteligentes con n8n.",
        image: "/assets/images/automation-abstract.png",
        cta: "Ver detalles",
        icon: <Cpu className="w-5 h-5" />,
        tagline: "Conecta tus apps. Elimina lo repetitivo. Escala sin límites.",
        highlights: [
            "Flujos personalizados que trabajan 24/7",
            "+400 integraciones listas para usar",
            "Ahorro promedio de 20+ horas semanales",
            "Cero errores manuales"
        ],
        accentColor: "blue"
    },
    {
        id: "development",
        title: "Desarrollo",
        description: "Software a la medida y apps móviles.",
        image: "/assets/images/development-abstract.png",
        cta: "Ver detalles",
        icon: <Code2 className="w-5 h-5" />,
        tagline: "Código que escala. Diseño que enamora. Resultados que importan.",
        highlights: [
            "Web apps modernas y responsive",
            "Apps móviles iOS y Android",
            "Arquitecturas cloud-native",
            "Soporte y mantenimiento continuo"
        ],
        accentColor: "purple"
    },
    {
        id: "consulting",
        title: "Consultoría",
        description: "Optimización y digitalización de procesos.",
        image: "/assets/images/consulting-abstract.png",
        cta: "Ver detalles",
        icon: <Zap className="w-5 h-5" />,
        tagline: "Transformamos operaciones. Digitalizamos procesos. Multiplicamos resultados.",
        highlights: [
            "Análisis profundo de operaciones",
            "Roadmap de transformación digital",
            "KPIs claros y medibles",
            "ROI garantizado"
        ],
        accentColor: "emerald"
    }
];

export function SolutionsCards() {
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

    // Color mappings matching homepage styles
    const accentColorMap = {
        blue: "text-cyan-400",
        purple: "text-purple-400",
        emerald: "text-emerald-400"
    };

    const iconBgMap = {
        blue: "bg-cyan-500/10",
        purple: "bg-purple-500/10",
        emerald: "bg-emerald-500/10"
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-4">
                {solutions.map((item, idx) => (
                    <CardContainer key={idx} className="inter-var w-full">
                        <CardBody
                            className={cn(
                                "relative group/card w-full h-auto rounded-2xl p-6",
                                "bg-neutral-900/40 border border-white/[0.08]",
                                "hover:border-white/[0.15] transition-all duration-300",
                                "dark:hover:shadow-xl dark:hover:shadow-purple-500/[0.05]"
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
                                <h3 className="text-xl font-semibold text-white">
                                    {item.title}
                                </h3>
                            </CardItem>

                            {/* Description */}
                            <CardItem translateZ="60" className="mb-4">
                                <p className="text-neutral-400 text-sm leading-relaxed">
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
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent" />
                                </div>
                            </CardItem>

                            {/* CTA */}
                            <div className="flex justify-start items-center mt-6">
                                <CardItem translateZ={20}>
                                    <button
                                        onClick={() => handleOpenModal(item)}
                                        className={cn(
                                            "px-4 py-2 rounded-lg text-sm font-medium",
                                            "bg-white/[0.05] border border-white/[0.1]",
                                            "hover:bg-white/[0.1] hover:border-white/[0.2]",
                                            "transition-all duration-200",
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
