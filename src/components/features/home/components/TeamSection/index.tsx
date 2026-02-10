// src/components/features/home/components/TeamSection/index.tsx
"use client";

import React from 'react';
import { useTheme } from '../../../../../providers/ThemeProvider';
import { cn } from '../../../../../lib/utils';
import { TeamCard } from './TeamCard';
import { TeamSectionProps, TeamMember } from './TeamSection.types';
import { useLanguage } from '@/providers/LanguageProvider';

export function TeamSection({ isDark }: TeamSectionProps) {
  const darkMode = isDark;
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const { t } = useLanguage();

  const teamMembers: TeamMember[] = [
    {
      id: 'matias',
      name: 'Matías Villarreal',
      role: t.team.members.matias.role,
      description: t.team.members.matias.description,
      image: '/team/Mati.jpg',
    },
    {
      id: 'jose',
      name: 'José Terán',
      role: t.team.members.jose.role,
      description: t.team.members.jose.description,
      image: '/team/Pepe.jpeg',
    },
    {
      id: 'kevin',
      name: 'Kevin Cano',
      role: t.team.members.kevin.role,
      description: t.team.members.kevin.description,
      image: '/logo-khannda.png',
    },
    {
      id: 'kenny',
      name: 'Kenny Pinchao',
      role: t.team.members.kenny.role,
      description: t.team.members.kenny.description,
      image: '/logo-khannda.png',
    }
  ];

  return (
    <section className={cn(
      "py-16 px-6 relative overflow-hidden transition-colors duration-300",
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

          <h2 className={cn(
            'text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6 transition-colors',
            darkMode ? 'text-white' : 'text-black'
          )}>
            {t.team.title} <span className="gradient-text font-bold">{t.team.titleHighlight}</span>
          </h2>
          <p className={cn("text-lg max-w-2xl mx-auto font-light leading-relaxed transition-colors", darkMode ? "text-neutral-400" : "text-neutral-600")}>
            {t.team.subtitle}
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
              {t.team.cta.question}{' '}
              <span className="bg-gradient-to-r from-[#592355] via-[#712F6D] to-[#8a3c86] dark:from-[#592355] dark:via-[#712F6D] dark:to-[#8a3c86] bg-clip-text text-transparent font-semibold">
                {t.team.cta.action}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;