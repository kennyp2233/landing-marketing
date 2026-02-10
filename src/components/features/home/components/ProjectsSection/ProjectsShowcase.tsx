"use client";

import React from "react";
import { Tabs } from "../../../../../components/shared/ui/tabs";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/providers/LanguageProvider";

export function ProjectsShowcase() {
    const { t } = useLanguage();

    const tabs = [
        {
            title: t.projects.showcase.finance.title,
            value: "finance",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-3xl font-bold text-white bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/10 pointer-events-none" />
                    <p className="relative z-10 mb-2">{t.projects.showcase.finance.type}</p>
                    <VideoContent />
                </div>
            ),
        },
        {
            title: t.projects.showcase.fitness.title,
            value: "fitness",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-3xl font-bold text-white bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-indigo-500/10 pointer-events-none" />
                    <p className="relative z-10 mb-2">{t.projects.showcase.fitness.type}</p>
                    <VideoContent />
                </div>
            ),
        },
        {
            title: t.projects.showcase.retail.title,
            value: "retail",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-6 text-xl md:text-3xl font-bold text-white bg-neutral-900/60 backdrop-blur-md border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-transparent to-emerald-500/10 pointer-events-none" />
                    <p className="relative z-10 mb-2">{t.projects.showcase.retail.type}</p>
                    <VideoContent />
                </div>
            ),
        }
    ];

    return (
        <div className="h-[26rem] md:h-[38rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
            <Tabs tabs={tabs} />
        </div>
    );
}

const VideoContent = () => {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <div className="absolute top-20 bottom-4 inset-x-0 w-[94%] rounded-xl mx-auto overflow-hidden border border-white/10 shadow-inner bg-black/40 z-20">
            {/* Overlay prevents iframe from capturing scroll events until user clicks */}
            {!isActive && (
                <div
                    className="absolute inset-0 z-30 cursor-pointer flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors"
                    onClick={() => setIsActive(true)}
                >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </div>
                </div>
            )}
            <iframe
                src="https://www.youtube.com/embed/v5Tq4UY8-08"
                title="Project Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="w-full h-full"
            />
        </div>
    );
};
