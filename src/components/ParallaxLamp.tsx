import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxLampProps {
  className?: string;
  speed?: number;
  size?: "sm" | "md" | "lg";
  delay?: number;
}

const sizeMap = {
  sm: { lamp: "w-5 h-6", flame: "w-2.5 h-4", glow: "w-16 h-16" },
  md: { lamp: "w-7 h-8", flame: "w-3.5 h-5", glow: "w-24 h-24" },
  lg: { lamp: "w-9 h-10", flame: "w-4.5 h-6", glow: "w-32 h-32" },
};

const ParallaxLamp = ({ 
  className = "", 
  speed = 0.5, 
  size = "md",
  delay = 0 
}: ParallaxLampProps) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200 * speed]);

  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 1, ease: "easeOut" }}
      className={`absolute ${className} pointer-events-none`}
    >
      <motion.div
        animate={{ 
          y: [0, -12, 0],
          rotate: [-3, 3, -3]
        }}
        transition={{ 
          duration: 4 + delay, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative flex flex-col items-center"
      >
        {/* Outer ambient glow */}
        <motion.div 
          animate={{
            opacity: [0.4, 0.7, 0.4],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2 + delay * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute ${sizeMap[size].glow} rounded-full blur-2xl`}
          style={{
            background: "radial-gradient(circle, hsla(40, 100%, 60%, 0.7) 0%, hsla(35, 100%, 50%, 0.3) 40%, transparent 70%)",
            top: "-50%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        
        {/* Inner bright glow */}
        <motion.div 
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-6 h-6 rounded-full blur-md"
          style={{
            background: "radial-gradient(circle, hsla(45, 100%, 70%, 0.9) 0%, transparent 70%)",
            top: "-8px",
          }}
        />
        
        {/* Flame */}
        <motion.div
          animate={{
            scaleY: [1, 1.3, 0.85, 1.15, 1],
            scaleX: [1, 0.85, 1.15, 0.9, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`${sizeMap[size].flame} relative z-10`}
          style={{
            background: "linear-gradient(to top, hsl(20, 100%, 50%), hsl(40, 100%, 55%), hsl(50, 100%, 70%), hsl(55, 100%, 85%))",
            borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
            boxShadow: "0 0 8px hsl(45, 100%, 60%), 0 0 16px hsl(40, 100%, 55%), 0 0 24px hsl(35, 100%, 50%)",
          }}
        />
        
        {/* Diya bowl */}
        <div 
          className={`${sizeMap[size].lamp} relative -mt-0.5`}
          style={{
            background: "linear-gradient(160deg, hsl(35, 80%, 50%) 0%, hsl(30, 70%, 38%) 40%, hsl(25, 60%, 28%) 100%)",
            borderRadius: "10% 10% 50% 50% / 10% 10% 70% 70%",
            boxShadow: "inset 0 3px 6px rgba(255, 200, 100, 0.4), 0 3px 10px rgba(0, 0, 0, 0.4)",
          }}
        >
          {/* Oil reflection */}
          <div 
            className="absolute top-0.5 left-1/2 -translate-x-1/2 w-3/4 h-1 rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255, 200, 100, 0.4), transparent)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ParallaxLamp;
