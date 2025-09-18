
// components/features/home/components/TrustSection/index.tsx
import React from 'react';
import { Calendar, Puzzle, Smile } from 'lucide-react';
import { cn } from '../../../../../lib/utils';
import { BackgroundGradient } from '@/components/shared/ui/BackgroundGradient';
import TrustItem from './TrustItem';
import { TrustSectionProps } from './TrustSection.types';

const TrustSection: React.FC<TrustSectionProps> = ({ isDark }) => {
    const trustItems = [
        {
            icon: <Calendar size={24} />,
            text: 'Estrategias desde el día 1',
            description: 'Planificación estratégica desde el primer momento'
        },
        {
            icon: <Puzzle size={24} />,
            text: 'Soluciones innovadoras',
            description: 'Creatividad y tecnología al servicio de tu marca'
        },
        {
            icon: <Smile size={24} />,
            text: 'Marcas que brillan',
            description: 'Resultados que hacen la diferencia'
        }
    ];

    return (
        <section className={cn(
            'py-24 px-6 relative overflow-hidden',
        )}>
            {/* Gradiente de fondo sutil */}

            <div className="max-w-6xl mx-auto relative">
                {/* Título de sección */}
                <div className="text-center mb-16">
                    <h2 className={cn(
                        'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
                        isDark ? 'text-white' : 'text-gray-900'
                    )}>
                        Tu Éxito, Nuestra Pasión
                    </h2>
                    <p className={cn(
                        'text-base md:text-lg max-w-2xl mx-auto',
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        Impulsamos tu marca con estrategias que transforman visiones en realidades extraordinarias
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {trustItems.map((item, index) => (
                        <BackgroundGradient
                            key={index}
                            className={cn(
                                'rounded-[22px] p-10 h-full group',
                                isDark
                                    ? 'bg-gray-900/90 backdrop-blur-xl border border-gray-700/30 shadow-2xl'
                                    : 'bg-white/90 backdrop-blur-xl border border-gray-200/50 shadow-xl'
                            )}
                            containerClassName="h-full"
                        >
                            <TrustItem
                                icon={item.icon}
                                text={item.text}
                                description={item.description}
                                isDark={isDark}
                            />
                        </BackgroundGradient>
                    ))}
                </div>

                {/* Elementos decorativos */}
                <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-2xl" />
            </div>
        </section>
    );
};

export default TrustSection;