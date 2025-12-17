import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/ThemeProvider';
import { Check } from 'lucide-react';
import Button from '@/components/shared/ui/Button';
import { PricingPlan } from './PricingSection.types';

interface PricingCardProps {
    plan: PricingPlan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
    const { isDark } = useTheme();

    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-4 overflow-hidden border relative z-20 flex flex-col transition-all duration-300",
                isDark
                    ? "bg-gray-900/80 border-white/[0.05] group-hover:border-slate-600"
                    : "bg-white border-purple-100/80 hover:border-purple-200 hover:shadow-xl shadow-md",
                plan.highlight && (isDark ? "ring-2 ring-purple-500/50" : "ring-1 ring-purple-400/30")
            )}
        >
            {plan.highlight && (
                <div className={cn(
                    "absolute -top-3 left-1/2 transform -translate-x-1/2 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg",
                    "bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86]"
                )}>
                    Más Popular
                </div>
            )}
            <div className="relative z-50 flex-1 flex flex-col">
                <div className="p-4 flex-1 flex flex-col">
                    {/* Tier - Always at the top */}
                    <div>
                        <span className={cn(
                            "text-sm font-semibold mb-3 inline-block",
                            plan.highlight
                                ? cn("px-3 py-1 rounded-full text-white", "bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86]")
                                : cn("uppercase tracking-wider py-1 font-bold bg-clip-text text-transparent bg-gradient-to-r", "from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86]")
                        )}>
                            {plan.tier}
                        </span>
                    </div>

                    <h4 className={cn(
                        "font-bold tracking-wide text-2xl mb-4 h-[64px] flex items-center", // Fixed height for title alignment
                        isDark ? "text-zinc-100" : "text-gray-900"
                    )}>
                        {plan.name}
                    </h4>

                    <p className={cn(
                        "tracking-wide leading-relaxed text-sm min-h-[80px]", // Min height for description alignment
                        isDark ? "text-zinc-400" : "text-gray-700"
                    )}>
                        {plan.description}
                    </p>

                    <ul className="mt-6 space-y-3 flex-1">
                        {plan.features.map((feature, index) => (
                            <li key={index} className={cn(
                                "flex items-start text-sm",
                                isDark ? "text-zinc-300" : "text-gray-800"
                            )}>
                                <Check className={cn(
                                    "w-4 h-4 mr-3 flex-shrink-0 mt-0.5",
                                    isDark ? "text-[#8a3c86]" : "text-[#592355]"
                                )} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8">
                        <Button variant="primary" size="md" className="w-full">
                            Comenzar Ahora
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};