// providers/LenisProvider.tsx
'use client';

import { ReactNode, useEffect, useRef } from 'react';
import Lenis from 'lenis';

interface LenisProviderProps {
    children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Initialize Lenis with premium "heavy" feel
        const lenis = new Lenis({
            duration: 1.0,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.5,
            infinite: false,
        });

        lenisRef.current = lenis;
        (window as any).__lenis = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Cleanup
        return () => {
            lenis.destroy();
            lenisRef.current = null;
            delete (window as any).__lenis;
        };
    }, []);

    return <>{children}</>;
}

export default LenisProvider;
