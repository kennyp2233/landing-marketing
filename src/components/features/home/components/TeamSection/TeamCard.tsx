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
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
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
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        {/* Name and Role - Fixed height container for consistency */}
        <div className={cn(
          "transform transition-all duration-500 ease-out",
          isHovered ? "-translate-y-2" : "translate-y-0"
        )}>
          {/* Name - Fixed height */}
          <h3 className="text-white text-lg md:text-xl font-bold mb-1 drop-shadow-lg line-clamp-1 h-7">
            {member.name}
          </h3>
          {/* Role - Fixed height */}
          <p className="text-white/90 text-xs md:text-sm font-medium mb-3 drop-shadow-md line-clamp-1 h-5">
            {member.role}
          </p>
        </div>

        {/* Description - Enhanced Liquid Glass Effect */}
        <div className={cn(
          "transform transition-all duration-700 ease-out",
          isHovered
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0 pointer-events-none"
        )}>
          <div className={cn(
            "relative rounded-xl p-4 transition-all duration-700 ease-out overflow-hidden",
            isHovered
              ? "bg-white/[0.08] backdrop-blur-xl"
              : "bg-transparent backdrop-blur-none"
          )}>
            {/* Glass shine effect */}
            <div className={cn(
              "absolute inset-0 rounded-xl transition-opacity duration-700",
              "bg-gradient-to-br from-white/20 via-white/5 to-transparent",
              isHovered ? "opacity-100" : "opacity-0"
            )} />

            {/* Glass border */}
            <div className={cn(
              "absolute inset-0 rounded-xl transition-opacity duration-700",
              "border border-white/20",
              isHovered ? "opacity-100" : "opacity-0"
            )} />

            {/* Inner glow */}
            <div className={cn(
              "absolute inset-0 rounded-xl transition-opacity duration-700",
              "shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]",
              isHovered ? "opacity-100" : "opacity-0"
            )} />

            <p className="relative z-10 text-white/95 text-xs leading-relaxed line-clamp-4">
              {member.description}
            </p>
          </div>
        </div>
      </div>

      {/* Decorative border that appears on hover */}
      <div className={cn(
        "absolute inset-0 rounded-2xl transition-all duration-500 ease-out pointer-events-none",
        "border-2",
        isHovered
          ? "border-[#8a3c86]/60"
          : "border-transparent"
      )} />
    </div>
  );
}

export default TeamCard;