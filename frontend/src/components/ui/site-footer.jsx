"use client";

import { memo } from "react";
import { ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/ui/contact-form";

const SiteFooter = memo(({ isMobile }) => {
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
                <ContactForm />
              </DialogContent>
            </Dialog>
            
            <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
});

SiteFooter.displayName = "SiteFooter";

export default SiteFooter;