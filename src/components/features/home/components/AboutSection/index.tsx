// src/components/features/home/components/AboutSection/index.tsx
"use client";

import React from 'react';
import { cn } from '../../../../../lib/utils';
import { WobbleCard } from '../../../../shared/ui';

interface AboutSectionProps {
    isDark: boolean;
}

export function AboutSection({ isDark }: AboutSectionProps) {
    return (
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={cn(
                        'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
                        isDark ? 'text-white' : 'text-gray-900'
                    )}>
                        Nuestro <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent">ADN</span>
                    </h2>
                </div>

                {/* WobbleCard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    {/* Historia de la marca */}
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-transparent min-h-[500px] lg:min-h-[300px]"
                        className=""
                        variant="gradient"
                    >
                        <div className="h-full flex flex-col justify-center max-w-lg">
                            <div className="space-y-8">
                                <h2 className="text-left text-balance text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.015em] text-white leading-tight">
                                    <span className="text-white font-bold">
                                        Más que código,
                                    </span>{" "}
                                    <span className="text-gray-300">
                                        entendemos tu negocio.
                                    </span>
                                </h2>
                                <div className="space-y-6">
                                    <p className="text-left text-base md:text-lg leading-relaxed text-neutral-200">
                                        Todo comenzó en una tarde casual de bolos, entre conversaciones sobre el futuro.
                                        Queríamos construir algo propio. Hoy, esa idea es <span className="text-white font-semibold">KHANNDA</span>:
                                        nos diferenciamos por nuestra empatía con empresas en crecimiento.
                                    </p>
                                    <p className="text-left text-base md:text-lg leading-relaxed text-neutral-200">
                                        Mientras otros entregan algo que cumple, nosotros entregamos <span className="text-white font-semibold">software que transforma</span> y alivia tus dolores operativos reales.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </WobbleCard>

                    {/* Visión */}
                    <WobbleCard
                        containerClassName="col-span-1 min-h-[300px] bg-transparent"
                        variant="purple"
                    >
                        <div className="h-full flex flex-col justify-between space-y-8">
                            <div className="flex-1 flex flex-col justify-center space-y-8">
                                <div className="space-y-6">
                                    <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.015em] uppercase leading-tight">
                                        <span className="text-white drop-shadow-lg">
                                            Nuestra Visión
                                        </span>
                                    </h2>

                                    <p className="text-left text-base md:text-lg leading-relaxed text-neutral-200">
                                        Construir software que impulse negocios, transforme realidades y deje una <span className="text-white font-semibold">huella positiva</span> en la vida de las personas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </WobbleCard>

                    {/* Misión y Valores */}
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-3 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]"
                        variant="blue"
                    >
                        <div className="h-full flex flex-col justify-center max-w-5xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="space-y-8">
                                    <h2 className="text-left text-xl md:text-2xl lg:text-3xl font-bold tracking-[-0.015em] uppercase leading-tight">
                                        <span className="text-white">
                                            Misión:
                                        </span>{" "}
                                        <span className="text-gray-300 block lg:inline mt-2 lg:mt-0">
                                            Impulso Digital
                                        </span>
                                    </h2>

                                    <div className="space-y-6">
                                        <p className="text-left text-base md:text-lg leading-relaxed text-neutral-200">
                                            Creamos soluciones digitales que impulsan a emprendedores a crecer,
                                            <span className="text-white font-semibold"> simplificar su día a día</span> y acercarlos más rápido a sus objetivos.
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 gap-6">
                                        {/* Valores extraídos del Brief */}
                                        <div className="group relative">
                                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/10">
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative w-10 h-10 bg-gradient-to-r from-[#6c26f9] to-[#6c26f9] rounded-lg flex items-center justify-center shadow-lg">
                                                        <span className="text-white font-bold text-lg">T</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg">Transparencia</h3>
                                                        <p className="text-neutral-300 text-sm">Comunicamos con claridad cada avance.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group relative">
                                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/10">
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative w-10 h-10 bg-gradient-to-r from-[#d507fa] to-[#d507fa] rounded-lg flex items-center justify-center shadow-lg">
                                                        <span className="text-white font-bold text-lg">R</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg">Responsabilidad</h3>
                                                        <p className="text-neutral-300 text-sm">Asumimos la estabilidad de lo que entregamos.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="group relative">
                                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/10">
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative w-10 h-10 bg-gradient-to-r from-[#0586fd] to-[#0586fd] rounded-lg flex items-center justify-center shadow-lg">
                                                        <span className="text-white font-bold text-lg">C</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg">Calidad</h3>
                                                        <p className="text-neutral-300 text-sm">Desarrollo robusto antes que entrega apresurada.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </WobbleCard>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;