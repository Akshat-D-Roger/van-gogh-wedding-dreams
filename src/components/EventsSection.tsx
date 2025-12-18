import { motion } from "framer-motion";
import type { Variants, Easing } from "framer-motion";

const events = [
  {
    name: "Mehndi Ceremony",
    date: "December 26, 2025",
    time: "4:00 PM",
    venue: "Bride's Residence",
    description: "An evening of henna, music, and celebration"
  },
  {
    name: "Sangeet Night",
    date: "December 27, 2025",
    time: "7:00 PM",
    venue: "Palace Banquet Hall",
    description: "Dance, music, and joyous celebrations"
  },
  {
    name: "Wedding Ceremony",
    date: "December 28, 2025",
    time: "6:00 PM",
    venue: "Royal Palace Gardens",
    description: "The sacred union of two souls"
  },
  {
    name: "Reception",
    date: "December 29, 2025",
    time: "7:00 PM",
    venue: "Grand Ballroom",
    description: "A grand celebration with family and friends"
  }
];

const easeOut: Easing = [0.4, 0, 0.2, 1];

const EventsSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="px-6 py-16"
    >
      <motion.h3 
        variants={itemVariants}
        className="font-display text-2xl text-center text-gradient-gold text-shadow-glow mb-10"
      >
        Wedding Events
      </motion.h3>

      <div className="space-y-4 max-w-md mx-auto">
        {events.map((event, index) => (
          <motion.div
            key={event.name}
            variants={itemVariants}
            className="relative bg-card/40 backdrop-blur-sm border border-gold/20 rounded-lg p-5 overflow-hidden group"
          >
            {/* Shimmer effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-display text-gold text-lg">{event.name}</h4>
                <span className="font-elegant text-gold-light/60 text-sm">{event.time}</span>
              </div>
              <p className="font-elegant text-foreground/60 text-sm mb-1">{event.date}</p>
              <p className="font-elegant text-muted-foreground text-sm mb-2">{event.venue}</p>
              <p className="font-elegant text-foreground/80 text-sm italic">{event.description}</p>
            </div>

            {/* Left accent line */}
            <div 
              className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-light via-gold to-gold-dark"
              style={{ animationDelay: `${index * 0.2}s` }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default EventsSection;
