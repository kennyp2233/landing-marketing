// src/components/features/home/components/PricingSection/index.tsx
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from '../../../../../providers/ThemeProvider';
import { PricingCard } from './PricingCard';
import { PricingPlan } from './PricingSection.types';
import { ScrollReveal, ExpandableScreen, ExpandableScreenContent, CalendarBooking } from '../../../../shared/ui';
import { useLanguage } from '@/providers/LanguageProvider';
import { X } from 'lucide-react';

interface PricingSectionProps {
    isDark?: boolean;
}

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

export const PricingSection: React.FC<PricingSectionProps> = ({ isDark }) => {
    const darkMode = isDark;
    const { t } = useLanguage();
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    return (
        <>
            <section className={cn(
                "py-24 px-6 relative overflow-hidden transition-colors duration-300",
                darkMode ? "bg-neutral-950" : "bg-neutral-50"
            )}>
                {/* Background Grid */}
                <div className={cn(
                    "absolute inset-0 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]",
                    darkMode
                        ? "bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)]"
                        : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
                )} />

                <div className="max-w-7xl mx-auto relative z-10">
                    <ScrollReveal delay={0} direction="up">
                        <div className="text-center mb-16">
                            <div className={cn("inline-block px-3 py-1 mb-4 rounded-full backdrop-blur-sm border",
                                darkMode ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"
                            )}>
                                <span className={cn(
                                    "text-xs font-mono uppercase tracking-widest",
                                    darkMode ? "text-purple-300" : "text-purple-600"
                                )}>{t.pricing.badge}</span>
                            </div>
                            <h2 className={cn(
                                "text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 transition-colors",
                                darkMode ? "text-white" : "text-black"
                            )}>
                                {t.pricing.title} <span className="gradient-text font-bold">{t.pricing.titleHighlight}</span>
                            </h2>
                            <p className={cn("text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors",
                                darkMode ? "text-neutral-400" : "text-neutral-600"
                            )}>
                                {t.pricing.subtitle}
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        {/* Plan 1: Sistematización Esencial */}
                        <ScrollReveal delay={0.1} direction="right">
                            <div className={cn(
                                "relative overflow-hidden rounded-2xl border transition-all duration-300 h-full p-8 flex flex-col group",
                                darkMode
                                    ? "bg-neutral-900/40 border-white/5 hover:border-white/10 hover:bg-neutral-900/60"
                                    : "bg-white/40 border-black/5 hover:border-black/10 hover:bg-white/60"
                            )}>
                                <div className="mb-6">
                                    <h3 className={cn("text-xl font-bold mb-2 transition-colors", darkMode ? "text-white" : "text-black")}>{t.pricing.plans.essential.name}</h3>
                                    <p className={cn("text-sm h-10 transition-colors", darkMode ? "text-neutral-400" : "text-neutral-600")}>{t.pricing.plans.essential.description}</p>
                                </div>

                                <div className={cn("my-6 pt-6 border-t", darkMode ? "border-white/5" : "border-black/5")}>
                                    <div className="flex items-baseline">
                                        <span className={cn("text-3xl font-bold transition-colors", darkMode ? "text-white" : "text-black")}>{t.pricing.plans.essential.pricing}</span>
                                    </div>
                                    <p className="text-xs text-neutral-500 mt-1">{t.pricing.plans.essential.pricingNote}</p>
                                </div>

                                <ul className="space-y-4 mb-8 flex-1">
                                    {t.pricing.plans.essential.features.map((feat: string, i: number) => (
                                        <li key={i} className={cn("flex items-start text-sm transition-colors", darkMode ? "text-neutral-300" : "text-neutral-600")}>
                                            <div className="mr-3 mt-1 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setIsCalendarOpen(true)}
                                    className={cn(
                                        "w-full py-3 px-4 rounded-lg border text-sm font-medium transition-colors text-center block cursor-pointer",
                                        darkMode
                                            ? "bg-white/5 hover:bg-white/10 border-white/10 text-white"
                                            : "bg-black/5 hover:bg-black/10 border-black/10 text-black"
                                    )}
                                >
                                    {t.pricing.plans.essential.cta} →
                                </button>
                            </div>
                        </ScrollReveal>

                        {/* Plan 2: Transformación Total */}
                        <ScrollReveal delay={0.2} direction="left">
                            <div className={cn(
                                "relative overflow-hidden rounded-2xl border transition-all duration-300 h-full p-8 flex flex-col relative group",
                                darkMode
                                    ? "bg-neutral-900/40 border-purple-500/30 hover:border-purple-500/50 hover:bg-neutral-900/60"
                                    : "bg-white/60 border-purple-500/20 hover:border-purple-500/40 hover:bg-white/80"
                            )}>
                                {/* Glowing effect for premium card */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="absolute top-0 right-0 px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full">
                                        <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">{t.pricing.plans.enterprise.tier}</span>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className={cn("text-xl font-bold mb-2 transition-colors", darkMode ? "text-white" : "text-black")}>{t.pricing.plans.enterprise.name}</h3>
                                        <p className={cn("text-sm h-10 transition-colors", darkMode ? "text-neutral-400" : "text-neutral-600")}>{t.pricing.plans.enterprise.description}</p>
                                    </div>

                                    <div className={cn("my-6 pt-6 border-t", darkMode ? "border-white/5" : "border-black/5")}>
                                        <div className="flex items-baseline">
                                            <span className={cn("text-3xl font-bold transition-colors", darkMode ? "text-white" : "text-black")}>{t.pricing.plans.enterprise.pricing}</span>
                                        </div>
                                        <p className="text-xs text-neutral-500 mt-1">{t.pricing.plans.enterprise.pricingNote}</p>
                                    </div>

                                    <ul className="space-y-4 mb-8 flex-1">
                                        {t.pricing.plans.enterprise.features.map((feat: string, i: number) => (
                                            <li key={i} className={cn("flex items-start text-sm transition-colors", darkMode ? "text-neutral-300" : "text-neutral-600")}>
                                                <div className="mr-3 mt-1 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => setIsCalendarOpen(true)}
                                        className="w-full py-3 px-4 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors text-center block shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer"
                                    >
                                        {t.pricing.plans.enterprise.cta} →
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Calendar Modal */}
            <ExpandableScreen
                isDark={darkMode}
                layoutId="pricing-calendar"
                defaultExpanded={isCalendarOpen}
                onExpandChange={(expanded) => setIsCalendarOpen(expanded)}
            >
                <ExpandableScreenContent className={isCalendarOpen ? '' : 'hidden'}>
                    <CalendarBooking isDark={darkMode} />
                </ExpandableScreenContent>
            </ExpandableScreen>
        </>
    );
};

export default PricingSection;