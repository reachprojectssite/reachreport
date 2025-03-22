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
  TrendingUp,
  Zap,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Home() {
  const [email, setEmail] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isBellAnimated, setIsBellAnimated] = useState(false);
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
      {/* Repositioned background gradient elements to avoid covering key content */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-200 blur-3xl opacity-60 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-70 animate-float-medium" />
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-pink-200 blur-3xl opacity-60 animate-float-fast" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-indigo-200 blur-3xl opacity-60 animate-float-reverse" />
      <div className="absolute top-3/4 left-1/4 w-60 h-60 rounded-full bg-yellow-100 blur-3xl opacity-50 animate-pulse-slow" />
      
      {/* Header with ring around REACH X Dylan Huey */}
      <header className="flex justify-between items-center p-5">
        <div className="font-bold text-lg border rounded-full px-4 py-1">REACH X Dylan Huey</div>
        <Button variant="outline" className="rounded-full">Archive</Button>
      </header>
      
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-32 relative z-10">
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
        
        {/* Subscription card with 3D effect */}
        <Card 
          className="max-w-md mx-auto p-6 shadow-lg transition-all duration-300 bg-white relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Join the community</h3>
            <p className="text-gray-600">Get the latest insights biweekly.</p>
          </div>
          
          <div className="space-y-4 relative z-10">
            <div className="relative">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md pr-6"
              />
              {/* Interactive green dot - changes color based on input */}
              <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                email.length > 0 ? 'bg-green-500' : 'bg-gray-300'
              }`}></div>
            </div>
            <div className="relative">
              <Button 
                className={`w-full bg-black text-white transition-all duration-500 overflow-hidden group ${
                  isButtonHovered ? 'shadow-[0_0_15px_rgba(0,0,0,0.3)]' : ''
                }`}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Subscribe for free
                  <Sparkles 
                    size={16} 
                    className={`transition-all duration-500 ${
                      isButtonHovered ? 'opacity-100 rotate-12 scale-110' : 'opacity-0'
                    }`}
                  />
                </span>
                <span className={`absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></span>
              </Button>
              
              {/* Interactive button glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 blur-xl opacity-0 transition-opacity duration-500 ${
                isButtonHovered ? 'opacity-30' : ''
              }`}></div>
            </div>
          </div>
          
          {/* Card background glow effect */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 blur-2xl opacity-30"></div>
        </Card>
        
        {/* About Section */}
        <div className="mt-32 mb-20 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-indigo-100 blur-3xl opacity-30 animate-float-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-100 blur-3xl opacity-30 animate-float-medium"></div>
          
          <h2 className="text-2xl font-bold text-center mb-10 relative">
            What is The REACH Report
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-yellow-100 blur-xl opacity-70 animate-pulse-slow"></div>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Avatar className="w-48 h-48 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src="/images/dylan-huey.jpg" alt="Dylan Huey" />
                  <AvatarFallback>DH</AvatarFallback>
                </Avatar>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CEO
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 space-y-4">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-all duration-300 transform hover:scale-105">Creator Economy</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-all duration-300 transform hover:scale-105">Marketing</Badge>
                <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 transition-all duration-300 transform hover:scale-105">Social Media</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-300 transform hover:scale-105">Gen Z</Badge>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                The REACH Report x Dylan Huey is a biweekly newsletter breaking down the latest in marketing, social media, and the creator economy. Curated by Dylan Huey, CEO of REACH—the nation's largest influencer organization spanning 100+ college campuses—this report delivers sharp insights at the intersection of creators, brands, and technology.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                From platform shifts and algorithm updates to creator monetization strategies and emerging tech trends, we cover what's driving digital marketing forward. Whether you're a brand, creator, or marketer, The REACH Report is your playbook for navigating the fast-evolving world of social media and creator-led marketing.
              </p>
            </div>
          </div>
        </div>
        
        {/* Latest Insights Section */}
        <div className="mt-32 mb-20 relative">
          <div className="absolute -top-20 right-20 w-40 h-40 rounded-full bg-blue-100 blur-3xl opacity-30 animate-float-medium"></div>
          <div className="absolute -bottom-20 left-20 w-40 h-40 rounded-full bg-pink-100 blur-3xl opacity-30 animate-float-slow"></div>
          
          <h2 className="text-2xl font-bold text-center mb-10">Latest Insights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestInsights.map((insight, index) => (
              <Card 
                key={insight.id} 
                className="overflow-hidden group hover:shadow-lg transition-all duration-300 border-t-2 border-transparent hover:border-t-2 hover:border-indigo-500"
              >
                <div className="h-40 bg-gray-100 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-3 left-3 z-10">
                    <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                      {insight.category}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-5">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Clock size={14} className="mr-1" />
                    {insight.date}
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center text-indigo-600 text-sm font-medium group-hover:text-indigo-800 transition-colors duration-300">
                    Read more
                    <ArrowRight size={14} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" className="group">
              View all insights
              <ChevronRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        
        {/* Why Join Our Community Section - No background gradients to ensure content visibility */}
        <div ref={statsRef} className="mt-32 mb-20 relative z-20">
          <h2 className="text-2xl font-bold text-center mb-10">Why Join Our Community?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subscriber count card */}
            <Card className="p-6 border-t-4 border-indigo-500 hover:shadow-lg transition-all duration-300 group relative overflow-hidden z-20">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-indigo-500" />
                <h3 className="font-bold text-lg">Growing Community</h3>
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {subscriberCount.toLocaleString()}+
              </div>
              <p className="text-gray-600">subscribers and counting</p>
            </Card>
            
            {/* Company logos card */}
            <Card className="p-6 border-t-4 border-purple-500 hover:shadow-lg transition-all duration-300 group relative overflow-hidden z-20">
              <h3 className="font-bold text-lg mb-3">Read by executives from</h3>
              
              <div className="grid grid-cols-3 gap-3">
                {['Meta', 'TikTok', 'Snapchat', 'LinkedIn', 'Triller', 'YouTube'].map((company, index) => (
                  <div 
                    key={company}
                    className="relative p-2 text-center rounded-md border border-gray-200 hover:border-purple-300 transition-all duration-300 group/item"
                  >
                    <span className={`text-sm font-medium group-hover/item:text-${
                      ['blue', 'pink', 'yellow', 'blue', 'green', 'red'][index % 6]
                    }-500 transition-colors duration-300`}>
                      {company}
                    </span>
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-white group-hover/item:bg-purple-500 transition-all duration-300"></span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
        
        {/* Final CTA */}
        <Card className="max-w-md mx-auto p-6 shadow-lg mt-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          
          <div className="mb-6 flex items-start">
            <div>
              <h3 className="text-xl font-bold mb-2">Never miss an update</h3>
              <p className="text-gray-600">Get the latest insights biweekly.</p>
            </div>
            <div className={`ml-auto ${isBellAnimated ? 'animate-bell' : ''}`}>
              <Bell className="text-indigo-500" />
            </div>
          </div>
          
          <div className="space-y-4 relative z-10">
            <div className="relative">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md pr-6"
              />
              {/* Interactive green dot - changes color based on input */}
              <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                email.length > 0 ? 'bg-green-500' : 'bg-gray-300'
              }`}></div>
            </div>
            <Button 
              className="w-full bg-black text-white hover:bg-gray-800 group relative overflow-hidden"
            >
              <span className="relative z-10">Subscribe for free</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </Card>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-medium">REACH X Dylan Huey</p>
              <p className="text-sm text-gray-500">© 2025 All rights reserved.</p>
            </div>
            
            <div className="flex items-center">
              <a 
                href="https://www.linkedin.com/in/dylanhuey40/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}