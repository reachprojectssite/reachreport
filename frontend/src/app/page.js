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

      {/* Privacy Policy Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <button className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5">
            <Shield size={14} className="text-gray-500" />
            <span>Privacy Policy</span>
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden relative">
          {/* Background gradient elements for dialog */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-indigo-100 blur-3xl opacity-30"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-purple-100 blur-3xl opacity-30"></div>
          
          <DialogHeader className="relative z-10">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-indigo-600" />
              <DialogTitle className="text-2xl font-bold">Privacy Policy</DialogTitle>
            </div>
            <DialogDescription className="text-gray-600">
              Last updated: May 15, 2023
            </DialogDescription>
          </DialogHeader>
          
          <ScrollArea className="mt-4 pr-4 max-h-[60vh] relative z-10">
            <div className="space-y-6 text-gray-700">
              <section>
                <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
                <p className="text-sm leading-relaxed">
                  Welcome to The REACH Report ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, subscribe to our newsletter, or interact with our services.
                </p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">2. Information We Collect</h3>
                <p className="text-sm leading-relaxed mb-2">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><span className="font-medium">Personal Information:</span> Name, email address, phone number, and other contact details you provide.</li>
                  <li><span className="font-medium">Usage Data:</span> Information about how you interact with our website, newsletter, and services.</li>
                  <li><span className="font-medium">Device Information:</span> Browser type, IP address, device type, and operating system.</li>
                  <li><span className="font-medium">Cookies and Tracking Technologies:</span> We use cookies and similar technologies to enhance your experience and collect information about your browsing activities.</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">3. How We Use Your Information</h3>
                <p className="text-sm leading-relaxed mb-2">
                  We may use the information we collect for various purposes, including:
                </p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Providing and maintaining our services</li>
                  <li>Sending you our newsletter and marketing communications</li>
                  <li>Responding to your inquiries and requests</li>
                  <li>Improving our website and services</li>
                  <li>Analyzing usage patterns and trends</li>
                  <li>Protecting against unauthorized access and legal violations</li>
                </ul>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">4. Sharing Your Information</h3>
                <p className="text-sm leading-relaxed">
                  We may share your information with third parties in certain circumstances, such as with service providers who assist us in operating our website and delivering our newsletter, when required by law, or with your consent. We do not sell your personal information to third parties.
                </p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">5. Your Rights and Choices</h3>
                <p className="text-sm leading-relaxed">
                  Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict the processing of your information. You can also opt out of receiving our newsletter and marketing communications at any time by clicking the "unsubscribe" link in our emails or contacting us directly.
                </p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">6. Data Security</h3>
                <p className="text-sm leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">7. Changes to This Privacy Policy</h3>
                <p className="text-sm leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>
              
              <section>
                <h3 className="text-lg font-semibold mb-2">8. Contact Us</h3>
                <p className="text-sm leading-relaxed">
                  If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@reachreport.com.
                </p>
              </section>
            </div>
          </ScrollArea>
          
          <div className="mt-6 flex justify-end relative z-10">
            <DialogClose asChild>
              <Button className="bg-black text-white hover:bg-gray-800 group relative overflow-hidden">
                <span className="relative z-10">I Understand</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>

      {/* Footer - Add this to the bottom of your page */}
      <footer className="border-t border-gray-200 py-6 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-500">© 2023 REACH Report. All rights reserved.</p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-600 hover:text-indigo-600 transition-colors">
                    Contact
                  </button>
                </DialogTrigger>
                {/* Contact dialog content is already defined above */}
              </Dialog>
              
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-600 hover:text-indigo-600 transition-colors flex items-center gap-1.5">
                    <Shield size={14} className="text-gray-500" />
                    <span>Privacy Policy</span>
                  </button>
                </DialogTrigger>
                {/* Privacy Policy dialog content is already defined above */}
              </Dialog>
              
              <a 
                href="https://twitter.com/reachreport" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ... rest of the code remains exactly the same ... */}
    </div>
  );
}