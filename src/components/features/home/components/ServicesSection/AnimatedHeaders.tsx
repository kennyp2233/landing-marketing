// src/components/features/home/components/ServicesSection/AnimatedHeaders.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconChartBar, IconDeviceMobile, IconPalette, IconTargetArrow, IconUsers, IconVideo } from "@tabler/icons-react";
import { useTheme } from "@/providers";

const SkeletonBase = ({ children }: { children: React.ReactNode }) => {
    const { isDark } = useTheme();
    return (
        <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${isDark ? 'bg-dot-white/[0.1]' : 'bg-dot-black/[0.2]'}`}>
            {children}
        </div>
    );
};

export const SkeletonSocial = () => {
    const { isDark } = useTheme();
    const variants = {
        initial: { x: 0, rotate: 0 },
        animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
    };
    const variantsSecond = {
        initial: { x: 0, rotate: 0 },
        animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
    };
    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2 p-2 "
        >
            <SkeletonBase>
                <motion.div className="flex flex-1 w-full h-full flex-col space-y-2 p-2">
                    <motion.div
                        variants={variants}
                        className={`flex flex-row rounded-full border p-2 items-center space-x-2 ${isDark ? 'border-white/[0.1] bg-gray-900/50' : 'border-neutral-100 bg-white'
                            }`}
                    >
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#6c26f9] to-[#d507fa] shrink-0" />
                        <div className={`w-full h-4 rounded-full ${isDark ? 'bg-gray-800/60' : 'bg-gray-100'}`} />
                    </motion.div>
                    <motion.div
                        variants={variantsSecond}
                        className={`flex flex-row rounded-full border p-2 items-center space-x-2 w-3/4 ml-auto ${isDark ? 'border-white/[0.1] bg-gray-900/50' : 'border-neutral-100 bg-white'
                            }`}
                    >
                        <div className={`w-full h-4 rounded-full ${isDark ? 'bg-gray-800/60' : 'bg-gray-100'}`} />
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-[#6c26f9] to-[#d507fa] shrink-0" />
                    </motion.div>
                </motion.div>
            </SkeletonBase>
        </motion.div>
    );
};

export const SkeletonVideo = ({ isDark }: { isDark: boolean }) => {
    const variants = {
        initial: { scale: 1, opacity: 1 },
        hover: { scale: 1.2, opacity: 0.5, transition: { duration: 0.3 } },
    };
    return (
        <SkeletonBase>
            <motion.div
                initial="initial"
                whileHover="hover"
                className="flex flex-1 w-full h-full items-center justify-center"
            >
                <motion.div variants={variants}>
                    <IconVideo className={`w-16 h-16 ${isDark ? 'text-gray-400' : 'text-gray-600'} opacity-60`} />
                </motion.div>
            </motion.div>
        </SkeletonBase>
    );
};

export const SkeletonAds = ({ isDark }: { isDark: boolean }) => {
    const variants = {
        initial: { backgroundPosition: "0 50%" },
        animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
    };
    return (
        <SkeletonBase>
            <motion.div
                initial="initial"
                animate="animate"
                variants={variants}
                transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg flex-col space-y-2"
                style={{
                    background: "linear-gradient(-45deg, #6c26f9, #d507fa, #0586fd, #1332e9)",
                    backgroundSize: "400% 400%",
                }}
            >
                <motion.div className="h-full w-full rounded-lg flex items-center justify-center">
                    <IconTargetArrow className="w-12 h-12 text-white opacity-70" />
                </motion.div>
            </motion.div>
        </SkeletonBase>
    );
};

export const SkeletonBranding = ({ isDark }: { isDark: boolean }) => {
    const first = {
        initial: { x: 20, rotate: -5 },
        hover: { x: 0, rotate: 0 },
    };
    const second = {
        initial: { x: -20, rotate: 5 },
        hover: { x: 0, rotate: 0 },
    };
    return (
        <SkeletonBase>
            <motion.div
                initial="initial"
                whileHover="hover"
                className="flex flex-1 w-full h-full min-h-[6rem] flex-row space-x-2 p-2"
            >
                <motion.div
                    variants={first}
                    className={`h-full w-1/2 rounded-2xl p-4 border flex flex-col items-center justify-center ${isDark ? 'bg-gray-900/30 border-white/[0.08]' : 'bg-white border-neutral-200'
                        }`}
                >
                    <IconPalette className={`h-10 w-10 ${isDark ? 'text-gray-300' : 'text-neutral-500'}`} />
                    <p className={`sm:text-sm text-xs text-center font-semibold mt-4 ${isDark ? 'text-gray-300' : 'text-neutral-500'
                        }`}>
                        Logo
                    </p>
                </motion.div>
                <motion.div
                    variants={second}
                    className={`h-full w-1/2 rounded-2xl p-4 border flex flex-col items-center justify-center ${isDark ? 'bg-gray-900/30 border-white/[0.08]' : 'bg-white border-neutral-200'
                        }`}
                >
                    <p className={`sm:text-sm text-xs text-center font-semibold ${isDark ? 'text-gray-300' : 'text-neutral-500'
                        }`}>
                        Manual de Marca
                    </p>
                </motion.div>
            </motion.div>
        </SkeletonBase>
    );
};

export const SkeletonCommunity = ({ isDark }: { isDark: boolean }) => {
    const variants = {
        initial: { width: 0 },
        animate: { width: "100%", transition: { duration: 0.2 } },
        hover: { width: ["0%", "100%"], transition: { duration: 2 } },
    };
    const arr = new Array(3).fill(0);
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className={`flex flex-1 w-full h-full min-h-[6rem] flex-col space-y-2 ${isDark ? 'bg-dot-white/[0.2]' : 'bg-dot-black/[0.2]'}`}
        >
            <div className="flex flex-1 w-full h-full flex-col space-y-2 p-2">
                {arr.map((_, i) => (
                    <motion.div
                        key={"skeleton-community-" + i}
                        variants={variants}
                        style={{ maxWidth: Math.random() * (100 - 40) + 40 + "%" }}
                        className={`flex flex-row rounded-full border p-2 items-center space-x-2 w-full h-4 ${isDark ? 'border-white/[0.2] bg-black' : 'border-neutral-100 bg-neutral-100'
                            }`}
                    ></motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export const SkeletonStrategy = ({ isDark }: { isDark: boolean }) => {
    return (
        <SkeletonBase>
            <div className="flex flex-1 w-full h-full items-center justify-center">
                <IconChartBar className={`w-16 h-16 ${isDark ? 'text-gray-400' : 'text-gray-600'} opacity-60`} />
            </div>
        </SkeletonBase>
    );
};
