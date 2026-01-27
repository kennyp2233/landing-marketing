"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MacbookShowcase } from './MacbookShowcase';
import { TechDetailSection } from './TechDetailSection';

interface TechnologiesSectionProps {
    isDark: boolean;
}



export function TechnologiesSection({ isDark }: TechnologiesSectionProps) {
    return (
        <section id="tecnologia" className={cn("relative overflow-hidden transition-colors duration-300", isDark ? "bg-black" : "bg-neutral-50")}>
            <div className="w-full">
                <MacbookShowcase />
                <div className="-mt-[50vh] relative z-10">
                    <TechDetailSection />
                </div>
            </div>
        </section>
    );
}

export * from './MacbookShowcase';
