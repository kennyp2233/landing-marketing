// src/components/features/home/components/ServicesSection/index.tsx
'use client';

import React from 'react';
import {
    IconCode,
    IconShieldLock,
    IconRobot,
    IconBulb
} from '@tabler/icons-react';
import { cn } from '../../../../../lib/utils';
import { BentoGrid, BentoGridItem, ScrollReveal } from '../../../../shared/ui';
import { SkeletonDev, SkeletonAutomation, SkeletonConsulting, SkeletonSecurity } from './AnimatedHeaders';
import { useTheme } from '@/providers/ThemeProvider';

interface ServicesSectionProps {
    isDark?: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = () => {
    const { isDark } = useTheme();

    const services = [
        {
            title: "Desarrollo a Medida",
            description: "Software diseñado específicamente para tus reglas de negocio. Ni más, ni menos.",
            icon: <IconCode className={cn("h-4 w-4", isDark ? "text-[#6c26f9]" : "text-orange-500")} />,
            header: <SkeletonDev />,
            features: [
                "Sistemas de Gestión (ERP/CRM)",
                "Plataformas Web Escalables",
                "Arquitectura Cloud Segura"
            ],
            className: "md:col-span-1"
        },
        {
            title: "Alta Seguridad & Fintech",
            description: "Arquitectura de software con estándares bancarios. Seguridad, transaccionalidad y manejo de datos críticos sin fallos.",
            icon: <IconShieldLock className={cn("h-4 w-4", isDark ? "text-[#d507fa]" : "text-orange-600")} />,
            header: <SkeletonSecurity />,
            features: [
                "Encriptación de Grado Militar",
                "Integración con Pasarelas de Pago",
                "Auditoría y Compliance"
            ],
            className: "md:col-span-2"
        },
        {
            title: "Automatización Operativa",
            description: "Digitalizamos el núcleo de tu negocio. Control de accesos, facturación y gestión de usuarios centralizada.",
            icon: <IconRobot className={cn("h-4 w-4", isDark ? "text-[#0586fd]" : "text-amber-500")} />,
            header: <SkeletonAutomation />,
            features: [
                "Control Biométrico & IoT",
                "Facturación Electrónica Automática",
                "Gestión de Membresías/Suscripciones"
            ],
            className: "md:col-span-2"
        },
        {
            title: "Consultoría Tecnológica",
            description: "Te ayudamos a elegir el stack tecnológico correcto para tu futuro.",
            icon: <IconBulb className={cn("h-4 w-4", isDark ? "text-[#6c26f9]" : "text-orange-400")} />,
            header: <SkeletonConsulting />,
            features: [
                "Auditoría de Código",
                "Transformación Digital",
                "Optimización de Procesos"
            ],
            className: "md:col-span-1"
        }
    ];

    const headerGradient = isDark
        ? "bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent"
        : "bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 bg-clip-text text-transparent";

    return (
        <div className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header with scroll reveal */}
                <ScrollReveal delay={0} direction="up">
                    <div className="text-center mb-16">
                        <h2 className={cn(
                            'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
                            isDark ? 'text-white' : 'text-gray-900'
                        )}>
                            Nuestros{' '}
                            <span className={headerGradient}>
                                Servicios
                            </span>
                        </h2>
                        <p className={cn(
                            'text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed',
                            isDark ? 'text-gray-300' : 'text-gray-600'
                        )}>
                            Soluciones completas de desarrollo que garantizan resultados medibles para tu negocio
                        </p>
                    </div>
                </ScrollReveal>

                {/* Services BentoGrid with staggered reveals */}
                <BentoGrid className=" mx-auto md:auto-rows-[20rem] mb-4">
                    {services.map((service, index) => (
                        <ScrollReveal
                            key={index}
                            delay={0.1 + index * 0.1}
                            direction={index % 2 === 0 ? "right" : "left"}
                            className={service.className}
                        >
                            <BentoGridItem
                                title={service.title}
                                description={service.description}
                                header={service.header}
                                icon={service.icon}
                                features={service.features}
                                className={cn("[&>p:text-lg]", "h-full")} // Ensure full height inside wrapper
                            />
                        </ScrollReveal>
                    ))}
                </BentoGrid>

                {/* Metrics cards with staggered reveals */}
                <div className="grid md:grid-cols-3 gap-4">
                    <ScrollReveal delay={0.2} direction="right">
                        <div className={cn(
                            "text-center p-6 rounded-xl border transition-all duration-300",
                            isDark
                                ? 'border-white/[0.08] bg-gray-900/20'
                                : 'border-orange-100 bg-orange-50/50 shadow-sm'
                        )}>
                            <div className={cn(
                                "text-2xl md:text-3xl font-bold mb-2",
                                isDark ? "text-[#6c26f9]" : "text-orange-600"
                            )}>+40%</div>
                            <p className={cn(
                                'text-sm md:text-base',
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            )}>
                                De ahorro en tiempo operativo automatizando tareas manuales
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3} direction="up">
                        <div className={cn(
                            "text-center p-6 rounded-xl border transition-all duration-300",
                            isDark
                                ? 'border-white/[0.08] bg-gray-900/20'
                                : 'border-orange-100 bg-orange-50/50 shadow-sm'
                        )}>
                            <div className={cn(
                                "text-2xl md:text-3xl font-bold mb-2",
                                isDark ? "text-[#d507fa]" : "text-amber-600"
                            )}>4 Semanas</div>
                            <p className={cn(
                                'text-sm md:text-base',
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            )}>
                                Tiempo promedio para implementar tu primera versión funcional
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4} direction="left">
                        <div className={cn(
                            "text-center p-6 rounded-xl border transition-all duration-300",
                            isDark
                                ? 'border-white/[0.08] bg-gray-900/20'
                                : 'border-orange-100 bg-orange-50/50 shadow-sm'
                        )}>
                            <div className={cn(
                                "text-2xl md:text-3xl font-bold mb-2",
                                isDark ? "text-[#0586fd]" : "text-orange-500"
                            )}>Desde $500</div>
                            <p className={cn(
                                'text-sm md:text-base',
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            )}>
                                Sistematización accesible para potenciar tu crecimiento
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;