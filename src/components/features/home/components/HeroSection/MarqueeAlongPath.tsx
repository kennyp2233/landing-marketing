// components/features/home/components/HeroSection/MarqueeAlongPath.tsx
import React, { useMemo } from 'react';
import {
    motion,
    useMotionValue,
    useTransform,
    useAnimationFrame,
    MotionValue,
} from 'framer-motion';

interface MarqueeAlongPathProps {
    children: React.ReactNode;
    path: string;
    baseVelocity: number;
    repeat?: number;
    isDark?: boolean;
    zIndexBase: number;
    className?: string;
    offsetY?: number;
}

interface MarqueeItemProps {
    baseOffset: MotionValue<number>;
    path: string;
    itemIndex: number;
    totalItems: number;
    repeatIndex: number;
    zIndexBase: number;
    children: React.ReactNode;
}

/**
 * Transforma un path SVG aplicando un offset en Y
 * @param path - El path SVG original
 * @param offsetY - Cantidad de píxeles a mover en Y (positivo = hacia abajo, negativo = hacia arriba)
 * @returns El path transformado
 */
const transformPathY = (path: string, offsetY: number): string => {
    if (offsetY === 0) return path;

    // Regex para encontrar todos los números en el path (coordenadas)
    return path.replace(/([MLQTCSAH])\s*([0-9.-]+)[\s,]*([0-9.-]+)/g, (match, command, x, y) => {
        const newY = parseFloat(y) + offsetY;
        return `${command}${x},${newY}`;
    });
};

/**
 * Wraps a number between a min and max value
 * @param min The minimum value
 * @param max The maximum value 
 * @param value The value to wrap
 * @returns The wrapped value between min and max
 */
const wrap = (min: number, max: number, value: number): number => {
    const range = max - min;
    return ((((value - min) % range) + range) % range) + min;
};

const MarqueeItem: React.FC<MarqueeItemProps> = ({
    baseOffset,
    path,
    itemIndex,
    totalItems,
    repeatIndex,
    zIndexBase,
    children
}) => {
    const itemOffset = useTransform(baseOffset, (v: number) => {
        // Distribute items evenly along the path
        const position = (itemIndex * 100) / totalItems;
        const wrappedValue = wrap(0, 100, v + position);
        return `${wrappedValue}%`;
    });

    const zIndex = useTransform(itemOffset, (v) => {
        const progress = parseFloat(v.replace("%", ""));
        return Math.floor(zIndexBase + progress);
    });

    // Optional: Add opacity fade effect at path edges
    const opacity = useTransform(itemOffset, (v) => {
        const progress = parseFloat(v.replace("%", "")) / 100;
        // Nice curve that goes from 0 to 1 quick, holds at 1, then back to 0
        const x = 2 * progress - 1;
        return Math.pow(1 - Math.pow(Math.abs(x), 10), 2);
    });

    return (
        <motion.div
            className="absolute pointer-events-none"
            style={{
                offsetPath: `path('${path}')`,
                offsetDistance: itemOffset,
                offsetRotate: "auto",
                zIndex: zIndex,
                opacity: opacity,
                willChange: "transform, opacity",
            }}
            aria-hidden={repeatIndex > 0}
        >
            {children}
        </motion.div>
    );
};

const MarqueeAlongPath: React.FC<MarqueeAlongPathProps> = ({
    children,
    path,
    baseVelocity,
    repeat = 1,
    zIndexBase,
    className = '',
    offsetY = 0 // Valor por defecto: sin offset
}) => {
    const baseOffset = useMotionValue(0);

    // Transformar el path aplicando el offsetY
    const transformedPath = useMemo(() => {
        return transformPathY(path, offsetY);
    }, [path, offsetY]);

    // Create items array with proper distribution
    const items = useMemo(() => {
        const childrenArray = React.Children.toArray(children);

        return childrenArray.flatMap((child, childIndex) =>
            Array.from({ length: repeat }, (_, repeatIndex) => {
                const itemIndex = repeatIndex * childrenArray.length + childIndex;
                const key = `${childIndex}-${repeatIndex}`;
                return {
                    child,
                    childIndex,
                    repeatIndex,
                    itemIndex,
                    key,
                };
            })
        );
    }, [children, repeat]);

    // Animation frame loop
    useAnimationFrame((_, delta) => {
        const moveBy = (baseVelocity * delta) / 1000;
        baseOffset.set(baseOffset.get() + moveBy);
    });

    // Define static box dimensions matching path range
    const pathWidth = 1800; // from x: -50 to 1750
    const pathHeight = 600;

    return (
        // Container fills parent and centers the fixed-size marquee box horizontally and vertically
        <div className={`absolute inset-0 flex items-center justify-center ${className}`}>
            <div className="relative" style={{ width: pathWidth, height: pathHeight }}>
                {/* Hidden SVG for path calculations within fixed box */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-0"
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${pathWidth} ${pathHeight}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={transformedPath} stroke="none" fill="none" />
                </svg>

                {/* Animated marquee items positioned along path within box */}
                {items.map(({ child, repeatIndex, itemIndex, key }) => (
                    <MarqueeItem
                        key={key}
                        baseOffset={baseOffset}
                        path={transformedPath}
                        itemIndex={itemIndex}
                        totalItems={items.length}
                        repeatIndex={repeatIndex}
                        zIndexBase={zIndexBase}
                    >
                        {child}
                    </MarqueeItem>
                ))}
            </div>
        </div>
    );
};

export default MarqueeAlongPath;
