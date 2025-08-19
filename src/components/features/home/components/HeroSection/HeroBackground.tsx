
// components/features/home/components/HeroSection/HeroBackground.tsx
import React from 'react';
import { HeroBackgroundProps } from './HeroSection.types';
import MarqueeAlongPath from './MarqueeAlongPath';
import { FloatingElement, FloatingLogo, FloatingText } from './FloatingElements';

const HeroBackground: React.FC<HeroBackgroundProps> = ({ isDark, children }) => {
    // Paths optimizados para offset-path CSS - más suaves y naturales
    // Path principal: curva orgánica centrada (desplazada más arriba)
    const primaryPath = "M-50,200 C180,120 420,160 620,130 C820,100 980,220 1220,180 C1440,140 1620,220 1750,180";

    // Path secundario: curva complementaria más baja (baja más abajo)
    const secondaryPath = "M-50,520 C170,470 370,560 570,520 C770,480 970,560 1170,520 C1370,480 1570,560 1750,520";

    // Path terciario: curva superior sutil (más arriba)
    const tertiaryPath = "M-50,120 C210,60 390,140 610,100 C810,60 1010,140 1230,100 C1430,60 1630,140 1750,100";

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Background Container con múltiples capas de Marquees */}
            <div className="absolute inset-0 z-0">
                {/* Marquee principal con elementos principales */}
                <MarqueeAlongPath
                    path={primaryPath}
                    baseVelocity={5}
                    repeat={3}
                    isDark={isDark}
                    zIndexBase={10}
                    className="opacity-70"
                    offsetY={-10} // offset 0 (posicionado por la path)
                >
                    <FloatingLogo isDark={isDark} size="md" />
                    <FloatingElement isDark={isDark} variant="circle" size="lg" />
                    <FloatingText text="Marketing" isDark={isDark} size="sm" />
                    <FloatingElement isDark={isDark} variant="star" size="md" />
                    <FloatingText text="Digital" isDark={isDark} size="sm" />
                    <FloatingElement isDark={isDark} variant="diamond" size="md" />
                    <FloatingText text="GlowUp" isDark={isDark} size="md" />
                    <FloatingElement isDark={isDark} variant="triangle" size="sm" />
                </MarqueeAlongPath>

                {/* Marquee secundario con elementos complementarios */}
                <MarqueeAlongPath
                    path={secondaryPath}
                    baseVelocity={-5}
                    repeat={2}
                    isDark={isDark}
                    zIndexBase={20}
                    className="opacity-50"
                    offsetY={0} // offset 0 (posicionado por la path)
                >
                    <FloatingElement isDark={isDark} variant="circle" size="sm" />
                    <FloatingElement isDark={isDark} variant="square" size="md" />
                    <FloatingText text="Estrategia" isDark={isDark} size="sm" />
                    <FloatingElement isDark={isDark} variant="diamond" size="sm" />
                    <FloatingText text="Resultados" isDark={isDark} size="sm" />
                    <FloatingElement isDark={isDark} variant="star" size="sm" />
                </MarqueeAlongPath>

                {/* Marquee terciario muy sutil */}
                <MarqueeAlongPath
                    path={tertiaryPath}
                    baseVelocity={8}
                    repeat={2}
                    isDark={isDark}
                    zIndexBase={5}
                    className="opacity-30"
                    offsetY={0} // offset 0 (posicionado por la path)
                >
                    <FloatingElement isDark={isDark} variant="circle" size="sm" />
                    <FloatingElement isDark={isDark} variant="diamond" size="sm" />
                    <FloatingElement isDark={isDark} variant="star" size="sm" />
                </MarqueeAlongPath>

                {/* Elementos decorativos estáticos con gradientes más suaves */}
                <div className="absolute top-20 -left-32 w-64 h-64">
                    <div
                        className="w-full h-full rounded-full opacity-15 blur-xl"
                        style={{
                            background: isDark
                                ? 'radial-gradient(circle, rgba(108,38,249,0.4) 0%, rgba(168,85,247,0.2) 40%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, rgba(59,130,246,0.15) 40%, transparent 70%)'
                        }}
                    />
                </div>
                
                <div className="absolute bottom-32 -right-32 w-80 h-80">
                    <div
                        className="w-full h-full rounded-full opacity-15 blur-xl"
                        style={{
                            background: isDark
                                ? 'radial-gradient(circle, rgba(213,7,250,0.4) 0%, rgba(108,38,249,0.2) 40%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(168,85,247,0.15) 40%, transparent 70%)'
                        }}
                    />
                </div>

                <div className="absolute top-1/2 left-1/4 w-48 h-48">
                    <div
                        className="w-full h-full rounded-full opacity-10 blur-2xl"
                        style={{
                            background: isDark
                                ? 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 60%)'
                                : 'radial-gradient(circle, rgba(108,38,249,0.2) 0%, transparent 60%)'
                        }}
                    />
                </div>

                {/* Gradiente de fondo principal más sutil y orgánico */}
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        background: isDark
                            ? `
                                radial-gradient(ellipse 800px 600px at 20% 30%, rgba(108,38,249,0.12) 0%, transparent 50%),
                                radial-gradient(ellipse 600px 800px at 80% 70%, rgba(213,7,250,0.1) 0%, transparent 50%),
                                radial-gradient(ellipse 400px 500px at 50% 50%, rgba(168,85,247,0.08) 0%, transparent 50%)
                            `
                            : `
                                radial-gradient(ellipse 800px 600px at 20% 30%, rgba(168,85,247,0.08) 0%, transparent 50%),
                                radial-gradient(ellipse 600px 800px at 80% 70%, rgba(59,130,246,0.06) 0%, transparent 50%),
                                radial-gradient(ellipse 400px 500px at 50% 50%, rgba(108,38,249,0.05) 0%, transparent 50%)
                            `
                    }}
                />

                {/* Overlay sutil para mejor contraste del contenido */}
                <div 
                    className="absolute inset-0 opacity-30"
                    style={{
                        background: isDark
                            ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)'
                            : 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 100%)'
                    }}
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default HeroBackground;