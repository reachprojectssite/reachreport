"use client";

import { useState } from "react";
import Link from "next/link";
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
                  <DialogTitle className="text-xl sm:text-2xl font-bold">Privacy Policy</DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm text-gray-500">
                    For The Reach Report × Dylan Huey<br />
                    Effective Date: January 1, 2025
                  </DialogDescription>
                </DialogHeader>
                
                <div className="mt-4 space-y-6 text-sm sm:text-base pr-2">
                  <p>
                    This privacy policy outlines how Reach Projects, Inc. ("we," "us," or "our") collects, uses, and protects your personal information when you subscribe to The Reach Report × Dylan Huey newsletter ("Newsletter"). By subscribing, you agree to the terms of this privacy policy.
                  </p>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Information We Collect</h3>
                    <p>When you subscribe to the Newsletter, we may collect:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your name</li>
                      <li>Your email address</li>
                      <li>Any other information voluntarily provided by you</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">How We Use Your Information</h3>
                    <p>We use your information to:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Send you the Newsletter, updates, and related content</li>
                      <li>Communicate with you about Newsletter features, updates, and changes</li>
                      <li>Monitor, analyze, and improve the performance and effectiveness of the Newsletter</li>
                      <li>Comply with legal and regulatory requirements</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Data Usage, Analytics, and Tracking</h3>
                    <p>
                      We may use email analytics to track email open rates, click-through rates, and other engagement metrics. We use this data to understand how our Newsletter is performing and to improve content delivery. This may include the use of tracking pixels, cookies, and third-party analytics services.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Disclosure of Information</h3>
                    <p>
                      We do not sell or rent your personal information. We may share your information in the following instances:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>With trusted third-party service providers who assist in operating the Newsletter under strict confidentiality agreements</li>
                      <li>To comply with legal requirements, law enforcement requests, or court orders</li>
                      <li>To protect our rights, property, or safety, or that of others</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">International Data Transfers and Compliance</h3>
                    <p>
                      If you are located outside the United States, your information may be transferred to and processed in the United States. By submitting your information, you consent to this transfer, processing, and storage. We comply with international data protection laws including:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>General Data Protection Regulation (GDPR) for individuals in the European Economic Area (EEA)</li>
                      <li>Personal Information Protection and Electronic Documents Act (PIPEDA) for Canadian residents</li>
                    </ul>
                    <p className="mt-2">
                      If you are covered under these regulations, you have the following rights:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>The right to access, correct, or delete your personal data</li>
                      <li>The right to object to processing or request restrictions</li>
                      <li>The right to data portability</li>
                    </ul>
                    <p className="mt-2">
                      To exercise any of these rights, please contact us at postmaster@reachprojects.co.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Data Retention</h3>
                    <p>
                      We retain your personal information only as long as necessary to provide you with the Newsletter and for legitimate business purposes, unless a longer retention period is required by law.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Your Choices and Unsubscribe</h3>
                    <p>
                      You may only unsubscribe from the Newsletter by clicking the "Unsubscribe" link included at the bottom of each email. We do not accept unsubscribe requests via email, phone, or any other method. Once unsubscribed, you will no longer receive the Newsletter, but we may retain your information for record-keeping and legal purposes.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Third-Party Links</h3>
                    <p>
                      The Newsletter may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of these sites. We encourage you to review their privacy policies.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Security Measures</h3>
                    <p>
                      We take reasonable steps to protect your personal information. However, no internet or email transmission is ever fully secure or error-free. You provide information at your own risk.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Children's Privacy</h3>
                    <p>
                      The Newsletter is intended for users 18 years of age or older. We do not knowingly collect personal information from children under 13 years old. If you believe we have collected such information, contact us immediately.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Changes to This Privacy Policy</h3>
                    <p>
                      We may update this Privacy Policy from time to time. Any changes will be posted in the Newsletter or sent via email. Your continued use of the Newsletter after changes are made indicates acceptance of the updated policy.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-semibold">Contact Us</h3>
                    <p>
                      If you have questions or wish to exercise your rights under this policy, please contact:
                    </p>
                    <p className="font-medium mt-2">
                      Reach Projects, Inc.<br />
                      Email: postmaster@reachprojects.co
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-end">
                  <DialogClose asChild>
                    <Button variant="outline">Close</Button>
                  </DialogClose>
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