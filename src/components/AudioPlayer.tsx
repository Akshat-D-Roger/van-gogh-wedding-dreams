import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface AudioPlayerProps {
  isUnlocked: boolean;
}

const AudioPlayer = ({ isUnlocked }: AudioPlayerProps) => {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (isUnlocked && audioRef.current) {
      // Play automatically when unlocked by the overlay button tap
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay blocked until further interaction", err);
      });
    }
  }, [isUnlocked]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        loop 
        preload="auto"
        src="/wedding-audio.mp3" 
      />

      {/* Floating mute/unmute control bound to the top right entirely independent of scroll */}
      <button
        onClick={toggleMute}
        className={`fixed top-4 right-4 z-[120] p-3 rounded-full bg-background/50 backdrop-blur-md border border-gold/30 text-gold shadow-lg transition-all duration-700 hover:scale-110 hover:border-gold ${
          isUnlocked ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {isMuted ? <VolumeX className="w-5 h-5 sm:w-6 sm:h-6" /> : <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />}
      </button>
    </>
  );
};

export default AudioPlayer;
