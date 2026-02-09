"use client";

import React from "react";
import { Tabs } from "../../../../../components/shared/ui/tabs";
import { cn } from "@/lib/utils";

export function ProjectsShowcase() {
    const tabs = [
        {
            title: "Cooperativa César Terán",
            value: "finance",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-3xl font-bold text-white bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/10 pointer-events-none" />
                    <p className="relative z-10 mb-2">Cooperativa Terán</p>
                    <VideoContent />
                </div>
            ),
        },
        {
            title: "Gym CT Tulcán",
            value: "fitness",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-3xl font-bold text-white bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-500/10 pointer-events-none" />
                    <p className="relative z-10 mb-2">Gym Tulcán</p>
                    <VideoContent />
                </div>
            ),
        },
        {
            title: "KSZ Fútbol Club",
            value: "retail",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-3xl font-bold text-white bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-emerald-500/10 pointer-events-none" />
                    <p className="relative z-10 mb-2">E-Commerce</p>
                    <VideoContent />
                </div>
            ),
        }
    ];

    return (
        <div className="h-[22rem] md:h-[34rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
            <Tabs tabs={tabs} />
        </div>
    );
}

const VideoContent = () => {
    return (
        <div className="absolute top-20 bottom-4 inset-x-0 w-[94%] rounded-xl mx-auto overflow-hidden border border-white/10 shadow-inner bg-black/40 z-20">
            <iframe
                src="https://www.youtube.com/embed/v5Tq4UY8-08"
                title="Project Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
            />
        </div>
    );
};
