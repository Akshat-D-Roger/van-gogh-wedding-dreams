import { AnimatePresence, motion } from "framer-motion";

interface WelcomeOverlayProps {
  onEnter: () => void;
  isLoading: boolean;
}

const WelcomeOverlay = ({ onEnter, isLoading }: WelcomeOverlayProps) => {
  return (
    <div 
      onClick={!isLoading ? onEnter : undefined}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0a0f] text-gold-light p-4 overflow-hidden ${!isLoading ? 'cursor-pointer' : 'cursor-wait'}`}
    >
      <div className="text-center flex flex-col items-center max-w-lg w-full pointer-events-none">
        <h1 className="font-elegant text-2xl md:text-3xl tracking-[0.1em] leading-relaxed">
          You are invited to the wedding of
          <span className="block font-display text-4xl md:text-5xl mt-8">Srishti & Parth</span>
        </h1>
        
        <div className="mt-16 h-12 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.p
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="font-elegant tracking-[0.2em] text-gold/70 text-sm uppercase animate-pulse"
              >
                Loading website...
              </motion.p>
            ) : (
              <motion.button
                key="loaded"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }} // Slow, elegant reveal of the button
                className="px-8 py-3 bg-transparent font-elegant tracking-[0.15em] text-[#FFFDD0] animate-pulse transition-opacity hover:opacity-80"
              >
                TAP TO VIEW INVITE
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOverlay;
