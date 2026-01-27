"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ProjectsShowcase } from './ProjectsShowcase';

interface ProjectsSectionProps {
    isDark: boolean;
}

export function ProjectsSection({ isDark }: ProjectsSectionProps) {
    return (
        <section id="casos" className={cn("py-32 relative overflow-hidden transition-colors duration-300", isDark ? "bg-black" : "bg-neutral-50")}>
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-12 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className={cn("block font-mono text-sm tracking-widest uppercase mb-4", isDark ? "text-purple-400" : "text-purple-600")}>
                            Proyectos Destacados
                        </span>
                        <h2 className={cn("text-4xl md:text-5xl font-bold mb-6", isDark ? "text-white" : "text-neutral-900")}>
                            Casos de <span className="text-blue-500">Éxito</span>
                        </h2>
                        <p className={cn("text-lg max-w-2xl mx-auto", isDark ? "text-neutral-400" : "text-neutral-600")}>
                            Descubre cómo hemos transformado negocios con soluciones tecnológicas a medida.
                        </p>
                    </motion.div>
                </div>

                <ProjectsShowcase />
            </div>
        </section>
    );
}
