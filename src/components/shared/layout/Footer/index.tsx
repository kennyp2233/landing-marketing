// components/shared/layout/Footer/index.tsx
import React from 'react';
import { cn } from '../../../../lib/utils';
import { Logo } from '../../ui';

interface FooterProps {
    isDark: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDark }) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={cn(
            "py-12 px-6 border-t relative overflow-hidden transition-colors duration-300",
            isDark ? "bg-neutral-950 border-white/5" : "bg-neutral-50 border-black/5"
        )}>
            {/* Background Grid */}
            <div className={cn(
                "absolute inset-0 bg-[size:24px_24px]",
                isDark
                    ? "bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)]"
                    : "bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)]"
            )} />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="md:col-span-1 space-y-4">
                        <div className="flex items-center space-x-2">
                            {/* Replicating Navbar Logo for consistency */}
                            <div className="h-8 w-auto relative">
                                <img
                                    src="/logo-khannda.png"
                                    alt="Khannda Logo"
                                    className={cn(
                                        "h-full w-auto object-contain filter transition-all",
                                        isDark ? "invert brightness-0" : "brightness-0"
                                    )}
                                />
                            </div>
                            <span className={cn(
                                "font-bold text-xl tracking-tight transition-colors",
                                isDark ? "text-white" : "text-black"
                            )}>
                                KHANNDA
                            </span>
                        </div>
                        <p className={cn("text-sm leading-relaxed transition-colors", isDark ? "text-neutral-500" : "text-neutral-600")}>
                            Arquitectura digital invisible para empresas que escalan.
                        </p>
                    </div>

                    {/* Columns */}
                    <div>
                        <h4 className={cn("font-bold mb-4 transition-colors", isDark ? "text-white" : "text-black")}>Servicios</h4>
                        <ul className={cn("space-y-2 text-sm", isDark ? "text-neutral-500" : "text-neutral-600")}>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Desarrollo a Medida</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Automatización</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Consultoría Cloud</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={cn("font-bold mb-4 transition-colors", isDark ? "text-white" : "text-black")}>Compañía</h4>
                        <ul className={cn("space-y-2 text-sm", isDark ? "text-neutral-500" : "text-neutral-600")}>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Sobre Nosotros</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Carreras</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Partners</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className={cn("font-bold mb-4 transition-colors", isDark ? "text-white" : "text-black")}>Legal</h4>
                        <ul className={cn("space-y-2 text-sm", isDark ? "text-neutral-500" : "text-neutral-600")}>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Términos de Servicio</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Privacidad</a></li>
                            <li><a href="#" className="hover:text-purple-400 transition-colors">Status</a></li>
                        </ul>
                    </div>
                </div>

                <div className={cn(
                    "border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors",
                    isDark ? "border-white/5" : "border-black/5"
                )}>
                    <p className={cn("text-sm transition-colors", isDark ? "text-neutral-600" : "text-neutral-500")}>
                        © {currentYear} KHANNDA. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span className="text-xs font-mono text-neutral-500">SYSTEM NORMAL</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
