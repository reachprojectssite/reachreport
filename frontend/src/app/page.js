"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Sparkles, Bell, ArrowRight, Clock, ChevronRight, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const [email, setEmail] = React.useState("");
  const [currentWord, setCurrentWord] = React.useState(0);
  const [contactForm, setContactForm] = React.useState({
    name: "",
    email: "",
    message: ""
  });
  
  // Static data
  const WORDS = ["CREATORS", "INFLUENCERS", "VISIONARIES", "INNOVATORS"];
  
  // Simple handlers
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
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
      message: ""
    });
  };

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 sm:p-5">
        <div className="font-bold text-base sm:text-lg border rounded-full px-3 py-1 sm:px-4 sm:py-1">REACH X Dylan Huey</div>
        <Button variant="outline" className="rounded-full text-sm sm:text-base">Archive</Button>
      </header>

      {/* Main content */}
      <main className="w-full max-w-4xl mx-auto px-4 pt-12 sm:pt-20 pb-20 sm:pb-32">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-gray-500 uppercase tracking-wider text-xs sm:text-sm mb-2">FOR THE NEXT GENERATION OF</p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">CREATORS</h1>
          <h2 className="text-xl sm:text-3xl font-medium flex items-center justify-center gap-1 sm:gap-2">
            The REACH Report <span className="text-gray-400">×</span> Dylan Huey
            <span className="text-yellow-400 text-xl sm:text-2xl">✧</span>
          </h2>
        </div>

        {/* Subscription card */}
        <Card className="w-full max-w-md mx-auto p-5 sm:p-6 shadow-lg bg-white">
          <div className="mb-5 sm:mb-6">
            <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Join the community</h3>
            <p className="text-gray-600 text-sm sm:text-base">Get the latest insights biweekly.</p>
          </div>

          <form onSubmit={handleSubscribe} className="space-y-3 sm:space-y-4">
            <div className="relative">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                value={email}
                onChange={handleEmailChange}
                className="rounded-md pr-6 h-10 sm:h-auto"
              />
            </div>
            <Button 
              type="submit"
              className="w-full bg-black text-white h-10 sm:h-auto"
            >
              Subscribe for free
            </Button>
          </form>
        </Card>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-6 sm:py-8 px-4 mt-20">
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
                  <ExternalLink size={16} />
                </a>
                
                <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
                  Privacy Policy
                </button>

                <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
                  Terms of Service
                </button>
                
                <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}