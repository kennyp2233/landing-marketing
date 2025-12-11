// components/shared/layout/Footer/index.tsx
import React from 'react';
import { cn } from '../../../../lib/utils';
import { Logo } from '../../ui';

interface FooterProps {
    isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={cn(
            'py-12 px-6 border-t',
            isDark
                ? 'bg-gray-900/50 border-gray-800'
                : 'bg-gray-50/50 border-gray-200'
        )}>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo */}
                    <div className="text-center md:text-left">
                        <Logo />
                    </div>

                    {/* Tagline */}
                    <div className="text-center">
                        <p className={cn(
                            'text-base md:text-lg font-medium',
                            'bg-gradient-to-r from-[#592355] to-[#8a3c86] bg-clip-text text-transparent'
                        )}>
                            Impulsa tu marca. Eleva tu impacto.
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="text-center md:text-right">
                        <p className={cn(
                            'text-sm md:text-base',
                            isDark ? 'text-gray-400' : 'text-gray-600'
                        )}>
                            © {currentYear} KHANNDA. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
