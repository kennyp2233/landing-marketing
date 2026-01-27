"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Database, Cloud, Terminal, Cpu, Layers, Link, ShieldCheck, Zap } from "lucide-react";

const TechDetailCard = ({ title, description, children, className, delay = 0 }: { title: string, description: string, children: React.ReactNode, className?: string, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay, duration: 0.5 }}
        className={cn(
            "group relative overflow-hidden rounded-2xl bg-[#0d1117] border border-[#30363d] p-6 hover:border-[#58a6ff] transition-colors duration-300",
            className
        )}
    >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            <h3 className="text-lg font-bold text-[#c9d1d9] mb-2 flex items-center gap-2">
                {title}
            </h3>
            <p className="text-[#8b949e] text-sm mb-6 leading-relaxed border-b border-[#30363d] pb-4">
                {description}
            </p>
            <div className="space-y-3">
                {children}
            </div>
        </div>
    </motion.div>
);

const TechItem = ({ label, value, icon: Icon }: { label: string, value: string, icon?: any }) => (
    <div className="flex items-center justify-between group/item">
        <span className="text-xs font-mono text-[#8b949e] group-hover/item:text-[#58a6ff] transition-colors">{label}</span>
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#c9d1d9]">{value}</span>
            {Icon && <Icon size={14} className="text-[#58a6ff] opacity-50 group-hover/item:opacity-100 transition-opacity" />}
        </div>
    </div>
);

export const TechDetailSection = () => {
    return (
        <div className="w-full bg-black min-h-screen relative z-20 pt-20 pb-32 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center mb-24"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#7ee787] text-xs font-mono mb-6">
                        <ShieldCheck size={12} />
                        <span>ENTERPRISE GRADE ARCHITECTURE</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Construido para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#58a6ff] to-[#a5d6ff]">Escalar</span>
                    </h2>
                    <p className="text-[#8b949e] max-w-2xl mx-auto text-lg leading-relaxed">
                        Nuestro stack tecnológico no es solo código; es una infraestructura diseñada para velocidad, seguridad y crecimiento continuo.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Frontend */}
                    <TechDetailCard
                        title="Experiencia de Usuario (Frontend)"
                        description="Interfaces ultra-rápidas y reactivas utilizando el moderno ecosistema de React."
                        delay={0}
                    >
                        <TechItem label="Framework" value="Next.js 14" icon={Code2} />
                        <TechItem label="Core" value="React 19" icon={Atom} />
                        <TechItem label="Estilos" value="Tailwind CSS" icon={Layers} />
                        <TechItem label="Motion" value="Framer Motion" icon={Zap} />
                    </TechDetailCard>

                    {/* Backend */}
                    <TechDetailCard
                        title="Motor de Procesamiento (Backend)"
                        description="Lógica de negocio robusta y APIs de alto rendimiento."
                        delay={0.1}
                    >
                        <TechItem label="Runtime" value="Node.js" icon={Terminal} />
                        <TechItem label="Database" value="PostgreSQL" icon={Database} />
                        <TechItem label="Caching" value="Redis" icon={Zap} />
                        <TechItem label="ORM" value="Prisma" icon={Link} />
                    </TechDetailCard>

                    {/* Infra */}
                    <TechDetailCard
                        title="Infraestructura & Cloud"
                        description="Despliegue global, seguro y automatizado."
                        delay={0.2}
                    >
                        <TechItem label="Cloud" value="AWS / Vercel" icon={Cloud} />
                        <TechItem label="Container" value="Docker" icon={Layers} />
                        <TechItem label="CI/CD" value="GitHub Actions" icon={Code2} />
                        <TechItem label="Security" value="WAF / SSL" icon={ShieldCheck} />
                    </TechDetailCard>
                </div>
            </div>
        </div>
    );
};

// Simple Icon wrapper for Atom since it's not in standard Lucide (using Cpu as proxy or simple svg if needed, stick to lucide imports)
const Atom = Cpu; 
