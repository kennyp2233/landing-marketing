"use client";

import { cn } from "@/lib/utils";
import React, {
    createContext,
    useState,
    useContext,
    useRef,
    useEffect,
} from "react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";

const MouseEnterContext = createContext<
    [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
    children,
    className,
    containerClassName,
}: {
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMouseEntered, setIsMouseEntered] = useState(false);

    // useMotionValue for performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring animations
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, -20]), {
        stiffness: 150,
        damping: 20,
        mass: 1,
    });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
        stiffness: 150,
        damping: 20,
        mass: 1,
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        // Normalize mouse position to -0.5 to 0.5
        const mouseXVal = (e.clientX - rect.left) / width - 0.5;
        const mouseYVal = (e.clientY - rect.top) / height - 0.5;

        mouseX.set(mouseXVal);
        mouseY.set(mouseYVal);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseEntered(true);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsMouseEntered(false);
        // Reset spring values
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
            <div
                className={cn(
                    "py-4 flex items-center justify-center",
                    containerClassName
                )}
                style={{
                    perspective: "1000px",
                }}
            >
                <motion.div
                    ref={containerRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className={cn(
                        "flex items-center justify-center relative transition-all duration-200 ease-linear",
                        className
                    )}
                >
                    {children}
                </motion.div>
            </div>
        </MouseEnterContext.Provider>
    );
};

export const CardBody = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={cn(
                "h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",
                className
            )}
        >
            {children}
        </div>
    );
};

export const CardItem = ({
    children,
    className,
    translateX = 0,
    translateY = 0,
    translateZ = 0,
    rotateX = 0,
    rotateY = 0,
    rotateZ = 0,
}: {
    children: React.ReactNode;
    className?: string;
    translateX?: number | string;
    translateY?: number | string;
    translateZ?: number | string;
    rotateX?: number | string;
    rotateY?: number | string;
    rotateZ?: number | string;
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isMouseEntered] = useMouseEnter();

    useEffect(() => {
        handleAnimations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isMouseEntered]);

    const handleAnimations = () => {
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    };

    return (
        <div
            ref={ref}
            className={cn("w-fit transition duration-200 ease-out", className)}
        >
            {children}
        </div>
    );
};

export const useMouseEnter = () => {
    const context = useContext(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};
