import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export const useLenis = () => {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.04,             // How fast scroll animates to target (lower = slower glide)
            smoothWheel: true,
            wheelMultiplier: 0.5,
            syncTouch: true,
            syncTouchLerp: 0.03,    // How fast touch scroll glides (lower = slower, dreamier)
            touchMultiplier: 0.9,   // How far each swipe travels
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
