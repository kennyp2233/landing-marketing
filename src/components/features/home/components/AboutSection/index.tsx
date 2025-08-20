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
                        <div className="h-full flex flex-col justify-center max-w-lg">
                            <div className="space-y-8">
                                <h2 className="text-left text-balance text-xl md:text-2xl lg:text-4xl font-bold tracking-[-0.015em] text-white leading-tight">
                                    <span className="bg-gradient-to-r from-[#8b5fbf] via-[#b76bb8] to-[#6b9fff] bg-clip-text text-transparent font-bold">
                                        GlowUp Media
                                    </span>{" "}
                                    <span className="text-white">
                                        impulsa el universo digital
                                    </span>
                                </h2>
                                
                                <div className="space-y-6">
                                    <p className="text-left text-lg md:text-xl leading-relaxed text-neutral-200">
                                        Somos una agencia de marketing digital 
                                        <span className="text-white font-semibold"> innovadora</span>, especializada en crear 
                                        <span className="text-white font-semibold"> experiencias de alto impacto</span> que elevan tu 
                                        marca en el mundo digital competitivo.
                                    </p>
                                    
                                    <div className="flex flex-col space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-gradient-to-r from-[#8b5fbf] to-[#b76bb8] rounded-full"></div>
                                            <span className="text-white font-medium">Marketing Digital Innovador</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-gradient-to-r from-[#b76bb8] to-[#6b9fff] rounded-full"></div>
                                            <span className="text-white font-medium">Experiencias de Alto Impacto</span>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <div className="w-2 h-2 bg-gradient-to-r from-[#6b9fff] to-[#8b5fbf] rounded-full"></div>
                                            <span className="text-white font-medium">Resultados Competitivos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </WobbleCard>

                    <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-transparent">
                        <div className="h-full flex flex-col justify-between space-y-8">
                            <div className="flex-1 flex flex-col justify-center space-y-8">
                                <div className="relative group">
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b5fbf] via-[#b76bb8] to-[#6b9fff] rounded-full opacity-30 group-hover:opacity-50 blur transition duration-300"></div>
                                    <div className="relative bg-white/5 backdrop-blur-xl rounded-full px-6 py-4 shadow-lg">
                                        <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#8b5fbf] via-[#b76bb8] to-[#6b9fff] bg-clip-text text-transparent drop-shadow-lg">
                                            2025
                                        </span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h2 className="text-left text-xl md:text-2xl lg:text-4xl font-bold tracking-[-0.015em] uppercase leading-tight">
                                        <span className="bg-gradient-to-r from-[#8b5fbf] via-[#b76bb8] to-[#6b9fff] bg-clip-text text-transparent drop-shadow-lg">
                                            Visión
                                        </span>
                                    </h2>
                                    
                                    <p className="text-left text-lg md:text-xl leading-relaxed text-neutral-200">
                                        Convertirnos en <span className="text-white font-semibold">líderes en el mercado</span> del marketing digital, 
                                        siendo la agencia que eleva las marcas a través de 
                                        <span className="text-white font-semibold"> soluciones efectivas, innovadoras y vanguardistas.</span>
                                    </p>
                                </div>
                            </div>
                            
                      
                        </div>
                    </WobbleCard>

                    <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-transparent min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                        <div className="h-full flex flex-col justify-center max-w-5xl">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="space-y-8">
                                    <h2 className="text-left text-xl md:text-2xl lg:text-4xl font-bold tracking-[-0.015em] uppercase leading-tight">
                                        <span className="bg-gradient-to-r from-[#8b5fbf] via-[#b76bb8] to-[#6b9fff] bg-clip-text text-transparent">
                                            Misión:
                                        </span>{" "}
                                        <span className="text-white block lg:inline mt-2 lg:mt-0">
                                            Soluciones Personalizadas
                                        </span>
                                    </h2>
                                    
                                    <div className="space-y-6">
                                        <p className="text-left text-xl md:text-2xl leading-relaxed text-white font-semibold">
                                            Elevamos tu presencia digital
                                        </p>
                                        
                                        <p className="text-left text-lg md:text-xl leading-relaxed text-neutral-200">
                                            Brindamos <span className="text-white font-semibold">estrategias orientadas a la creatividad</span>, 
                                            el impacto y el crecimiento. Nuestra misión es 
                                            <span className="text-white font-semibold"> impulsar marcas</span> y elevar su impacto en un 
                                            mundo digital competitivo.
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 gap-6">
                                        <div className="group relative">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#8b5fbf] to-[#b76bb8] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative">
                                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#8b5fbf] to-[#b76bb8] rounded-xl opacity-75 blur"></div>
                                                        <div className="relative w-12 h-12 bg-gradient-to-r from-[#8b5fbf] to-[#b76bb8] rounded-xl flex items-center justify-center shadow-lg">
                                                            <span className="text-white font-bold text-xl drop-shadow-lg">C</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg drop-shadow-sm">Creatividad</h3>
                                                        <p className="text-neutral-300 text-sm">Innovación en cada proyecto</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="group relative">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#b76bb8] to-[#6b9fff] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative">
                                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#b76bb8] to-[#6b9fff] rounded-xl opacity-75 blur"></div>
                                                        <div className="relative w-12 h-12 bg-gradient-to-r from-[#b76bb8] to-[#6b9fff] rounded-xl flex items-center justify-center shadow-lg">
                                                            <span className="text-white font-bold text-xl drop-shadow-lg">I</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg drop-shadow-sm">Impacto</h3>
                                                        <p className="text-neutral-300 text-sm">Resultados que transforman</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="group relative">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6b9fff] to-[#8b5fbf] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
                                            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-xl">
                                                <div className="flex items-center space-x-4">
                                                    <div className="relative">
                                                        <div className="absolute -inset-1 bg-gradient-to-r from-[#6b9fff] to-[#8b5fbf] rounded-xl opacity-75 blur"></div>
                                                        <div className="relative w-12 h-12 bg-gradient-to-r from-[#6b9fff] to-[#8b5fbf] rounded-xl flex items-center justify-center shadow-lg">
                                                            <span className="text-white font-bold text-xl drop-shadow-lg">G</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-white font-semibold text-lg drop-shadow-sm">Crecimiento</h3>
                                                        <p className="text-neutral-300 text-sm">Escalamos tu presencia</p>
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
