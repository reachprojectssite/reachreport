"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Users, ExternalLink, Sparkles } from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
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

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white">
      {/* Enhanced animated background gradient elements */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-purple-200 blur-3xl opacity-60 animate-float-slow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-70 animate-float-medium" />
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-pink-200 blur-3xl opacity-60 animate-float-fast" />
      <div className="absolute bottom-1/3 left-10 w-72 h-72 rounded-full bg-indigo-200 blur-3xl opacity-60 animate-float-reverse" />
      <div className="absolute top-2/3 left-1/3 w-60 h-60 rounded-full bg-yellow-100 blur-3xl opacity-50 animate-pulse-slow" />
      
      {/* Header */}
      <header className="flex justify-between items-center p-5">
        <div className="font-bold text-lg">REACH X Dylan Huey</div>
        <Button variant="outline" className="rounded-full">Archive</Button>
      </header>
      
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-2">FOR THE NEXT GENERATION OF</p>
          <h1 className="text-6xl font-bold mb-4 relative">
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
            <span className="invisible">{words[0]}</span>
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
            <Input 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md"
            />
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
        
        {/* Why Join Our Community Section */}
        <div ref={statsRef} className="mt-32 mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">Why Join Our Community?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Subscriber count card */}
            <Card className="p-6 border-t-4 border-indigo-500 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
              <div className="flex items-center gap-3 mb-2">
                <Users className="text-indigo-500" />
                <h3 className="font-bold text-lg">Growing Community</h3>
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {subscriberCount.toLocaleString()}+
              </div>
              <p className="text-gray-600">subscribers and counting</p>
              
              <div className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full bg-indigo-200 opacity-0 group-hover:opacity-70 transition-all duration-500 blur-xl" />
            </Card>
            
            {/* Company logos card */}
            <Card className="p-6 border-t-4 border-purple-500 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
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
              
              <div className="absolute -bottom-3 -right-3 w-32 h-32 rounded-full bg-purple-200 opacity-0 group-hover:opacity-70 transition-all duration-500 blur-xl" />
            </Card>
          </div>
        </div>
        
        {/* Final CTA */}
        <Card className="max-w-md mx-auto p-6 shadow-lg mt-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Never miss an update</h3>
            <p className="text-gray-600">Get the latest insights biweekly.</p>
          </div>
          
          <div className="space-y-4 relative z-10">
            <Input 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md"
            />
            <Button 
              className="w-full bg-black text-white hover:bg-gray-800 group relative overflow-hidden"
            >
              <span className="relative z-10">Subscribe for free</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </div>
          
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 blur-2xl opacity-30"></div>
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