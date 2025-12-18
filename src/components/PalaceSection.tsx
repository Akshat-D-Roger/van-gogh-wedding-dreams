import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import goldenPalace from "@/assets/golden-palace.jpg";

const PalaceSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity, scale }}
      className="relative w-full overflow-hidden"
    >
      <motion.div 
        style={{ y }}
        className="relative"
      >
        <img 
          src={goldenPalace} 
          alt="Golden Indian palace" 
          className="w-full h-auto object-cover"
        />
        
        {/* Golden overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Top gradient blend */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default PalaceSection;
