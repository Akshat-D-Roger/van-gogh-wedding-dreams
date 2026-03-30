import { motion, MotionValue, useTransform } from "framer-motion";
import { memo } from "react";
import { lanterns } from "@/data/lanterns";
import { Lantern } from "./Lantern";

interface LanternLayerProps {
    scrollYProgress: MotionValue<number>;
    active?: boolean;
}

export const LanternLayer = memo(({ scrollYProgress, active = true }: LanternLayerProps) => {
    // Parallax effect: Lanterns move down as we scroll down, but slower than content
    // Using 200svh equivalent (2x viewport height) for consistent behavior across devices
    const parallaxDistance = typeof window !== "undefined" ? window.innerHeight * 2 : 1600;
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, parallaxDistance]);

    return (
        <motion.div
            className={`absolute inset-0 z-20 pointer-events-none h-[150vh] ${!active ? 'paused-animation' : ''}`} // Extend height to cover palace too
            initial={{ y: 700, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
        >
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ y: yParallax }} // Apply parallax to inner container
            >
                {lanterns.map((lantern) => (
                    <Lantern key={lantern.id} config={lantern} />
                ))}
            </motion.div>
        </motion.div>
    );
});

LanternLayer.displayName = 'LanternLayer';
