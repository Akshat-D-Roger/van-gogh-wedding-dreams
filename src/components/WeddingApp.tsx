import { motion, useScroll, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import StarryBackground from "@/components/StarryBackground";
import PalaceSection from "@/components/PalaceSection";
import EventsSection from "@/components/EventsSection";
import SeeTheRoute from "@/components/SeeTheRoute";
import CoupleSection from "@/components/CoupleSection";
import WarmRegardsSection from "@/components/WarmRegardsSection";
import { LanternLayer } from "@/components/LanternLayer";

const WeddingApp = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const topSectionRef = useRef<HTMLDivElement>(null);
  const isTopInView = useInView(topSectionRef, { margin: "0px 0px 100% 0px" });

  useEffect(() => {
    console.log("isTopInView changed:", isTopInView);
  }, [isTopInView]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-transparent selection:bg-gold/30 selection:text-gold-light relative">
      {/* GLOBAL STAR BACKGROUND - Fixed accurately to maximum glass to prevent URL bar resize jerks */}
      <div className="fixed top-0 left-0 w-full h-[100lvh] z-0 pointer-events-none bg-background">
        <StarryBackground active={isTopInView} />
      </div>

      <div className="relative z-10 w-full">
        <div ref={topSectionRef}>
          {/* LANTERNS LAYER - Synced with Palace Entrance */}
          <LanternLayer scrollYProgress={scrollYProgress} active={isTopInView} />

          {/* HERO SECTION */}
          {/* We use min-h-[50vh] so the text is centered perfectly. */}
          <section className="relative min-h-[50vh] flex flex-col items-center justify-center">
            <div className="text-center w-full max-w-[100vw] overflow-hidden">
              <motion.div
                initial={{ y: "75svh", opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="flex flex-col items-center justify-center text-center"
              >
                <h1 className="font-display text-5xl text-[#FFFDD0] tracking-widest leading-none drop-shadow-lg">
                  SRISHTI
                </h1>

                <p className="font-elegant text-2xl text-[#FFFDD0]/90 tracking-[0.3em] my-6 sm:my-8 uppercase">
                  WEDS
                </p>

                <h1 className="font-display text-5xl text-[#FFFDD0] tracking-widest leading-none drop-shadow-lg">
                  PARTH
                </h1>
              </motion.div>
            </div>
          </section>

          {/* PALACE SECTION */}
          <motion.div
            initial={{ y: "75svh", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="relative w-full pointer-events-none"
          >
            <PalaceSection />
          </motion.div>
        </div>

        {/* REST OF CONTENT - Background gradient to blend */}
        <div className="relative -mt-1">
          <EventsSection />
          <div>
            <SeeTheRoute />
          </div>
          {/* Couple Section - Overlaps the sticky map section */}
          <div className="relative z-20 -mt-[100vh]">
            <div className="pt-1">
              <CoupleSection />
            </div>
            <div>
              <WarmRegardsSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingApp;
