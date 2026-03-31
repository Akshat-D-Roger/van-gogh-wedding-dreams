import { useState, useCallback, useRef } from 'react';

export const useCinematicScroll = () => {
  const [isRecording, setIsRecording] = useState(false);
  const frameRef = useRef<number>(null);

  const startCinematicScroll = useCallback(() => {
    setIsRecording(true);

    // 150ms layout flush delay ensures React cleanly paints 10000px+ height into the DOM
    setTimeout(() => {
      // 🚨 CRITICAL FIX: Kill all native CSS Snap mechanics AND smooth-scroll behaviors.
      // If we don't disable 'smooth', the browser completely freezes window.scrollTo() loop executions!
      document.documentElement.style.scrollSnapType = 'none';
      document.documentElement.style.scrollBehavior = 'auto';

      let currentScrollY = window.scrollY;

      // Calculate a base speed using the currently known height, roughly 60 seconds.
      // We clamp it to a minimum of 4 pixels/frame so it never slows to a crawl if the 
      // initial hydration height happened to be tiny due to strict mobile image lazy-loading.
      const initialScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollSpeed = (initialScrollHeight / (60 * 120));

      const scrollStep = () => {
        // ALWAYS recalculate the absolute bottom boundary natively every frame! 
        // This guarantees we never stop early if lazy-loaded images structurally bump the page down while scrolling.
        const dynamicTargetScrollY = document.documentElement.scrollHeight - window.innerHeight;

        currentScrollY += scrollSpeed;

        if (currentScrollY >= dynamicTargetScrollY) {
          window.scrollTo(0, dynamicTargetScrollY);
          setIsRecording(false);
          // Restore snap physics to normal
          document.documentElement.style.scrollSnapType = '';
          document.documentElement.style.scrollBehavior = '';
          console.log("🛑 Cinematic Recording Stopped!");
          return;
        }

        window.scrollTo(0, currentScrollY);
        // @ts-ignore
        frameRef.current = requestAnimationFrame(scrollStep);
      };

      // @ts-ignore
      frameRef.current = requestAnimationFrame(scrollStep);
      console.log("🎬 Cinematic Recording Started!");
    }, 5000);
  }, []);

  const stopCinematicScroll = useCallback(() => {
    setIsRecording(false);
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
      document.documentElement.style.scrollSnapType = '';
      document.documentElement.style.scrollBehavior = '';
      console.log("🛑 Cinematic Recording Stopped manually!");
    }
  }, []);

  return { isRecording, startCinematicScroll, stopCinematicScroll };
};
