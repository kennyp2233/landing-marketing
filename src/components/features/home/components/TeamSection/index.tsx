"use client";

import React from 'react';
import { useTheme } from '../../../../../providers/ThemeProvider';
import { cn } from '../../../../../lib/utils';
import { TeamCard } from './TeamCard';
import { TeamSectionProps, TeamMember } from './TeamSection.types';

const teamMembers: TeamMember[] = [
  {
    id: 'mateo',
    name: 'Mateo Izquierdo',
    role: 'Especialista en Relaciones',
    description: 'Experto en relaciones y comunicación empática. Mateo crea puentes entre marcas y audiencias. Su intuición y carisma generan vínculos reales que multiplican el impacto de cada mensaje.',
    image: '/team/mateo.png',
  },
  {
    id: 'victor',
    name: 'Victor Viteri',
    role: 'Estratega Digital',
    description: 'Maestro del pensamiento estratégico y la visión a largo plazo. Victor transforma ideas en rutas claras hacia el éxito. Su liderazgo impulsa marcas con propósito, combinando análisis, creatividad y dirección firme.',
    image: '/team/victor.png',
  },
  {
    id: 'yandry',
    name: 'Yandry Ninahualpa',
    role: 'Director Creativo',
    description: 'Diseñador de conceptos que marcan. Yandry domina el arte de la narrativa visual y emocional. Su enfoque disruptivo da vida a campañas que no solo se ven bien, sino que dejan huella.',
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
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-[#6c26f9]/10 to-[#d507fa]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-[#d507fa]/10 to-[#0586fd]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={cn(
            'text-3xl md:text-4xl lg:text-5xl font-bold mb-6',
            darkMode ? 'text-white' : 'text-gray-900'
          )}>
            Nuestro{' '}
            <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent">
              Equipo
            </span>
          </h2>
          <p className={cn(
            'text-lg md:text-xl max-w-3xl mx-auto leading-relaxed',
            darkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            Conoce a los talentosos profesionales que hacen posible el éxito de tu marca
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
              ¿Listo para trabajar con nosotros?{' '}
              <span className="bg-gradient-to-r from-[#6c26f9] via-[#d507fa] to-[#0586fd] bg-clip-text text-transparent font-semibold">
                Contáctanos
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;