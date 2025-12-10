// src/components/features/home/components/ServicesSection/AnimatedHeaders.tsx
"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { IconCode, IconShieldLock, IconRobot, IconBulb } from "@tabler/icons-react";
import { useTheme } from "@/providers";
import { cn } from "@/lib/utils";

const SkeletonBase = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    const { isDark } = useTheme();
    return (
        <div className={cn(
            "flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden relative",
            isDark ? 'bg-dot-white/[0.1] bg-gray-900/40' : 'bg-dot-black/[0.2] bg-white/50',
            className
        )}>
            {children}
            {/* Glossy overlay */}
            <div className={cn(
                "absolute inset-0 z-10 pointer-events-none",
                isDark
                    ? "bg-gradient-to-tr from-white/[0.02] to-transparent"
                    : "bg-gradient-to-tr from-black/[0.01] to-transparent"
            )} />
        </div>
    );
};

// 1. Development: Animated Code Lines
export const SkeletonDev = () => {
    const { isDark } = useTheme();

    // Simulate code lines typing in
    const lines = [
        { width: "60%", color: isDark ? "bg-[#d507fa]" : "bg-orange-500" },
        { width: "80%", color: isDark ? "bg-gray-700" : "bg-gray-300" },
        { width: "40%", color: isDark ? "bg-[#0586fd]" : "bg-amber-500" },
        { width: "70%", color: isDark ? "bg-gray-700" : "bg-gray-300" },
        { width: "50%", color: isDark ? "bg-[#6c26f9]" : "bg-orange-600" },
    ];

    const containerVars: Variants = {
        animate: {
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const lineVars: Variants = {
        initial: { width: 0, opacity: 0 },
        animate: {
            width: "var(--target-width)",
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" as any }
        }
    };

    return (
        <SkeletonBase className="items-center justify-center p-4">
            <motion.div
                className="w-3/4 flex flex-col space-y-3"
                variants={containerVars}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false }} // Replay on scroll
            >
                {lines.map((line, i) => (
                    <motion.div
                        key={i}
                        className={cn("h-3 rounded-full", line.color)}
                        style={{ "--target-width": line.width } as any}
                        variants={lineVars}
                    />
                ))}
            </motion.div>
            {/* Floating code icon */}
            <motion.div
                className={cn(
                    "absolute top-2 right-2 p-1.5 rounded-lg",
                    isDark ? "bg-gray-800 text-white" : "bg-white text-gray-800 shadow-sm"
                )}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" as any }}
            >
                <IconCode size={16} />
            </motion.div>
        </SkeletonBase>
    );
};

// 2. Security: Pulsating Shield
export const SkeletonSecurity = () => {
    const { isDark } = useTheme();

    return (
        <SkeletonBase className="items-center justify-center">
            <div className="relative flex items-center justify-center">
                {/* Pulsating circles */}
                {[1, 2, 3].map((i) => (
                    <motion.div
                        key={i}
                        className={cn(
                            "absolute inset-0 rounded-full border",
                            isDark ? "border-[#d507fa]/30" : "border-amber-500/30"
                        )}
                        style={{ width: 60, height: 60 }} // Base size matching icon
                        animate={{
                            scale: [1, 1.5 + (i * 0.2)],
                            opacity: [0.5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeOut" as any
                        }}
                    />
                ))}

                {/* Central Shield */}
                <motion.div
                    className={cn(
                        "relative z-10 p-3 rounded-xl shadow-lg",
                        isDark
                            ? "bg-gradient-to-br from-[#6c26f9] to-[#d507fa] text-white"
                            : "bg-gradient-to-br from-orange-500 to-amber-500 text-white"
                    )}
                    whileHover={{ scale: 1.1 }}
                >
                    <IconShieldLock size={32} />
                </motion.div>
            </div>
        </SkeletonBase>
    );
};

// 3. Automation: Connected Nodes
export const SkeletonAutomation = () => {
    const { isDark } = useTheme();

    const pathColor = isDark ? "#6c26f9" : "#f97316"; // Purple vs Orange

    return (
        <SkeletonBase className="items-center justify-center">
            <div className="relative w-full h-full flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full" overflow="visible">
                    {/* Connecting line */}
                    <motion.line
                        x1="20%" y1="50%" x2="80%" y2="50%"
                        stroke={pathColor}
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        opacity={0.3}
                    />
                    {/* Moving packet */}
                    <motion.circle
                        r="3" fill={pathColor}
                        animate={{
                            cx: ["20%", "50%", "80%"],
                            cy: ["50%", "50%", "50%"],
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            times: [0, 0.5, 1],
                            ease: "linear" as any
                        }}
                    />
                </svg>

                {/* Nodes */}
                <div className="flex justify-between w-[70%] items-center z-10">
                    <NodeIcon icon={IconCode} isDark={isDark} delay={0} />
                    <NodeIcon icon={IconRobot} isDark={isDark} delay={0.5} active />
                    <NodeIcon icon={IconBulb} isDark={isDark} delay={1} />
                </div>
            </div>
        </SkeletonBase>
    );
};

const NodeIcon = ({ icon: Icon, isDark, delay, active }: any) => (
    <motion.div
        className={cn(
            "p-2 rounded-full border shadow-sm",
            isDark
                ? "bg-gray-900 border-white/10 text-white"
                : "bg-white border-gray-100 text-gray-700",
            active && (isDark ? "border-[#0586fd] text-[#0586fd]" : "border-orange-500 text-orange-500")
        )}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ delay, type: "spring" as any }}
    >
        <Icon size={18} />
    </motion.div>
);


// 4. Consulting: Strategic Compass/Graph
export const SkeletonConsulting = () => {
    const { isDark } = useTheme();

    // Growing graph bar variants
    const barVars: Variants = {
        initial: { height: "10%" },
        animate: {
            height: "var(--target-height)",
            transition: { duration: 1, type: "spring" as any }
        }
    };

    return (
        <SkeletonBase className="items-end justify-center pb-4 space-x-3">
            {[30, 50, 40, 80, 65].map((h, i) => (
                <motion.div
                    key={i}
                    className={cn(
                        "w-3 rounded-t-md",
                        isDark
                            ? "bg-gradient-to-t from-[#6c26f9]/50 to-[#0586fd]"
                            : "bg-gradient-to-t from-orange-200 to-orange-500"
                    )}
                    style={{ "--target-height": `${h}%` } as any}
                    variants={barVars}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: false }}
                />
            ))}

            {/* Floating Bulb for "Idea" */}
            <motion.div
                className="absolute top-3 left-3"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <IconBulb className={isDark ? "text-yellow-400" : "text-amber-500"} size={20} />
            </motion.div>
        </SkeletonBase>
    );
};

