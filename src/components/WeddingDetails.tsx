import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";

interface WeddingDetailsProps {
  delay?: number;
}

const easeOut: Easing = [0.4, 0, 0.2, 1];

const WeddingDetails = ({ delay = 0 }: WeddingDetailsProps) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="px-6 py-16 text-center"
    >
      {/* Ornate top border */}
      <motion.div variants={itemVariants} className="ornate-divider mx-auto max-w-xs mb-12" />

      <motion.p 
        variants={itemVariants}
        className="text-gold-light/80 font-elegant text-lg tracking-[0.3em] uppercase mb-4"
      >
        Together with their families
      </motion.p>

      <motion.h2 
        variants={itemVariants}
        className="font-display text-4xl md:text-5xl text-gradient-gold text-shadow-glow mb-2"
      >
        Arjun
      </motion.h2>

      <motion.p 
        variants={itemVariants}
        className="font-elegant text-gold/60 text-2xl italic my-4"
      >
        &
      </motion.p>

      <motion.h2 
        variants={itemVariants}
        className="font-display text-4xl md:text-5xl text-gradient-gold text-shadow-glow mb-8"
      >
        Priya
      </motion.h2>

      <motion.div variants={itemVariants} className="ornate-divider mx-auto max-w-xs mb-12" />

      <motion.p 
        variants={itemVariants}
        className="font-elegant text-foreground/80 text-xl mb-8"
      >
        Request the pleasure of your company<br />
        at the celebration of their marriage
      </motion.p>

      {/* Date */}
      <motion.div 
        variants={itemVariants}
        className="mb-10"
      >
        <p className="font-display text-gold-light text-sm tracking-[0.4em] uppercase mb-2">
          Save the Date
        </p>
        <p className="font-display text-3xl md:text-4xl text-gradient-gold text-shadow-glow">
          December 28, 2025
        </p>
        <p className="font-elegant text-foreground/70 text-lg mt-2">
          Saturday • 6:00 PM Onwards
        </p>
      </motion.div>

      {/* Venue */}
      <motion.div 
        variants={itemVariants}
        className="bg-card/50 backdrop-blur-sm border border-gold/20 rounded-lg p-6 max-w-sm mx-auto"
      >
        <p className="font-display text-gold-light text-sm tracking-[0.3em] uppercase mb-3">
          Venue
        </p>
        <p className="font-elegant text-foreground text-xl mb-1">
          The Royal Palace Gardens
        </p>
        <p className="font-elegant text-muted-foreground">
          123 Heritage Lane<br />
          Jaipur, Rajasthan
        </p>
      </motion.div>

      <motion.div variants={itemVariants} className="ornate-divider mx-auto max-w-xs mt-12" />
    </motion.div>
  );
};

export default WeddingDetails;
