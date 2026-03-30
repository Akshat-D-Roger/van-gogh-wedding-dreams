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
    { id: 1, left: "10%", top: "15%", duration: 14, delay: 0, rotation: -3, twinkleDuration: 3, moveRange: 15, scale: 1.2, size: "w-28" },
    { id: 2, left: "85%", top: "25%", duration: 16, delay: 1, rotation: 4, twinkleDuration: 4, moveRange: -15, scale: 1.1, size: "w-28" },
    { id: 3, left: "25%", top: "45%", duration: 15, delay: 0.5, rotation: -2, twinkleDuration: 3.5, moveRange: 20, scale: 1.2, size: "w-28" },
    { id: 4, left: "75%", top: "70%", duration: 13, delay: 1.5, rotation: 5, twinkleDuration: 2.8, moveRange: -20, scale: 1.1, size: "w-28" },

    // MEDIUM Lanterns (6)
    { id: 5, left: "15%", top: "5%", duration: 12, delay: 0.5, rotation: -2, twinkleDuration: 3, moveRange: 10, scale: 0.9, size: "w-20" },
    { id: 6, left: "70%", top: "10%", duration: 14, delay: 1.5, rotation: 3, twinkleDuration: 3.5, moveRange: -10, scale: 0.8, size: "w-20" },
    { id: 7, left: "45%", top: "35%", duration: 18, delay: 1.2, rotation: -5, twinkleDuration: 2.5, moveRange: 10, scale: 0.9, size: "w-20" },
    { id: 8, left: "60%", top: "55%", duration: 15, delay: 2, rotation: 5, twinkleDuration: 4, moveRange: -15, scale: 0.8, size: "w-20" },
    { id: 9, left: "20%", top: "80%", duration: 16, delay: 1, rotation: -3, twinkleDuration: 3.2, moveRange: 10, scale: 0.9, size: "w-20" },
    { id: 10, left: "80%", top: "90%", duration: 14, delay: 0.5, rotation: 4, twinkleDuration: 2.8, moveRange: -10, scale: 0.8, size: "w-20" },

    // SMALL Lanterns (4) - Background
    { id: 11, left: "2%", top: "8%", duration: 15, delay: 0, rotation: -2, twinkleDuration: 2.5, moveRange: 5, scale: 0.6, size: "w-12" },
    { id: 12, left: "50%", top: "25%", duration: 16, delay: 0.6, rotation: -4, twinkleDuration: 3.4, moveRange: 5, scale: 0.6, size: "w-12" },
    { id: 13, left: "38%", top: "92%", duration: 15, delay: 2.2, rotation: -2, twinkleDuration: 3.9, moveRange: 5, scale: 0.6, size: "w-12" },
    { id: 14, left: "92%", top: "60%", duration: 17, delay: 1, rotation: 5, twinkleDuration: 2.7, moveRange: -5, scale: 0.5, size: "w-12" },
];
