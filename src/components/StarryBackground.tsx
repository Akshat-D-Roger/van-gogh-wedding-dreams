import { useMemo, memo } from "react";
import starrySky from "@/assets/Sky.png";

const StarryBackground = memo(({ active = true }: { active?: boolean }) => {
  // Memoize star positions so they don't re-randomize on re-render
  const stars = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${(i * 37 + 13) % 100}%`,      // Deterministic pseudo-random spread
      top: `${(i * 23 + 7) % 60}%`,
      duration: 2 + (i % 5) * 0.6,            // 2s - 4.4s
      delay: (i % 7) * 0.3,                   // stagger
    }))
  , []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${!active ? "paused-animation" : ""}`}>
      {/* Base starry sky image — CSS animation instead of framer-motion */}
      <div className="absolute inset-0 sky-breathe">
        <img
          src={starrySky}
          alt=""
          className="w-full h-full object-cover"
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

      {/* Animated twinkling stars — CSS animation instead of framer-motion */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute w-1 h-1 bg-gold-light rounded-full star-twinkle"
            style={{
              left: star.left,
              top: star.top,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
              willChange: 'opacity, transform',
            }}
          />
        ))}
      </div>
    </div>
  );
});

StarryBackground.displayName = 'StarryBackground';
export default StarryBackground;
