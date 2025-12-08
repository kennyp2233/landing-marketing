// src/components/features/home/components/ServicesSection/index.tsx
'use client';

import React from 'react';
import {
    IconDeviceMobile,
    IconTargetArrow,
    IconUsers,
    IconChartBar
} from '@tabler/icons-react';
import { cn } from '../../../../../lib/utils';
import { BentoGrid, BentoGridItem } from '../../../../shared/ui/BentoGrid';
import { SkeletonSocial, SkeletonAds, SkeletonBranding, SkeletonStrategy } from './AnimatedHeaders';
import { useTheme } from '@/providers/ThemeProvider';

interface ServicesSectionProps {
    isDark?: boolean; // Hacer opcional ya que usaremos el hook
}



const ServicesSection: React.FC<ServicesSectionProps> = () => {
    const { isDark } = useTheme();

    const services = [
        {
            title: "Desarrollo a Medida",
            description: "Software diseñado específicamente para tus reglas de negocio. Ni más, ni menos.",
            icon: <IconDeviceMobile className={cn("h-4 w-4", isDark ? "text-[#6c26f9]" : "text-orange-500")} />,
            header: <SkeletonSocial />,
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
            icon: <IconChartBar className={cn("h-4 w-4", isDark ? "text-[#d507fa]" : "text-orange-600")} />,
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
            icon: <IconUsers className={cn("h-4 w-4", isDark ? "text-[#0586fd]" : "text-amber-500")} />,
            header: <SkeletonAds />,
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
            icon: <IconTargetArrow className={cn("h-4 w-4", isDark ? "text-[#6c26f9]" : "text-orange-400")} />,
            header: <SkeletonBranding isDark={isDark} />,
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
                {/* Header */}
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

                {/* Garantías / Métricas - ACTUALIZADO PARA KHANNDA */}
                <div className="grid md:grid-cols-3 gap-4">
                    {/* Tarjeta 1: Enfoque en Eficiencia Operativa */}
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

                    {/* Tarjeta 2: Enfoque en Agilidad de Entrega */}
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

                    {/* Tarjeta 3: Enfoque en Precio Accesible (Según Brief: $500-$1500) */}
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
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;