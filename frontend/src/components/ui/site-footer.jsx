"use client";

import { useState, useCallback, memo } from "react";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Initial form state
const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

// Memoized footer links component
const FooterLinks = memo(({ isMobile, onContactClick }) => (
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
    
    <button 
      onClick={onContactClick}
      className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base"
    >
      Contact
    </button>
  </div>
));

FooterLinks.displayName = 'FooterLinks';

// Memoized contact form component
const ContactForm = memo(({ contactForm, handleContactChange, handleContactSubmit, onClose }) => (
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
        <Button 
          variant="outline" 
          type="button" 
          className="text-xs sm:text-sm h-9 sm:h-10"
          onClick={onClose}
        >
          Cancel
        </Button>
      </DialogClose>
      <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs sm:text-sm h-9 sm:h-10">
        Send Message
      </Button>
    </div>
  </form>
));

ContactForm.displayName = 'ContactForm';

// Main footer component
const SiteFooter = ({ isMobile }) => {
  const [contactForm, setContactForm] = useState(initialFormState);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Memoized event handlers
  const handleContactChange = useCallback((e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const handleContactSubmit = useCallback((e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Contact form submitted:", contactForm);
    // Reset form
    setContactForm(initialFormState);
    // Close dialog
    setIsDialogOpen(false);
  }, [contactForm]);

  const handleDialogOpen = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const handleDialogClose = useCallback(() => {
    setIsDialogOpen(false);
    // Reset form when dialog closes
    setContactForm(initialFormState);
  }, []);

  return (
    <footer className="border-t border-gray-200 py-6 sm:py-8 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="font-medium text-sm sm:text-base">REACH X Dylan Huey</p>
            <p className="text-xs sm:text-sm text-gray-500">© 2025 All rights reserved.</p>
          </div>
          
          <FooterLinks isMobile={isMobile} onContactClick={handleDialogOpen} />
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="max-w-md mx-4 sm:mx-auto">
              <DialogHeader>
                <DialogTitle className="text-lg sm:text-xl font-bold">Contact Us</DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-gray-500">
                  Send us a message and we'll get back to you soon.
                </DialogDescription>
              </DialogHeader>
              <ContactForm 
                contactForm={contactForm}
                handleContactChange={handleContactChange}
                handleContactSubmit={handleContactSubmit}
                onClose={handleDialogClose}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};

export default memo(SiteFooter);