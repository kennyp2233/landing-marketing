"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../../../lib/utils";

export const WobbleCard = ({
    children,
    containerClassName,
    className,
    variant = "default",
}: {
    children: React.ReactNode;
    containerClassName?: string;
    className?: string;
    variant?: "default" | "purple" | "blue" | "magenta" | "gradient";
}) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
        const { clientX, clientY } = event;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = (clientX - (rect.left + rect.width / 2)) / 20;
        const y = (clientY - (rect.top + rect.height / 2)) / 20;
        setMousePosition({ x, y });
    };

    // Definir los gradientes según la variante
    const getBackgroundGradient = (variant: string) => {
        switch (variant) {
            case "purple":
                return "radial-gradient(88% 100% at top, rgba(108, 38, 249, 0.3), rgba(108, 38, 249, 0))";
            case "blue":
                return "radial-gradient(88% 100% at top, rgba(5, 134, 253, 0.3), rgba(5, 134, 253, 0))";
            case "magenta":
                return "radial-gradient(88% 100% at top, rgba(213, 7, 250, 0.3), rgba(213, 7, 250, 0))";
            case "gradient":
                return "radial-gradient(88% 100% at top, rgba(108, 38, 249, 0.2), rgba(213, 7, 250, 0.1), rgba(5, 134, 253, 0))";
            default:
                return "radial-gradient(88% 100% at top, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0))";
        }
    };
    return (
        <motion.section
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false);
                setMousePosition({ x: 0, y: 0 });
            }}
            style={{
                transform: isHovering
                    ? `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale3d(1, 1, 1)`
                    : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                transition: "transform 0.1s ease-out",
            }}
            className={cn(
                "mx-auto w-full bg-transparent relative rounded-2xl overflow-hidden",
                containerClassName
            )}
        >
            <div
                className="relative h-full sm:mx-0 sm:rounded-2xl overflow-hidden"
                style={{
                    backgroundImage: getBackgroundGradient(variant),
                    boxShadow:
                        "0 10px 32px rgba(34, 42, 53, 0.12), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.05), 0 4px 6px rgba(34, 42, 53, 0.08), 0 24px 108px rgba(47, 48, 55, 0.10)",
                }}
            >
                <motion.div
                    style={{
                        transform: isHovering
                            ? `translate3d(${-mousePosition.x}px, ${-mousePosition.y}px, 0) scale3d(1, 1, 1)`
                            : "translate3d(0px, 0px, 0) scale3d(1, 1, 1)",
                        transition: "transform 0.1s ease-out",
                    }}
                    className={cn("h-full px-4 py-20 sm:px-10", className)}
                >
                    <Noise variant={variant} />
                    {children}
                </motion.div>
            </div>
        </motion.section>
    );
};

const Noise = ({ variant = "default" }: { variant?: "default" | "purple" | "blue" | "magenta" | "gradient" }) => {
    // Definir la opacidad y filtros según la variante
    const getNoiseStyle = (variant: string) => {
        switch (variant) {
            case "purple":
                return { opacity: 0.15, filter: "hue-rotate(270deg) saturate(1.2)" };
            case "blue":
                return { opacity: 0.15, filter: "hue-rotate(200deg) saturate(1.1)" };
            case "magenta":
                return { opacity: 0.15, filter: "hue-rotate(320deg) saturate(1.3)" };
            case "gradient":
                return { opacity: 0.12, filter: "hue-rotate(250deg) saturate(1.4)" };
            default:
                return { opacity: 0.10, filter: "none" };
        }
    };

    const noiseStyle = getNoiseStyle(variant);

    return (
        <div
            className="absolute inset-0 w-full h-full scale-[1.2] transform [mask-image:radial-gradient(#fff,transparent,75%)]"
            style={{
                backgroundImage: "url(/noise.webp)",
                backgroundSize: "30%",
                opacity: noiseStyle.opacity,
                filter: noiseStyle.filter,
            }}
        ></div>
    );
};
