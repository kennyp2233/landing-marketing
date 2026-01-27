'use client';

import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { Navbar, Footer } from '../../components/shared/layout';
import { TechnologiesSection } from '../../components/features/home';
import { cn } from '../../lib/utils';
import { WhatsAppFAB } from '../../components/shared/ui';

export default function TecnologiaPage() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className={cn(
            'min-h-screen transition-all duration-300 bg-background text-foreground',
            isDark ? 'bg-black' : 'bg-neutral-50'
        )}>
            <Navbar
                isDark={isDark}
                onThemeToggle={toggleTheme}
            />

            <main className="pt-0">
                <TechnologiesSection isDark={isDark} />
            </main>

            <Footer isDark={isDark} />

            <WhatsAppFAB
                phoneNumber="+593995498636"
                message="¡Hola! Quisiera saber más sobre su stack tecnológico."
            />
        </div>
    );
}
