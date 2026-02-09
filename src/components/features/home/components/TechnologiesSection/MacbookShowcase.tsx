"use client";
import React from "react";
import { MacbookScroll } from "../../../../../components/shared/ui/macbook-scroll";
import { TechStackScreen } from "./TechStackScreen";
import { cn } from "@/lib/utils";

export function MacbookShowcase() {
    return (
        <div className="w-full overflow-hidden bg-background -mt-10">
            <MacbookScroll
                title={<span></span>}
                showGradient={false}
            >
                <TechStackScreen />
            </MacbookScroll>
        </div>
    );
}


