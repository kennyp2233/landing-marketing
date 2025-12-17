// components/features/home/components/HeroSection/FloatingElements.tsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface FloatingElementProps {
    isDark: boolean;
    variant: 'code' | 'terminal' | 'database' | 'cloud' | 'lock' | 'cpu';
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
        case 'sm': return 'w-6 h-6';
        case 'md': return 'w-8 h-8';
        case 'lg': return 'w-10 h-10';
        default: return 'w-8 h-8';
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
    // Dark: Purple, Light: Purple
    const color = isDark ? '#A855F7' : '#8a3c86';

    const renderIcon = () => {
        switch (variant) {
            case 'code':
                return (
                    <svg className={sizeClasses} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                );
            case 'terminal':
                return (
                    <svg className={sizeClasses} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="4 17 10 11 4 5"></polyline>
                        <line x1="12" y1="19" x2="20" y2="19"></line>
                    </svg>
                );
            case 'database':
                return (
                    <svg className={sizeClasses} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                );
            case 'cloud':
                return (
                    <svg className={sizeClasses} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                    </svg>
                );
            case 'lock':
                return (
                    <svg className={sizeClasses} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                );
            case 'cpu':
                return (
                    <svg className={sizeClasses} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                        <rect x="9" y="9" width="6" height="6"></rect>
                        <line x1="9" y1="1" x2="9" y2="4"></line>
                        <line x1="15" y1="1" x2="15" y2="4"></line>
                        <line x1="9" y1="20" x2="9" y2="23"></line>
                        <line x1="15" y1="20" x2="15" y2="23"></line>
                        <line x1="20" y1="9" x2="23" y2="9"></line>
                        <line x1="20" y1="14" x2="23" y2="14"></line>
                        <line x1="1" y1="9" x2="4" y2="9"></line>
                        <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="inline-block mx-4 relative p-2 rounded-xl backdrop-blur-sm bg-white/5 border border-white/5 shadow-lg glow-effect">
            <style jsx>{`
                .glow-effect {
                    box-shadow: 0 0 15px ${isDark ? 'rgba(168,85,247,0.3)' : 'rgba(138,60,134,0.3)'};
                }
            `}</style>
            {renderIcon()}
        </div>
    );
};

export const FloatingLogo: React.FC<FloatingLogoProps> = ({ isDark, size }) => {
    // 3D Rotation Animation is handled by CSS below along with Scroll Parallax
    const { scrollY } = useScroll();

    // Parallax effect: moves up/down and rotates based on scroll
    // INCREASED EFFECT MAGNITUDE
    const y = useTransform(scrollY, [0, 800], [0, -250]); // Moves up significantly as you scroll
    const rotateX = useTransform(scrollY, [0, 800], [0, 60]); // Tilts back more
    const scale = useTransform(scrollY, [0, 500], [1, 1.4]); // Grows more

    // Using the uploaded logo-3d.jpg for Dark, logo-orange.jpg for Light
    const logoSrc = isDark ? "/logo-3d.jpg" : "/logo-3d.jpg";
    const sizePx = size === 'sm' ? 40 : size === 'md' ? 60 : 80;

    return (
        <div
            className="inline-block mx-4 relative perspective-container"
            style={{
                perspective: '1200px', // More perspective depth
                transformStyle: 'preserve-3d'
            }}
        >
            <motion.div
                className="logo-3d-card"
                style={{
                    width: sizePx,
                    height: sizePx,
                    position: 'relative',
                    transformStyle: 'preserve-3d',
                    y,
                    rotateX,
                    scale,
                }}
            >
                <style jsx>{`
                    .logo-3d-card {
                        animation: float-rotate 10s infinite ease-in-out;
                    }
                    @keyframes float-rotate {
                        0%, 100% { transform: rotateY(-20deg) translateY(0px) rotateZ(-2deg); }
                        50% { transform: rotateY(20deg) translateY(-15px) rotateZ(2deg); }
                    }
                `}</style>
                <img
                    src={logoSrc}
                    alt="Logo"
                    className="w-full h-full object-cover rounded-xl shadow-2xl border-2 border-white/10"
                    style={{
                        boxShadow: isDark
                            ? '0 0 25px rgba(168,85,247,0.6)'
                            : '0 0 25px rgba(138,60,134,0.5)'
                    }}
                />
            </motion.div>
        </div>
    );
};

export const FloatingText: React.FC<FloatingTextProps> = ({ text, isDark, size }) => {
    const textSizeClasses = getTextSizeClasses(size);

    return (
        <div className="inline-block mx-6">
            <span
                className={`${textSizeClasses} font-mono font-bold px-3 py-1.5 rounded-md backdrop-blur-md`}
                style={{
                    color: isDark ? '#E9D5FF' : '#592355', // Purple-100 : Dark Purple
                    background: isDark
                        ? 'rgba(88, 28, 135, 0.4)' // Purple-900 with opacity
                        : 'rgba(233, 213, 255, 0.6)', // Purple-100 with opacity
                    border: isDark
                        ? '1px solid rgba(168, 85, 247, 0.3)'
                        : '1px solid rgba(138, 60, 134, 0.3)',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
            >
                {`<${text} />`}
            </span>
        </div>
    );
};
