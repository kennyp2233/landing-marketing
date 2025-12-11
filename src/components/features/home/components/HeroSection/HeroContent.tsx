// components/features/home/components/HeroSection/HeroContent.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { Button } from '../../../../shared/ui';
import { HeroContentProps } from './HeroSection.types';
import RatingBadge from './RatingBadge';

// ... imports
const HeroContent: React.FC<HeroContentProps> = ({ isDark }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center z-10">
            <div className="mb-8">
                {/* Texto del badge actualizado para ser más general */}
                <RatingBadge isDark={isDark} reviewCount="Software de Alto Impacto" rating={5} />
            </div>

            <div className="max-w-5xl mx-auto mb-6">
                <h1 className={cn(
                    'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
                    isDark ? 'text-white' : 'text-gray-900'
                )}>
                    Tu visión.
                </h1>
                <h2 className={cn(
                    'text-3xl md:text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] bg-clip-text text-transparent'
                )}>
                    Nuestro Código.
                </h2>
            </div>

            <div className="flex gap-4">
                <Button variant="primary" size="lg" className="text-lg px-8 py-4">
                    Agendar Consultoría
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                    Ver Portafolio
                </Button>
            </div>
        </div>
    );
};

export default HeroContent;