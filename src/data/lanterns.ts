export interface LanternConfig {
    id: number;
    left: string;
    top: string;
    duration: number;
    delay: number;
    rotation: number;
    twinkleDuration: number;
    moveRange: number;
    scale: number;
    size: string;
}

// Reduced set for mobile performance (~14 lanterns instead of 36)
export const lanterns: LanternConfig[] = [
    // LARGE Lanterns (4)
    { id: 1, left: "10%", top: "42%", duration: 14, delay: 0, rotation: -3, twinkleDuration: 3, moveRange: 15, scale: 0.9, size: "w-[22.3vw] sm:w-24" },
    { id: 2, left: "75%", top: "2%", duration: 16, delay: 1, rotation: 4, twinkleDuration: 4, moveRange: -15, scale: 0.9, size: "w-[22.3vw] sm:w-24" },
    { id: 3, left: "65%", top: "75%", duration: 15, delay: 0.5, rotation: -2, twinkleDuration: 3.5, moveRange: -15, scale: 0.9, size: "w-[22.3vw] sm:w-24" },
    // { id: 4, left: "75%", top: "70%", duration: 13, delay: 1.5, rotation: 5, twinkleDuration: 2.8, moveRange: -20, scale: 1.1, size: "w-24" },

    // MEDIUM Lanterns (6)
    { id: 5, left: "5%", top: "18%", duration: 12, delay: 0.5, rotation: -2, twinkleDuration: 3, moveRange: 10, scale: 0.9, size: "w-[18.6vw] sm:w-20" },
    { id: 5, left: "20%", top: "1%", duration: 12, delay: 0.5, rotation: -2, twinkleDuration: 3, moveRange: 10, scale: 0.9, size: "w-[18.6vw] sm:w-20" },
    { id: 6, left: "80%", top: "15%", duration: 14, delay: 1.5, rotation: 3, twinkleDuration: 3.5, moveRange: -10, scale: 0.8, size: "w-[18.6vw] sm:w-20" },
    { id: 7, left: "75%", top: "40%", duration: 18, delay: 1.2, rotation: -5, twinkleDuration: 2.5, moveRange: 10, scale: 0.9, size: "w-[18.6vw] sm:w-20" },
    { id: 8, left: "60%", top: "55%", duration: 15, delay: 2, rotation: 5, twinkleDuration: 4, moveRange: -15, scale: 0.8, size: "w-[18.6vw] sm:w-20" },
    { id: 9, left: "10%", top: "70%", duration: 16, delay: 1, rotation: -3, twinkleDuration: 3.2, moveRange: 10, scale: 0.9, size: "w-[18.6vw] sm:w-20" },
    { id: 10, left: "20%", top: "90%", duration: 14, delay: 0.5, rotation: 4, twinkleDuration: 2.8, moveRange: -10, scale: 0.8, size: "w-[18.6vw] sm:w-20" },

    // SMALL Lanterns (4) - Background
    { id: 11, left: "2%", top: "8%", duration: 15, delay: 0, rotation: -2, twinkleDuration: 2.5, moveRange: 5, scale: 0.6, size: "w-[14.8vw] sm:w-16" },
    { id: 16, left: "50%", top: "25%", duration: 16, delay: 0.6, rotation: -4, twinkleDuration: 3.4, moveRange: 5, scale: 0.6, size: "w-[14.8vw] sm:w-16" },
    { id: 13, left: "68%", top: "92%", duration: 15, delay: 2.2, rotation: -2, twinkleDuration: 3.9, moveRange: 5, scale: 0.6, size: "w-[14.8vw] sm:w-16" },
    { id: 14, left: "10%", top: "60%", duration: 17, delay: 1, rotation: 5, twinkleDuration: 2.7, moveRange: -5, scale: 0.5, size: "w-[14.8vw] sm:w-16" },
];
