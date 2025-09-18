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
            title: "Gestión de Redes Sociales",
            description: "Creamos y gestionamos tu presencia en Instagram y Facebook con contenido estratégico.",
            header: <SkeletonSocial />,
            icon: <IconDeviceMobile className="h-4 w-4 text-[#6c26f9]" />,
            features: [
                "6-18 publicaciones mensuales",
                "Diseño gráfico profesional",
                "Carruseles informativos"
            ],
            className: "md:col-span-1"
        },
        {
            title: "Creación de Videos & Reels",
            description: "Producimos videos virales para Reels, TikTok y YouTube Shorts que generan alcance.",
            header: <SkeletonVideo isDark={isDark} />,
            icon: <IconVideo className="h-4 w-4 text-[#d507fa]" />,
            features: [
                "2-10 videos mensuales editados",
                "Formato vertical optimizado",
                "Entrega en 48 horas"
            ],
            className: "md:col-span-2"
        },
        {
            title: "Pauta Publicitaria",
            description: "Configuramos y optimizamos anuncios en Facebook e Instagram para maximizar ROI y alcanzar a tu audiencia ideal.",
            header: <SkeletonAds isDark={isDark} />,
            icon: <IconTargetArrow className="h-4 w-4 text-[#0586fd]" />,
            features: [
                "Audiencias segmentadas",
                "Monitoreo diario",
                "Optimización continua",
                "Reportes de rendimiento"
            ],
            className: "md:col-span-2"
        },
        {
            title: "Branding Digital",
            description: "Desarrollamos la identidad visual de tu marca para destacar en el mercado digital.",
            header: <SkeletonBranding isDark={isDark} />,
            icon: <IconPalette className="h-4 w-4 text-[#6c26f9]" />,
            features: [
                "Diseño de logotipo único",
                "Manual de marca completo",
                "Aplicaciones digitales"
            ],
            className: "md:col-span-1"
        },
        {
            title: "Community Management",
            description: "Gestionamos tu comunidad digital y creamos vínculos reales con tu audiencia.",
            header: <SkeletonCommunity isDark={isDark} />,
            icon: <IconUsers className="h-4 w-4 text-[#1332e9]" />,
            features: [
                "Respuesta a comentarios",
                "Gestión de mensajes directos",
                "Interacción estratégica"
            ],
            className: "md:col-span-1"
        },
        {
            title: "Estrategia & Análisis",
            description: "Desarrollamos estrategias de contenido basadas en datos y analizamos rendimiento.",
            header: <SkeletonStrategy isDark={isDark} />,
            icon: <IconChartBar className="h-4 w-4 text-[#d507fa]" />,
            features: [
                "Plan editorial estratégico",
                "Análisis de competencia",
                "Métricas de rendimiento"
            ],
            className: "md:col-span-2"
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
