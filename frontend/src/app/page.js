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
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', contactForm);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white">
      {/* Contact Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-gray-600 hover:text-indigo-600 transition-colors">
            Contact
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-md overflow-hidden relative">
          {/* Background gradient elements for dialog */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-indigo-100 blur-3xl opacity-30 animate-float-slow"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-100 blur-3xl opacity-30 animate-float-medium"></div>
          
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Get in Touch</DialogTitle>
            <DialogDescription className="text-gray-600">
              Have questions about The REACH Report? Send us a message.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleContactSubmit} className="mt-6 space-y-4 relative z-10">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
              <div className="relative">
                <Input 
                  id="name" 
                  name="name" 
                  value={contactForm.name} 
                  onChange={handleContactChange} 
                  required 
                  className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
                />
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-focus-within:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
              <div className="relative">
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={contactForm.email} 
                  onChange={handleContactChange} 
                  required 
                  className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300 pr-6"
                />
                <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 rounded-full transition-colors duration-300 ${
                  contactForm.email.length > 0 ? 'bg-green-500' : 'bg-gray-300'
                }`}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                type="tel" 
                value={contactForm.phone} 
                onChange={handleContactChange} 
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
              <Textarea 
                id="message" 
                name="message" 
                rows={4} 
                value={contactForm.message} 
                onChange={handleContactChange} 
                required 
                className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 transition-all duration-300 resize-none"
              />
            </div>
            
            <div className="flex justify-end gap-3 pt-2">
              <DialogClose asChild>
                <Button variant="outline" type="button" className="border-gray-300 hover:bg-gray-50 transition-all duration-300">
                  Cancel
                </Button>
              </DialogClose>
              <Button 
                type="submit" 
                className="bg-black text-white hover:bg-gray-800 group relative overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* ... rest of the code remains exactly the same ... */}
    </div>
  );
}