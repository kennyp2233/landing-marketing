import React from 'react';
import Image from 'next/image';
import { cn } from '../../../../lib/utils';
import { LogoProps } from './Logo.types';

// Tamaños predefinidos para el logo
const sizeClasses = {
    sm: { container: 'w-6 h-6', text: 'text-base' },
    md: { container: 'w-8 h-8', text: 'text-xl' },
    lg: { container: 'w-12 h-12', text: 'text-2xl' },
};

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className }) => {
    const currentSize = sizeClasses[size];
    
    return (
        <div className={cn('flex items-center gap-2', className)}>
            {/* Isotipo K de Khannda */}
            <div className={cn('relative flex items-center justify-center', currentSize.container)}>
                <Image 
                    src="/logo-khannda.png"
                    alt="Khannda Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                />
            </div>

            {showText && (
                <div className="flex flex-col">
                    <span className={cn('font-bold tracking-wide text-white', currentSize.text)}>
                        KHANNDA
                    </span>
                </div>
            )}
        </div>
    );
};

export default Logo;