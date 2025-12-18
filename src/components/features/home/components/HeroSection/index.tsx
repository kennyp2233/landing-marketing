import React from 'react';
/* import HeroBackground from './HeroBackground'; // Usamos el nuevo background con elementos 3D actualizados
import HeroContent from './HeroContent'; */
import NewHeroSection from './HeroSection'; // The new Scrollytelling Hero
import { HeroSectionProps } from './HeroSection.types';

const HeroSection: React.FC<HeroSectionProps> = (props) => {
    return <NewHeroSection {...props} />;
};

export default HeroSection;