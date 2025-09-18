// components/shared/ui/Logo/index.tsx
import React from 'react';
import { cn } from '../../../../lib/utils';
import { LogoProps } from './Logo.types';

const Logo: React.FC<LogoProps> = ({
    size = 'md',
    showText = true,
    className
}) => {
    const sizes = {
        sm: { container: 'w-8 h-8', text: 'text-base' },
        md: { container: 'w-10 h-10', text: 'text-lg' },
        lg: { container: 'w-12 h-12', text: 'text-xl' },
    };

    return (
        <div className={cn('flex items-center space-x-2', className)}>
            {/* Logo Icon */}
            <div className={cn(
                'relative rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 flex items-center justify-center',
                sizes[size].container
            )}>
                <span className={cn(
                    'font-bold text-white',
                    sizes[size].text
                )}>
                    GU
                </span>
            </div>

            {/* Logo Text */}
            {showText && (
                <div className="flex flex-col">
                    <span className="font-bold text-lg md:text-xl leading-tight">GlowUp</span>
                    <span className="text-sm md:text-base text-gray-500 leading-tight">Media</span>
                </div>
            )}
        </div>
    );
};

export default Logo;