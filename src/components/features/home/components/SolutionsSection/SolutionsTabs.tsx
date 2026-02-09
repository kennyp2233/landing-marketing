"use client";

import React from "react";
import { Tabs } from "../../../../../components/shared/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useLanguage } from "@/providers/LanguageProvider";

export function SolutionsTabs() {
    const { t } = useLanguage();

    const tabs = [
        {
            title: t.solutions.topics.automation.title,
            value: "automation",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-cyan-900 border border-white/20">
                    <p>{t.solutions.topics.automation.cardTitle}</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        {t.solutions.topics.automation.description}
                    </div>
                    <TabImage src="/assets/images/n8n-flow.png" alt={t.solutions.topics.automation.cardTitle} />
                </div>
            ),
        },
        {
            title: t.solutions.topics.development.title,
            value: "development",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900 border border-white/20">
                    <p>{t.solutions.topics.development.cardTitle}</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        {t.solutions.topics.development.description}
                    </div>
                    <TabImage src="/assets/images/team-development.png" alt={t.solutions.topics.development.cardTitle} />
                </div>
            ),
        },
        {
            title: t.solutions.topics.consulting.title,
            value: "consulting",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-700 to-green-900 border border-white/20">
                    <p>{t.solutions.topics.consulting.cardTitle}</p>
                    <div className="mt-4 text-base md:text-lg font-normal text-neutral-200/80 max-w-lg">
                        {t.solutions.topics.consulting.description}
                    </div>
                    <TabImage src="/assets/images/team-consulting.png" alt={t.solutions.topics.consulting.cardTitle} />
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
