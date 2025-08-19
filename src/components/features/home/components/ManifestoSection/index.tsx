// components/features/home/components/ManifestoSection/index.tsx
import React from 'react';
import { Sparkles, Zap, TrendingUp } from 'lucide-react';
import { cn } from '../../../../../lib/utils';

interface ManifestoSectionProps {
    isDark: boolean;
}

const ManifestoSection: React.FC<ManifestoSectionProps> = ({ isDark }) => {
    const manifestoPoints = [
        {
            icon: <Sparkles className="w-6 h-6" />,
            text: "No estamos aquí para ayudarte a ser uno más."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            text: "Estamos aquí para ayudarte a brillar tan alto que tu competencia necesite gafas para mirarte."
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            text: "Cada paso que des con nosotros será una evolución: más audaz, más auténtico, más indestructible."
        }
    ];

    return (
        <section className={cn(
            'py-24 px-6 relative overflow-hidden',
            isDark ? 'bg-black' : 'bg-white'
        )}>
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className={cn(
                    'absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-3xl opacity-20',
                    'bg-gradient-to-r from-[#6c26f9] to-[#d507fa]'
                )} />
                <div className={cn(
                    'absolute bottom-1/4 -right-32 w-80 h-80 rounded-full blur-3xl opacity-20',
                    'bg-gradient-to-r from-[#d507fa] to-[#0586fd]'
                )} />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className={cn(
                        'text-4xl md:text-5xl lg:text-6xl font-bold mb-8',
                        isDark ? 'text-white' : 'text-gray-900'
                    )}>
                        ¿Qué significa{' '}
                        <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent">
                            GLOW UP MEDIA?
                        </span>
                    </h2>
                    
                    <div className={cn(
                        'inline-block px-8 py-4 rounded-2xl border backdrop-blur-sm mb-12',
                        isDark 
                            ? 'bg-gray-800/40 border-gray-700' 
                            : 'bg-gray-50/80 border-gray-200'
                    )}>
                        <p className={cn(
                            'text-2xl md:text-3xl font-bold',
                            isDark ? 'text-gray-200' : 'text-gray-700'
                        )}>
                            Crecer es solo el principio.
                        </p>
                    </div>
                </div>

                {/* Main Manifesto */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    {/* Left Column - Main Message */}
                    <div className="space-y-8">
                        <div className={cn(
                            'p-8 rounded-2xl border backdrop-blur-sm relative',
                            isDark 
                                ? 'bg-gray-900/60 border-gray-700' 
                                : 'bg-white/80 border-gray-200'
                        )}>
                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] rounded-t-2xl" />
                            
                            <p className={cn(
                                'text-xl md:text-2xl leading-relaxed font-medium',
                                isDark ? 'text-gray-200' : 'text-gray-700'
                            )}>
                                En <span className="font-bold bg-gradient-to-r from-[#6c26f9] to-[#d507fa] bg-clip-text text-transparent">GLOW UP MEDIA</span>, creemos que cada marca tiene un{' '}
                                <span className="font-bold text-orange-500">fuego interno</span> esperando ser desatado.
                            </p>
                        </div>

                        {/* Manifesto Points */}
                        <div className="space-y-6">
                            {manifestoPoints.map((point, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        'flex items-start space-x-4 p-6 rounded-xl transition-all duration-300 hover:scale-105',
                                        'backdrop-blur-sm border',
                                        isDark 
                                            ? 'bg-gray-800/30 border-gray-700 hover:bg-gray-800/50' 
                                            : 'bg-white/60 border-gray-200 hover:bg-white/80'
                                    )}
                                >
                                    <div className={cn(
                                        'flex-shrink-0 p-2 rounded-lg',
                                        'bg-gradient-to-r from-[#6c26f9] to-[#d507fa]'
                                    )}>
                                        <div className="text-white">
                                            {point.icon}
                                        </div>
                                    </div>
                                    <p className={cn(
                                        'text-lg leading-relaxed',
                                        isDark ? 'text-gray-300' : 'text-gray-600'
                                    )}>
                                        {point.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Call to Action */}
                    <div className="space-y-8">
                        <div className={cn(
                            'p-10 rounded-2xl border backdrop-blur-sm text-center relative overflow-hidden',
                            isDark 
                                ? 'bg-gray-900/60 border-gray-700' 
                                : 'bg-white/80 border-gray-200'
                        )}>
                            {/* Animated gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#6c26f9]/10 via-[#d507fa]/5 to-[#0586fd]/10 animate-pulse" />
                            
                            <div className="relative z-10">
                                <h3 className={cn(
                                    'text-3xl md:text-4xl font-bold mb-6',
                                    isDark ? 'text-white' : 'text-gray-900'
                                )}>
                                    No basta con existir.
                                </h3>
                                
                                <p className={cn(
                                    'text-xl leading-relaxed mb-8',
                                    isDark ? 'text-gray-300' : 'text-gray-600'
                                )}>
                                    Las marcas que cambian el mundo <span className="font-bold text-purple-500">ascienden</span>.
                                </p>
                                
                                <div className={cn(
                                    'p-6 rounded-xl border-2 border-dashed',
                                    'border-purple-400/50 bg-gradient-to-r from-[#6c26f9]/5 to-[#d507fa]/5'
                                )}>
                                    <p className={cn(
                                        'text-2xl font-bold',
                                        'bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent'
                                    )}>
                                        Y tú estás a punto de comenzar ese viaje.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManifestoSection;
