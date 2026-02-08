import { motion } from "framer-motion";
import lanternImg from "@/assets/Lantern.png";
import { LanternConfig } from "@/data/lanterns";

interface LanternProps {
    config: LanternConfig;
}

export const Lantern = ({ config }: LanternProps) => {
    return (
        <motion.img
            src={lanternImg}
            alt="Lantern"
            className={`absolute ${config.size} h-auto mix-blend-screen drop-shadow-[0_0_15px_rgba(255,220,100,0.6)]`}
            style={{
                left: config.left,
                top: config.top,
                rotate: config.rotation
            }}
            animate={{
                x: [0, config.moveRange, 0], // Swaying
                opacity: [0.5, 0.7, 0.5], // Twinkling (Reduced opacity)
                scale: [config.scale, config.scale * 1.1, config.scale], // Pulsing
            }}
            transition={{
                x: {
                    duration: config.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: config.delay
                },
                opacity: {
                    duration: config.twinkleDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: config.delay
                },
                scale: {
                    duration: config.twinkleDuration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: config.delay
                }
            }}
        />
    );
};
