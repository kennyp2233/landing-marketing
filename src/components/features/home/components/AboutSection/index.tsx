// src/components/features/home/components/AboutSection/index.tsx
"use client";

import React from 'react';
import { cn } from '../../../../../lib/utils';
import { WobbleCard, ScrollReveal } from '../../../../shared/ui';

interface AboutSectionProps {
    isDark: boolean;
}

export function AboutSection({ isDark }: AboutSectionProps) {
    // Definir colores según tema
    const textPrimary = isDark ? 'text-white' : 'text-gray-900';
    const textSecondary = isDark ? 'text-gray-300' : 'text-gray-600';
    const textMuted = isDark ? 'text-neutral-200' : 'text-gray-700';

    // Gradiente Orange para Light, Purple/Blue para Dark
    // Unified Gradient for Text
    const gradientText = "bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86] bg-clip-text text-transparent";

    const iconGradient = "bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86]";

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header with scroll reveal */}
                <ScrollReveal delay={0} direction="up">
                    <div className="text-center mb-16">
                        <h2 className={cn(
                            'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
                            textPrimary
                        )}>
                            Nuestro <span className={gradientText}>ADN</span>
                        </h2>
                    </div>
                </ScrollReveal>

                {/* WobbleCard Grid with staggered reveals */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    {/* Historia de la marca - Left Side */}
                    <ScrollReveal delay={0.1} direction="right" className="col-span-1 lg:col-span-2">
                        <WobbleCard
                            containerClassName="h-full bg-transparent min-h-[500px] lg:min-h-[300px]"
                            className=""
                            variant={isDark ? "gradient" : "default"}
                        >
                            <div className="h-full flex flex-col justify-center max-w-lg">
                                <div className="space-y-8">
                                    <h2 className={cn("text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.015em] leading-tight", textPrimary)}>
                                        <span className={cn("font-bold", textPrimary)}>
                                            Más que código,
                                        </span>{" "}
                                        <span className={textSecondary}>
                                            entendemos tu negocio.
                                        </span>
                                    </h2>
                                    <div className="space-y-6">
                                        <p className={cn("text-left text-base md:text-lg leading-relaxed", textMuted)}>
                                            Todo comenzó en una tarde casual de bolos, entre conversaciones sobre el futuro.
                                            Queríamos construir algo propio. Hoy, esa idea es <span className={cn("font-semibold", textPrimary)}>KHANNDA</span>:
                                            nos diferenciamos por nuestra empatía con empresas en crecimiento.
                                        </p>
                                        <p className={cn("text-left text-base md:text-lg leading-relaxed", textMuted)}>
                                            Mientras otros entregan algo que cumple, nosotros entregamos <span className={cn("font-semibold", textPrimary)}>software que transforma</span> y alivia tus dolores operativos reales.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </WobbleCard>
                    </ScrollReveal>

                    {/* Visión - Right Side */}
                    <ScrollReveal delay={0.2} direction="left" className="col-span-1">
                        <WobbleCard
                            containerClassName="min-h-[300px] bg-transparent"
                            variant={isDark ? "purple" : "default"}
                        >
                            <div className="h-full flex flex-col justify-between space-y-8">
                                <div className="flex-1 flex flex-col justify-center space-y-8">
                                    <div className="space-y-6">
                                        <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.015em] uppercase leading-tight">
                                            <span className={cn("drop-shadow-lg", textPrimary)}>
                                                Nuestra Visión
                                            </span>
                                        </h2>

                                        <p className={cn("text-left text-base md:text-lg leading-relaxed", textMuted)}>
                                            Construir software que impulse negocios, transforme realidades y deje una <span className={cn("font-semibold", textPrimary)}>huella positiva</span> en la vida de las personas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </WobbleCard>
                    </ScrollReveal>

                    {/* Misión y Valores - Bottom */}
                    <ScrollReveal delay={0.3} direction="up" className="col-span-1 lg:col-span-3">
                        <WobbleCard
                            containerClassName="bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
                            variant={isDark ? "blue" : "default"}
                        >
                            <div className="h-full flex flex-col justify-center max-w-5xl">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                    <div className="space-y-8">
                                        <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.015em] uppercase leading-tight">
                                            <span className={textPrimary}>
                                                Misión:
                                            </span>{" "}
                                            <span className={cn("block lg:inline mt-2 lg:mt-0", textSecondary)}>
                                                Impulso Digital
                                            </span>
                                        </h2>

                                        <div className="space-y-6">
                                            <p className={cn("text-left text-base md:text-lg leading-relaxed", textMuted)}>
                                                Creamos soluciones digitales que impulsan a emprendedores a crecer,
                                                <span className={cn("font-semibold", textPrimary)}> simplificar su día a día</span> y acercarlos más rápido a sus objetivos.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <div className="grid grid-cols-1 gap-6">
                                            {/* Valores extraídos del Brief */}
                                            <div className="group relative">
                                                <div className={cn(
                                                    "relative backdrop-blur-xl rounded-2xl p-4 shadow-xl border",
                                                    isDark ? "bg-white/5 border-white/10" : "bg-white/90 border-purple-200 shadow-sm"
                                                )}>
                                                    <div className="flex items-center space-x-4">
                                                        <div className={cn(
                                                            "relative w-10 h-10 rounded-lg flex items-center justify-center shadow-lg",
                                                            iconGradient
                                                        )}>
                                                            <span className="text-white font-bold text-lg">T</span>
                                                        </div>
                                                        <div>
                                                            <h3 className={cn("font-semibold text-lg", textPrimary)}>Transparencia</h3>
                                                            <p className={cn("text-sm", isDark ? "text-neutral-300" : "text-gray-600")}>Comunicamos con claridad cada avance.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group relative">
                                                <div className={cn(
                                                    "relative backdrop-blur-xl rounded-2xl p-4 shadow-xl border",
                                                    isDark ? "bg-white/5 border-white/10" : "bg-white/90 border-purple-200 shadow-sm"
                                                )}>
                                                    <div className="flex items-center space-x-4">
                                                        <div className={cn(
                                                            "relative w-10 h-10 rounded-lg flex items-center justify-center shadow-lg",
                                                            iconGradient
                                                        )}>
                                                            <span className="text-white font-bold text-lg">R</span>
                                                        </div>
                                                        <div>
                                                            <h3 className={cn("font-semibold text-lg", textPrimary)}>Responsabilidad</h3>
                                                            <p className={cn("text-sm", isDark ? "text-neutral-300" : "text-gray-600")}>Asumimos la estabilidad de lo que entregamos.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="group relative">
                                                <div className={cn(
                                                    "relative backdrop-blur-xl rounded-2xl p-4 shadow-xl border",
                                                    isDark ? "bg-white/5 border-white/10" : "bg-white/90 border-purple-200 shadow-sm"
                                                )}>
                                                    <div className="flex items-center space-x-4">
                                                        <div className={cn(
                                                            "relative w-10 h-10 rounded-lg flex items-center justify-center shadow-lg",
                                                            isDark ? "bg-gradient-to-r from-[#592355] to-[#8a3c86]" : "bg-gradient-to-r from-[#592355] to-[#8a3c86]"
                                                        )}>
                                                            <span className="text-white font-bold text-lg">C</span>
                                                        </div>
                                                        <div>
                                                            <h3 className={cn("font-semibold text-lg", textPrimary)}>Calidad</h3>
                                                            <p className={cn("text-sm", isDark ? "text-neutral-300" : "text-gray-600")}>Desarrollo robusto antes que entrega apresurada.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </WobbleCard>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;