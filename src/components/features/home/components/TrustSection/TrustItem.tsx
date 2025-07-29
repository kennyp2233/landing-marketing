// components/features/home/components/TrustSection/TrustItem.tsx
import React from 'react';
import { cn } from '../../../../../lib/utils';
import { TrustItemProps } from './TrustSection.types';

const TrustItem: React.FC<TrustItemProps> = ({ icon, text, isDark }) => {
    return (
        <div className="flex flex-col items-center text-center space-y-3">
            <div className={cn(
                'w-12 h-12 rounded-full flex items-center justify-center',
                isDark
                    ? 'bg-gradient-to-br from-purple-500/20 to-blue-500/20 text-purple-400'
                    : 'bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600'
            )}>
                {icon}
            </div>
            <p className={cn(
                'text-sm font-medium',
                isDark ? 'text-gray-300' : 'text-gray-600'
            )}>
                {text}
            </p>
        </div>
    );
};

export default TrustItem;