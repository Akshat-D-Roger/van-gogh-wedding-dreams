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

export const lanterns: LanternConfig[] = [
    // LARGE Lanterns (8) - Closer to viewer
    { id: 1, left: "10%", top: "15%", duration: 14, delay: 0, rotation: -3, twinkleDuration: 3, moveRange: 15, scale: 1.2, size: "w-28 sm:w-36" },
    { id: 2, left: "85%", top: "25%", duration: 16, delay: 1, rotation: 4, twinkleDuration: 4, moveRange: -15, scale: 1.1, size: "w-28 sm:w-36" },
    { id: 3, left: "25%", top: "45%", duration: 15, delay: 0.5, rotation: -2, twinkleDuration: 3.5, moveRange: 20, scale: 1.2, size: "w-28 sm:w-36" },
    { id: 4, left: "75%", top: "60%", duration: 13, delay: 1.5, rotation: 5, twinkleDuration: 2.8, moveRange: -20, scale: 1.1, size: "w-28 sm:w-36" },
    { id: 5, left: "5%", top: "80%", duration: 17, delay: 0.2, rotation: -4, twinkleDuration: 3.2, moveRange: 15, scale: 1.2, size: "w-28 sm:w-36" },
    { id: 6, left: "90%", top: "90%", duration: 14, delay: 2, rotation: 3, twinkleDuration: 4.1, moveRange: -15, scale: 1.1, size: "w-28 sm:w-36" },
    { id: 7, left: "45%", top: "35%", duration: 18, delay: 1.2, rotation: -5, twinkleDuration: 2.5, moveRange: 10, scale: 1.2, size: "w-28 sm:w-36" },
    { id: 8, left: "55%", top: "70%", duration: 15, delay: 0.8, rotation: 6, twinkleDuration: 3.7, moveRange: -10, scale: 1.1, size: "w-28 sm:w-36" },

    // MEDIUM Lanterns (14) - Mid ground
    { id: 9, left: "15%", top: "5%", duration: 12, delay: 0.5, rotation: -2, twinkleDuration: 3, moveRange: 10, scale: 0.9, size: "w-20 sm:w-28" },
    { id: 10, left: "70%", top: "10%", duration: 14, delay: 1.5, rotation: 3, twinkleDuration: 3.5, moveRange: -10, scale: 0.8, size: "w-20 sm:w-28" },
    { id: 11, left: "35%", top: "20%", duration: 13, delay: 0, rotation: -4, twinkleDuration: 2.8, moveRange: 15, scale: 0.9, size: "w-20 sm:w-28" },
    { id: 12, left: "60%", top: "30%", duration: 15, delay: 2, rotation: 5, twinkleDuration: 4, moveRange: -15, scale: 0.8, size: "w-20 sm:w-28" },
    { id: 13, left: "20%", top: "40%", duration: 16, delay: 1, rotation: -3, twinkleDuration: 3.2, moveRange: 10, scale: 0.9, size: "w-20 sm:w-28" },
    { id: 14, left: "80%", top: "50%", duration: 14, delay: 0.5, rotation: 4, twinkleDuration: 2.5, moveRange: -10, scale: 0.8, size: "w-20 sm:w-28" },
    { id: 15, left: "30%", top: "65%", duration: 13, delay: 1.5, rotation: -5, twinkleDuration: 3.7, moveRange: 15, scale: 0.9, size: "w-20 sm:w-28" },
    { id: 16, left: "65%", top: "75%", duration: 15, delay: 0.2, rotation: 2, twinkleDuration: 3, moveRange: -15, scale: 0.8, size: "w-20 sm:w-28" },
    { id: 17, left: "12%", top: "85%", duration: 17, delay: 2, rotation: -6, twinkleDuration: 4.2, moveRange: 10, scale: 0.9, size: "w-20 sm:w-28" },
    { id: 18, left: "88%", top: "0%", duration: 14, delay: 1, rotation: 3, twinkleDuration: 2.8, moveRange: -10, scale: 0.8, size: "w-20 sm:w-28" },
    { id: 19, left: "40%", top: "12%", duration: 16, delay: 0.8, rotation: -4, twinkleDuration: 3.5, moveRange: 15, scale: 0.9, size: "w-20 sm:w-28" },
    { id: 20, left: "50%", top: "55%", duration: 13, delay: 1.2, rotation: 5, twinkleDuration: 2.9, moveRange: -15, scale: 0.8, size: "w-20 sm:w-28" },
    { id: 21, left: "8%", top: "95%", duration: 15, delay: 0.5, rotation: -2, twinkleDuration: 3.8, moveRange: 10, scale: 0.9, size: "w-20 sm:w-28" },
    { id: 22, left: "95%", top: "20%", duration: 14, delay: 1.8, rotation: 6, twinkleDuration: 3.1, moveRange: -10, scale: 0.8, size: "w-20 sm:w-28" },

    // SMALL Lanterns (14) - Background
    { id: 23, left: "2%", top: "8%", duration: 15, delay: 0, rotation: -2, twinkleDuration: 2.5, moveRange: 5, scale: 0.6, size: "w-12 sm:w-16" },
    { id: 24, left: "98%", top: "18%", duration: 18, delay: 1, rotation: 3, twinkleDuration: 3, moveRange: -5, scale: 0.5, size: "w-12 sm:w-16" },
    { id: 25, left: "22%", top: "28%", duration: 16, delay: 2, rotation: -4, twinkleDuration: 3.5, moveRange: 5, scale: 0.6, size: "w-12 sm:w-16" },
    { id: 26, left: "78%", top: "38%", duration: 14, delay: 0.5, rotation: 5, twinkleDuration: 2.8, moveRange: -5, scale: 0.5, size: "w-12 sm:w-16" },
    { id: 27, left: "18%", top: "58%", duration: 17, delay: 1.5, rotation: -3, twinkleDuration: 3.2, moveRange: 5, scale: 0.6, size: "w-12 sm:w-16" },
    { id: 28, left: "82%", top: "68%", duration: 15, delay: 0.2, rotation: 4, twinkleDuration: 4, moveRange: -5, scale: 0.5, size: "w-12 sm:w-16" },
    { id: 29, left: "28%", top: "88%", duration: 13, delay: 1.2, rotation: -5, twinkleDuration: 2.9, moveRange: 5, scale: 0.6, size: "w-12 sm:w-16" },
    { id: 30, left: "72%", top: "98%", duration: 16, delay: 0.8, rotation: 2, twinkleDuration: 3.7, moveRange: -5, scale: 0.5, size: "w-12 sm:w-16" },
    { id: 31, left: "42%", top: "5%", duration: 14, delay: 1.8, rotation: -6, twinkleDuration: 2.6, moveRange: 5, scale: 0.6, size: "w-12 sm:w-16" },
    { id: 32, left: "58%", top: "15%", duration: 18, delay: 0.4, rotation: 3, twinkleDuration: 3.3, moveRange: -5, scale: 0.5, size: "w-12 sm:w-16" },
    { id: 33, left: "38%", top: "92%", duration: 15, delay: 2.2, rotation: -2, twinkleDuration: 3.9, moveRange: 5, scale: 0.6, size: "w-12 sm:w-16" },
    { id: 34, left: "62%", top: "82%", duration: 17, delay: 1, rotation: 5, twinkleDuration: 2.7, moveRange: -5, scale: 0.5, size: "w-12 sm:w-16" },
    { id: 35, left: "50%", top: "25%", duration: 16, delay: 0.6, rotation: -4, twinkleDuration: 3.4, moveRange: 5, scale: 0.6, size: "w-12 sm:w-16" },
    { id: 36, left: "50%", top: "75%", duration: 14, delay: 1.4, rotation: 4, twinkleDuration: 3.1, moveRange: -5, scale: 0.5, size: "w-12 sm:w-16" },
];
