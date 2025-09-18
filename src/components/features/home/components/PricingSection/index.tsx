import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from '../../../../../providers/ThemeProvider';
import { PricingCard } from './PricingCard';
import { PricingPlan } from './PricingSection.types';

const pricingPlans: PricingPlan[] = [
    {
        name: "Plan Gold",
        tier: "Intermedio",
        description: "Perfecto para empresas que buscan una presencia digital sólida y resultados consistentes",
        features: [
            "12 publicaciones mensuales para Instagram y Facebook",
            "8 videos editados para Reels/TikTok (educativos, tendencias, testimoniales)",
            "Pauta publicitaria con 8 anuncios configurados",
            "Plan editorial estratégico",
            "Desarrollo conjunto de contenido",
            "Monitoreo y configuración de audiencias"
        ],
        highlight: false
    },
    {
        name: "Plan Diamond",
        tier: "Empresarial",
        description: "La solución completa para marcas que buscan dominar el mercado digital",
        features: [
            "18 publicaciones mensuales de diseño profesional",
            "10 videos premium con producción de alto nivel",
            "Pauta publicitaria con 10 anuncios optimizados",
            "Plan de contenidos estratégico a 6 meses",
            "Sesiones fotográficas incluidas",
            "Consultoría completa de contenido visual",
            "Análisis avanzado y reportes semanales",
            "Optimización continua de campañas"
        ],
        highlight: true
    }
];

export const PricingSection: React.FC = () => {
    const { isDark } = useTheme();
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={cn(
                        'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
                        isDark ? 'text-white' : 'text-gray-900'
                    )}>
                        Nuestros{' '}
                        <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent">
                            Planes
                        </span>
                    </h2>
                    <p className={cn(
                        'text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed',
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        Elige el plan perfecto para impulsar tu presencia digital con soluciones completas
                    </p>
                </div>
                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {pricingPlans.map((plan, idx) => (
                        <div
                            key={plan.name}
                            className="relative group block p-2 h-full w-full"
                            onMouseEnter={() => setHoveredIndex(idx)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <AnimatePresence>
                                {hoveredIndex === idx && (
                                    <motion.span
                                        className={cn(
                                            "absolute inset-0 h-full w-full block rounded-3xl",
                                            isDark ? "bg-slate-800/[0.8]" : "bg-neutral-200"
                                        )}
                                        layoutId="hoverBackground"
                                        initial={{ opacity: 0 }}
                                        animate={{
                                            opacity: 1,
                                            transition: { duration: 0.15 },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.15, delay: 0.2 },
                                        }}
                                    />
                                )}
                            </AnimatePresence>
                            <PricingCard plan={plan} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;