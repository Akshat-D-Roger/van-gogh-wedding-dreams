
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import frameImg from "@/assets/PictureFrame.png";

// Importing images manually - avoiding glob for better control/compatibility
import img1 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.23 PM.jpeg";
import img2 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.23 PM (1).jpeg";
import img3 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.24 PM.jpeg";
import img4 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.24 PM (1).jpeg";
import img5 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.25 PM.jpeg";
import img6 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.25 PM (1).jpeg";
import img7 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.26 PM.jpeg";
import img8 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.26 PM (1).jpeg";
import img9 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.27 PM.jpeg";
import img10 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.27 PM (1).jpeg";
import img11 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.44.27 PM (2).jpeg";
import img12 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.45.09 PM.jpeg";
import img13 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.46.22 PM.jpeg";
import img14 from "@/assets/Couple Pics/WhatsApp Image 2026-01-05 at 8.46.22 PM (1).jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

const CoupleSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000); // Change every 4 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center bg-[#FCE6EB] overflow-hidden px-6 py-20">

            {/* Titles */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center z-10 mb-10"
            >
                <h3 className="text-xl sm:text-2xl font-elegant text-[#6D4C4C] italic mb-2">
                    Made for each other
                </h3>
                <h2 className="text-4xl sm:text-6xl font-display text-[#6D4C4C] text-shadow-sm uppercase tracking-wider">
                    Meet the Groom & Bride
                </h2>
            </motion.div>

            {/* Frame Container */}
            <div className="relative w-[500px] h-[500px] flex items-center justify-center">

                {/* The Frame Image */}
                <img
                    src={frameImg}
                    alt="Frame"
                    className="absolute inset-0 w-full h-full object-contain z-20 pointer-events-none drop-shadow-xl"
                />
                {/* The Couple Photo */}
                {/* Adjust inset/padding to fit INSIDE the frame visually. 
            Since I don't know the exact rim size, I'll guess ~15% padding. */}
                <div className="absolute left-[19%] right-[19%] top-[16%] bottom-[16%] z-10 overflow-hidden bg-black/10">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            src={images[index]}
                            alt="Couple"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>
                </div>

            </div>

        </section>
    );
};

export default CoupleSection;
