import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeOverlay from "@/components/WelcomeOverlay";
import WeddingApp from "@/components/WeddingApp";
import AudioPlayer from "@/components/AudioPlayer";
import { useAssetLoader } from "@/hooks/useAssetLoader";

const Index = () => {
  const isLoading = useAssetLoader();
  const [hasTapped, setHasTapped] = useState(false);

  return (
    <>
      {/* Audio player mounts globally alongside the state machine */}
      <AudioPlayer isUnlocked={hasTapped} />
      
      <AnimatePresence mode="wait">
        {!hasTapped && (
          <motion.div
            key="welcome"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100]"
          >
            <WelcomeOverlay onEnter={() => setHasTapped(true)} isLoading={isLoading} />
          </motion.div>
        )}

        {hasTapped && (
          <motion.div
            key="app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full min-h-screen"
          >
            <WeddingApp />
          </motion.div>
        )}
    </AnimatePresence>
    </>
  );
};

export default Index;
