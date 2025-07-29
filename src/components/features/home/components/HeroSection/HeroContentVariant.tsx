// components/features/home/components/HeroSection/HeroContentVariant.tsx
import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../../../../lib/utils';
import { Button } from '../../../../shared/ui';
import { HeroContentProps } from './HeroSection.types';

const HeroContentVariant: React.FC<HeroContentProps> = ({ isDark }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
            {/* Rating Badge */}
            <div className={cn(
                'inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8',
                'bg-gradient-to-t from-gray-900/80 to-transparent',
                'border border-gray-400/30 backdrop-blur-sm',
                isDark ? 'text-gray-200' : 'text-gray-100'
            )}>
                <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={16}
                            className="text-[#6c26f9]"
                            style={{
                                background: 'linear-gradient(to right, #6c26f9, #d507fa)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0 0 2px rgba(108, 38, 249, 0.3))'
                            }}
                        />
                    ))}
                </div>
                <span className="text-sm font-medium">Basado en x opiniones.</span>
            </div>

            {/* Título completo con gradiente vertical */}
            <div className="max-w-4xl mx-auto mb-6">
                <div
                    className="bg-gradient-to-b from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent"
                    style={{
                        background: 'linear-gradient(to bottom, #6c26f9, #d507fa, #0586fd)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                >
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Aumenta tus Ventas
                    </h1>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
                        300% en X Días.
                    </h2>
                </div>
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

export default HeroContentVariant;