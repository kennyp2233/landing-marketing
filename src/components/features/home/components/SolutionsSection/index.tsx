"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Zap } from 'lucide-react';
import { SolutionsCards } from './SolutionsCards';

interface SolutionsSectionProps {
    isDark: boolean;
}



export function SolutionsSection({ isDark }: SolutionsSectionProps) {
    return (
        <section id="servicios" className={cn("py-32 relative overflow-hidden transition-colors duration-300", isDark ? "bg-neutral-950" : "bg-neutral-50")}>

            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className={cn("absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-20", isDark ? "bg-purple-900" : "bg-purple-200")} />
                <div className={cn("absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-20", isDark ? "bg-blue-900" : "bg-blue-200")} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={cn(
                            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium mb-6 border",
                            isDark ? "bg-white/5 border-white/10 text-purple-300" : "bg-purple-50 border-purple-100 text-purple-700"
                        )}
                    >
                        <Zap size={14} />
                        <span className="tracking-widest uppercase">Soluciones Integrales</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className={cn("text-4xl md:text-5xl font-bold tracking-tight mb-6", isDark ? "text-white" : "text-neutral-900")}
                    >
                        Tecnología que <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">Impulsa</span> tu Negocio
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className={cn("text-lg", isDark ? "text-neutral-400" : "text-neutral-600")}
                    >
                        Desde la automatización de flujos complejos hasta el desarrollo de plataformas robustas. Creamos el ecosistema digital que tu empresa necesita.
                    </motion.p>
                </div>

                <SolutionsCards />
            </div>
        </section>
    );
}
