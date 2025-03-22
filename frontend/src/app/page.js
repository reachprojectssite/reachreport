"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ExternalLink, 
  Sparkles, 
  Bell, 
  ArrowRight, 
  Clock, 
  X, 
  ChevronRight 
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [email, setEmail] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isBellAnimated, setIsBellAnimated] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const statsRef = useRef(null);
  
  const words = ["CREATORS", "INFLUENCERS", "VISIONARIES", "INNOVATORS"];
  
  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
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
    
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
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
  
  // Interactive card effect
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Contact form submitted:", contactForm);
    // Reset form
    setContactForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  // Mock data for latest insights
  const latestInsights = [
    {
      id: 1,
      title: "The Rise of AI in Creator Marketing",
      excerpt: "How artificial intelligence is transforming content creation and audience targeting.",
      category: "Tech Trends",
      date: "May 15, 2025",
      image: "/images/ai-marketing.jpg"
    },
    {
      id: 2,
      title: "TikTok's Algorithm Update: What Creators Need to Know",
      excerpt: "Breaking down the latest changes and how to optimize your content strategy.",
      category: "Platform Updates",
      date: "May 8, 2025",
      image: "/images/tiktok-update.jpg"
    },
    {
      id: 3,
      title: "Monetization Strategies for Micro-Influencers",
      excerpt: "Effective ways to generate revenue with audiences under 100K followers.",
      category: "Monetization",
      date: "May 1, 2025",
      image: "/images/monetization.jpg"
    }
  ];

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white">
      {/* Enhanced background gradient elements with more hues focused on the hero section */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-200 blur-3xl opacity-60 animate-float-slow -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-70 animate-float-medium -z-10" />
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-pink-200 blur-3xl opacity-60 animate-float-fast -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-indigo-200 blur-3xl opacity-60 animate-float-reverse -z-10" />
      <div className="absolute top-3/4 left-1/4 w-60 h-60 rounded-full bg-yellow-100 blur-3xl opacity-50 animate-pulse-slow -z-10" />
      
      {/* New hero-specific hues */}
      <div className="absolute top-[15%] left-[10%] w-52 h-52 rounded-full bg-teal-100 blur-3xl opacity-50 animate-pulse-medium -z-10" />
      <div className="absolute top-[25%] right-[15%] w-44 h-44 rounded-full bg-rose-100 blur-3xl opacity-40 animate-float-reverse-slow -z-10" />
      <div className="absolute top-[5%] left-[30%] w-64 h-64 rounded-full bg-violet-100 blur-3xl opacity-50 animate-float-medium -z-10" />
      <div className="absolute top-[40%] left-[20%] w-48 h-48 rounded-full bg-emerald-100 blur-3xl opacity-40 animate-pulse-fast -z-10" />
      <div className="absolute top-[10%] right-[25%] w-56 h-56 rounded-full bg-amber-50 blur-3xl opacity-50 animate-float-slow -z-10" />
      
      {/* Header with ring around REACH X Dylan Huey */}
      <header className="flex justify-between items-center p-4 sm:p-5 relative z-20">
        <div className="font-bold text-base sm:text-lg border rounded-full px-3 py-1 sm:px-4 sm:py-1 bg-white">REACH X Dylan Huey</div>
        <Button variant="outline" className="rounded-full text-sm sm:text-base">Archive</Button>
      </header>
      
      {/* Main content */}
      <main className="w-[95%] sm:w-[90%] md:max-w-4xl mx-auto px-2 sm:px-4 pt-10 sm:pt-20 pb-16 sm:pb-32 relative z-10">
        {/* Hero Section with enhanced background effects */}
        <div className="text-center mb-10 sm:mb-16 relative">
          {/* Additional hero-specific inner hues */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 blur-3xl opacity-40 -z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-cyan-50 blur-2xl opacity-50 animate-pulse-slow -z-10"></div>
          <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-fuchsia-50 blur-2xl opacity-50 animate-float-medium -z-10"></div>
          
          <p className="text-gray-500 uppercase tracking-wider text-xs sm:text-sm mb-2 relative z-10">FOR THE NEXT GENERATION OF</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 relative h-16 sm:h-24 flex items-center justify-center z-10">
            <span className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500" 
                  style={{ opacity: currentWord === 0 ? 1 : 0 }}>
              {words[0]}
            </span>
            <span className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500" 
                  style={{ opacity: currentWord === 1 ? 1 : 0 }}>
              {words[1]}
            </span>
            <span className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500" 
                  style={{ opacity: currentWord === 2 ? 1 : 0 }}>
              {words[2]}
            </span>
            <span className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500" 
                  style={{ opacity: currentWord === 3 ? 1 : 0 }}>
              {words[3]}
            </span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium flex items-center justify-center gap-1 sm:gap-2 relative z-10">
            The REACH Report <span className="text-gray-400">×</span> Dylan Huey
            <span className="text-yellow-400 text-lg sm:text-2xl">✧</span>
          </h2>
          
          {/* Subtle animated accent for hero section */}
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-br from-transparent via-white to-transparent opacity-40 animate-pulse-slow -z-5"></div>
        </div>
        
        {/* Rest of the content remains unchanged */}
        {/* ... */}
      </main>
      
      {/* Footer remains unchanged */}
      {/* ... */}
    </div>
  );
}