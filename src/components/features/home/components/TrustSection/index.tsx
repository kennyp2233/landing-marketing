
// components/features/home/components/TrustSection/index.tsx
import React from 'react';
import { Calendar, Puzzle, Smile } from 'lucide-react';
import { cn } from '../../../../../lib/utils';
import TrustItem from './TrustItem';
import { TrustSectionProps } from './TrustSection.types';

const TrustSection: React.FC<TrustSectionProps> = ({ isDark }) => {
    const trustItems = [
        {
            icon: <Calendar size={24} />,
            text: 'Resultados desde 30 días'
        },
        {
            icon: <Puzzle size={24} />,
            text: 'Estrategias personalizadas'
        },
        {
            icon: <Smile size={24} />,
            text: 'Clientes 100% satisfechos'
        }
    ];

    return (
        <section className={cn(
            'py-16 px-6 border-t border-b',
            isDark
                ? 'bg-gray-900/50 border-gray-800'
                : 'bg-gray-50/50 border-gray-200'
        )}>
            <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trustItems.map((item, index) => (
                        <TrustItem
                            key={index}
                            icon={item.icon}
                            text={item.text}
                            isDark={isDark}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustSection;