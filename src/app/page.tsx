// app/page.tsx
'use client';

import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Navbar, Footer } from '../components/shared/layout';
import { HeroSection, TrustSection, PressSection, AboutSection, ServicesSection, ManifestoSection, CTASection } from '../components/features/home';
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

        {/* Trust Section */}
        <TrustSection isDark={isDark} />

        {/* About Section */}
        <AboutSection isDark={isDark} />

        {/* Services Section */}
        <ServicesSection isDark={isDark} />

        {/* Press Section */}
        <PressSection isDark={isDark} />

        {/* Manifesto Section */}
        <ManifestoSection isDark={isDark} />

        {/* CTA Section */}
        <CTASection isDark={isDark} />

        {/* Footer */}
        <Footer isDark={isDark} />
      </div>
    </div>
  );
}