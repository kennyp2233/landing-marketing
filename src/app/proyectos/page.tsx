'use client';

import React from 'react';
import { useTheme } from '../../providers/ThemeProvider';
import { Navbar, Footer } from '../../components/shared/layout';
import { ProjectsSection } from '../../components/features/home';
import { cn } from '../../lib/utils';
import { WhatsAppFAB } from '../../components/shared/ui';

export default function ProyectosPage() {
    const { isDark, toggleTheme } = useTheme();

    return (
        <div className={cn(
            'min-h-screen transition-all duration-300 bg-background text-foreground',
            isDark ? 'bg-neutral-900' : 'bg-white'
        )}>
            <Navbar
                isDark={isDark}
                onThemeToggle={toggleTheme}
            />

            <main className="pt-0">
                <ProjectsSection isDark={isDark} />
            </main>

            <Footer isDark={isDark} />

            <WhatsAppFAB
                phoneNumber="+593995498636"
                message="¡Hola! Me gustaría ver más detalles de sus proyectos."
            />
        </div>
    );
}
