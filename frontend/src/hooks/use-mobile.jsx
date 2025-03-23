"use client";

import { useState, useEffect, useCallback } from "react";

export function useIsMobile() {
  // Start with a reasonable default based on common mobile breakpoint
  const [isMobile, setIsMobile] = useState(false);
  
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

  return isMobile;
}