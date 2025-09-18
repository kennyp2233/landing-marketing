import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '../../../../../providers/ThemeProvider';
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
                "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                plan.highlight && "ring-2 ring-purple-500/50"
            )}
        >
            {plan.highlight && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
                    Más Popular
                </div>
            )}
            <div className="relative z-50">
                <div className="p-4">
                    {plan.highlight && (
                        <span className="text-sm font-semibold px-3 py-1 rounded-full bg-purple-600 text-white mb-4 inline-block">
                            {plan.tier}
                        </span>
                    )}

                    <h4 className="text-zinc-100 font-bold tracking-wide mt-4 text-xl">
                        {plan.name}
                        {!plan.highlight && (
                            <span className="block text-sm text-zinc-400 mt-1">{plan.tier}</span>
                        )}
                    </h4>

                    <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                        {plan.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                        {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-sm text-zinc-300">
                                <Check className="w-4 h-4 text-purple-500 mr-3 flex-shrink-0" />
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