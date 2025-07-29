
// components/features/home/components/HeroSection/HeroBackground.tsx
import React from 'react';
import { HeroBackgroundProps } from './HeroSection.types';

const HeroBackground: React.FC<HeroBackgroundProps> = ({ isDark, children }) => {
    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Container LIMPIO para efectos futuros */}
            <div className="absolute inset-0 z-0">
                {/* Fondo completamente limpio - SIN colores */}

                {/* Contenedor preparado para tus efectos personalizados */}
                <div className="absolute inset-0">
                    {/* AQUÍ puedes agregar efectos blur, 3D, Framer Motion, etc. */}
                </div>

                {/* Espacio para elementos decorativos */}
                <div className="absolute top-20 -left-20 w-40 h-40">
                    {/* Placeholder para efectos decorativos */}
                </div>
                <div className="absolute bottom-20 -right-20 w-40 h-40">
                    {/* Placeholder para efectos decorativos */}
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default HeroBackground;