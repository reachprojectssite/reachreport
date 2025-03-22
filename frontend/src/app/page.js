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
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();
  
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
      {/* ... existing code ... */}
      
      {/* Footer with Contact and Privacy Policy popups */}
      <footer className="border-t border-gray-200 py-6 sm:py-8 px-4">
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-medium text-sm sm:text-base">REACH X Dylan Huey</p>
              <p className="text-xs sm:text-sm text-gray-500">© 2025 All rights reserved.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <a 
                href="https://www.linkedin.com/in/dylanhuey40/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors text-sm sm:text-base"
              >
                <span>LinkedIn</span>
                <ExternalLink size={isMobile ? 14 : 16} />
              </a>
              
              {/* Contact Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
                    Contact
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md mx-4 sm:mx-auto">
                  <DialogHeader>
                    <DialogTitle className="text-lg sm:text-xl font-bold">Contact Us</DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-gray-500">
                      Send us a message and we'll get back to you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleContactSubmit} className="mt-4 space-y-3 sm:space-y-4">
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="name" className="text-sm">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={contactForm.name} 
                        onChange={handleContactChange} 
                        required 
                        className="h-9 sm:h-10"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="email" className="text-sm">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={contactForm.email} 
                        onChange={handleContactChange} 
                        required 
                        className="h-9 sm:h-10"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="phone" className="text-sm">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={contactForm.phone} 
                        onChange={handleContactChange} 
                        className="h-9 sm:h-10"
                      />
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <Label htmlFor="message" className="text-sm">Message</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        rows={4} 
                        value={contactForm.message} 
                        onChange={handleContactChange} 
                        required 
                      />
                    </div>
                    <div className="flex justify-end gap-2">
                      <DialogClose asChild>
                        <Button variant="outline" type="button" className="text-xs sm:text-sm h-9 sm:h-10">Cancel</Button>
                      </DialogClose>
                      <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm h-9 sm:h-10">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
              
              {/* Privacy Policy Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl mx-4 sm:mx-auto max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-lg sm:text-xl font-bold">Privacy Policy</DialogTitle>
                    <DialogDescription className="text-xs sm:text-sm text-gray-500">
                      Last updated: May 15, 2025
                    </DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 space-y-4 text-sm sm:text-base">
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">1. Introduction</h3>
                      <p className="text-gray-700 mb-2">
                        Welcome to The REACH Report ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you subscribe to our newsletter or interact with our website.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">2. Information We Collect</h3>
                      <p className="text-gray-700 mb-2">
                        We collect information that you provide directly to us, such as:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Contact information (name, email address, phone number)</li>
                        <li>Communication preferences</li>
                        <li>Messages you send through our contact form</li>
                        <li>Information about your device and how you interact with our website</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">3. How We Use Your Information</h3>
                      <p className="text-gray-700 mb-2">
                        We use the information we collect to:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Deliver our newsletter and other content you've requested</li>
                        <li>Respond to your inquiries and provide customer support</li>
                        <li>Improve our website and services</li>
                        <li>Send you updates about our services, events, or offerings</li>
                        <li>Comply with legal obligations</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">4. Sharing Your Information</h3>
                      <p className="text-gray-700 mb-2">
                        We do not sell, rent, or trade your personal information. We may share your information with:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Service providers who help us operate our business</li>
                        <li>Legal authorities when required by law</li>
                        <li>Business partners with your consent</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">5. Your Rights</h3>
                      <p className="text-gray-700 mb-2">
                        Depending on your location, you may have rights regarding your personal data, including:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700">
                        <li>Access to your personal data</li>
                        <li>Correction of inaccurate data</li>
                        <li>Deletion of your data</li>
                        <li>Restriction of processing</li>
                        <li>Data portability</li>
                        <li>Objection to processing</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">6. Security</h3>
                      <p className="text-gray-700">
                        We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg mb-2">7. Contact Us</h3>
                      <p className="text-gray-700">
                        If you have questions about this privacy policy or our practices, please contact us using the contact form on our website.
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <DialogClose asChild>
                      <Button variant="outline" className="text-xs sm:text-sm h-9 sm:h-10">Close</Button>
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}