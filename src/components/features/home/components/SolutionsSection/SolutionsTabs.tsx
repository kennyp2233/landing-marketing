"use client";

import React from "react";
import { Tabs } from "../../../../../components/shared/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SolutionsTabs() {
    const tabs = [
        {
            title: "Automatización",
            value: "automation",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-cyan-900 border border-white/20">
                    <p>Automatización con n8n</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        Conecta tus aplicaciones favoritas y automatiza tareas repetitivas. Flujos de trabajo inteligentes que ahorran horas de trabajo manual cada semana.
                    </div>
                    <TabImage src="/assets/images/n8n-flow.png" alt="Automatización n8n" />
                </div>
            ),
        },
        {
            title: "Desarrollo",
            value: "development",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 border border-white/20">
                    <p>Software a la Medida</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        Desarrollo de aplicaciones web y móviles personalizadas. Soluciones escalables construidas con las últimas tecnologías del mercado.
                    </div>
                    <TabImage src="/assets/images/team-development.png" alt="Equipo de desarrollo" />
                </div>
            ),
        },
        {
            title: "Consultoría",
            value: "consulting",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-700 to-green-900 border border-white/20">
                    <p>Optimización de Procesos</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        Analizamos y digitalizamos tus operaciones comerciales. Transformamos procesos lentos en sistemas ágiles y eficientes.
                    </div>
                    <TabImage src="/assets/images/team-consulting.png" alt="Equipo de consultoría" />
                </div>
            ),
        }
    ];

    return (
        <div className="h-[25rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-12">
            <Tabs tabs={tabs} />
        </div>
    );
}

const TabImage = ({ src, alt }: { src: string; alt: string }) => {
    return (
        <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
        />
    );
};
