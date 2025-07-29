// components/features/home/components/HeroSection/HeroContent.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { Button } from '../../../../shared/ui';
import { HeroContentProps } from './HeroSection.types';

const HeroContent: React.FC<HeroContentProps> = ({ isDark }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
            {/* Rating Badge con gradiente específico */}
            <div className={cn(
                'inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8 relative',
                // Backdrop blur para efecto moderno
                'backdrop-blur-sm',
                isDark ? 'text-gray-200' : 'text-purple-800'
            )}
                style={{
                    // Fondo con gradiente usando CSS directo
                    background: isDark
                        ? 'linear-gradient(to top, rgba(31, 41, 55, 0.9), rgba(55, 65, 81, 0.2))'
                        : 'linear-gradient(to top, rgba(196, 181, 253, 0.9), rgba(219, 234, 254, 0.3))',
                    // Borde sólido y visible
                    border: isDark
                        ? '1px solid rgba(156, 163, 175, 0.4)'  // gray-400/40
                        : '1px solid rgba(196, 181, 253, 0.6)'  // purple-200/60
                }}>
                {/* Estrellas con SVG personalizado para garantizar que se vean */}
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="w-4 h-4"
                        >
                            <defs>
                                <linearGradient id={`star-gradient-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                    {isDark ? (
                                        <>
                                            <stop offset="0%" stopColor="#d507fa" />
                                            <stop offset="80%" stopColor="#6c26f9" />
                                        </>
                                    ) : (
                                        <>
                                            <stop offset="0%" stopColor="#6c26f9" />
                                            <stop offset="75%" stopColor="#d507fa" />
                                        </>
                                    )}
                                </linearGradient>
                            </defs>
                            <path
                                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                fill={`url(#star-gradient-${i})`}
                            />
                        </svg>
                    ))}
                </div>
                <span className="text-sm font-medium">Basado en x opiniones.</span>
            </div>

            {/* Main Heading - Opción 1: Solo "Ventas" con gradiente */}
            <div className="max-w-4xl mx-auto mb-6">
                <h1 className={cn(
                    'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
                    isDark ? 'text-white' : 'text-gray-900'
                )}>
                    Aumenta tus Ventas
                </h1>
                <h2 className={cn(
                    'text-4xl md:text-5xl lg:text-6xl font-bold mt-2',
                    isDark ? 'text-white' : 'text-gray-900'
                )}>
                    300% en X Días.
                </h2>
            </div>

            {/* Subtitle */}
            <p className={cn(
                'text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed',
                isDark ? 'text-gray-300' : 'text-gray-600'
            )}>
                Creamos estrategias digitales que multiplican tus clientes
                garantizando resultados medibles y rentables.
            </p>

            {/* CTA Button */}
            <Button
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
            >
                Agenda tu Auditoría GRATIS
            </Button>
        </div>
    );
};

export default HeroContent;