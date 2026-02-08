import { motion } from "framer-motion";
import StarryBackground from "@/components/StarryBackground";
import PalaceSection from "@/components/PalaceSection";
import EventsSection from "@/components/EventsSection";
import SeeTheRoute from "@/components/SeeTheRoute";
import CoupleSection from "@/components/CoupleSection";
import RSVPSection from "@/components/RSVPSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-transparent selection:bg-gold/30 selection:text-gold-light">
      {/* GLOBAL STAR BACKGROUND - Fixed */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-background">
        <StarryBackground />
      </div>

      <div className="relative z-10 w-full">
        {/* HERO SECTION */}
        {/* We use min-h-[70vh] so the text is centered in the upper portion, 
            leaving room for the Palace to peek up from the bottom of the fold. */}
        <section className="relative min-h-[75vh] flex flex-col items-center justify-center px-6 pt-20 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.div
              initial={{ y: 400, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="flex flex-col items-center justify-center text-center pb-20"
            >
              <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-[#FFFDD0] tracking-widest leading-none drop-shadow-lg">
                SRISHTI
              </h1>

              <p className="font-elegant text-2xl sm:text-4xl md:text-5xl text-[#FFFDD0]/90 tracking-[0.3em] my-6 sm:my-8 uppercase">
                WEDS
              </p>

              <h1 className="font-display text-6xl sm:text-8xl md:text-9xl text-[#FFFDD0] tracking-widest leading-none drop-shadow-lg">
                PARTH
              </h1>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { delay: 2, duration: 1 },
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="flex flex-col items-center gap-2"
            >
              <span className="font-elegant text-gold-light/80 text-xs tracking-[0.2em] uppercase">Scroll</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-gold-light/80 to-transparent" />
            </motion.div>
          </motion.div>
        </section>

        {/* PALACE SECTION */}
        {/* "Comes from bottom" effect: Initial transform y and opacity */}
        <motion.div
          initial={{ y: 400, opacity: 1 }}
          animate={{ y: -100, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full -mt-40 sm:-mt-40 pointer-events-none"
        >
          <PalaceSection />
        </motion.div>

        {/* REST OF CONTENT - Background gradient to blend */}
        <div className="relative -mt-1">
          <EventsSection />
          <SeeTheRoute />
          {/* Couple Section - Overlaps the sticky map section */}
          <div className="relative z-20 -mt-[100vh]">
            <CoupleSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
