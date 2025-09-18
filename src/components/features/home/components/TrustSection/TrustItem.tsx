// components/features/home/components/TrustSection/TrustItem.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { TrustItemProps } from './TrustSection.types';

const TrustItem: React.FC<TrustItemProps> = ({ icon, text, description, isDark }) => {
    return (
        <div className="flex flex-col items-center text-center h-full">
            {/* Icono */}
            <div className={cn(
                'w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden',
                isDark 
                    ? 'bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 shadow-lg' 
                    : 'bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-md',
            )}>
                <div className={cn(
                    'relative z-10',
                    isDark ? 'text-white drop-shadow-sm' : 'text-gray-800'
                )}>
                    {icon}
                </div>
                {/* Efecto de brillo sutil para modo oscuro */}
                {isDark && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-blue-400/10 rounded-2xl" />
                )}
            </div>

            {/* Contenido - flex-1 para que crezca y ocupe espacio disponible */}
            <div className="flex-1 flex flex-col justify-center space-y-4">
                <h3 className={cn(
                    'text-xl md:text-2xl lg:text-3xl font-bold leading-tight',
                    isDark ? 'text-white' : 'text-gray-900'
                )}>
                    {text}
                </h3>
                
                {description && (
                    <p className={cn(
                        'text-base md:text-lg leading-relaxed',
                        isDark ? 'text-gray-300' : 'text-gray-600'
                    )}>
                        {description}
                    </p>
                )}
            </div>

            {/* Indicador de estado - fijo en la parte inferior */}
            <div className="mt-8">
                <div className={cn(
                    'w-16 h-1.5 rounded-full bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] opacity-80 shadow-lg',
                    'group-hover:opacity-100 transition-opacity duration-300'
                )} />
            </div>
        </div>
    );
};

export default TrustItem;