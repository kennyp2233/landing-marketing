"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '../../../../../lib/utils';
import { TeamCardProps } from './TeamSection.types';

export function TeamCard({
  member,
  isDark = true,
  index,
  hoveredIndex,
  setHoveredIndex
}: TeamCardProps) {
  const isHovered = hoveredIndex === index;
  const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

  return (
    <div
      className={cn(
        "relative h-96 w-full rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out group",
        isOtherHovered && "blur-sm scale-[0.98]"
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Gradient Overlays */}
      <div className={cn(
        "absolute inset-0 transition-all duration-500 ease-out",
        isDark
          ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent"
          : "bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"
      )} />

      {/* Hover gradient overlay with brand colors */}
      <div className={cn(
        "absolute inset-0 transition-all duration-500 ease-out",
        "bg-gradient-to-t from-[#592355]/60 via-[#8a3c86]/20 to-transparent",
        isHovered ? "opacity-100" : "opacity-0"
      )} />

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Name and Role - Always Visible */}
        <div className={cn(
          "transform transition-all duration-500 ease-out",
          isHovered ? "translate-y-0" : "translate-y-0"
        )}>
          <h3 className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
            {member.name}
          </h3>
          <p className="text-white/90 text-sm md:text-base font-medium mb-4 drop-shadow-md">
            {member.role}
          </p>
        </div>

        {/* Description - Appears on Hover */}
        <div className={cn(
          "transform transition-all duration-700 ease-out",
          isHovered
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
        )}>
          <div className={cn(
            "rounded-lg p-4 border transition-all duration-700 ease-out",
            isHovered
              ? "bg-white/10 backdrop-blur-sm border-white/10"
              : "bg-transparent backdrop-blur-none border-transparent"
          )}>
            <p className="text-white/90 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative border that appears on hover */}
      <div className={cn(
        "absolute inset-0 rounded-2xl transition-all duration-500 ease-out",
        "border-2 border-[#592355] dark:border-[#592355] md:border-transparent md:hover:border-[#592355] md:dark:hover:border-[#8a3c86]",
        isHovered ? "border-opacity-60" : "border-opacity-0"
      )} />
    </div>
  );
}

export default TeamCard;