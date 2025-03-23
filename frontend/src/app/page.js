"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Sparkles, 
  Bell, 
  ArrowRight, 
  Clock, 
  ChevronRight 
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import SiteFooter from "@/components/ui/site-footer";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isBellAnimated, setIsBellAnimated] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const statsRef = useRef(null);
  const iframeRef = useRef(null);
  const isMobile = useIsMobile();
  const { toast } = useToast();
  
  const words = ["CREATORS", "INFLUENCERS", "VISIONARIES", "INNOVATORS"];
  
  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  // Subscriber counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const currentStatsRef = statsRef.current;
    
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }
    
    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  // Animate subscriber count
  useEffect(() => {
    if (isStatsVisible) {
      const interval = setInterval(() => {
        setSubscriberCount((prev) => {
          const next = prev + 100;
          if (next >= 10000) {
            clearInterval(interval);
            return 10000;
          }
          return next;
        });
      }, 20);
      
      return () => clearInterval(interval);
    }
  }, [isStatsVisible]);

  // Bell animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBellAnimated(true);
      setTimeout(() => setIsBellAnimated(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Store the email for retry mechanism
      const emailToSubmit = email;
      
      // Reset form immediately for better UX
      setEmail('');
      
      // Trigger bell animation
      setIsBellAnimated(true);
      setTimeout(() => setIsBellAnimated(false), 1000);
      
      // Open beehiiv subscription in new tab
      const subscribeUrl = `https://embeds.beehiiv.com/32491422-c94a-40b2-baec-c90cbb498271?email=${encodeURIComponent(emailToSubmit)}`;
      window.open(subscribeUrl, '_blank');
      
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to The REACH Report.",
      });
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      });
      
      // Restore the email for retry
      setEmail(email);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ... rest of the component code remains the same ...
}