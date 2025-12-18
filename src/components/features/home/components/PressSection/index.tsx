// components/features/home/components/PressSection/index.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import InfiniteLogoCarousel from './InfiniteLogoCarousel';
import { PressSectionProps, PressLogo } from './PressSection.types';
import { useTheme } from '../../../../../providers/ThemeProvider';

const PressSection: React.FC<PressSectionProps> = ({
    logos,
    carouselConfig = {},
    isDark
}) => {
    // Default carousel configuration - optimized for logo display
    const defaultConfig = {
        autoScrollSpeed: 35,
        pauseOnHover: true,
        showDots: false,
        itemsPerView: {
            mobile: 3,
            tablet: 5,
            desktop: 6
        },
        gap: 32,
        ...carouselConfig
    };
    // Default logos 
    const defaultLogos: PressLogo[] = [
        {
            id: 'torrefuerte',
            name: 'Torrefuerte',
            logo: { type: 'image', data: '/press/Recurso 1logo-torrefuerte.svg', alt: 'Torrefuerte Logo' }
        },
        {
            id: 'kipet',
            name: 'Kipet',
            logo: { type: 'image', data: '/press/Recurso 2logo-kipet.svg', alt: 'Kipet Logo' }
        },
        {
            id: 'orion',
            name: 'Orion',
            logo: { type: 'image', data: '/press/Recurso 3logo-orion.svg', alt: 'Orion Logo' }
        },
        {
            id: 'maquina',
            name: 'Máquina',
            logo: { type: 'image', data: '/press/Recurso 4logo-maquina.svg', alt: 'Máquina Logo' }
        }
    ];

    const pressLogos = logos || defaultLogos;

    return (
        <section className={cn(
            "py-12 border-y relative overflow-hidden transition-colors duration-300",
            isDark ? "bg-neutral-950/50 border-white/5" : "bg-neutral-50/50 border-black/5"
        )}>
            {/* Technical Background Grid (Subtle) */}
            <div className={cn(
                "absolute inset-0 bg-[size:24px_24px] pointer-events-none",
                isDark
                    ? "bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)]"
                    : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
            )} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                {/* Header - Left Side */}
                <div className="md:w-1/3 text-left">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">Trusted Partners</span>
                    </div>
                    <h2 className={cn("text-xl md:text-2xl font-medium tracking-tight transition-colors", isDark ? "text-white" : "text-black")}>
                        Powering Next-Gen Companies
                    </h2>
                    <p className={cn("text-sm mt-2 max-w-xs transition-colors", isDark ? "text-neutral-400" : "text-neutral-600")}>
                        Empresas que escalan su infraestructura digital con nuestra arquitectura.
                    </p>
                </div>

                {/* Right Side - Carousel */}
                <div className="md:w-2/3 w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <InfiniteLogoCarousel
                        logos={pressLogos}
                        config={defaultConfig}
                        // Need to ensure logos look good. If they are black SVG, invert for dark mode.
                        // Assuming InfiniteLogoCarousel handles this or logos are colored.
                        // If they are monochrome, we might need a class on container.
                        className={isDark ? "brightness-100" : "grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all"}
                    />
                </div>
            </div>
        </section>
    );
};

export default PressSection;