// components/features/home/components/PressSection/PressSection.types.ts
import React from 'react';

export interface PressSectionProps {
    logos?: PressLogo[];
    carouselConfig?: LogoCarouselConfig;
    isDark?: boolean;
}

export interface PressLogo {
    id: string;
    name: string;
    logo?: {
        type: 'text' | 'image' | 'component';
        data: React.ReactNode | string;
        alt?: string;
    };
    url?: string;
}

export interface LogoCarouselConfig {
    autoScrollSpeed?: number; // pixels per second
    pauseOnHover?: boolean;
    showDots?: boolean;
    itemsPerView?: {
        mobile: number;
        tablet: number;
        desktop: number;
    };
    gap?: number; // gap between logos in pixels
}