// components/features/home/components/HeroSection/HeroContent.tsx
'use client';
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { Button } from '../../../../shared/ui';
import { HeroContentProps } from './HeroSection.types';
import RatingBadge from './RatingBadge';
import {
    ExpandableScreen,
    ExpandableScreenTrigger,
    ExpandableScreenContent,
    CalendarBooking
} from '../../../../shared/ui';
import { useLanguage } from '@/providers/LanguageProvider';

const HeroContent: React.FC<HeroContentProps> = ({ isDark }) => {
    const { t } = useLanguage();

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

            <ExpandableScreen isDark={isDark} layoutId="hero-cta-button">
                <ExpandableScreenTrigger>
                    <Button as="div" variant="primary" size="lg" className="text-lg px-8 py-4">
                        Cotizar Proyecto
                    </Button>
                </ExpandableScreenTrigger>
                <ExpandableScreenContent>
                    <CalendarBooking isDark={isDark} />
                </ExpandableScreenContent>
            </ExpandableScreen>

            <Button variant="outline" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/proyectos'}>
                Ver Portafolio
            </Button>
        </div>

    );
};

export default HeroContent;