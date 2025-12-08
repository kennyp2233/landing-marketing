
// components/features/home/components/TrustSection/index.tsx
import React from 'react';
import { BackgroundGradient } from '@/components/shared/ui/BackgroundGradient';
import { cn } from '@/lib/utils';
import TrustItem from './TrustItem';
import { TrustSectionProps } from './TrustSection.types';
import { Landmark, Dumbbell, Code } from 'lucide-react';

const TrustSection: React.FC<TrustSectionProps> = ({ isDark }) => {
    const trustItems = [
        {
            icon: <Landmark size={24} />, // Importar Landmark de lucide-react
            text: 'Sector Financiero',
            description: 'Modernización digital para Cooperativa de Ahorro y Crédito. Banca en línea segura y eficiente.'
        },
        {
            icon: <Dumbbell size={24} />, // Importar Dumbbell de lucide-react
            text: 'Sector Wellness',
            description: 'Sistema integral para Gimnasio: Control de accesos, pagos recurrentes y app para usuarios.'
        },
        {
            icon: <Code size={24} />, // Importar Code de lucide-react
            text: 'Tu Empresa',
            description: '¿Tienes un proceso complejo? Nosotros construimos la solución para simplificarlo.'
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