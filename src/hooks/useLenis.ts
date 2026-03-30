import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.07,            // Lower = smoother (default 0.1)
            touchMultiplier: 0.5,  // Half the scroll speed on touch
            smoothWheel: true,
            wheelMultiplier: 0.5,  // Half speed on wheel too (for dev testing)
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            lenisRef.current = null;
        };
    }, []);

    return lenisRef;
};
