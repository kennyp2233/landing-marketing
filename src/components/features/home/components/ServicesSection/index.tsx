// components/features/home/components/ServicesSection/index.tsx
import React from 'react';
import { BarChart3, Users, Zap, Target, Megaphone, TrendingUp } from 'lucide-react';
import { cn } from '../../../../../lib/utils';
import { Button } from '../../../../shared/ui';

interface ServicesSectionProps {
    isDark: boolean;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ isDark }) => {
    const services = [
        {
            icon: <Megaphone className="w-8 h-8" />,
            title: 'Marketing en Redes Sociales',
            description: 'Estrategias que conectan y convierten en todas las plataformas digitales.',
            gradient: 'from-[#6c26f9] to-[#8b5cf6]'
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: 'Contenido Creativo',
            description: 'Creamos contenido que no solo se ve, sino que se recuerda y se comparte.',
            gradient: 'from-[#d507fa] to-[#ec4899]'
        },
        {
            icon: <BarChart3 className="w-8 h-8" />,
            title: 'Análisis y Optimización',
            description: 'Datos que hablan, estrategias que funcionan. Medimos todo para mejorarlo.',
            gradient: 'from-[#0586fd] to-[#06b6d4]'
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: 'Gestión de Comunidades',
            description: 'Construimos comunidades leales que aman tu marca y la recomiendan.',
            gradient: 'from-[#8b5cf6] to-[#a855f7]'
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: 'Campañas Publicitarias',
            description: 'Anuncios que no molestan, sino que resuelven problemas reales.',
            gradient: 'from-[#ec4899] to-[#f97316]'
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: 'Estrategia Digital Integral',
            description: 'Un plan completo que transforma tu presencia online en resultados reales.',
            gradient: 'from-[#06b6d4] to-[#10b981]'
        }
    ];

    return (
        <section className={cn(
            'py-24 px-6 relative overflow-hidden',
            isDark ? 'bg-gray-900/30' : 'bg-gray-50/30'
        )}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className={cn(
                    'absolute top-1/3 -left-40 w-80 h-80 rounded-full blur-3xl opacity-15',
                    'bg-gradient-to-r from-[#6c26f9] to-[#d507fa]'
                )} />
                <div className={cn(
                    'absolute bottom-1/3 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15',
                    'bg-gradient-to-r from-[#d507fa] to-[#0586fd]'
                )} />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className={cn(
                        'text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
                        isDark ? 'text-white' : 'text-gray-900'
                    )}>
                        Nuestros{' '}
                        <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent">
                            Servicios
                        </span>
                    </h2>
                    <p className={cn(
                        'text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed',
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        Soluciones completas de marketing digital que impulsan tu marca hacia el éxito
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={cn(
                                'group p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300',
                                'hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden',
                                isDark 
                                    ? 'bg-gray-800/40 border-gray-700 hover:border-purple-500/50' 
                                    : 'bg-white/60 border-gray-200 hover:border-purple-300'
                            )}
                        >
                            {/* Gradient overlay on hover */}
                            <div className={cn(
                                'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl',
                                `bg-gradient-to-br ${service.gradient} opacity-5`
                            )} />
                            
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className={cn(
                                    'inline-flex p-4 rounded-xl mb-6 transition-all duration-300',
                                    `bg-gradient-to-r ${service.gradient}`,
                                    'group-hover:scale-110'
                                )}>
                                    <div className="text-white">
                                        {service.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className={cn(
                                    'text-xl font-bold mb-4 transition-colors duration-300',
                                    isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-600'
                                )}>
                                    {service.title}
                                </h3>
                                
                                <p className={cn(
                                    'text-base leading-relaxed',
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                )}>
                                    {service.description}
                                </p>

                                {/* Animated line */}
                                <div className={cn(
                                    'mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full',
                                    `bg-gradient-to-r ${service.gradient}`
                                )} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <div className={cn(
                        'inline-block p-8 rounded-2xl border backdrop-blur-sm',
                        isDark 
                            ? 'bg-gray-800/40 border-gray-700' 
                            : 'bg-white/60 border-gray-200'
                    )}>
                        <h3 className={cn(
                            'text-2xl md:text-3xl font-bold mb-4',
                            isDark ? 'text-white' : 'text-gray-900'
                        )}>
                            ¿Listo para tu GlowUp?
                        </h3>
                        <p className={cn(
                            'text-lg mb-6 max-w-md mx-auto',
                            isDark ? 'text-gray-300' : 'text-gray-600'
                        )}>
                            Descubre cómo podemos elevar tu marca al siguiente nivel
                        </p>
                        <Button
                            variant="primary"
                            size="lg"
                            className="text-lg px-8 py-4"
                        >
                            Comenzar mi Transformación
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
