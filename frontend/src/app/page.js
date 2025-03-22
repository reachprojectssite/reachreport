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
      {/* Background gradient elements - keeping them with negative z-index */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-200 blur-3xl opacity-60 animate-float-slow -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-70 animate-float-medium -z-10" />
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-pink-200 blur-3xl opacity-60 animate-float-fast -z-10" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-indigo-200 blur-3xl opacity-60 animate-float-reverse -z-10" />
      <div className="absolute top-3/4 left-1/4 w-60 h-60 rounded-full bg-yellow-100 blur-3xl opacity-50 animate-pulse-slow -z-10" />
      
      {/* Header with improved ring styling */}
      <header className="flex justify-between items-center p-5 relative z-20">
        <div className="font-bold text-lg border-2 border-gray-800 rounded-full px-4 py-1 bg-white shadow-sm relative z-30">REACH X Dylan Huey</div>
        <Button variant="outline" className="rounded-full">Archive</Button>
      </header>
      
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-32 relative z-10">
        {/* Rest of the existing code remains unchanged */}
        {/* Hero Section */}
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-2">FOR THE NEXT GENERATION OF</p>
          <h1 className="text-6xl font-bold mb-4 relative h-24 flex items-center justify-center">
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
          <h2 className="text-3xl font-medium flex items-center justify-center gap-2">
            The REACH Report <span className="text-gray-400">×</span> Dylan Huey
            <span className="text-yellow-400 text-2xl">✧</span>
          </h2>
        </div>

        {/* Rest of the existing JSX code remains unchanged */}
        {/* ... */}
      </main>
      
      {/* Footer with Contact popup */}
      <footer className="border-t border-gray-200 py-8 px-4">
        {/* Existing footer code remains unchanged */}
      </footer>
    </div>
  );
}