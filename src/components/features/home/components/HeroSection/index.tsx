import React from 'react';
import TechBackground from './TechBackground'; // Importa el nuevo componente
import HeroContent from './HeroContent';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col justify-center">
            <TechBackground />
            <div className="relative z-10">
                <HeroContent isDark={isDark} />
            </div>
        </div>
    );
};

export default HeroSection;