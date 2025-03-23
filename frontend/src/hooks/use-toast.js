"use client";

import { useToast as useToastOriginal } from "@/hooks/use-toast";

// Re-export with performance optimizations
export function useToast() {
  return useToastOriginal();
}