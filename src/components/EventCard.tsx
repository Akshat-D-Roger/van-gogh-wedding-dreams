import { motion } from "framer-motion";
import flowerCorner from "@/assets/FlowerCorner.png";

type EventTheme = 'yellow' | 'black' | 'pink' | 'blue';

interface EventCardProps {
    title: string;
    date: string;
    time: string;
    description: string;
    delay?: number;
    theme?: EventTheme;
}

const themeStyles: Record<EventTheme, { innerBg: string; titleColor: string; textColor: string; buttonColor: string }> = {
    yellow: {
        innerBg: "bg-gradient-to-br from-[#FFFACD] via-[#FFE4B5] to-[#FFD700]", // LemonChiffon -> Moccasin -> Gold
        titleColor: "text-[#8B7355]",
        textColor: "text-[#6B5A45]",
        buttonColor: "text-[#8B7355] border-[#8B7355]"
    },
    black: {
        innerBg: "bg-gradient-to-br from-gray-800 via-black to-gray-900", // Shiny Black Gradient
        titleColor: "text-gold-light",
        textColor: "text-gold-light/80",
        buttonColor: "text-gold-light border-gold-light"
    },
    pink: {
        innerBg: "bg-gradient-to-br from-[#FFF0F5] via-[#FCE6EB] to-[#FFB7B2]", // Soft Pastel Pink Gradient
        titleColor: "text-[#8B5E5E]",
        textColor: "text-[#6D4C4C]",
        buttonColor: "text-[#8B5E5E] border-[#8B5E5E]"
    },
    blue: {
        innerBg: "bg-gradient-to-br from-[#0F2027] via-[#203A43] to-[#2C5364]", // Midnight/Teal Deep Gradient
        titleColor: "text-gold-light",
        textColor: "text-gold-light/90",
        buttonColor: "text-gold-light border-gold-light"
    }
};

const EventCard = ({ title, date, time, description, delay = 0, theme = 'yellow' }: EventCardProps) => {
    const styles = themeStyles[theme];

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: "easeOut" }}
            className="relative w-full max-w-[300px] mx-auto my-8"
        >
            {/* Main Colored Card */}
            <div className={`relative ${styles.innerBg} rounded-[1.5rem] p-6 flex flex-col items-center justify-center text-center h-[340px] shadow-2xl border border-white/20 transition-colors duration-500`}>

                {/* Inner Decorative Frame */}
                <div className={`absolute inset-3 border ${styles.buttonColor.split(' ')[1]} opacity-30 rounded-[1rem] pointer-events-none`} />

                {/* Title */}
                <h3 className={`font-display text-2xl sm:text-3xl ${styles.titleColor} mb-3 tracking-widest uppercase relative z-10`}>
                    {title}
                </h3>

                {/* Description */}
                <p className={`font-elegant text-xs sm:text-sm italic ${styles.textColor} mb-3 px-2 relative z-10`}>
                    {description}
                </p>

                {/* Divider */}
                <div className={`w-12 h-[1px] ${styles.titleColor.replace('text-', 'bg-')} opacity-30 mb-4 relative z-10`} />

                {/* Details */}
                <div className={`font-elegant ${styles.textColor} space-y-1 relative z-10`}>
                    <p className="uppercase tracking-widest text-xs font-semibold">{date}</p>
                    <p className="text-base italic">{time}</p>
                </div>

                {/* Flower Decorations - Absolute on Card */}
                <img
                    src={flowerCorner}
                    alt="Flower decoration"
                    className="absolute -top-3 -right-3 w-32 sm:w-48 z-20 drop-shadow-2xl brightness-105"
                />
                <img
                    src={flowerCorner}
                    alt="Flower decoration"
                    className="absolute -bottom-3 -left-3 w-32 sm:w-48 z-20 drop-shadow-2xl brightness-105 rotate-180"
                />
            </div>
        </motion.div>
    );
};

export default EventCard;
