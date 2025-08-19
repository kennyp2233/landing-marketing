// components/features/home/components/PressSection/index.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { PressSectionProps } from './PressSection.types';

const PressSection: React.FC<PressSectionProps> = ({ isDark }) => {
    const pressLogos = [
        'TechCrunch',
        'Marketing Land',
        'Social Media Today',
        'Digital Marketing'
    ];

    return (
        <section className={cn(
            'py-20 px-6 relative overflow-hidden',
            isDark ? 'bg-gray-900/30' : 'bg-gray-50/30'
        )}>
            {/* Gradient accent line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] rounded-full" />
            
            <div className="max-w-6xl mx-auto">
                {/* Header with enhanced styling */}
                <div className="text-center mb-12">
                    <p className={cn(
                        'text-sm font-medium mb-2 tracking-wide uppercase',
                        isDark ? 'text-gray-400' : 'text-gray-500'
                    )}>
                        Confían en nosotros
                    </p>
                    <div className={cn(
                        'inline-block px-4 py-2 rounded-full border',
                        isDark 
                            ? 'bg-gray-800/50 border-gray-700 text-gray-300' 
                            : 'bg-white/80 border-gray-200 text-gray-600'
                    )}>
                        <span className="text-sm font-medium">
                            Empresas líderes que impulsan su crecimiento con nosotros
                        </span>
                    </div>
                </div>

                {/* Logo grid with enhanced cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {pressLogos.map((logo, index) => (
                        <div
                            key={index}
                            className={cn(
                                'group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-lg',
                                'backdrop-blur-sm cursor-pointer',
                                isDark 
                                    ? 'bg-gray-800/40 border-gray-700 hover:border-purple-500/50 hover:shadow-purple-500/10' 
                                    : 'bg-white/60 border-gray-200 hover:border-purple-300 hover:shadow-purple-100'
                            )}
                        >
                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#6c26f9]/5 via-[#d507fa]/5 to-[#0586fd]/5" />
                            
                            <div className="relative text-center">
                                <span className={cn(
                                    'text-lg font-bold tracking-wide transition-all duration-300',
                                    isDark 
                                        ? 'text-gray-300 group-hover:text-white' 
                                        : 'text-gray-600 group-hover:text-gray-900'
                                )}>
                                    {logo}
                                </span>
                                
                                {/* Animated underline */}
                                <div className="mt-2 h-0.5 w-0 group-hover:w-full transition-all duration-300 bg-gradient-to-r from-[#6c26f9] to-[#d507fa] mx-auto" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative element */}
                <div className="flex justify-center mt-12">
                    <div className={cn(
                        'flex items-center space-x-2 px-4 py-2 rounded-full',
                        isDark ? 'bg-gray-800/30' : 'bg-white/50'
                    )}>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#6c26f9] to-[#d507fa]" />
                        <span className={cn(
                            'text-xs font-medium',
                            isDark ? 'text-gray-400' : 'text-gray-500'
                        )}>
                            Y muchas más...
                        </span>
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#d507fa] to-[#0586fd]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PressSection;