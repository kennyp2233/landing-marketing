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
      'min-h-screen transition-all duration-300',
      isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
    )}>
      <Navbar
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />

      <div className="pt-20">
        <HeroSection isDark={isDark} />

        {/* TrustSection eliminada para reducir redundancia */}
        <PressSection />

        <AboutSection isDark={isDark} />

        <ServicesSection />

        <PricingSection />

        <TeamSection isDark={isDark} />

        {/* Footer */}
        <Footer isDark={isDark} />
      </div>

      {/* WhatsApp FAB */}
      <WhatsAppFAB
        phoneNumber="1234567890"
        message="¡Hola! Me interesa conocer más sobre sus servicios de marketing digital."
      />
    </div>
  );
}