// src/components/features/home/components/ServicesSection/index.tsx
'use client';

import React from 'react';
import {
    IconDeviceMobile,
    IconVideo,
    IconTargetArrow,
    IconPalette,
    IconUsers,
    IconChartBar
} from '@tabler/icons-react';
import { cn } from '../../../../../lib/utils';
import { BentoGrid, BentoGridItem } from '../../../../shared/ui/BentoGrid';
import { SkeletonSocial, SkeletonVideo, SkeletonAds, SkeletonBranding, SkeletonCommunity, SkeletonStrategy } from './AnimatedHeaders';
import { useTheme } from '@/providers/ThemeProvider';

interface ServicesSectionProps {
    isDark?: boolean; // Hacer opcional ya que usaremos el hook
}

// Componente visual para cada servicio
const ServiceVisual: React.FC<{ gradient: string; icon: React.ReactNode }> = ({ gradient, icon }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br relative overflow-hidden">
        <div className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-20",
            gradient
        )} />
        <div className="flex items-center justify-center w-full h-full relative z-10">
            <div className="text-4xl text-white drop-shadow-lg">
                {icon}
            </div>
        </div>
    </div>
);

const ServicesSection: React.FC<ServicesSectionProps> = () => {
    const { isDark } = useTheme();

    const services = [
        {
            title: "Desarrollo a Medida",
            description: "Software diseñado específicamente para tus reglas de negocio. Ni más, ni menos.",
            icon: <IconDeviceMobile className="h-4 w-4 text-[#6c26f9]" />, // Cambiar íconos según corresponda
            header: <SkeletonSocial />, // Puedes mantener los skeletons o crear unos de código
            features: [
                "Sistemas de Gestión (ERP/CRM)",
                "Plataformas Web Escalables",
                "Arquitectura Cloud Segura"
            ],
            className: "md:col-span-1"
        },
        {
            title: "Apps Financieras & Fintech",
            description: "Experiencia comprobada desarrollando para el sector de cooperativas de ahorro y crédito.",
            icon: <IconChartBar className="h-4 w-4 text-[#d507fa]" />,
            header: <SkeletonStrategy isDark={isDark} />,
            features: [
                "Seguridad Bancaria",
                "Integración con Core Bancario",
                "Reportes en Tiempo Real"
            ],
            className: "md:col-span-2"
        },
        {
            title: "Sistemas de Gestión Operativa",
            description: "Automatización para negocios físicos como Gimnasios, Consultorios y Retail.",
            icon: <IconUsers className="h-4 w-4 text-[#0586fd]" />,
            header: <SkeletonAds isDark={isDark} />,
            features: [
                "Control de Acceso Biométrico",
                "Facturación Electrónica",
                "Gestión de Membresías"
            ],
            className: "md:col-span-2"
        },
        {
            title: "Consultoría Tecnológica",
            description: "Te ayudamos a elegir el stack tecnológico correcto para tu futuro.",
            icon: <IconTargetArrow className="h-4 w-4 text-[#6c26f9]" />,
            header: <SkeletonBranding isDark={isDark} />,
            features: [
                "Auditoría de Código",
                "Transformación Digital",
                "Optimización de Procesos"
            ],
            className: "md:col-span-1"
        }
    ];

    return (
        <div className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={cn(
                        'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
                        isDark ? 'text-white' : 'text-gray-900'
                    )}>
                        Nuestros{' '}
                        <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent">
                            Servicios
                        </span>
                    </h2>
                    <p className={cn(
                        'text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed',
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        Soluciones completas de marketing digital que garantizan resultados medibles para tu marca
                    </p>
                </div>

                {/* Services BentoGrid */}
                <BentoGrid className=" mx-auto md:auto-rows-[20rem] mb-4">
                    {services.map((service, index) => (
                        <BentoGridItem
                            key={index}
                            title={service.title}
                            description={service.description}
                            header={service.header}
                            icon={service.icon}
                            features={service.features}
                            className={cn("[&>p:text-lg]", service.className)}
                        />
                    ))}
                </BentoGrid>

                {/* Garantías */}
                <div className="grid md:grid-cols-3 gap-4">
                    <div className={`text-center p-6 rounded-xl border ${isDark ? 'border-white/[0.08] bg-gray-900/20' : 'border-neutral-200 bg-white'}`}>
                        <div className="text-2xl md:text-3xl font-bold text-[#6c26f9] mb-2">25%</div>
                        <p className={cn(
                            'text-sm md:text-base',
                            isDark ? 'text-gray-300' : 'text-gray-600'
                        )}>
                            Más engagement promedio en 30 días
                        </p>
                    </div>

                    <div className={`text-center p-6 rounded-xl border ${isDark ? 'border-white/[0.08] bg-gray-900/20' : 'border-neutral-200 bg-white'}`}>
                        <div className="text-2xl md:text-3xl font-bold text-[#d507fa] mb-2">48h</div>
                        <p className={cn(
                            'text-sm md:text-base',
                            isDark ? 'text-gray-300' : 'text-gray-600'
                        )}>
                            Tiempo máximo de entrega de videos
                        </p>
                    </div>

                    <div className={`text-center p-6 rounded-xl border ${isDark ? 'border-white/[0.08] bg-gray-900/20' : 'border-neutral-200 bg-white'}`}>
                        <div className="text-2xl md:text-3xl font-bold text-[#0586fd] mb-2">$150</div>
                        <p className={cn(
                            'text-sm md:text-base',
                            isDark ? 'text-gray-300' : 'text-gray-600'
                        )}>
                            Desde solo $150/mes todo incluido
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
