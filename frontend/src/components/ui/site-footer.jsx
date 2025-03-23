"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SiteFooter = ({ isMobile }) => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "", 
    message: ""
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
    // In a real app, you would send this data to your backend
    console.log("Contact form submitted:", contactForm);
    // Reset form
    setContactForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
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
            
            {/* Privacy Policy Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
                  Privacy Policy
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto mx-4 sm:mx-auto">
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-xl font-bold">Privacy Policy</DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm text-gray-500">Effective Date: January 1, 2025</DialogDescription>
                </DialogHeader>
                <div className="mt-4 text-xs sm:text-sm">
                  <p className="mb-4">
                    This privacy policy outlines how we collect, use, and protect your personal information when you subscribe to our newsletter.
                  </p>
                  
                  <h3 className="font-bold mt-4 mb-2">Information We Collect</h3>
                  <p className="mb-2">When you subscribe, we collect your email address and any other information you voluntarily provide.</p>
                  
                  <h3 className="font-bold mt-4 mb-2">How We Use Your Information</h3>
                  <p className="mb-2">We use your information to send you the newsletter and related content, and to improve our services.</p>
                  
                  <h3 className="font-bold mt-4 mb-2">Contact Us</h3>
                  <p className="mb-2">
                    If you have questions, please contact: postmaster@reachprojects.co
                  </p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Terms of Service Dialog */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
                  Terms of Service
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto mx-4 sm:mx-auto">
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-xl font-bold">Terms of Service</DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm text-gray-500">Effective Date: January 1, 2025</DialogDescription>
                </DialogHeader>
                <div className="mt-4 text-xs sm:text-sm">
                  <p className="mb-4">
                    These terms govern your access to and use of our newsletter.
                  </p>
                  
                  <h3 className="font-bold mt-4 mb-2">Acceptance of Terms</h3>
                  <p className="mb-2">By subscribing, you agree to these terms.</p>
                  
                  <h3 className="font-bold mt-4 mb-2">Intellectual Property</h3>
                  <p className="mb-2">All content is protected by copyright laws.</p>
                  
                  <h3 className="font-bold mt-4 mb-2">Contact Us</h3>
                  <p className="mb-2">
                    If you have questions, please contact: postmaster@reachprojects.co
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;