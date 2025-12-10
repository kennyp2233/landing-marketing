// components/features/home/components/PressSection/InfiniteLogoCarousel.tsx
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../../../../../lib/utils';
import { LogoCarouselConfig, PressLogo } from './PressSection.types';
import Image from 'next/image';
import { useTheme } from '../../../../../providers/ThemeProvider';

interface InfiniteLogoCarouselProps {
    logos: PressLogo[];
    config: LogoCarouselConfig;
}

const InfiniteLogoCarousel: React.FC<InfiniteLogoCarouselProps> = ({
    logos,
    config
}) => {
    const { isDark } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    const {
        autoScrollSpeed = 40,
        pauseOnHover = true,
        showDots = false,
        itemsPerView = { mobile: 2, tablet: 3, desktop: 4 },
        gap = 24
    } = config;

    // For the simple CSS animation we only need two sets (duplicate once)
    // This keeps DOM small while allowing percentage-based translate (-50%) looping
    const [dupLogos, setDupLogos] = useState<PressLogo[]>(() => [...logos, ...logos]);

    // Keep exactly two sets for CSS percentage-based animation; still update when logos change
    useEffect(() => {
        setDupLogos([...logos, ...logos]);
    }, [logos]);

    // Simple CSS keyframes approach: measure the width of one set and compute duration (seconds)
    const [animDuration, setAnimDuration] = useState<number>(0);
    useEffect(() => {
        if (!containerRef.current) return;
        const update = () => {
            const cw = containerRef.current ? containerRef.current.offsetWidth : 0;
            const itemWidth = cw / itemsPerView.desktop + gap;
            const singleSetWidth = Math.max(1, itemWidth * logos.length);
            // duration in seconds: px / (px per sec)
            const dur = autoScrollSpeed > 0 ? singleSetWidth / autoScrollSpeed : 30;
            setAnimDuration(dur);
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, [logos, autoScrollSpeed, itemsPerView.desktop, gap]);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const renderLogo = (logo: PressLogo) => {
        if (!logo.logo) {
            return (
                <span className={cn(
                    'text-sm font-semibold',
                    isDark ? 'text-gray-300' : 'text-gray-600'
                )}>
                    {logo.name}
                </span>
            );
        }

        switch (logo.logo.type) {
            case 'text':
                return (
                    <span className={cn(
                        'text-sm font-semibold',
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        {logo.logo.data as string}
                    </span>
                );

            case 'image':
                return (
                    <div className="relative w-full h-full flex items-center justify-center group">
                        <Image
                            src={logo.logo.data as string}
                            alt={logo.logo.alt || logo.name}
                            fill
                            className={cn(
                                "w-full h-full object-contain transition-all duration-300",
                                isDark ? "opacity-70 brightness-75" : "opacity-80 brightness-50",
                                "group-hover:opacity-100",
                                "filter grayscale group-hover:grayscale-0",
                                "transform group-hover:scale-110"
                            )}
                            loading="lazy"
                        />
                        <div className={cn(
                            "absolute inset-0 bg-gradient-to-t from-transparent via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg",
                            isDark ? "to-gray-100/5" : "to-white/5"
                        )} />
                    </div>
                );

            case 'component':
                return (
                    <div className={cn(
                        "w-full h-full flex items-center justify-center transition-opacity duration-300",
                        isDark ? "opacity-70 hover:opacity-100" : "opacity-50 hover:opacity-100"
                    )}>
                        {logo.logo.data as React.ReactNode}
                    </div>
                );

            default:
                return (
                    <span className={cn(
                        'text-sm font-semibold',
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        {logo.name}
                    </span>
                );
        }
    };

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={containerRef}
        >
            <div
                className="flex animate-infinite"
                style={{
                    animationDuration: `${animDuration}s`,
                    animationPlayState: isHovered && pauseOnHover ? 'paused' : 'running'
                }}
            >
                {dupLogos.map((logo: PressLogo, index: number) => (
                    <div
                        key={`${logo.id}-${index}`}
                        className={cn(
                            'flex-shrink-0 h-40 group',
                            `w-sm`
                        )}
                        style={{ paddingRight: `${Math.max(6, gap)}px` }}
                    >
                        <div className={cn(
                            'flex items-center justify-center p-6 h-full',
                            'transform hover:scale-105 transition-all duration-300 ease-out'
                        )}>
                            {renderLogo(logo)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Gradient overlays for smooth fade effect - consistent with main section */}
            {/* Gradient overlays removed to allow parent mask to handle transparency */}

            {/* Optional dots indicator */}
            {showDots && (
                <div className="flex justify-center mt-8 space-x-2">
                    {logos.map((_, index) => (
                        <div
                            key={index}
                            className={cn(
                                'w-2 h-2 rounded-full transition-all duration-300',
                                isDark
                                    ? 'bg-gray-600 hover:bg-gray-500'
                                    : 'bg-gray-300 hover:bg-gray-400'
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default InfiniteLogoCarousel;

// Scoped styles for the CSS animation. Using translateX(-50%) because we render two sets.
// This is a minimal approach; if you prefer global Tailwind utilities, we can move these styles.
/* eslint-disable react/no-danger */
const styleTag = `
@keyframes scroll-left {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
}
.animate-infinite {
    display: inline-flex;
    will-change: transform;
    animation-name: scroll-left;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
`;

// Inject a small style element into the document when module mounts (only once)
if (typeof document !== 'undefined' && !document.getElementById('infinite-carousel-styles')) {
    const s = document.createElement('style');
    s.id = 'infinite-carousel-styles';
    s.innerHTML = styleTag;
    document.head.appendChild(s);
}