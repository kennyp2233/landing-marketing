// app/page.tsx
'use client';

import React from 'react';
import { useTheme } from '../providers/ThemeProvider';
import { Navbar } from '../components/shared/layout';
import { HeroSection, TrustSection, PressSection } from '../components/features/home';
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

      {/* Hero Section */}
      <HeroSection isDark={isDark} />

      {/* Trust Section */}
      <TrustSection isDark={isDark} />

      {/* Press Section */}
      <PressSection isDark={isDark} />
    </div>
  );
}