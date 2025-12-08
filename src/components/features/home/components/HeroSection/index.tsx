import React from 'react';
import HeroBackground from './HeroBackground'; // Usamos el nuevo background con elementos 3D actualizados
import HeroContent from './HeroContent';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
    return (
        <div className="relative min-h-screen w-full flex flex-col justify-center">
            <HeroBackground isDark={isDark}>
                <div className="relative z-10 w-full">
                    <HeroContent isDark={isDark} />
                </div>
            </HeroBackground>
            {/* Mantener estructura original por si acaso */}
            {/* <div className="relative z-10">
                <HeroContent isDark={isDark} />
            </div> */}
        </div>
    );
};

export default HeroSection;