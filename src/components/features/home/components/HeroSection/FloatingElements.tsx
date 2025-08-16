// components/features/home/components/HeroSection/FloatingElements.tsx
import React from 'react';

interface FloatingElementProps {
    isDark: boolean;
    variant: 'circle' | 'square' | 'diamond' | 'star' | 'triangle';
    size: 'sm' | 'md' | 'lg';
}

interface FloatingLogoProps {
    isDark: boolean;
    size: 'sm' | 'md' | 'lg';
}

interface FloatingTextProps {
    text: string;
    isDark: boolean;
    size: 'sm' | 'md' | 'lg';
}

const getSizeClasses = (size: 'sm' | 'md' | 'lg') => {
    switch (size) {
        case 'sm': return 'w-4 h-4';
        case 'md': return 'w-6 h-6';
        case 'lg': return 'w-8 h-8';
        default: return 'w-6 h-6';
    }
};

const getTextSizeClasses = (size: 'sm' | 'md' | 'lg') => {
    switch (size) {
        case 'sm': return 'text-xs';
        case 'md': return 'text-sm';
        case 'lg': return 'text-base';
        default: return 'text-sm';
    }
};

export const FloatingElement: React.FC<FloatingElementProps> = ({ isDark, variant, size }) => {
    const sizeClasses = getSizeClasses(size);
    const baseColor = isDark ? 'rgba(168,85,247,0.6)' : 'rgba(108,38,249,0.4)';
    
    const renderShape = () => {
        switch (variant) {
            case 'circle':
                return (
                    <div 
                        className={`${sizeClasses} rounded-full`}
                        style={{ backgroundColor: baseColor }}
                    />
                );
            case 'square':
                return (
                    <div 
                        className={`${sizeClasses} rounded-sm`}
                        style={{ backgroundColor: baseColor }}
                    />
                );
            case 'diamond':
                return (
                    <div 
                        className={`${sizeClasses} transform rotate-45`}
                        style={{ backgroundColor: baseColor }}
                    />
                );
            case 'triangle':
                return (
                    <div 
                        className={`${sizeClasses} relative`}
                    >
                        <div 
                            className="w-0 h-0"
                            style={{
                                borderLeft: '8px solid transparent',
                                borderRight: '8px solid transparent',
                                borderBottom: `16px solid ${baseColor}`,
                            }}
                        />
                    </div>
                );
            case 'star':
                return (
                    <svg className={sizeClasses} viewBox="0 0 24 24">
                        <path
                            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                            fill={baseColor}
                        />
                    </svg>
                );
            default:
                return (
                    <div 
                        className={`${sizeClasses} rounded-full`}
                        style={{ backgroundColor: baseColor }}
                    />
                );
        }
    };

    return (
        <div className="inline-block mx-4">
            {renderShape()}
        </div>
    );
};

export const FloatingLogo: React.FC<FloatingLogoProps> = ({ isDark, size }) => {
    const sizeClasses = getSizeClasses(size);
    
    return (
        <div className="inline-block mx-4">
            <div className={`${sizeClasses} flex items-center justify-center rounded-lg`}
                style={{
                    background: isDark 
                        ? 'linear-gradient(135deg, rgba(168,85,247,0.8), rgba(213,7,250,0.6))'
                        : 'linear-gradient(135deg, rgba(108,38,249,0.6), rgba(59,130,246,0.4))'
                }}>
                <span className={`font-bold ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-base'} text-white`}>
                    G
                </span>
            </div>
        </div>
    );
};

export const FloatingText: React.FC<FloatingTextProps> = ({ text, isDark, size }) => {
    const textSizeClasses = getTextSizeClasses(size);
    
    return (
        <div className="inline-block mx-6">
            <span 
                className={`${textSizeClasses} font-medium px-2 py-1 rounded-md backdrop-blur-sm`}
                style={{
                    color: isDark ? 'rgba(255,255,255,0.7)' : 'rgba(75,85,99,0.8)',
                    background: isDark 
                        ? 'rgba(31,41,55,0.3)' 
                        : 'rgba(255,255,255,0.2)',
                    border: isDark 
                        ? '1px solid rgba(255,255,255,0.1)' 
                        : '1px solid rgba(0,0,0,0.1)'
                }}
            >
                {text}
            </span>
        </div>
    );
};
