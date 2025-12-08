// src/components/features/home/components/PricingSection/index.tsx
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from '../../../../../providers/ThemeProvider';
import { PricingCard } from './PricingCard';
import { PricingPlan } from './PricingSection.types';

const pricingPlans: PricingPlan[] = [
    {
        name: "Sistematización Esencial",
        tier: "Emprendedores",
        description: "Deja el Excel y automatiza procesos clave. Ideal para negocios que buscan orden y eficiencia inmediata.",
        features: [
            "Sistema de Gestión (Inventario/Ventas)",
            "Base de datos segura en la nube",
            "Reportes básicos automáticos",
            "Soporte técnico prioritario",
            "Diseño intuitivo y fácil de usar",
            "Implementación en 4 semanas"
        ],
        highlight: false
    },
    {
        name: "Transformación Total",
        tier: "Pymes en Crecimiento",
        description: "Solución integral a medida para escalar operaciones sin límites. Tu ecosistema digital completo.",
        features: [
            "Desarrollo 100% a medida de tus procesos",
            "Apps Móviles y Web integradas",
            "Integraciones con facturación y bancos",
            "Dashboard de métricas en tiempo real",
            "Seguridad avanzada y backups",
            "Mantenimiento y evolución continua",
            "Arquitectura escalable"
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
                        Inversión{' '}
                        <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent">
                            Inteligente
                        </span>
                    </h2>
                    <p className={cn(
                        'text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed',
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        Soluciones accesibles desde $500. Rentabiliza tu inversión automatizando lo que hoy te quita tiempo.
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