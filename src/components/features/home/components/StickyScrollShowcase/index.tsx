// src/components/features/home/components/StickyScrollShowcase/index.tsx
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/ThemeProvider';
import { Code2, Palette, Target, Zap, Shield, Rocket } from 'lucide-react';

interface ShowcaseItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    gradient: string;
}

const showcaseItems: ShowcaseItem[] = [
    {
        id: 'strategy',
        title: 'Estrategia',
        subtitle: 'Planificamos tu éxito',
        description: 'Analizamos tu negocio a fondo para crear una hoja de ruta tecnológica que maximice tu inversión y acelere tus resultados.',
        icon: <Target className="w-12 h-12" />,
        gradient: 'from-[#592355] to-[#8a3c86]',
    },
    {
        id: 'design',
        title: 'Diseño',
        subtitle: 'Experiencias que cautivan',
        description: 'Creamos interfaces intuitivas y atractivas que tus usuarios amarán. Cada pixel está pensado para convertir visitantes en clientes.',
        icon: <Palette className="w-12 h-12" />,
        gradient: 'from-[#592355] to-[#8a3c86]',
    },
    {
        id: 'code',
        title: 'Desarrollo',
        subtitle: 'Código que escala',
        description: 'Construimos software robusto con las mejores prácticas. Tu sistema crecerá contigo sin dolores de cabeza técnicos.',
        icon: <Code2 className="w-12 h-12" />,
        gradient: 'from-[#8a3c86] to-[#592355]',
    },
    {
        id: 'launch',
        title: 'Lanzamiento',
        subtitle: 'De idea a realidad',
        description: 'Desplegamos tu solución con soporte continuo. No te dejamos solo: estaremos ahí en cada paso del camino.',
        icon: <Rocket className="w-12 h-12" />,
        gradient: 'from-[#592355] to-[#8a3c86]',
    },
];

export function StickyScrollShowcase() {
    const { isDark } = useTheme();
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Map scroll progress to item index (0-3 for 4 items)
    const activeIndexFloat = useTransform(scrollYProgress, [0, 1], [0, showcaseItems.length - 0.5]);

    // Background gradient that shifts based on scroll
    const backgroundGradient = useTransform(
        scrollYProgress,
        [0, 0.33, 0.66, 1],
        [
            'radial-gradient(circle at 30% 50%, rgba(108, 38, 249, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(213, 7, 250, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 70% 50%, rgba(5, 134, 253, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 50% 50%, rgba(108, 38, 249, 0.15) 0%, transparent 50%)',
        ]
    );

    return (
        <section
            ref={containerRef}
            className="relative"
            style={{ height: `${showcaseItems.length * 100}vh` }}
        >
            {/* Animated background */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-0"
                style={{ background: backgroundGradient }}
            />

            {/* Sticky container */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                        {/* Left side: Text content */}
                        <div className="relative h-[400px] flex items-center">
                            <AnimatePresence mode="wait">
                                {showcaseItems.map((item, index) => (
                                    <ShowcaseText
                                        key={item.id}
                                        item={item}
                                        index={index}
                                        activeIndexFloat={activeIndexFloat}
                                        isDark={isDark}
                                    />
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Right side: Visual card */}
                        <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
                            <ShowcaseCard
                                items={showcaseItems}
                                activeIndexFloat={activeIndexFloat}
                                isDark={isDark}
                            />
                        </div>
                    </div>

                    {/* Progress indicators */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                        {showcaseItems.map((item, index) => (
                            <ProgressDot
                                key={item.id}
                                index={index}
                                activeIndexFloat={activeIndexFloat}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

// Text component with scroll-linked animations
function ShowcaseText({
    item,
    index,
    activeIndexFloat,
    isDark,
}: {
    item: ShowcaseItem;
    index: number;
    activeIndexFloat: ReturnType<typeof useTransform<number, number>>;
    isDark: boolean;
}) {
    const opacity = useTransform(
        activeIndexFloat,
        [index - 0.5, index, index + 0.5],
        [0, 1, 0]
    );

    const y = useTransform(
        activeIndexFloat,
        [index - 0.5, index, index + 0.5],
        [50, 0, -50]
    );

    return (
        <motion.div
            className="absolute inset-0 flex flex-col justify-center"
            style={{ opacity, y }}
        >
            <motion.span
                className={cn(
                    'text-sm font-semibold uppercase tracking-wider mb-2',
                    `bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`
                )}
            >
                {item.subtitle}
            </motion.span>

            <motion.h2
                className={cn(
                    'text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
                    isDark ? 'text-white' : 'text-gray-900'
                )}
            >
                {item.title}
            </motion.h2>

            <motion.p
                className={cn(
                    'text-lg md:text-xl leading-relaxed max-w-lg',
                    isDark ? 'text-gray-300' : 'text-gray-600'
                )}
            >
                {item.description}
            </motion.p>
        </motion.div>
    );
}

// Visual card with animated content
function ShowcaseCard({
    items,
    activeIndexFloat,
    isDark,
}: {
    items: ShowcaseItem[];
    activeIndexFloat: ReturnType<typeof useTransform<number, number>>;
    isDark: boolean;
}) {
    // Card rotation for subtle 3D effect
    const rotateY = useTransform(activeIndexFloat, [0, items.length - 1], [-5, 5]);
    const rotateX = useTransform(activeIndexFloat, [0, items.length - 1], [5, -5]);

    return (
        <motion.div
            className={cn(
                'relative w-full max-w-md aspect-square rounded-3xl overflow-hidden',
                'border backdrop-blur-xl',
                isDark
                    ? 'bg-white/5 border-white/5'
                    : 'bg-white/80 border-gray-200/50 shadow-2xl'
            )}
            style={{
                rotateY,
                rotateX,
                transformStyle: 'preserve-3d',
                perspective: 1000,
            }}
        >
            {/* Animated gradient background */}
            <motion.div
                className="absolute inset-0 opacity-30"
                style={{
                    background: useTransform(
                        activeIndexFloat,
                        items.map((_, i) => i),
                        items.map(item => `linear-gradient(135deg, ${item.gradient.includes('via') ? '' : ''}${getGradientColors(item.gradient)})`)
                    ),
                }}
            />

            {/* Icon container */}
            <div className="absolute inset-0 flex items-center justify-center">
                {items.map((item, index) => (
                    <CardIcon
                        key={item.id}
                        item={item}
                        index={index}
                        activeIndexFloat={activeIndexFloat}
                        isDark={isDark}
                    />
                ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    className="absolute top-4 left-4 w-20 h-20 rounded-full bg-gradient-to-r from-[#592355]/20 to-transparent blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-gradient-to-r from-[#8a3c86]/20 to-transparent blur-xl"
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 5, repeat: Infinity }}
                />
            </div>

            {/* Grid pattern overlay */}
            <div
                className={cn(
                    'absolute inset-0 opacity-10',
                    isDark ? 'bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]' : 'bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)]'
                )}
                style={{ backgroundSize: '50px 50px' }}
            />
        </motion.div>
    );
}

// Individual icon with animations
function CardIcon({
    item,
    index,
    activeIndexFloat,
    isDark,
}: {
    item: ShowcaseItem;
    index: number;
    activeIndexFloat: ReturnType<typeof useTransform<number, number>>;
    isDark: boolean;
}) {
    const opacity = useTransform(
        activeIndexFloat,
        [index - 0.5, index, index + 0.5],
        [0, 1, 0]
    );

    const scale = useTransform(
        activeIndexFloat,
        [index - 0.5, index, index + 0.5],
        [0.5, 1, 0.5]
    );

    const rotate = useTransform(
        activeIndexFloat,
        [index - 0.5, index, index + 0.5],
        [-180, 0, 180]
    );

    return (
        <motion.div
            className="absolute flex flex-col items-center justify-center"
            style={{ opacity, scale, rotate }}
        >
            <div className={cn(
                'p-6 rounded-2xl mb-4',
                `bg-gradient-to-br ${item.gradient}`
            )}>
                <div className="text-white">
                    {item.icon}
                </div>
            </div>
            <span className={cn(
                'text-xl font-bold',
                isDark ? 'text-white' : 'text-gray-900'
            )}>
                {item.title}
            </span>
        </motion.div>
    );
}

// Progress dot indicator
function ProgressDot({
    index,
    activeIndexFloat,
}: {
    index: number;
    activeIndexFloat: ReturnType<typeof useTransform<number, number>>;
}) {
    const scale = useTransform(
        activeIndexFloat,
        [index - 0.5, index, index + 0.5],
        [1, 1.5, 1]
    );

    const opacity = useTransform(
        activeIndexFloat,
        [index - 0.5, index, index + 0.5],
        [0.3, 1, 0.3]
    );

    return (
        <motion.div
            className="w-3 h-3 rounded-full bg-gradient-to-r from-[#592355] to-[#8a3c86]"
            style={{ scale, opacity }}
        />
    );
}

// Helper function to extract gradient colors
function getGradientColors(gradient: string): string {
    const colors = gradient.match(/#[a-fA-F0-9]{6}/g) || [];
    return colors.join(', ');
}

export default StickyScrollShowcase;
