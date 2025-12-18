// src/components/features/home/components/ServicesSection/index.tsx
'use client';

import React from 'react';
import {
    Code2,
    ShieldCheck,
    Cpu,
    Zap
} from 'lucide-react';
import { cn } from '../../../../../lib/utils';
import { BentoGrid, BentoGridItem, ScrollReveal } from '../../../../shared/ui';
import { SkeletonDev, SkeletonAutomation, SkeletonConsulting, SkeletonSecurity } from './AnimatedHeaders';
import { useTheme } from '@/providers/ThemeProvider';

interface ServicesSectionProps {
    isDark?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ isDark }) => {
    // Use prop content
    const darkMode = isDark;

    const services = [
        {
            title: "Desarrollo a Medida",
            description: "Arquitectura de software diseñada para escalar. Código limpio, modular y mantenible.",
            icon: <Code2 className={cn("h-5 w-5", darkMode ? "text-purple-400" : "text-purple-600")} />,
            header: <SkeletonDev />,
            features: ["Microservicios", "APIs REST/GraphQL", "Cloud Native"],
            className: "md:col-span-1"
        },
        {
            title: "Alta Seguridad & Fintech",
            description: "Infraestructura crítica con estándares bancarios. Protección de datos y transaccionalidad garantizada.",
            icon: <ShieldCheck className={cn("h-5 w-5", darkMode ? "text-purple-400" : "text-purple-600")} />,
            header: <SkeletonSecurity />,
            features: ["Encriptación E2E", "Compliance PCI-DSS", "Auditoría Continua"],
            className: "md:col-span-2"
        },
        {
            title: "Automatización Operativa",
            description: "Eliminamos el trabajo manual. Bots, scripts y flujos de trabajo inteligentes que trabajan 24/7.",
            icon: <Cpu className={cn("h-5 w-5", darkMode ? "text-purple-400" : "text-purple-600")} />,
            header: <SkeletonAutomation />,
            features: ["RPA / Bots", "Integración de Sistemas", "Webhooks & Eventos"],
            className: "md:col-span-2"
        },
        {
            title: "Consultoría Tecnológica",
            description: "Auditoría de deuda técnica y roadmap de modernización para empresas establecidas.",
            icon: <Zap className={cn("h-5 w-5", darkMode ? "text-purple-400" : "text-purple-600")} />,
            header: <SkeletonConsulting />,
            features: ["Code Reviews", "System Design", "Tech Stack Selection"],
            className: "md:col-span-1"
        }
    ];

    return (
        <div className={cn(
            "py-24 px-6 relative overflow-hidden transition-colors duration-300",
            darkMode ? "bg-neutral-950" : "bg-neutral-50"
        )}>
            {/* Background Grid */}
            <div className={cn(
                "absolute inset-0 bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]",
                darkMode
                    ? "bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)]"
                    : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
            )} />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <ScrollReveal delay={0} direction="up">
                    <div className="text-center mb-20">
                        <div className={cn("inline-block px-3 py-1 mb-4 rounded-full backdrop-blur-sm border",
                            darkMode ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"
                        )}>
                            <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">Capabilities</span>
                        </div>
                        <h2 className={cn("text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 transition-colors",
                            darkMode ? "text-white" : "text-black"
                        )}>
                            Nuestros <span className="gradient-text font-bold">Servicios</span>
                        </h2>
                        <p className={cn("text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors",
                            darkMode ? "text-neutral-400" : "text-neutral-600"
                        )}>
                            Ingeniería de software de primer nivel para resolver desafíos de negocio complejos.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services BentoGrid */}
                <BentoGrid className="mx-auto md:auto-rows-[22rem] mb-12">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            delay={0.1 + index * 0.1}
                            direction="up"
                            className={service.className}
                        >
                            <BentoGridItem
                                title={service.title}
                                description={service.description}
                                header={service.header}
                                icon={service.icon}
                                features={service.features}
                                className={cn(
                                    "h-full transition-colors",
                                    darkMode
                                        ? "bg-neutral-900/40 border-white/5 hover:border-white/10"
                                        : "bg-white/40 border-black/5 hover:border-black/10",
                                    service.className
                                )}
                            />
                        </ScrollReveal>
                    ))}
                </BentoGrid>

                {/* Metrics - Technical Style */}
                <div className={cn("grid md:grid-cols-3 gap-6 border-t pt-12 transition-colors",
                    darkMode ? "border-white/5" : "border-black/5"
                )}>
                    {[
                        { val: "+40%", label: "Eficiencia Operativa", desc: "Reducción promedio de carga manual." },
                        { val: "4 WKS", label: "Time-to-Market", desc: "Ciclos de desarrollo ágiles y rápidos." },
                        { val: "100%", label: "Propiedad del Código", desc: "Entregamos repositorios completos." }
                    ].map((metric, i) => (
                        <ScrollReveal key={i} delay={0.3 + i * 0.1} direction="up">
                            <div className="text-center p-6 group">
                                <div className={cn("text-3xl md:text-4xl font-mono font-bold mb-2 group-hover:text-purple-400 transition-colors",
                                    darkMode ? "text-white" : "text-black"
                                )}>
                                    {metric.val}
                                </div>
                                <div className={cn("text-sm font-bold uppercase tracking-wider mb-1 transition-colors",
                                    darkMode ? "text-white" : "text-black"
                                )}>{metric.label}</div>
                                <p className={cn("text-sm transition-colors", darkMode ? "text-neutral-500" : "text-neutral-600")}>{metric.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;