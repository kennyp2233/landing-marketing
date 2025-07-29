// components/features/home/components/PressSection/index.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { PressSectionProps } from './PressSection.types';

const PressSection: React.FC<PressSectionProps> = ({ isDark }) => {
    const pressLogos = [
        'WSJ Journal',
        'Forbes',
        'The Verge',
        'The Atlantic'
    ];

    return (
        <section className={cn(
            'py-12 px-6',
            isDark ? 'bg-gray-900/30' : 'bg-white'
        )}>
            <div className="max-w-6xl mx-auto">
                <p className={cn(
                    'text-center text-sm mb-8 font-medium',
                    isDark ? 'text-gray-400' : 'text-gray-500'
                )}>
                    Confían en nosotros
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                    {pressLogos.map((logo, index) => (
                        <div
                            key={index}
                            className={cn(
                                'text-center py-4 px-2 transition-opacity duration-200 hover:opacity-100',
                                isDark ? 'text-gray-400 opacity-60' : 'text-gray-400 opacity-70'
                            )}
                        >
                            <span className="text-lg font-semibold tracking-wide">
                                {logo}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PressSection;