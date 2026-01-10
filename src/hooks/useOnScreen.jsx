import { useEffect, useState } from "react";

const useOnScreen = (ref, threshold = 0.1) => {
  // State to store if the element is visible
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;

    // Safety check
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer triggers
        if (entry.isIntersecting) {
          setIntersecting(true);
          // OPTIMIZATION: Stop observing once visible (Trigger Once)
          // This saves performance so we don't keep checking scroll position
          observer.unobserve(currentRef);
        }
      },
      {
        threshold: threshold, // Trigger when X% is visible
        rootMargin: "0px", // Offset (optional)
      }
    );

    observer.observe(currentRef);

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref, threshold]); // Re-run if ref or threshold changes

  return isIntersecting;
};

export default useOnScreen;
