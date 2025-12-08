
// components/features/home/components/HeroSection/HeroBackground.tsx
import React from 'react';
import { HeroBackgroundProps } from './HeroSection.types';
import MarqueeAlongPath from './MarqueeAlongPath';
import { FloatingElement, FloatingLogo, FloatingText } from './FloatingElements';

const HeroBackground: React.FC<HeroBackgroundProps> = ({ isDark, children }) => {
    // Paths optimizados para offset-path CSS - más suaves y naturales
    // Path principal: curva orgánica centrada (desplazada más arriba)
    // Paths optimizados para offset-path CSS - separados verticalmente para evitar superposiciones
    // Path principal: Zona Superior-Media (y: 50 -> 250)
    const primaryPath = "M-100,250 C300,50 600,250 900,100 C1200,-50 1500,200 1900,100";

    // Path secundario: Zona Inferior (y: 400 -> 600)
    const secondaryPath = "M-100,550 C200,450 500,600 800,500 C1100,400 1400,600 1900,500";

    // Path terciario: Fondo lejano (y: variable, más plano)
    const tertiaryPath = "M-100,150 C400,100 800,200 1200,100 C1600,0 2000,150 2400,100";

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
                    className="opacity-90"
                    offsetY={-10} // offset 0 (posicionado por la path)
                >
                    <FloatingLogo isDark={isDark} size="md" />
                    <FloatingElement isDark={isDark} variant="code" size="lg" />
                    <FloatingText text="Dev" isDark={isDark} size="sm" />
                    <FloatingElement isDark={isDark} variant="terminal" size="md" />
                    <FloatingText text="Innovation" isDark={isDark} size="sm" />
                    <FloatingElement isDark={isDark} variant="database" size="md" />
                    <FloatingText text="Scale" isDark={isDark} size="md" />
                    <FloatingElement isDark={isDark} variant="cloud" size="sm" />
                </MarqueeAlongPath>

                {/* Marquee secundario con elementos complementarios */}
                <MarqueeAlongPath
                    path={secondaryPath}
                    baseVelocity={-5}
                    repeat={2}
                    isDark={isDark}
                    zIndexBase={20}
                    className="opacity-70"
                    offsetY={0} // offset 0 (posicionado por la path)
                >
                    <FloatingElement isDark={isDark} variant="code" size="sm" />
                    <FloatingElement isDark={isDark} variant="lock" size="md" />
                    <FloatingText text="Secure" isDark={isDark} size="sm" />
                    <FloatingElement isDark={isDark} variant="cpu" size="sm" />
                    <FloatingText text="Fast" isDark={isDark} size="sm" />
                    <FloatingElement isDark={isDark} variant="terminal" size="sm" />
                </MarqueeAlongPath>

                {/* Marquee terciario muy sutil */}
                <MarqueeAlongPath
                    path={tertiaryPath}
                    baseVelocity={8}
                    repeat={2}
                    isDark={isDark}
                    zIndexBase={5}
                    className="opacity-40"
                    offsetY={0} // offset 0 (posicionado por la path)
                >
                    <FloatingElement isDark={isDark} variant="code" size="sm" />
                    <FloatingElement isDark={isDark} variant="database" size="sm" />
                    <FloatingElement isDark={isDark} variant="cloud" size="sm" />
                </MarqueeAlongPath>

                {/* Elementos decorativos estáticos con gradientes más visibles */}
                {/* Elementos decorativos estáticos con gradientes más visibles */}
                {/* Capa 1: Glow superior-izquierda */}
                <div className="absolute top-24 left-6 w-64 h-64 z-20 pointer-events-none">
                    <div
                        className="w-full h-full rounded-full opacity-[0.35] blur-2xl mix-blend-screen"
                        style={{
                            background: isDark
                                ? 'radial-gradient(circle, rgba(108,38,249,0.6) 0%, rgba(168,85,247,0.35) 40%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(249,115,22,0.45) 0%, rgba(251,146,60,0.25) 40%, transparent 70%)'
                        }}
                    />
                </div>

                {/* Capa 2: Glow inferior-derecha */}
                <div className="absolute bottom-24 right-6 w-80 h-80 z-20 pointer-events-none">
                    <div
                        className="w-full h-full rounded-full opacity-[0.35] blur-3xl mix-blend-screen"
                        style={{
                            background: isDark
                                ? 'radial-gradient(circle, rgba(213,7,250,0.55) 0%, rgba(108,38,249,0.3) 40%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(251,146,60,0.45) 0%, rgba(249,115,22,0.25) 40%, transparent 70%)'
                        }}
                    />
                </div>

                {/* Capa 3: Glow central sutil */}
                <div className="absolute top-1/2 left-1/4 w-56 h-56 -translate-y-1/2 z-20 pointer-events-none">
                    <div
                        className="w-full h-full rounded-full opacity-[0.25] blur-3xl mix-blend-screen"
                        style={{
                            background: isDark
                                ? 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, transparent 60%)'
                                : 'radial-gradient(circle, rgba(249,115,22,0.35) 0%, transparent 60%)'
                        }}
                    />
                </div>

                {/* Gradiente de fondo principal más sutil y orgánico - Ajustado a morado (dark) / naranja (light) */}
                <div
                    className="absolute inset-0 opacity-25 z-0 pointer-events-none"
                    style={{
                        background: isDark
                            ? `
                                radial-gradient(ellipse 800px 600px at 20% 30%, rgba(108,38,249,0.12) 0%, transparent 50%),
                                radial-gradient(ellipse 600px 800px at 80% 70%, rgba(213,7,250,0.1) 0%, transparent 50%),
                                radial-gradient(ellipse 400px 500px at 50% 50%, rgba(168,85,247,0.08) 0%, transparent 50%)
                            `
                            : `
                                radial-gradient(ellipse 800px 600px at 20% 30%, rgba(249,115,22,0.08) 0%, transparent 50%),
                                radial-gradient(ellipse 600px 800px at 80% 70%, rgba(251,146,60,0.06) 0%, transparent 50%),
                                radial-gradient(ellipse 400px 500px at 50% 50%, rgba(249,115,22,0.05) 0%, transparent 50%)
                            `
                    }}
                />

                {/* Overlay sutil para mejor contraste del contenido */}
                <div
                    className="absolute inset-0 opacity-30 z-10 pointer-events-none"
                    style={{
                        background: isDark
                            ? 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.1) 100%)'
                            : 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.2) 100%)'
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