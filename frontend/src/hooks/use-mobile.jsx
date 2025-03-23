"use client";

import { useState, useEffect, useCallback } from "react";

export function useIsMobile() {
  // Start with null to avoid hydration mismatch
  const [isMobile, setIsMobile] = useState(null);
  
  // Memoize the resize handler
  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Set initial value
    handleResize();
    
    // Add event listener with passive option for better performance
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  // Return false during SSR, then the actual value after hydration
  return isMobile === null ? false : isMobile;
}