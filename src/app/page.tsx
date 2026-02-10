'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useTheme } from '../providers/ThemeProvider';
import { Navbar, Footer } from '../components/shared/layout';
import { HeroSection } from '../components/features/home';
import { WhatsAppFAB } from '../components/shared/ui';
import { cn } from '../lib/utils';

// Lazy load below-the-fold sections
const AboutSection = dynamic(() => import('../components/features/home/components/AboutSection').then(m => ({ default: m.default })), { ssr: false });
const ServicesSection = dynamic(() => import('../components/features/home/components/ServicesSection').then(m => ({ default: m.default })), { ssr: false });
const PricingSection = dynamic(() => import('../components/features/home/components/PricingSection').then(m => ({ default: m.default })), { ssr: false });
const TeamSection = dynamic(() => import('../components/features/home/components/TeamSection').then(m => ({ default: m.default })), { ssr: false });

export default function HomePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={cn(
      'min-h-screen transition-all duration-300 bg-background text-foreground'
    )}>
      <Navbar
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />

      <main>
        <HeroSection isDark={isDark} />

        <AboutSection isDark={isDark} />

        <ServicesSection isDark={isDark} />

        <PricingSection isDark={isDark} />

        <TeamSection isDark={isDark} />
      </main>

      <Footer isDark={isDark} />

      <WhatsAppFAB
        phoneNumber="+593995498636"
        message="¡Hola! Me interesa conocer más sobre sus servicios."
      />
    </div>
  );
}
