'use client';

import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Navbar, Footer } from '../components/shared/layout';
import { HeroSection, PressSection, AboutSection, ServicesSection, TeamSection, PricingSection } from '../components/features/home';
import { WhatsAppFAB } from '../components/shared/ui';
import { cn } from '../lib/utils';

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

      <div className="">
        <HeroSection isDark={isDark} />

        {/* TrustSection eliminada para reducir redundancia */}
        {/* TrustSection eliminada para reducir redundancia */}
        <PressSection isDark={isDark} />

        <AboutSection isDark={isDark} />

        <ServicesSection isDark={isDark} />

        <PricingSection isDark={isDark} />

        <TeamSection isDark={isDark} />

        {/* Footer */}
        <Footer isDark={isDark} />
      </div>

      {/* WhatsApp FAB */}
      <WhatsAppFAB
        phoneNumber="+593995498636"
        message="¡Hola! Me interesa conocer más sobre sus servicios."
      />
    </div>
  );
}