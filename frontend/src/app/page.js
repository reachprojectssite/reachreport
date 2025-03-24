"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { 
  Users, 
  Sparkles, 
  Bell, 
  ArrowRight, 
  Clock, 
  ChevronRight,
  Linkedin,
  Heart,
  ArrowLeft
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import SiteFooter from "@/components/ui/site-footer";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { ArchivesModal } from "@/components/ui/archives-modal";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isBellAnimated, setIsBellAnimated] = useState(false);
  const statsRef = useRef(null);
  const isMobile = useIsMobile();
  const [latestPosts, setLatestPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  
  const words = useMemo(() => ["CREATORS", "INFLUENCERS", "VISIONARIES", "INNOVATORS"], []);
  
  // Mount effect
  useEffect(() => {
    setMounted(true);
  }, []);

  // Word rotation effect
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [mounted, words]);

  // Subscriber counter animation
  useEffect(() => {
    if (!mounted) return;
    
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
  }, [mounted]);

  // Animate subscriber count
  useEffect(() => {
    if (!mounted || !isStatsVisible) return;
    
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
  }, [mounted, isStatsVisible]);

  // Bell animation
  useEffect(() => {
    if (!mounted) return;
    
    const interval = setInterval(() => {
      setIsBellAnimated(true);
      setTimeout(() => setIsBellAnimated(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [mounted]);

  // Fetch latest posts effect
  useEffect(() => {
    const fetchLatestPosts = async () => {
      try {
        const response = await fetch("/api/rss-feed");
        if (!response.ok) throw new Error("Failed to fetch RSS feed");
        const data = await response.json();
        setLatestPosts(data.slice(0, 3));
      } catch (err) {
        console.error("Error fetching RSS feed:", err);
      }
    };

    fetchLatestPosts();
  }, []);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!mounted) return;
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      // Check if already subscribed
      const { data: existingSubscriber } = await supabase
        .from('subscribers')
        .select('id')
        .eq('email', email)
        .single();

      if (existingSubscriber) {
        toast.info('You are already subscribed!', {
          description: 'Thank you for your continued support.'
        });
        setEmail('');
        return;
      }

      // Add new subscriber
      const { error } = await supabase
        .from('subscribers')
        .insert([{ email }]);

      if (error) throw error;

      // Show success message
      toast.success('Successfully subscribed!', {
        description: 'Welcome to the REACH Report community.'
      });
      
      // Reset form
      setEmail('');
      
      // Trigger bell animation
      setIsBellAnimated(true);
      setTimeout(() => setIsBellAnimated(false), 1000);
    } catch (error) {
      console.error('Subscription error:', error);
      toast.error('Failed to subscribe', {
        description: 'Please try again later.'
      });
    }
  };

  // Interactive card effect
  const handleMouseMove = (e) => {
    if (!mounted) return;
    
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
    if (!mounted) return;
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white">
      {/* Repositioned background gradient elements to avoid covering key content */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-200 blur-3xl opacity-60 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-70 animate-float-medium" />
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-pink-200 blur-3xl opacity-60 animate-float-fast" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-indigo-200 blur-3xl opacity-60 animate-float-reverse" />
      <div className="absolute top-3/4 left-1/4 w-60 h-60 rounded-full bg-yellow-100 blur-3xl opacity-50 animate-pulse-slow" />

      {/* Header with ring around REACH X Dylan Huey */}
      <header className="flex justify-between items-center p-4 sm:p-5">
        <div className="font-bold text-base sm:text-lg border rounded-full px-3 py-1 sm:px-4 sm:py-1">REACH X Dylan Huey</div>
        <div className="flex items-center gap-4">
          <ArchivesModal />
          <a 
            href="https://www.linkedin.com/in/dylanhuey40/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.paypal.com/donate/?hosted_button_id=MJ59GEHNXCQML" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors duration-200"
          >
            <Heart size={20} />
          </a>
        </div>
      </header>

      {/* Main content */}
      <main className="w-full max-w-4xl mx-auto px-4 pt-12 sm:pt-20 pb-20 sm:pb-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-gray-500 uppercase tracking-wider text-xs sm:text-sm mb-2">FOR THE NEXT GENERATION OF</p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4 relative h-16 sm:h-24 flex items-center justify-center">
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
          <h2 className="text-xl sm:text-3xl font-medium flex items-center justify-center gap-1 sm:gap-2">
            The REACH Report <span className="text-gray-400">×</span> Dylan Huey
            <span className="text-yellow-400 text-xl sm:text-2xl">✧</span>
          </h2>
        </div>

        {/* Subscription card with 3D effect */}
        <Card 
          className="w-full max-w-md mx-auto p-5 sm:p-6 shadow-lg transition-all duration-300 bg-white relative overflow-hidden"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="mb-5 sm:mb-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Join The Newsletter</h3>
              <p className="text-sm sm:text-base text-gray-600">Get the latest articles biweekly to your inbox</p>
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4 relative z-10">
            <div className="relative">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md pr-6 h-10 sm:h-auto"
              />
              {/* Interactive green dot - changes color based on input */}
              <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                email.length > 0 ? 'bg-green-500' : 'bg-gray-300'
              }`}></div>
            </div>
            <div className="relative">
              <Button 
                type="submit"
                className={`w-full bg-black text-white transition-all duration-500 overflow-hidden group h-10 sm:h-auto ${
                  isButtonHovered ? 'shadow-[0_0_15px_rgba(0,0,0,0.3)]' : ''
                }`}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <span className="relative z-10 flex items-center gap-1 sm:gap-2 text-sm sm:text-base">
                  Subscribe for free
                  <Sparkles 
                    size={isMobile ? 14 : 16} 
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
          </form>

          {/* Card background glow effect */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 blur-2xl opacity-30"></div>
        </Card>

        {/* About Section */}
        <div className="mt-24 sm:mt-32 mb-24 sm:mb-32 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-indigo-100 blur-3xl opacity-30 animate-float-slow"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-100 blur-3xl opacity-30 animate-float-medium"></div>

          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10 relative">
            What is The REACH Report
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-yellow-100 blur-xl opacity-70 animate-pulse-slow"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            <div className="md:col-span-1 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Avatar className="w-32 h-32 sm:w-48 sm:h-48 border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-105">
                  <AvatarImage src="https://www.bu.edu/bhr/files/2024/04/1704348040324-636x636.jpg" alt="Dylan Huey" />
                  <AvatarFallback>DH</AvatarFallback>
                </Avatar>
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  CEO
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-3 sm:space-y-4">
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <Badge className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm py-0.5">Creator Economy</Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm py-0.5">Marketing</Badge>
                <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm py-0.5">Social Media</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm py-0.5">Gen Z</Badge>
              </div>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                The REACH Report x Dylan Huey is a biweekly newsletter breaking down the latest in marketing, social media, and the creator economy. Curated by Dylan Huey, CEO of REACH—the nation's largest influencer organization spanning 100+ college campuses—this report delivers sharp insights at the intersection of creators, brands, and technology.
              </p>

              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                From platform shifts and algorithm updates to creator monetization strategies and emerging tech trends, we cover what's driving digital marketing forward. Whether you're a brand, creator, or marketer, The REACH Report is your playbook for navigating the fast-evolving world of social media and creator-led marketing.
              </p>
            </div>
          </div>
        </div>

        {/* Latest Posts section */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mt-24 sm:mt-32">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">Latest Posts</h2>
          <div className={`grid gap-6 md:gap-8 ${
            latestPosts.length === 1 ? 'grid-cols-1 max-w-xl mx-auto' : 
            latestPosts.length === 2 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto' :
            'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
          }`}>
            {latestPosts.slice(0, 3).map((post, index) => (
              <div
                key={index}
                className="bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200 p-6 hover:border-indigo-200 transition-colors duration-200 cursor-pointer"
                onClick={() => handlePostClick(post)}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
                    Dylan Huey
                  </Badge>
                  <span className="text-sm text-gray-500">{formatDate(post.publishedAt)}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{post.subtitle}</p>
                <div className="flex items-center text-indigo-600 hover:text-indigo-700 transition-colors duration-200 group">
                  <span className="text-sm font-medium">Read more</span>
                  <ChevronRight className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Join Our Community Section - No background gradients to ensure content visibility */}
        <div ref={statsRef} className="mt-24 sm:mt-32 mb-24 sm:mb-32 relative z-20">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">Why Join Our Newsletter?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Subscriber count card */}
            <Card className="p-4 sm:p-6 border-t-4 border-indigo-500 hover:shadow-lg transition-all duration-300 group relative overflow-hidden z-20">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <Users className="text-indigo-500" size={isMobile ? 18 : 24} />
                <h3 className="font-bold text-base sm:text-lg">Growing Community</h3>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-indigo-600 mb-1 sm:mb-2">
                {subscriberCount.toLocaleString()}+
              </div>
              <p className="text-gray-600 text-sm sm:text-base">subscribers and counting</p>
            </Card>

            {/* Company logos card */}
            <Card className="p-4 sm:p-6 border-t-4 border-purple-500 hover:shadow-lg transition-all duration-300 group relative overflow-hidden z-20">
              <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3">Read by executives from</h3>

              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {['Meta', 'TikTok', 'Snapchat', 'LinkedIn', 'Triller', 'YouTube'].map((company, index) => (
                  <div 
                    key={company}
                    className="relative p-1.5 sm:p-2 text-center rounded-md border border-gray-200 hover:border-purple-300 transition-all duration-300 group/item"
                  >
                    <span className={`text-xs sm:text-sm font-medium group-hover/item:text-${
                      ['blue', 'pink', 'yellow', 'blue', 'green', 'red'][index % 6]
                    }-500 transition-colors duration-300`}>
                      {company}
                    </span>
                    <span className="absolute top-1 right-1 w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white group-hover/item:bg-purple-500 transition-all duration-300"></span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Final CTA */}
        <Card className="w-full max-w-md mx-auto p-5 sm:p-6 shadow-lg mt-24 sm:mt-32 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>

          <div className="mb-5 sm:mb-6 flex items-start">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Never miss an update</h3>
              <p className="text-gray-600 text-sm sm:text-base">Get the latest insights biweekly.</p>
            </div>
            <div className={`ml-auto ${isBellAnimated ? 'animate-bell' : ''}`}>
              <Bell className="text-indigo-500" size={isMobile ? 18 : 24} />
            </div>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4 relative z-10">
            <div className="relative">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md pr-6 h-10 sm:h-auto"
              />
              {/* Interactive green dot - changes color based on input */}
              <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                email.length > 0 ? 'bg-green-500' : 'bg-gray-300'
              }`}></div>
            </div>
            <Button 
              type="submit"
              className="w-full bg-black text-white hover:bg-gray-800 group relative overflow-hidden h-10 sm:h-auto text-sm sm:text-base"
            >
              <span className="relative z-10">Subscribe for free</span>
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </Button>
          </form>

          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </Card>
      </main>

      {/* Individual Post Modal */}
      <Dialog open={isPostModalOpen} onOpenChange={setIsPostModalOpen}>
        <DialogContent 
          className="w-[min(calc(100%-2rem),1200px)] sm:w-[min(95vw,1200px)] md:w-[min(90vw,1200px)] lg:w-[min(85vw,1200px)] h-[min(calc(100vh-2rem),900px)] sm:h-[min(90vh,900px)] p-0 border-0 shadow-xl overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm flex flex-col data-[state=open]:duration-300"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 opacity-70" />
          
          {/* Header */}
          <div className="relative flex-none p-2 sm:p-3 md:p-4 border-b border-gray-100 bg-white/50 backdrop-blur-sm">
            <DialogHeader>
              <div className="flex items-center gap-2 sm:gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsPostModalOpen(false)}
                  className="hover:bg-white/80 h-8 w-8 sm:h-9 sm:w-9"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <div className="flex-1 min-w-0">
                  <DialogTitle className="text-base sm:text-lg md:text-xl font-bold text-gray-900 truncate">
                    {selectedPost?.title}
                  </DialogTitle>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {selectedPost && formatDate(selectedPost.publishedAt)}
                  </p>
                </div>
              </div>
            </DialogHeader>
          </div>

          {/* Content */}
          <ScrollArea className="flex-1">
            <div className="p-4 sm:p-6 md:p-8 max-w-[min(900px,100%-32px)] mx-auto">
              {selectedPost?.image && (
                <div className="mb-6">
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={selectedPost.image}
                      alt={selectedPost.title}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
              <div 
                className="newsletter-content text-[15px] sm:text-base md:text-lg"
                dangerouslySetInnerHTML={{ __html: selectedPost?.content }}
              />
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      <SiteFooter isMobile={isMobile} />
    </div>
  );
}