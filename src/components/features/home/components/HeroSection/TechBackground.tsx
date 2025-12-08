// src/components/features/home/components/HeroSection/TechBackground.tsx
'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { useTheme } from '../../../../../providers/ThemeProvider';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Stars = ({ isDark, ...props }: { isDark: boolean } & any) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ref = useRef<any>(null);
    // Generamos 5000 puntos en una esfera
    const sphere = useMemo(() => {
        const positions = new Float32Array(5000 * 3);
        random.inSphere(positions, { radius: 1.5 });
        // Filtrar NaN values que pueden ocurrir
        for (let i = 0; i < positions.length; i++) {
            if (isNaN(positions[i])) {
                positions[i] = 0;
            }
        }
        return positions;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    // Color de las estrellas según el tema
    const starColor = isDark ? "#d507fa" : "#9333ea"; // Magenta en dark, púrpura más oscuro en light

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color={starColor}
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export default function TechBackground() {
    const { isDark } = useTheme();

    return (
        <div className={`absolute inset-0 z-0 transition-colors duration-300 ${isDark ? 'bg-black' : 'bg-gray-100'}`}>
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars isDark={isDark} />
            </Canvas>
            {/* Gradiente para que el texto sea legible */}
            <div className={`absolute inset-0 bg-gradient-to-t ${isDark ? 'from-black' : 'from-gray-100'} via-transparent to-transparent`} />
        </div>
    );
}