// src/components/features/home/components/TeamSection/index.tsx
"use client";

import React from 'react';
import { useTheme } from '../../../../../providers/ThemeProvider';
import { cn } from '../../../../../lib/utils';
import { TeamCard } from './TeamCard';
import { TeamSectionProps, TeamMember } from './TeamSection.types';

const teamMembers: TeamMember[] = [
  {
    id: 'matias',
    name: 'Matías Villarreal',
    role: 'Gestión de Relaciones',
    description: 'El puente entre tu problema y nuestra solución. Mateo se especializa en entender a fondo los dolores operativos de tu negocio para garantizar que el software que construimos sea exactamente lo que necesitas, con una empatía única en la industria.',
    image: '/team/mateo.png',
  },
  {
    id: 'jose',
    name: 'José Terán',
    role: 'Estrategia Tecnológica',
    description: 'Visionario de sistemas escalables. Victor transforma ideas abstractas en arquitecturas de software robustas. Su enfoque asegura que tu inversión tecnológica no solo funcione hoy, sino que sea la base sólida para el crecimiento futuro de tu empresa.',
    image: '/team/victor.png',
  },
  {
    id: 'kevin',
    name: 'Kevin Cano',
    role: 'Innovación y Producto',
    description: 'Diseñador de experiencias funcionales. Yandry se asegura de que la complejidad del código se traduzca en interfaces simples e intuitivas. Su obsesión es que usar nuestro software sea más fácil que usar un cuaderno.',
    image: '/team/yandry.png',
  }
];

export function TeamSection({ isDark }: TeamSectionProps) {
  const { isDark: themeIsDark } = useTheme();
  const darkMode = isDark !== undefined ? isDark : themeIsDark;
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background decorative gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-[#592355]/10 to-[#8a3c86]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-[#8a3c86]/10 to-[#592355]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
            darkMode ? 'text-white' : 'text-gray-900'
          )}>
            Nuestro{' '}
            <span className="bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86] bg-clip-text text-transparent">
              Equipo
            </span>
          </h2>
          <p className={cn(
            'text-lg md:text-xl max-w-3xl mx-auto leading-relaxed',
            darkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            Empatía, técnica y pasión por resolver problemas reales con código.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              isDark={darkMode}
              index={index}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className={cn(
            'inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm border',
            darkMode
              ? 'bg-white/5 border-white/10 text-white/80'
              : 'bg-black/5 border-black/10 text-gray-700'
          )}>
            <span className="text-sm md:text-base font-medium">
              ¿Listo para digitalizar tu negocio?{' '}
              <span className="bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86] bg-clip-text text-transparent font-semibold">
                Conversemos
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;