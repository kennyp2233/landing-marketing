// components/features/home/components/CTASection/index.tsx
import React from 'react';
import { ArrowRight, Star, Zap } from 'lucide-react';
import { cn } from '../../../../../lib/utils';
import { Button } from '../../../../shared/ui';

interface CTASectionProps {
    isDark: boolean;
}

const CTASection: React.FC<CTASectionProps> = ({ isDark }) => {
    const stats = [
        { number: '150+', label: 'Marcas Transformadas' },
        { number: '500%', label: 'Crecimiento Promedio' },
        { number: '98%', label: 'Satisfacción Cliente' },
        { number: '24/7', label: 'Soporte Dedicado' }
    ];

    return (
        <section className={cn(
            'py-24 px-6 relative overflow-hidden',
            isDark ? 'bg-black' : 'bg-white'
        )}>
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className={cn(
                    'absolute top-0 left-0 w-full h-full opacity-10',
                    'bg-gradient-to-br from-[#6c26f9] via-[#d507fa] to-[#0586fd]'
                )} />
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 left-1/4 animate-bounce">
                    <Star className={cn(
                        'w-6 h-6',
                        isDark ? 'text-purple-400' : 'text-purple-500'
                    )} />
                </div>
                <div className="absolute top-3/4 right-1/4 animate-pulse">
                    <Zap className={cn(
                        'w-8 h-8',
                        isDark ? 'text-pink-400' : 'text-pink-500'
                    )} />
                </div>
                <div className="absolute top-1/2 right-1/3 animate-bounce" style={{ animationDelay: '1s' }}>
                    <Star className={cn(
                        'w-4 h-4',
                        isDark ? 'text-blue-400' : 'text-blue-500'
                    )} />
                </div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={cn(
                                'text-center p-6 rounded-2xl border backdrop-blur-sm',
                                'transition-all duration-300 hover:scale-105',
                                isDark 
                                    ? 'bg-gray-900/60 border-gray-700' 
                                    : 'bg-white/80 border-gray-200'
                            )}
                        >
                            <div className={cn(
                                'text-3xl md:text-4xl font-bold mb-2',
                                'bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent'
                            )}>
                                {stat.number}
                            </div>
                            <p className={cn(
                                'text-sm font-medium',
                                isDark ? 'text-gray-400' : 'text-gray-600'
                            )}>
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Main CTA */}
                <div className="text-center">
                    <div className={cn(
                        'max-w-4xl mx-auto p-12 rounded-3xl border backdrop-blur-sm relative overflow-hidden',
                        isDark 
                            ? 'bg-gray-900/60 border-gray-700' 
                            : 'bg-white/80 border-gray-200'
                    )}>
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#6c26f9]/5 via-[#d507fa]/5 to-[#0586fd]/5" />
                        
                        <div className="relative z-10">
                            {/* Badge */}
                            <div className={cn(
                                'inline-flex items-center px-4 py-2 rounded-full mb-6',
                                'bg-gradient-to-r from-[#6c26f9]/20 to-[#d507fa]/20 border',
                                isDark ? 'border-purple-500/30' : 'border-purple-300/50'
                            )}>
                                <Star className="w-4 h-4 mr-2 text-yellow-500" />
                                <span className={cn(
                                    'text-sm font-medium',
                                    isDark ? 'text-purple-300' : 'text-purple-600'
                                )}>
                                    Transformación Garantizada
                                </span>
                            </div>

                            <h2 className={cn(
                                'text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
                                isDark ? 'text-white' : 'text-gray-900'
                            )}>
                                Tu <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent">
                                    GlowUp
                                </span> comienza aquí
                            </h2>
                            
                            <p className={cn(
                                'text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed',
                                isDark ? 'text-gray-300' : 'text-gray-600'
                            )}>
                                No esperes más. Cada día que pasa sin actuar es una oportunidad perdida. 
                                Tu competencia ya está en movimiento.
                            </p>

                            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="text-lg px-8 py-4 group"
                                >
                                    Empezar mi GlowUp
                                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                                
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="text-lg px-8 py-4"
                                >
                                    Ver Casos de Éxito
                                </Button>
                            </div>

                            {/* Trust indicators */}
                            <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-8 border-t border-gray-300/30">
                                <div className="flex items-center space-x-2">
                                    <div className="flex space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                                        ))}
                                    </div>
                                    <span className={cn(
                                        'text-sm font-medium',
                                        isDark ? 'text-gray-400' : 'text-gray-600'
                                    )}>
                                        98% satisfacción
                                    </span>
                                </div>
                                
                                <div className={cn(
                                    'text-sm',
                                    isDark ? 'text-gray-400' : 'text-gray-600'
                                )}>
                                    • Sin contratos largos • Resultados en 30 días • Soporte 24/7
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
