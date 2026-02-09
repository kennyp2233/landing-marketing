"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    IconBrightnessDown,
    IconBrightnessUp,
    IconCaretRightFilled,
    IconCaretUpFilled,
    IconChevronUp,
    IconMicrophone,
    IconMoon,
    IconPlayerSkipBack,
    IconPlayerSkipForward,
    IconPlayerTrackNext,
    IconPlayerTrackPrev,
    IconTable,
    IconVolume,
    IconVolume2,
    IconVolume3,
} from "@tabler/icons-react";
import Image from "next/image";

export const MacbookScroll = ({
    src,
    showGradient,
    title,
    badge,
    children,
}: {
    src?: string;
    showGradient?: boolean;
    title?: string | React.ReactNode;
    badge?: React.ReactNode;
    children?: React.ReactNode;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window && window.innerWidth < 768) {
            setIsMobile(true);
        }
    }, []);

    const scaleX = useTransform(
        scrollYProgress,
        [0, 0.3, 1],
        [1.2, isMobile ? 1 : 1.5, 30] // Massive scale to fill screen
    );
    const scaleY = useTransform(
        scrollYProgress,
        [0, 0.3, 1],
        [0.6, isMobile ? 1 : 1.5, 30]
    );
    const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
    const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
    const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    // Fade out the keyboard/body as we zoom in so it doesn't obstruct
    const bodyOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

    return (
        <div
            ref={ref}
            className="min-h-[200vh]  flex flex-col items-center py-0 md:py-8 justify-start flex-shrink-0 [perspective:800px] transform md:scale-100  scale-[0.35] sm:scale-50"
        >
            <motion.h2
                style={{
                    translateY: textTransform,
                    opacity: textOpacity,
                }}
                className="dark:text-white text-neutral-800 text-3xl font-bold mb-8 text-center"
            >
                {title || (
                    <span>
                        This Macbook is built with Tailwindcss. <br /> No kidding.
                    </span>
                )}
            </motion.h2>
            {/* Lid */}
            <Lid
                src={src}
                scaleX={scaleX}
                scaleY={scaleY}
                rotate={rotate}
                translate={translate}
            >
                {children}
            </Lid>
            {/* Base area */}
            <motion.div
                style={{ opacity: bodyOpacity }}
                className="h-[22rem] w-[32rem] bg-gray-200 dark:bg-[#272729] rounded-2xl overflow-hidden relative -z-10"
            >
                {/* above keyboard bar */}
                <div className="h-10 w-full relative">
                    <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505]" />
                </div>
                <div className="flex relative">
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                    <div className="mx-auto w-[80%] h-full">
                        <Keypad />
                    </div>
                    <div className="mx-auto w-[10%] overflow-hidden  h-full">
                        <SpeakerGrid />
                    </div>
                </div>
                <Trackpad />
                <div className="h-4 w-full mx-auto bg-gradient-to-b from-gray-200 dark:from-[#272729] to-gray-300 dark:to-[#1a1a1b] rounded-b-2xl" />
            </motion.div>
        </div >
    );
};

export const Lid = ({
    scaleX,
    scaleY,
    rotate,
    translate,
    src,
    children,
}: {
    scaleX: MotionValue<number>;
    scaleY: MotionValue<number>;
    rotate: MotionValue<number>;
    translate: MotionValue<number>;
    src?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div className="relative [perspective:800px]">
            <div
                style={{
                    transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
                    transformOrigin: "bottom",
                    transformStyle: "preserve-3d",
                }}
                className="h-[12rem] w-[32rem] bg-[#010101] rounded-2xl p-2 relative"
            >
                <div
                    style={{
                        boxShadow: "0px 2px 0px 2px var(--neutral-900) inset",
                    }}
                    className="absolute inset-0 bg-[#010101] rounded-lg flex items-center justify-center"
                >
                    <span className="text-white">
                        <IconMoon className="h-4 w-4 text-neutral-500" />
                    </span>
                </div>
            </div>
            <motion.div
                style={{
                    scaleX: scaleX,
                    scaleY: scaleY,
                    rotateX: rotate,
                    translateY: translate,
                    transformStyle: "preserve-3d",
                    transformOrigin: "top",
                }}
                className="h-96 w-[32rem] absolute inset-0 bg-[#010101] rounded-2xl p-2"
            >
                <div className="absolute inset-0 bg-[#272729] rounded-lg" />

                {children || (
                    <Image
                        src={src as string}
                        alt="macbook screen"
                        fill
                        className="object-cover object-left-top absolute rounded-lg inset-0 h-full w-full"
                    />
                )}
            </motion.div>
        </div>
    );
};

export const Trackpad = () => {
    return (
        <div
            className="w-[40%] mx-auto h-32  rounded-xl my-1"
            style={{
                boxShadow: "0px 0px 1px 1px #00000020 inset",
            }}
        ></div>
    );
};

export const Keypad = () => {
    return (
        <div className="h-full rounded-md bg-[#050505] mx-1 p-1">
            {/* Row 1 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KbdBtn>
                    <span className="text-[6px]">esc</span>
                </KbdBtn>
                <KbdBtn>
                    <IconBrightnessDown className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F1</span>
                </KbdBtn>
                <KbdBtn>
                    <IconBrightnessUp className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F2</span>
                </KbdBtn>
                <KbdBtn>
                    <IconTable className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F3</span>
                </KbdBtn>
                <KbdBtn>
                    <IconMicrophone className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F4</span>
                </KbdBtn>
                <KbdBtn>
                    <IconMicrophone className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F5</span>
                </KbdBtn>
                <KbdBtn>
                    <span className="text-[4px]">F6</span>
                </KbdBtn>
                <KbdBtn>
                    <IconPlayerSkipBack className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F7</span>
                </KbdBtn>
                <KbdBtn>
                    <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F8</span>
                </KbdBtn>
                <KbdBtn>
                    <IconPlayerTrackNext className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F9</span>
                </KbdBtn>
                <KbdBtn>
                    <IconVolume3 className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F10</span>
                </KbdBtn>
                <KbdBtn>
                    <IconVolume2 className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F11</span>
                </KbdBtn>
                <KbdBtn>
                    <IconVolume className="h-[6px] w-[6px]" />
                    <span className="text-[4px]">F12</span>
                </KbdBtn>
                <KbdBtn>
                    <div className="h-4 w-4 rounded-full bg-gradient-to-b from-20% from-neutral-900 via-black to-neutral-900 p-px flex items-center justify-center">
                        <div className="bg-black h-full w-full rounded-full" />
                    </div>
                </KbdBtn>
            </div>

            {/* Row 2 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KbdBtn className="w-10">~</KbdBtn>
                <KbdBtn>1</KbdBtn>
                <KbdBtn>2</KbdBtn>
                <KbdBtn>3</KbdBtn>
                <KbdBtn>4</KbdBtn>
                <KbdBtn>5</KbdBtn>
                <KbdBtn>6</KbdBtn>
                <KbdBtn>7</KbdBtn>
                <KbdBtn>8</KbdBtn>
                <KbdBtn>9</KbdBtn>
                <KbdBtn>0</KbdBtn>
                <KbdBtn>-</KbdBtn>
                <KbdBtn>=</KbdBtn>
                <KbdBtn className="w-10 text-[10px] text-right pr-1">delete</KbdBtn>
            </div>

            {/* Row 3 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KbdBtn className="w-14 text-[10px] text-left pl-1">tab</KbdBtn>
                <KbdBtn>Q</KbdBtn>
                <KbdBtn>W</KbdBtn>
                <KbdBtn>E</KbdBtn>
                <KbdBtn>R</KbdBtn>
                <KbdBtn>T</KbdBtn>
                <KbdBtn>Y</KbdBtn>
                <KbdBtn>U</KbdBtn>
                <KbdBtn>I</KbdBtn>
                <KbdBtn>O</KbdBtn>
                <KbdBtn>P</KbdBtn>
                <KbdBtn>[</KbdBtn>
                <KbdBtn>]</KbdBtn>
                <KbdBtn>\</KbdBtn>
            </div>

            {/* Row 4 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KbdBtn className="w-[2.8rem] text-[10px] text-left pl-1">caps lock</KbdBtn>
                <KbdBtn>A</KbdBtn>
                <KbdBtn>S</KbdBtn>
                <KbdBtn>D</KbdBtn>
                <KbdBtn>F</KbdBtn>
                <KbdBtn>G</KbdBtn>
                <KbdBtn>H</KbdBtn>
                <KbdBtn>J</KbdBtn>
                <KbdBtn>K</KbdBtn>
                <KbdBtn>L</KbdBtn>
                <KbdBtn>;</KbdBtn>
                <KbdBtn>'</KbdBtn>
                <KbdBtn className="w-[3.65rem] text-[10px] text-right pr-1">return</KbdBtn>
            </div>

            {/* Row 5 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KbdBtn className="w-[3.65rem] text-[10px] text-left pl-1">shift</KbdBtn>
                <KbdBtn>Z</KbdBtn>
                <KbdBtn>X</KbdBtn>
                <KbdBtn>C</KbdBtn>
                <KbdBtn>V</KbdBtn>
                <KbdBtn>B</KbdBtn>
                <KbdBtn>N</KbdBtn>
                <KbdBtn>M</KbdBtn>
                <KbdBtn>,</KbdBtn>
                <KbdBtn>.</KbdBtn>
                <KbdBtn>/</KbdBtn>
                <KbdBtn className="w-[3.65rem] text-[10px] text-right pr-1">shift</KbdBtn>
            </div>

            {/* Row 6 */}
            <div className="flex justify-between items-center w-full h-8 mb-1">
                <KbdBtn className="w-8 text-[8px]">fn</KbdBtn>
                <KbdBtn className="w-8 text-[8px]">⌃</KbdBtn>
                <KbdBtn className="w-8 text-[8px]">⌥</KbdBtn>
                <KbdBtn className="w-10 text-[8px]">⌘</KbdBtn>
                <KbdBtn className="w-[8rem]"></KbdBtn>
                <KbdBtn className="w-10 text-[8px]">⌘</KbdBtn>
                <KbdBtn className="w-8 text-[8px]">⌥</KbdBtn>
                {/* Arrow keys cluster - T-shaped layout */}
                <div className="flex flex-col items-center w-[4.5rem]">
                    <KbdBtn className="w-5 h-[10px] mb-[1px]">
                        <IconCaretUpFilled className="h-[5px] w-[5px]" />
                    </KbdBtn>
                    <div className="flex gap-[1px]">
                        <KbdBtn className="w-5 h-[10px]">
                            <IconCaretRightFilled className="h-[5px] w-[5px] rotate-180" />
                        </KbdBtn>
                        <KbdBtn className="w-5 h-[10px]">
                            <IconChevronUp className="h-[5px] w-[5px] rotate-180" />
                        </KbdBtn>
                        <KbdBtn className="w-5 h-[10px]">
                            <IconCaretRightFilled className="h-[5px] w-[5px]" />
                        </KbdBtn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const KbdBtn = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "p-[0.5px] rounded-[4px]",
                "bg-white/[0.2] inset shadow-[0px_0px_0px_1px_rgba(255,255,255,0.08)_inset] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.05)_inset]",
                className
            )}
        >
            <div
                className={cn(
                    "h-6 w-6 bg-[#0A090D] rounded-[3px] flex items-center justify-center",
                    "text-neutral-200 text-[8px]",
                    className
                )}
            >
                {children}
            </div>
        </div>
    );
};

export const SpeakerGrid = () => {
    return (
        <div
            className="flex px-[0.5px] gap-[2px] mt-2 h-40"
            style={{
                backgroundImage:
                    "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
                backgroundSize: "3px 3px",
            }}
        ></div>
    );
};
