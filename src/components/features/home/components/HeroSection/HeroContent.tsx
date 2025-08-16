// components/features/home/components/HeroSection/HeroContent.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { Button } from '../../../../shared/ui';
import { HeroContentProps } from './HeroSection.types';
import RatingBadge from './RatingBadge';

const HeroContent: React.FC<HeroContentProps> = ({ isDark }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
            {/* Rating Badge */}
            <div className="mb-8">
                <RatingBadge isDark={isDark} />
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