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
    description: 'El puente entre tu problema y nuestra solución. Matías se especializa en entender a fondo los dolores operativos de tu negocio para garantizar que el software que construimos sea exactamente lo que necesitas, con una empatía única en la industria.',
    image: '/team/Mati.png',
  },
  {
    id: 'jose',
    name: 'José Terán',
    role: 'Estrategia Tecnológica',
    description: 'Visionario de sistemas escalables. José transforma ideas abstractas en arquitecturas de software robustas. Su enfoque asegura que tu inversión tecnológica no solo funcione hoy, sino que sea la base sólida para el crecimiento futuro de tu empresa.',
    image: '/team/Pepe.jpeg',
  },
  {
    id: 'kevin',
    name: 'Kevin Cano',
    role: 'Innovación y Producto',
    description: 'Diseñador de experiencias funcionales. Yandry se asegura de que la complejidad del código se traduzca en interfaces simples e intuitivas. Su obsesión es que usar nuestro software sea más fácil que usar un cuaderno.',
    image: '/team/logo-khannda.png',
  }
];

export function TeamSection({ isDark }: TeamSectionProps) {
  // Use prop or context, but prop is passed from page
  const darkMode = isDark;
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section className={cn(
      "py-24 px-6 relative overflow-hidden transition-colors duration-300",
      darkMode ? "bg-neutral-950" : "bg-neutral-50"
    )}>
      {/* Background Grid */}
      <div className={cn(
        "absolute inset-0 bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]",
        darkMode
          ? "bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
      )} />

      {/* Background decorative gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-purple-900/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto relative relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={cn("inline-block px-3 py-1 mb-4 rounded-full backdrop-blur-sm border",
            darkMode ? "bg-white/5 border-white/5" : "bg-black/5 border-black/5"
          )}>
            <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">Leadership</span>
          </div>
          <h2 className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 transition-colors',
            darkMode ? 'text-white' : 'text-black'
          )}>
            Nuestro <span className="gradient-text font-bold">Equipo</span>
          </h2>
          <p className={cn("text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors", darkMode ? "text-neutral-400" : "text-neutral-600")}>
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
            'inline-flex items-center px-6 py-3 rounded-full backdrop-blur-sm border transition-colors',
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