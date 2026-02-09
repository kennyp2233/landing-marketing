"use client";
import React from "react";
import { MacbookScroll } from "../../../../../components/shared/ui/macbook-scroll";
import { TechStackScreen } from "./TechStackScreen";
import { cn } from "@/lib/utils";

export function MacbookShowcase() {
    return (
        <div className="w-full overflow-hidden bg-background">
            <MacbookScroll
                title={
                    <span className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200">
                        Arsenal <span className="gradient-text">Tecnológico</span>
                    </span>
                }
                badge={
                    <div className="h-10 w-10 transform -rotate-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs">NEW</span>
                    </div>
                }
                showGradient={false}
            >
                <TechStackScreen />
            </MacbookScroll>
        </div>
    );
}
