import { useEffect } from "react";
import { useCinematicScroll } from "@/hooks/useCinematicScroll";

export const CinematicRecorder = () => {
  const { startCinematicScroll } = useCinematicScroll();

  useEffect(() => {
    // Feature Flag Check!
    const params = new URLSearchParams(window.location.search);
    if (params.get("record") === "true") {
      // Because WeddingApp mounts strictly after the WelcomeOverlay tap,
      // this securely triggers the smooth scroll loop automatically completely hands-free!
      startCinematicScroll();
    }
  }, [startCinematicScroll]);

  return null;
};
