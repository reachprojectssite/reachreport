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
  ChevronRight,
  Shield
} from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
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
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBellAnimated(true);
      setTimeout(() => setIsBellAnimated(false), 1000);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    console.log("Contact form submitted:", contactForm);
    setContactForm({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

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
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-purple-200 blur-3xl opacity-60 animate-float-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-200 blur-3xl opacity-70 animate-float-medium" />
      <div className="absolute top-1/4 right-0 w-64 h-64 rounded-full bg-pink-200 blur-3xl opacity-60 animate-float-fast" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-indigo-200 blur-3xl opacity-60 animate-float-reverse" />
      <div className="absolute top-3/4 left-1/4 w-60 h-60 rounded-full bg-yellow-100 blur-3xl opacity-50 animate-pulse-slow" />
      
      <header className="flex justify-between items-center p-5 relative z-20">
        <div className="font-bold text-lg border rounded-full px-4 py-1">REACH X Dylan Huey</div>
        <Button variant="outline" className="rounded-full">Archive</Button>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-2">FOR THE NEXT GENERATION OF</p>
          <h1 className="text-6xl font-bold mb-4 relative h-24 flex items-center justify-center">
            {words.map((word, index) => (
              <span key={word} className="absolute inset-0 flex justify-center items-center opacity-0 transition-opacity duration-500" 
                    style={{ opacity: currentWord === index ? 1 : 0 }}>
                {word}
              </span>
            ))}
          </h1>
          <h2 className="text-3xl font-medium flex items-center justify-center gap-2">
            The REACH Report <span className="text-gray-400">×</span> Dylan Huey
            <span className="text-yellow-400 text-2xl">✧</span>
          </h2>
        </div>
      </main>
      
      <footer className="border-t border-gray-200 py-8 px-4 relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="font-medium">REACH X Dylan Huey</p>
              <p className="text-sm text-gray-500">© 2025 All rights reserved.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a 
                href="https://www.linkedin.com/in/dylanhuey40/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink size={16} />
              </a>
              
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-600 hover:text-indigo-600 transition-colors">
                    Contact
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Contact Us</DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                      Send us a message and we'll get back to you soon.
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleContactSubmit} className="mt-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={contactForm.name} 
                        onChange={handleContactChange} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        value={contactForm.email} 
                        onChange={handleContactChange} 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={contactForm.phone} 
                        onChange={handleContactChange} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
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
                        <Button variant="outline" type="button">Cancel</Button>
                      </DialogClose>
                      <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <button className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors">
                    <span>Privacy Policy</span>
                    <Shield size={16} className="text-gray-500" />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh]">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold flex items-center gap-2">
                      <Shield size={18} className="text-indigo-600" />
                      Privacy Policy
                    </DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">
                      Last updated: May 15, 2025
                    </DialogDescription>
                  </DialogHeader>
                  
                  <ScrollArea className="mt-4 max-h-[60vh] pr-4">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Welcome to The REACH Report ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, subscribe to our newsletter, or interact with our services.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">2. Information We Collect</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-2">
                          We may collect the following types of information:
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                          <li><span className="font-medium">Personal Information:</span> Name, email address, phone number, and other contact details you provide.</li>
                          <li><span className="font-medium">Usage Data:</span> Information about how you interact with our website, newsletter, and services.</li>
                          <li><span className="font-medium">Device Information:</span> Browser type, IP address, device type, and operating system.</li>
                          <li><span className="font-medium">Cookies and Tracking Technologies:</span> We use cookies and similar technologies to enhance your experience and collect information about your browsing activities.</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">3. How We Use Your Information</h3>
                        <p className="text-gray-700 text-sm leading-relaxed mb-2">
                          We may use the information we collect for various purposes, including:
                        </p>
                        <ul className="list-disc pl-5 text-gray-700 text-sm space-y-1">
                          <li>Providing and maintaining our services</li>
                          <li>Sending you our newsletter and marketing communications</li>
                          <li>Responding to your inquiries and requests</li>
                          <li>Improving our website and services</li>
                          <li>Analyzing usage patterns and trends</li>
                          <li>Protecting against unauthorized access and legal violations</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">4. Sharing Your Information</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          We may share your information with third parties in certain circumstances, such as with service providers who assist us in operating our website and delivering our newsletter, when required by law, or with your consent. We do not sell your personal information to third parties.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">5. Your Rights and Choices</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your information. You can also opt out of receiving our newsletter and marketing communications at any time by clicking the "unsubscribe" link in our emails or contacting us directly.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">6. Data Security</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">7. Changes to This Privacy Policy</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-2">8. Contact Us</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@reachreport.com.
                        </p>
                      </div>
                    </div>
                  </ScrollArea>
                  
                  <div className="mt-6 flex justify-end">
                    <DialogClose asChild>
                      <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                        I Understand
                      </Button>
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