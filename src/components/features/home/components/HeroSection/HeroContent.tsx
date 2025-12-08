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
                {/* Puedes cambiar reviewCount por "Proyectos Entregados" */}
                <RatingBadge isDark={isDark} reviewCount="Software de Calidad" rating={5} />
            </div>

            <div className="max-w-5xl mx-auto mb-6">
                <h1 className={cn(
                    'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight',
                    isDark ? 'text-white' : 'text-gray-900'
                )}>
                    Tu visión.
                </h1>
                <h2 className={cn(
                    'text-3xl md:text-4xl lg:text-5xl font-bold mt-2 bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent'
                )}>
                    Nuestro Código.
                </h2>
            </div>

            <p className={cn(
                'text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed',
                isDark ? 'text-gray-300' : 'text-gray-600'
            )}>
                En <span className="font-bold text-white">Khannda</span>, no usamos plantillas. Creamos software a medida robusto para cooperativas, gimnasios y empresas que exigen excelencia operativa.
            </p>

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