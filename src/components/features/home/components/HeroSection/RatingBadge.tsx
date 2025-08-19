// components/features/home/components/HeroSection/RatingBadge.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';

interface RatingBadgeProps {
    isDark: boolean;
    rating?: number;
    reviewCount?: string;
}

const RatingBadge: React.FC<RatingBadgeProps> = ({ 
    isDark, 
    rating = 5, 
    reviewCount = "150+ opiniones" 
}) => {
    return (
        <>
            {/* SVG Filter for liquid glass effect */}
            <svg style={{ display: 'none' }}>
                <filter id="glass-distortion-rating" x="0%" y="0%" width="100%" height="100%" filterUnits="objectBoundingBox">
                    <feTurbulence 
                        type="fractalNoise" 
                        baseFrequency="0.008 0.008" 
                        numOctaves="1" 
                        seed="17" 
                        result="turbulence" 
                    />
                    <feComponentTransfer in="turbulence" result="mapped">
                        <feFuncR type="gamma" amplitude="1" exponent="12" offset="0.5" />
                        <feFuncG type="gamma" amplitude="0" exponent="1" offset="0" />
                        <feFuncB type="gamma" amplitude="0" exponent="1" offset="0.5" />
                    </feComponentTransfer>
                    <feGaussianBlur in="turbulence" stdDeviation="2" result="softMap" />
                    <feSpecularLighting 
                        in="softMap" 
                        surfaceScale="3" 
                        specularConstant="0.8" 
                        specularExponent="80" 
                        lightingColor="white" 
                        result="specLight"
                    >
                        <fePointLight x="-150" y="-150" z="200" />
                    </feSpecularLighting>
                    <feComposite 
                        in="specLight" 
                        operator="arithmetic" 
                        k1="0" 
                        k2="1" 
                        k3="1" 
                        k4="0" 
                        result="litImage" 
                    />
                    <feDisplacementMap 
                        in="SourceGraphic" 
                        in2="softMap" 
                        scale="80" 
                        xChannelSelector="R" 
                        yChannelSelector="G" 
                    />
                </filter>
            </svg>

            <div className={cn(
                'liquid-glass-wrapper relative inline-flex items-center space-x-3 px-5 py-3 rounded-full',
                'font-semibold overflow-hidden select-none',
                'transition-all duration-500 ease-out',
                'hover:scale-105 hover:shadow-2xl active:scale-95',
                isDark ? 'text-white' : 'text-gray-900'
            )}>
                {/* Liquid Glass Effect Layer */}
                <div 
                    className="liquid-glass-effect absolute inset-0 z-0 rounded-full"
                    style={{
                        backdropFilter: 'blur(4px)',
                        filter: 'url(#glass-distortion-rating)',
                        isolation: 'isolate'
                    }}
                />
                
                {/* Tint Layer */}
                <div 
                    className="liquid-glass-tint absolute inset-0 z-10 rounded-full"
                    style={{
                        background: isDark 
                            ? 'rgba(255, 255, 255, 0.12)' 
                            : 'rgba(255, 255, 255, 0.3)'
                    }}
                />
                
                {/* Shine Layer */}
                <div 
                    className="liquid-glass-shine absolute inset-0 z-20 overflow-hidden rounded-full"
                    style={{
                        boxShadow: isDark
                            ? 'inset 1px 1px 1px 0 rgba(255, 255, 255, 0.4), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.15)'
                            : 'inset 2px 2px 1px 0 rgba(255, 255, 255, 0.6), inset -1px -1px 1px 1px rgba(255, 255, 255, 0.3)'
                    }}
                />
                
                {/* Content Layer */}
                <div className="liquid-glass-text relative z-30 flex items-center space-x-3">
                    {/* Estrellas con gradiente dorado */}
                    <div className="flex space-x-1">
                        {[...Array(rating)].map((_, i) => (
                            <svg
                                key={i}
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                className="w-[18px] h-[18px] transition-transform duration-300 hover:scale-125"
                            >
                                <defs>
                                    <linearGradient id={`star-gradient-glass-${i}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#fbbf24" />
                                        <stop offset="30%" stopColor="#f59e0b" />
                                        <stop offset="70%" stopColor="#d97706" />
                                        <stop offset="100%" stopColor="#b45309" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                                    fill={`url(#star-gradient-glass-${i})`}
                                    style={{
                                        filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.25))'
                                    }}
                                />
                            </svg>
                        ))}
                    </div>
                    
                    <span className={cn(
                        'text-sm font-semibold transition-all duration-300',
                        isDark ? 'text-white/90' : 'text-gray-900/90'
                    )}
                    style={{
                        textShadow: isDark 
                            ? '0 1px 3px rgba(0,0,0,0.7)' 
                            : '0 1px 2px rgba(255,255,255,0.9)'
                    }}>
                        Basado en {reviewCount}
                    </span>
                </div>
            </div>
        </>
    );
};

export default RatingBadge;
