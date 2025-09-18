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

            {/* Main Heading - GlowUp Media */}
            <div className="max-w-5xl mx-auto mb-6">
                <h1 className={cn(
                    'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
                    isDark ? 'text-white' : 'text-gray-900'
                )}>
                    Impulsa tu marca.
                </h1>
                <h2 className={cn(
                    'text-3xl md:text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent'
                )}>
                    Eleva tu impacto.
                </h2>
            </div>

            {/* Subtitle */}
            <p className={cn(
                'text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed',
                isDark ? 'text-gray-300' : 'text-gray-600'
            )}>
                GlowUp Media es una agencia de marketing digital innovadora y estratégica, 
                especializada en crear experiencias de alto impacto a través de redes sociales, 
                contenido creativo y marketing digital.
            </p>

            {/* CTA Button */}
            <Button
                variant="primary"
                size="lg"
                className="text-lg px-8 py-4"
            >
                Descubre tu GlowUp
            </Button>
        </div>
    );
};

export default HeroContent;