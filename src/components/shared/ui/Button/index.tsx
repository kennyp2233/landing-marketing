// components/shared/ui/Button/index.tsx
import React from 'react';
import { cn } from '../../../../lib/utils';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
    disabled,
    ...props
}) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        // Gradiente unificado (Naranja Light / Purple Dark Subtle)
        primary: 'bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] text-white hover:shadow-lg hover:scale-105 hover:shadow-[#8a3c86]/25',
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700',
        outline: 'border-2 border-[#592355] text-[#8a3c86] hover:text-white hover:border-transparent hover:bg-gradient-to-r hover:from-[#592355] hover:via-[#712F6D] hover:to-[#8a3c86]',
        ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const Component = (props.as || 'button') as any;

    // Si no es un botón real, no pasamos la prop disabled al DOM, pero sí aplicamos los estilos
    const { as, ...domProps } = props;
    const isDisabled = disabled || isLoading;

    return (
        <Component
            className={cn(
                baseClasses,
                variants[variant],
                sizes[size],
                isDisabled && 'opacity-50 cursor-not-allowed pointer-events-none', // Pointer events none para evitar clics si está deshabilitado visualmente
                className
            )}
            disabled={Component === 'button' ? isDisabled : undefined}
            {...domProps}
        >
            {isLoading ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : leftIcon ? (
                <span className="mr-2">{leftIcon}</span>
            ) : null}
            {children}
            {rightIcon && !isLoading && <span className="ml-2">{rightIcon}</span>}
        </Component>
    );
};

export default Button;