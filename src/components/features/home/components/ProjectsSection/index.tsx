"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ProjectsShowcase } from './ProjectsShowcase';

interface ProjectsSectionProps {
    isDark: boolean;
}

import { useLanguage } from '@/providers/LanguageProvider';

export function ProjectsSection({ isDark }: ProjectsSectionProps) {
    const { t } = useLanguage();

    return (
        <section id="casos" className={cn("min-h-screen pt-24 pb-8 relative overflow-hidden transition-colors duration-300 bg-background flex flex-col")}>

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={cn("absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20", isDark ? "bg-emerald-900" : "bg-emerald-200")} />
                <div className={cn("absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20", isDark ? "bg-cyan-900" : "bg-cyan-200")} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div className="text-center max-w-3xl mx-auto mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={cn("text-4xl md:text-5xl font-bold tracking-tight mb-6", isDark ? "text-white" : "text-neutral-900")}
                    >
                        {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={cn("text-lg", isDark ? "text-neutral-400" : "text-neutral-600")}
                    >
                        {t.projects.subtitle}
                    </motion.p>
                </div>

                <ProjectsShowcase />
            </div>
        </section>
    );
}
