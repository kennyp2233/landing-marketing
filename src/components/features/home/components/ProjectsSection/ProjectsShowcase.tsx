"use client";

import React from "react";
import { Tabs } from "../../../../../components/shared/ui/tabs";
import { cn } from "@/lib/utils";

export function ProjectsShowcase() {
    const tabs = [
        {
            title: "Cooperativa Terán",
            value: "finance",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-900 to-slate-900 border border-white/20">
                    <p>Cooperativa Digital</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        Plataforma integral para gestión financiera. Módulos de contabilidad, gestión de socios y banca en línea.
                    </div>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Gym Tulcán",
            value: "fitness",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-indigo-900 to-purple-900 border border-white/20">
                    <p>Gym Master Pro</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        Software de gestión para gimnasios. Control de acceso, membresías, facturación y seguimiento de clientes.
                    </div>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "E-Commerce",
            value: "retail",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-900 to-teal-900 border border-white/20">
                    <p>Retail & E-Commerce</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        Soluciones de comercio electrónico escalables con integración de pagos y gestión de inventario en tiempo real.
                    </div>
                    <DummyContent />
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

const DummyContent = () => {
    return (
        <div className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <p className="text-white/50 text-basic font-medium">Video Demo Placeholder</p>
        </div>
    );
};
