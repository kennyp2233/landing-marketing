import React from 'react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/providers/ThemeProvider';
import { Check } from 'lucide-react';
import Button from '@/components/shared/ui/Button';
import { ExpandableScreen, ExpandableScreenTrigger, ExpandableScreenContent } from '@/components/shared/ui/ExpandableScreen';
import { CalendarBooking } from '@/components/shared/ui/CalendarBooking';
import { PricingPlan } from './PricingSection.types';

interface PricingCardProps {
    plan: PricingPlan;
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
    const { isDark } = useTheme();

    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-8 border relative z-20 flex flex-col transition-colors duration-300",
                isDark
                    ? "bg-neutral-950 border-white/20 hover:border-white/40"
                    : "bg-white border-black/10 hover:border-black/20",
                plan.highlight && (isDark ? "border-white" : "border-black")
            )}
        >
            {/* Minimalist header for highlighted plan */}
            {plan.highlight && (
                <div className={cn(
                    "absolute top-0 right-0 px-3 py-1 text-[10px] uppercase tracking-widest font-medium border-l border-b",
                    isDark ? "bg-white text-black border-white" : "bg-black text-white border-black"
                )}>
                    Popular
                </div>
            )}
            <div className="relative z-50 flex-1 flex flex-col">
                <div className="flex-1 flex flex-col">
                    {/* Tier - Always at the top */}
                    <div>
                        <span className={cn(
                            "text-xs font-mono uppercase tracking-widest mb-2 inline-block",
                            isDark ? "text-neutral-400" : "text-neutral-500"
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
                                    isDark ? "text-white" : "text-black"
                                )} />
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8">
                        <ExpandableScreen isDark={isDark}>
                            <ExpandableScreenTrigger className="w-full">
                                <Button
                                    variant="primary"
                                    size="md"
                                    className={cn(
                                        "w-full border transition-colors",
                                        isDark
                                            ? "bg-none bg-white text-black hover:bg-neutral-200 border-white"
                                            : "bg-none bg-black text-white hover:bg-neutral-800 border-black"
                                    )}
                                >
                                    Comenzar Ahora
                                </Button>
                            </ExpandableScreenTrigger>
                            <ExpandableScreenContent>
                                <CalendarBooking isDark={isDark} />
                            </ExpandableScreenContent>
                        </ExpandableScreen>
                    </div>
                </div>
            </div>
        </div>
    );
};