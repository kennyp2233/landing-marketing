// components/features/home/components/PressSection/index.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import InfiniteLogoCarousel from './InfiniteLogoCarousel';
import { PressSectionProps, PressLogo } from './PressSection.types';
import { useTheme } from '../../../../../providers/ThemeProvider';

const PressSection: React.FC<PressSectionProps> = ({
    logos,
    carouselConfig = {}
}) => {
    const { isDark } = useTheme();
    // Default carousel configuration - optimized for logo display
    const defaultConfig = {
        autoScrollSpeed: 35,
        pauseOnHover: true,
        showDots: false,
        itemsPerView: {
            mobile: 4,
            tablet: 7,
            desktop: 8
        },
        gap: 6,
        ...carouselConfig
    };
    // Default logos with SVG images from public/press
    const defaultLogos: PressLogo[] = [
        {
            id: 'torrefuerte',
            name: 'Torrefuerte',
            logo: {
                type: 'image',
                data: '/press/Recurso 1logo-torrefuerte.svg',
                alt: 'Torrefuerte Logo'
            }
        },
        {
            id: 'kipet',
            name: 'Kipet',
            logo: {
                type: 'image',
                data: '/press/Recurso 2logo-kipet.svg',
                alt: 'Kipet Logo'
            }
        },
        {
            id: 'orion',
            name: 'Orion',
            logo: {
                type: 'image',
                data: '/press/Recurso 3logo-orion.svg',
                alt: 'Orion Logo'
            }
        },
        {
            id: 'maquina',
            name: 'Máquina',
            logo: {
                type: 'image',
                data: '/press/Recurso 4logo-maquina.svg',
                alt: 'Máquina Logo'
            }
        }
    ];

    const pressLogos = logos || defaultLogos;

    return (
        <section className={cn(
            'pt-1 pb-8 relative overflow-hidden mx-auto max-w-7xl'
        )}>
            {/* Removed gradient accent line for cleaner transition */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] rounded-full" /> */}

            {/* Decorative floating elements - adjusted opacity for dark mode */}
            <div className={cn(
                "absolute top-10 left-10 w-2 h-2 rounded-full animate-bounce",
                "bg-gradient-to-r from-[#592355] to-[#8a3c86]",
                isDark ? "opacity-60" : "opacity-40"
            )} style={{ animationDelay: '0s' }} />
            <div className={cn(
                "absolute top-20 right-20 w-1 h-1 rounded-full animate-bounce",
                "bg-gradient-to-r from-[#592355] to-[#8a3c86]",
                isDark ? "opacity-50" : "opacity-30"
            )} style={{ animationDelay: '1s' }} />
            <div className={cn(
                "absolute bottom-20 left-20 w-1.5 h-1.5 rounded-full animate-bounce",
                "bg-gradient-to-r from-[#8a3c86] to-[#592355]",
                isDark ? "opacity-55" : "opacity-35"
            )} style={{ animationDelay: '2s' }} />

            {/* Content container - full width */}
            <div className="relative z-0 px-6 pb-4">
                {/* Enhanced header with gradient effects */}
                <div className="text-center mb-8 pb-2">
                    <div className="inline-flex items-center justify-center mb-6">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#592355] to-[#8a3c86] flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <p className={cn(
                            'text-xs font-bold tracking-widest uppercase bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86] bg-clip-text text-transparent leading-relaxed pb-1',
                            'transform hover:scale-105 transition-transform duration-300'
                        )}>
                            TRUSTED BY
                        </p>
                    </div>

                    <h2 className={cn(
                        'text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transform hover:scale-105 transition-all duration-500 leading-tight pb-2',
                        isDark
                            ? 'bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent'
                    )}>
                        Leading Companies
                    </h2>

                    <div className={cn(
                        'inline-block px-6 py-3 rounded-full border backdrop-blur-sm',
                        'shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform',
                        isDark
                            ? 'bg-gray-800/60 border-gray-700/50'
                            : 'bg-white/60 border-gray-200/50'
                    )}>
                        <span className={cn(
                            'text-sm md:text-base font-medium',
                            isDark
                                ? 'bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent'
                                : 'bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent'
                        )}>
                            Marcas líderes que han transformado sus procesos con KHANNDA
                        </span>
                    </div>
                </div>

                {/* Infinite Logo Carousel with Mask for transparency */}
                <div className="[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                    <InfiniteLogoCarousel
                        logos={pressLogos}
                        config={defaultConfig}
                    />
                </div>

                {/* Enhanced bottom decorative element */}
                <div className="flex justify-center mt-8">
                    <div className={cn(
                        'flex items-center space-x-3 px-6 py-3 rounded-full',
                        'backdrop-blur-md border shadow-lg hover:shadow-xl',
                        'transform hover:scale-105 transition-all duration-300',
                        isDark
                            ? 'bg-gray-800/70 border-gray-700/30'
                            : 'bg-white/70 border-white/30'
                    )}>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#592355] to-[#8a3c86] animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#592355] to-[#8a3c86] animate-pulse" style={{ animationDelay: '0.5s' }} />
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8a3c86] to-[#592355] animate-pulse" style={{ animationDelay: '1s' }} />
                        </div>
                        <span className={cn(
                            'text-xs font-semibold',
                            isDark
                                ? 'bg-gradient-to-r from-gray-200 to-gray-100 bg-clip-text text-transparent'
                                : 'bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent'
                        )}>
                            Y muchas más empresas confían en nosotros
                        </span>
                        <div className="flex space-x-1">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#592355] to-[#8a3c86] animate-pulse" style={{ animationDelay: '1.5s' }} />
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#592355] to-[#8a3c86] animate-pulse" style={{ animationDelay: '2s' }} />
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#8a3c86] to-[#592355] animate-pulse" style={{ animationDelay: '2.5s' }} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PressSection;