import { useEffect, useMemo, useRef, useState, memo } from "react";
import { useInView } from "framer-motion";
import confetti from "canvas-confetti";

export type EventAtmosphereVariant = "haldi" | "sangeet" | "varmala" | "reception";

/** Pink-only petal fills (soft rose / blush / sakura) */
const PINK_PETAL_GRADIENTS = [
  "linear-gradient(145deg, #FFF0F5 0%, #FFB6C1 42%, #E8A0B4 100%)",
  "linear-gradient(160deg, #FFE4EC 0%, #FF9EBB 48%, #DB7093 100%)",
  "linear-gradient(130deg, #FCE4EC 0%, #F48FB1 45%, #C2185B 98%)",
  "linear-gradient(155deg, #FFF5F8 0%, #FFC0CB 50%, #E91E8C 100%)",
  "linear-gradient(140deg, #F8BBD0 0%, #F06292 55%, #AD1457 100%)",
  "linear-gradient(165deg, #FFECF2 0%, #FF80AB 40%, #C48B9F 100%)",
] as const;

function HaldiYellowBursts() {
  const rings = useMemo(
    () =>
      [
        { left: "45%", top: "42%", delay: "0s", size: "min(34vw, 220px)", tone: "haldi-ring-gold" as const },
        { left: "18%", top: "62%", delay: "0.7s", size: "min(30vw, 200px)", tone: "haldi-ring-pink" as const },
        { left: "72%", top: "28%", delay: "1.3s", size: "min(32vw, 210px)", tone: "haldi-ring-green" as const },
        { left: "52%", top: "78%", delay: "2s", size: "min(26vw, 180px)", tone: "haldi-ring-orange" as const },
        { left: "12%", top: "22%", delay: "2.5s", size: "min(28vw, 195px)", tone: "haldi-ring-magenta" as const },
      ] as const,
    []
  );

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Holi-style color waves — CSS Keyframe Native */}
      <div className="absolute inset-y-0 left-0 w-[58%] max-w-[520px] holi-splash holi-splash--left animate-haldi-left" />
      <div className="absolute inset-y-0 right-0 w-[58%] max-w-[520px] holi-splash holi-splash--right animate-haldi-right" />
      <div className="absolute inset-x-0 top-0 h-[42%] max-h-[320px] holi-splash holi-splash--top animate-haldi-top" />
      <div className="absolute inset-x-0 bottom-0 h-[38%] max-h-[280px] holi-splash holi-splash--bottom animate-haldi-bottom" />

      {rings.map((ring, i) => (
        <div
          key={i}
          className={`absolute haldi-burst-ring ${ring.tone}`}
          style={{
            left: ring.left,
            top: ring.top,
            animationDelay: ring.delay,
            width: ring.size,
            height: ring.size,
          }}
        />
      ))}
      <div className="absolute inset-0 haldi-holi-vignette pointer-events-none" />
    </div>
  );
}

function SangeetSkyCrackers({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    // VERY IMPORTANT: Enable useWorker to offload canvas drawing from the main React UI thread
    const fire = confetti.create(canvas, { resize: true, useWorker: true });
    const burst = () => {
      const x = 0.1 + Math.random() * 0.8;
      const y = 0.04 + Math.random() * 0.24;
      fire({
        particleCount: isMobile ? 44 : 68,
        spread: isMobile ? 62 : 76,
        startVelocity: isMobile ? 28 : 36,
        ticks: isMobile ? 170 : 220,
        gravity: 0.84,
        scalar: isMobile ? 1.0 : 1.12,
        origin: { x, y },
        colors: ["#FFD700", "#FFF8DC", "#FF6B6B", "#87CEEB", "#E6E6FA", "#FFFFFF", "#FFA500"],
      });
      fire({
        particleCount: isMobile ? 22 : 32,
        angle: 60,
        spread: 54,
        origin: { x: Math.max(0.06, x - 0.08), y: Math.min(0.56, y + 0.08) },
        colors: ["#FFD700", "#FFA500", "#FFFFFF"],
      });
    };

    // Start after one frame so canvas dimensions are ready on all devices.
    const startId = window.requestAnimationFrame(() => burst());
    const intervalId = window.setInterval(burst, isMobile ? 560 : 460);
    const stopTimeout = window.setTimeout(() => {
      window.clearInterval(intervalId);
    }, isMobile ? 7500 : 9000);

    return () => {
      window.cancelAnimationFrame(startId);
      window.clearInterval(intervalId);
      window.clearTimeout(stopTimeout);
    };
  }, [active]);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 h-full w-full pointer-events-none" aria-hidden />;
}

function VarmalaFlowerShower() {
  const petals = useMemo(
    () =>
      Array.from({ length: 36 }, (_, i) => ({
        id: i,
        left: `${(i * 17 + Math.sin(i) * 13) % 100}%`,
        delay: (i % 12) * 0.35 + Math.random() * 0.4,
        // Faster fall: shorter animation duration per petal
        duration: 6 + Math.random() * 5.5,
        drift: -28 + Math.random() * 56,
        scale: 0.72 + Math.random() * 0.58,
        gradient: PINK_PETAL_GRADIENTS[i % PINK_PETAL_GRADIENTS.length],
        // Slightly larger petals for a denser flower shower
        petalW: 9 + Math.random() * 7,
        petalH: 18 + Math.random() * 15,
        baseRotate: -40 + Math.random() * 80,
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 
        CRITICAL iOS GPU FIX: 
        Safari drops completely to software CPU rendering if you use var() inside @keyframes for transform. 
        Instead, we mathematically generate pure, hard-coded keyframes for all 36 petals inside a scoped style block so the GPU guarantees hardware-acceleration!
      */}
      <style>
        {petals.map(p => `
          @keyframes petal-fall-${p.id} {
            0% { transform: translate(0, 0vh) rotate(${p.baseRotate}deg) scale(${p.scale}); opacity: 0; }
            15% { opacity: 0.78; }
            50% { transform: translate(${p.drift * 0.25}px, 59vh) rotate(${p.baseRotate + 48}deg) scale(${p.scale}); opacity: 0.72; }
            85% { opacity: 0.5; }
            100% { transform: translate(${p.drift * 0.55}px, 118vh) rotate(${p.baseRotate + 24}deg) scale(${p.scale}); opacity: 0; }
          }
        `).join('\n')}
      </style>

      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute select-none opacity-75"
          style={{
            willChange: "transform, opacity",
            left: p.left,
            top: "-6%",
            width: p.petalW,
            height: p.petalH,
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            background: p.gradient,
            animation: `petal-fall-${p.id} ${p.duration}s linear -${p.delay}s infinite`
          }}
          aria-hidden
        />
      ))}
    </div>
  );
}

function ReceptionPaparazziFlashes() {
  const flashes = useMemo(
    () =>
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        left: `${6 + Math.random() * 88}%`,
        top: `${6 + Math.random() * 88}%`,
        size: 80 + Math.random() * 140,
        delay: Math.random() * 10, // spread start offset over 10s
        duration: 8 + Math.random() * 8, // very slow 8s to 16s cycle time
      })),
    []
  );

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {flashes.map((f) => (
        <div
          key={f.id}
          className="absolute reception-paparazzi-flash"
          style={{
            left: f.left,
            top: f.top,
            width: f.size,
            height: f.size,
            marginLeft: -f.size / 2,
            marginTop: -f.size / 2,
            animation: `paparazzi-flash-burst ${f.duration}s ease-in-out -${f.delay}s infinite`
          }}
        />
      ))}
    </div>
  );
}

interface EventAtmosphereProps {
  variant: EventAtmosphereVariant;
}

const EventAtmosphere = memo(({ variant }: EventAtmosphereProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Trigger slightly before they enter the screen to ensure animations are already playing when viewed
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0,
    margin: "30% 0px 30% 0px",
  });

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden rounded-[inherit] transition-opacity duration-700 ${!isInView ? 'paused-animation opacity-0' : 'opacity-100'}`}
    >
      {/* 
        Permanently mount the elements so React doesn't cause Main-Thread jank by destroying/rebuilding 
        DOM nodes while the user is actively scrolling. CSS paused-animation kills the GPU cost entirely.
      */}
      {variant === "haldi" && <HaldiYellowBursts />}
      {variant === "sangeet" && <SangeetSkyCrackers active={isInView} />}
      {variant === "varmala" && <VarmalaFlowerShower />}
      {variant === "reception" && <ReceptionPaparazziFlashes />}
    </div>
  );
});

EventAtmosphere.displayName = 'EventAtmosphere';
export default EventAtmosphere;
