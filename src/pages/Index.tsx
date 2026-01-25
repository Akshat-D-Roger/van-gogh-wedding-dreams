import { animate, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import StarryBackground from "@/components/StarryBackground";
import PalaceSection from "@/components/PalaceSection";
import WeddingDetails from "@/components/WeddingDetails";
import EventsSection from "@/components/EventsSection";
import RSVPSection from "@/components/RSVPSection";

const Index = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 0.15], [0, -50]);


  const palaceSceneRef = useRef(null);

  const { scrollYProgress: palaceProgress } = useScroll({
    target: palaceSceneRef,
    offset: ["start start", "end start"],
  });


  const palaceY = useMotionValue("100%");
  const scrollDrivenY = useTransform(
    palaceProgress,
    [0, 1],
    ["70%", "-100%"]
  );

  const waterOpacity = useTransform(palaceProgress, [0, 0.5], [0, 1]);

  useEffect(() => {
    const controls = animate(palaceY, "70%", {
      duration: 2,
      ease: [0.22, 1, 0.36, 1], // cinematic
    });
    return controls.stop;
  }, []);

  useEffect(() => {
    return scrollDrivenY.on("change", (v) => {
      palaceY.set(v);
    });
  }, [scrollDrivenY]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background overflow-x-hidden hide-scrollbar"
    >
      {/* GLOBAL STAR BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarryBackground />
      </div>

      <section className="fixed inset-0 h-[100svh] z-20 pointer-events-none flex items-center justify-center overflow-hidden">

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          className="relative z-10 text-center px-6"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-elegant text-gold-light/90 text-xs sm:text-sm tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4"
          >
            You are cordially invited to
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl md:text-7xl text-gradient-gold text-shadow-glow mb-4 sm:mb-6 leading-tight"
          >
            A Royal<br />Wedding
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="ornate-divider mx-auto max-w-[160px] sm:max-w-[200px] mb-4 sm:mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="font-elegant text-foreground text-lg sm:text-xl italic"
          >
            Srishti & Parth
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-[-100px] sm:bottom-[-120px] left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1.5 sm:gap-2"
            >
              <p className="font-elegant text-gold/60 text-[10px] sm:text-xs tracking-widest uppercase">
                Scroll
              </p>
              <div className="w-px h-6 sm:h-8 bg-gradient-to-b from-gold/60 to-transparent" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Palace Section with Parallax */}
      <section
        ref={palaceSceneRef}
        className="relative h-[200svh] z-10"
      >
        <motion.div
          style={{ y: palaceY }}
          className="fixed bottom-0 left-0 w-full h-[100svh] z-10"
        >
          <PalaceSection />
        </motion.div>
        {/* spacer equal to one viewport so the fixed palace has room to move and
            the following content (WaterSection) starts below the fort */}
        <div className="h-[100svh]" />
        {/* <WaterSection palaceProgress={palaceProgress} /> */}
      </section>

      <section className="relative bg-gradient-to-b from-background via-card/30 to-background">
        <WeddingDetails delay={0.2} />
      </section>

      <section className="relative">
        <EventsSection />
      </section>

      <section className="relative bg-gradient-to-b from-background to-card/50 pb-8">
        <RSVPSection />
      </section>
    </div>
  );
};

export default Index;
