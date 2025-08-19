// components/features/home/components/TrustSection/TrustItem.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { TrustItemProps } from './TrustSection.types';

const TrustItem: React.FC<TrustItemProps> = ({ icon, text, description, isDark }) => {
    return (
        <div className="flex flex-col items-center text-center h-full">
            {/* Icono */}
            <div className={cn(
                'w-16 h-16 rounded-2xl flex items-center justify-center mb-6',
                isDark ? 'bg-gray-800/60 border border-gray-700/50' : 'bg-gray-100 border border-gray-200',
            )}>
                <div className={cn(
                    isDark ? 'text-white' : 'text-gray-800'
                )}>
                    {icon}
                </div>
            </div>

            {/* Contenido - flex-1 para que crezca y ocupe espacio disponible */}
            <div className="flex-1 flex flex-col justify-center space-y-3">
                <h3 className={cn(
                    'text-lg font-semibold',
                    isDark ? 'text-white' : 'text-gray-900'
                )}>
                    {text}
                </h3>
                
                {description && (
                    <p className={cn(
                        'text-sm leading-relaxed',
                        isDark ? 'text-gray-400' : 'text-gray-600'
                    )}>
                        {description}
                    </p>
                )}
            </div>

            {/* Indicador de estado - fijo en la parte inferior */}
            <div className="mt-6">
                <div className={cn(
                    'w-12 h-1 rounded-full bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] opacity-60'
                )} />
            </div>
        </div>
    );
};

export default TrustItem;