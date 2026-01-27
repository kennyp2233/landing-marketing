"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/shared/ui/3d-card";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function SolutionsCards() {
    const solutions = [
        {
            title: "Automatización",
            description: "Flujos de trabajo inteligentes con n8n.",
            image: "/linear.webp",
            link: "#",
            cta: "Ver detalles"
        },
        {
            title: "Desarrollo",
            description: "Software a la medida y apps móviles.",
            image: "/linear.webp",
            link: "#",
            cta: "Ver detalles"
        },
        {
            title: "Consultoría",
            description: "Optimización y digitalización de procesos.",
            image: "/linear.webp",
            link: "#",
            cta: "Ver detalles"
        }
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
            {solutions.map((item, idx) => (
                <CardContainer key={idx} className="inter-var w-full">
                    <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border  ">
                        <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white">
                            {item.title}
                        </CardItem>
                        <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                            {item.description}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                            <Image
                                src={item.image}
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail" />
                        </CardItem>
                        <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                as="a"
                                href={item.link}
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                                {item.cta} →
                            </CardItem>
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}
