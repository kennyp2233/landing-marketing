
// components/features/home/components/HeroSection/HeroBackground.tsx
import React from 'react';
import { HeroBackgroundProps } from './HeroSection.types';
import MarqueeAlongPath from './MarqueeAlongPath';
import { FloatingElement, FloatingLogo, FloatingText } from './FloatingElements';

const HeroBackground: React.FC<HeroBackgroundProps> = ({ isDark, children }) => {
    // Paths optimizados para offset-path CSS - más suaves y naturales
    // Path principal: curva orgánica centrada (desplazada más arriba)
    const primaryPath = "M-50,160 C180,80 420,120 620,90 C820,60 980,180 1220,140 C1440,100 1620,180 1750,140";

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
                {/* Capa 1: Glow superior-izquierda */}
                <div className="absolute top-24 left-6 w-64 h-64 z-20 pointer-events-none">
                    <div
                        className="w-full h-full rounded-full opacity-[0.35] blur-2xl mix-blend-screen"
                        style={{
                            background: isDark
                                ? 'radial-gradient(circle, rgba(108,38,249,0.6) 0%, rgba(168,85,247,0.35) 40%, transparent 70%)'
                                : 'radial-gradient(circle, rgba(168,85,247,0.45) 0%, rgba(59,130,246,0.25) 40%, transparent 70%)'
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
                                : 'radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(168,85,247,0.25) 40%, transparent 70%)'
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
                                : 'radial-gradient(circle, rgba(108,38,249,0.35) 0%, transparent 60%)'
                        }}
                    />
                </div>

                {/* Gradiente de fondo principal más sutil y orgánico - Ajustado a morado del logo */}
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
                                radial-gradient(ellipse 800px 600px at 20% 30%, rgba(168,85,247,0.08) 0%, transparent 50%),
                                radial-gradient(ellipse 600px 800px at 80% 70%, rgba(59,130,246,0.06) 0%, transparent 50%),
                                radial-gradient(ellipse 400px 500px at 50% 50%, rgba(108,38,249,0.05) 0%, transparent 50%)
                            `
                    }}
                />

                {/* Overlay sutil para mejor contraste del contenido */}
                <div
                    className="absolute inset-0 opacity-30 z-10 pointer-events-none"
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