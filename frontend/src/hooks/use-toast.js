"use client";

import { useToast as useToastOriginal } from "@/components/ui/toast";

// Re-export with performance optimizations
export function useToast() {
  const { toast, dismiss } = useToastOriginal();
  
  // Return optimized toast function
  return {
    toast: (props) => {
      // Add default duration if not specified
      const options = {
        duration: 3000,
        ...props,
      };
      
      return toast(options);
    },
    dismiss,
  };
}