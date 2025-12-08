// app/page.tsx
'use client';

import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Navbar, Footer } from '../components/shared/layout';
import { HeroSection, TrustSection, PressSection, AboutSection, ServicesSection, TeamSection, PricingSection, StickyScrollShowcase } from '../components/features/home';
import { WhatsAppFAB } from '../components/shared/ui';
import { cn } from '../lib/utils';

export default function HomePage() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={cn(
      'min-h-screen transition-all duration-300',
      // Fondo completamente limpio
      isDark ? 'bg-black text-white' : 'bg-white text-gray-900'
    )}>
      {/* Navbar */}
      <Navbar
        isDark={isDark}
        onThemeToggle={toggleTheme}
      />

      {/* Main Content with padding for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <HeroSection isDark={isDark} />

        {/* Press Section */}
        <PressSection />

        {/* Trust Section */}
        <TrustSection isDark={isDark} />

        {/* About Section */}
        <AboutSection isDark={isDark} />

        {/* Services Section */}
        <ServicesSection />

        {/* Scrollytelling Showcase */}
        <StickyScrollShowcase />

        {/* Pricing Section */}
        <PricingSection />

        {/* Team Section */}
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