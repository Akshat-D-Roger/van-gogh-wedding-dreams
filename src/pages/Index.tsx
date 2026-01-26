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
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.2em" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-elegant text-gold-light text-xl sm:text-2xl md:text-3xl font-medium mb-3 sm:mb-4"
            >
              You are cordially invited to
            </motion.p>

            <motion.h1
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="font-elegant text-gold-light text-xl sm:text-2xl md:text-3xl font-medium tracking-widest uppercase mb-4 sm:mb-6"
            >
              The Wedding of
            </motion.h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="h-[2px] w-24 sm:w-32 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent mb-6"
            />

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="font-display text-5xl sm:text-6xl md:text-8xl text-gradient-gold text-shadow-glow leading-tight mb-12 sm:mb-16"
            >
              Srishti & Parth
            </motion.p>

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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
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
