// components/features/home/components/HeroSection/index.tsx
import React from 'react';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = ({ isDark }) => {
    return (
        <HeroBackground isDark={isDark}>
            <HeroContent isDark={isDark} />
        </HeroBackground>
    );
};

export default HeroSection;