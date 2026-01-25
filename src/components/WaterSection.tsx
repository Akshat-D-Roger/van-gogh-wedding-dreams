import { motion, useTransform } from "framer-motion";

interface WaterSectionProps {
  palaceProgress: any;
}

const WaterSection = ({ palaceProgress }: WaterSectionProps) => {
  // Control visibility - only show when palace starts rising
  const waterOpacity = useTransform(
    palaceProgress,
    [0, 0.1, 0.2],
    [0, 0, 1]
  );

  // Transform palace progress to water width (starts small, goes to full width)
  const waterWidth = useTransform(
    palaceProgress,
    [0.2, 0.6, 1],
    ["40%", "100%", "100%"]
  );

  // Transform palace progress to text opacity
  const textOpacity = useTransform(
    palaceProgress,
    [0.4, 0.7, 0.9],
    [0, 0, 1]
  );

  const textY = useTransform(
    palaceProgress,
    [0.4, 0.9],
    [30, 0]
  );

  return (
    <motion.div 
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-[15] pointer-events-none"
      style={{ 
        width: waterWidth,
        height: "30vh",
        opacity: waterOpacity,
      }}
    >
      {/* Water background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-400/90 via-teal-500/95 to-teal-600 rounded-t-[20px] overflow-hidden">
        {/* Animated water ripples */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent"
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.6,
              }}
            />
          ))}
        </div>

        {/* Sparkles on water */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Text content */}
      <motion.div 
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ opacity: textOpacity, y: textY }}
      >
        <p className="font-elegant text-white/90 text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-2">
          With the heavenly blessings of
        </p>
        <p className="font-elegant text-white text-sm sm:text-base mb-1">
          Smt. Lata Devi & Sm. Kamal Kapoor
        </p>
        <p className="font-elegant text-white/90 text-xs sm:text-sm mb-3">
          and
        </p>
        <p className="font-elegant text-white text-sm sm:text-base mb-4">
          Mrs. Reena & Mr. Raju Kapoor
        </p>
        
        <div className="mt-3 mb-3">
          <p className="font-display text-white text-2xl sm:text-3xl tracking-wider mb-1">
            WE INVITE
          </p>
        </div>
        
        <p className="font-elegant text-white/90 text-xs sm:text-sm max-w-xs mb-3">
          You to join us in the wedding celebrations of
        </p>
        
        <div className="mt-2">
          <p className="font-display text-white text-xl sm:text-2xl text-shadow-glow">
            Abhishek
          </p>
          <p className="font-elegant text-white/80 text-lg sm:text-xl my-1">&</p>
          <p className="font-display text-white text-xl sm:text-2xl text-shadow-glow">
            Kanika
          </p>
        </div>

        <p className="font-elegant text-white/80 text-xs mt-3">
          Daughter of
        </p>
        <p className="font-elegant text-white text-xs sm:text-sm">
          Mrs. Shalini & Mr. Aakash Mittal
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WaterSection;