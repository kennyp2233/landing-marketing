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
                        'text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
                        isDark ? 'text-white' : 'text-gray-900'
                    )}>
                        ¿Quiénes <span className="bg-gradient-to-r from-[#8b5fbf] via-[#b76bb8] to-[#6b9fff] bg-clip-text text-transparent">somos?</span>
                    </h2>
                </div>

                {/* WobbleCard Grid - Siguiendo exactamente el patrón del demo */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
                    <WobbleCard
                        containerClassName="col-span-1 lg:col-span-2 h-full bg-transparent min-h-[500px] lg:min-h-[300px]"
                        className=""
                    >
                        <div className="max-w-xs">
                            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                <span className="bg-gradient-to-r from-[#8b5fbf] to-[#b76bb8] bg-clip-text text-transparent">
                                    GlowUp Media
                                </span> impulsa el universo digital
                            </h2>
                            <p className="mt-4 text-left text-base/6 text-neutral-200">
                                Somos una agencia de marketing digital innovadora, especializada en crear experiencias de alto impacto que elevan tu marca en el mundo digital competitivo.
                            </p>
                        </div>
                    </WobbleCard>

                    <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-transparent">
                        <div className="space-y-4">
                            <div className="inline-flex items-center px-4 py-2 rounded-full mb-4 bg-gradient-to-r from-[#8b5fbf]/20 to-[#b76bb8]/20 border border-purple-500/30">
                                <span className="text-2xl font-bold mr-2 bg-gradient-to-r from-[#8b5fbf] to-[#b76bb8] bg-clip-text text-transparent">
                                    2025
                                </span>
                            </div>

                            <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white uppercase">
                                Visión
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                Convertirnos en líderes en el mercado del marketing digital, siendo la agencia que eleva las marcas a través de soluciones efectivas, innovadoras y vanguardistas.
                            </p>
                        </div>
                    </WobbleCard>

                    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                        <div className="max-w-sm">
                            <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white uppercase">
                                Misión: Soluciones personalizadas que elevan tu presencia digital
                            </h2>
                            <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
                                Brindamos estrategias orientadas a la creatividad, el impacto y el crecimiento. Nuestra misión es impulsar marcas y elevar su impacto en un mundo digital competitivo.
                            </p>
                        </div>
                    </WobbleCard>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
