import lanternImg from "@/assets/Lantern.png";
import { LanternConfig } from "@/data/lanterns";

interface LanternProps {
    config: LanternConfig;
}

export const Lantern = ({ config }: LanternProps) => {
    return (
        <img
            src={lanternImg}
            alt=""
            className={`absolute ${config.size} h-auto lantern-animate`}
            style={{
                left: config.left,
                top: config.top,
                transform: `translateX(0) scale(${config.scale}) rotate(${config.rotation}deg)`,
                opacity: 0.6,
                '--lantern-move': `${config.moveRange}px`,
                '--lantern-scale': config.scale,
                '--lantern-scale-up': config.scale * 1.1,
                '--lantern-duration': `${config.duration}s`,
                '--lantern-twinkle-duration': `${config.twinkleDuration}s`,
                '--lantern-delay': `-${config.delay}s`,
                '--lantern-rotation': `${config.rotation}deg`,
                willChange: 'transform, opacity',
            } as React.CSSProperties}
        />
    );
};
