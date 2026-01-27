"use client";

import React from "react";
import { Code2, Database, Globe, Server, Cpu, Layers, Terminal, Cloud, Smartphone, Box, Shuffle } from 'lucide-react';
import { cn } from "@/lib/utils";

export const TechStackScreen = () => {
    // Technologies with consistent colors
    const technologies = [
        { name: "Framework", value: "Next.js 14", icon: Globe, color: "text-white", bg: "bg-black" },
        { name: "Library", value: "React 19", icon: Code2, color: "text-blue-400", bg: "bg-blue-500/10" },
        { name: "Strict Type", value: "TypeScript", icon: Terminal, color: "text-blue-500", bg: "bg-blue-600/10" },
        { name: "Styling", value: "TailwindCSS", icon: Layers, color: "text-cyan-400", bg: "bg-cyan-500/10" },
        { name: "Runtime", value: "Node.js", icon: Server, color: "text-green-500", bg: "bg-green-500/10" },
        { name: "Database", value: "PostgreSQL", icon: Database, color: "text-indigo-300", bg: "bg-indigo-500/10" },
        { name: "Cloud", value: "AWS", icon: Cloud, color: "text-yellow-500", bg: "bg-yellow-500/10" },
        { name: "Orchestration", value: "n8n", icon: Cpu, color: "text-rose-500", bg: "bg-rose-500/10" },
    ];

    return (
        <div className="w-full h-full bg-[#0d1117] relative overflow-hidden flex flex-col font-mono text-sm leading-6">
            {/* Header Bar: VS Code style */}
            <div className="h-8 w-full bg-[#161b22] flex items-center px-4 justify-between border-b border-[#30363d] select-none">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="flex gap-4 text-[#8b949e]">
                    <div className="flex items-center gap-1.5 px-3 py-1 bg-[#0d1117] rounded-t-md border-t border-l border-r border-[#30363d] text-white">
                        <Terminal size={12} className="text-blue-400" />
                        <span className="text-xs">stack.config.ts</span>
                    </div>
                </div>
                <div className="w-12" /> {/* Spacer for balance */}
            </div>

            {/* Content Body */}
            <div className="flex-1 p-6 md:p-10 relative">
                {/* Line Numbers */}
                <div className="absolute left-4 top-10 bottom-4 w-6 flex flex-col text-[#484f58] text-right text-xs md:text-sm select-none">
                    {Array.from({ length: 20 }).map((_, i) => (
                        <span key={i} className="leading-7">{i + 1}</span>
                    ))}
                </div>

                {/* Code Content */}
                <div className="ml-8 md:ml-12 relative z-10 w-full">

                    {/* Import Statements */}
                    <div className="mb-6">
                        <div className="text-[#ff7b72] leading-7">import <span className="text-[#c9d1d9]">{`{`}</span> <span className="text-[#79c0ff]">Power</span> <span className="text-[#c9d1d9]">{`}`}</span> from <span className="text-[#a5d6ff]">'@future/core'</span>;</div>
                        <div className="text-[#ff7b72] leading-7">import <span className="text-[#c9d1d9]">{`{`}</span> <span className="text-[#79c0ff]">Scalability</span> <span className="text-[#c9d1d9]">{`}`}</span> from <span className="text-[#a5d6ff]">'@infra/cloud'</span>;</div>
                    </div>

                    {/* Constant Definition */}
                    <div className="text-[#d2a8ff] leading-7">export const <span className="text-[#79c0ff]">TechnologyArsenal</span> = <span className="text-[#c9d1d9]">{`{`}</span></div>

                    {/* Map through technologies to look like object properties */}
                    <div className="pl-4 md:pl-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                        {technologies.map((tech, idx) => (
                            <div key={idx} className="flex items-center gap-2 leading-7 group hover:bg-[#161b22] px-2 -mx-2 rounded cursor-default transition-colors">
                                <span className="text-[#7ee787] min-w-[100px]">{tech.name.toLowerCase()}:</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#a5d6ff]">'{tech.value}'</span>
                                    <tech.icon size={14} className={cn("opacity-0 group-hover:opacity-100 transition-opacity", tech.color)} />
                                </div>
                                <span className="text-[#8b949e]">,</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-[#c9d1d9] leading-7">{`}`};</div>

                    {/* Interactive Cursor */}
                    <div className="mt-1 w-2.5 h-5 bg-[#79c0ff] animate-pulse" />
                </div>
            </div>

            {/* Status Bar */}
            <div className="h-6 w-full bg-[#161b22] border-t border-[#30363d] flex items-center justify-between px-3 text-[10px] text-white">
                <div className="flex gap-3">
                    <div className="flex items-center gap-1 text-[#484f58]"><div className="w-2 h-2 rounded-full bg-[#484f58]" /> master*</div>
                </div>
                <div className="flex gap-3 text-[#8b949e]">
                    <span>Ln 20, Col 42</span>
                    <span>UTF-8</span>
                    <span className="text-white">TypeScript React</span>
                </div>
            </div>
        </div>
    );
};
