"use client";

import { memo, useState } from "react";
import { ExternalLink, Send, Heart } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";

// Move form state outside component to prevent re-renders
const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: ""
};

// Memoize static content
const FooterContent = memo(({ isMobile, handleContactChange, handleContactSubmit, contactForm, isSubmitting }) => (
  <footer className="relative border-t border-gray-200 py-6 sm:py-8 px-4">
    {/* Background gradient with reduced opacity */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 pointer-events-none" />
    
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
        <div className="text-center md:text-left">
          <p className="font-medium text-sm sm:text-base">REACH X Dylan Huey</p>
          <p className="text-xs sm:text-sm text-gray-500">© 2025 All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          <a 
            href="https://www.linkedin.com/in/dylanhuey40/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-blue-600 transition-all duration-200 text-sm sm:text-base cursor-pointer px-3 py-1.5 rounded-md hover:bg-blue-50/80 backdrop-blur-sm relative z-10"
          >
            <span>LinkedIn</span>
            <ExternalLink size={isMobile ? 14 : 16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a 
            href="https://www.paypal.com/donate/?hosted_button_id=MJ59GEHNXCQML" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-red-600 transition-all duration-200 text-sm sm:text-base cursor-pointer px-3 py-1.5 rounded-md hover:bg-red-50/80 backdrop-blur-sm relative z-10"
          >
            <span>Donate</span>
            <Heart size={isMobile ? 14 : 16} className="transition-transform duration-200 group-hover:scale-110" />
          </a>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-gray-600 hover:text-indigo-600 transition-all duration-200 text-sm sm:text-base cursor-pointer px-3 py-1.5 rounded-md hover:bg-indigo-50/80 backdrop-blur-sm relative z-10 flex items-center gap-1.5 sm:gap-2">
                Contact
                <Send size={isMobile ? 14 : 16} className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </DialogTrigger>
            <DialogContent 
              className="w-[min(calc(100%-2rem),480px)] sm:w-[min(95vw,480px)] md:w-[min(90vw,480px)] h-[min(calc(100vh-2rem),600px)] sm:h-[min(85vh,600px)] p-0 border-0 shadow-xl overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm flex flex-col data-[state=open]:duration-300"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 opacity-70" />
              
              {/* Animated gradient orbs - only shown on large screens */}
              <div className="hidden xl:block absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-200 blur-3xl opacity-20 animate-float-slow" />
              <div className="hidden xl:block absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-200 blur-3xl opacity-20 animate-float-medium" />
              
              {/* Header - Fixed on mobile */}
              <div className="relative p-4 sm:p-6 border-b border-gray-100 bg-white/50 backdrop-blur-sm">
              <DialogHeader>
                  <DialogTitle className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Get in Touch
                  </DialogTitle>
                  <DialogDescription className="text-sm sm:text-base text-gray-600">
                    Have a question or want to collaborate? We'd love to hear from you.
                </DialogDescription>
              </DialogHeader>
              </div>

              {/* Scrollable content */}
              <div className="relative flex-1 overflow-y-auto">
                <div className="p-4 sm:p-6">
                  <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700">Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={contactForm.name} 
                    onChange={handleContactChange} 
                    required 
                        className="h-11 sm:h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors text-base"
                        placeholder="Your name"
                        disabled={isSubmitting}
                  />
                </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={contactForm.email} 
                    onChange={handleContactChange} 
                    required 
                        className="h-11 sm:h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors text-base"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                  />
                </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number (Optional)</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    type="tel" 
                    value={contactForm.phone} 
                    onChange={handleContactChange} 
                        className="h-11 sm:h-12 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors text-base"
                        placeholder="+1 (555) 000-0000"
                        disabled={isSubmitting}
                  />
                </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    value={contactForm.message} 
                    onChange={handleContactChange} 
                    required 
                        className="bg-white/50 backdrop-blur-sm border-gray-200 focus:border-indigo-500 focus:ring-indigo-500 transition-colors resize-none text-base"
                        placeholder="Your message..."
                        disabled={isSubmitting}
                  />
                    </div>
                  </form>
                </div>
              </div>

              {/* Footer - Fixed on mobile */}
              <div className="relative p-4 sm:p-6 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                <div className="flex justify-end gap-3">
                  <DialogClose asChild>
                    <Button 
                      variant="outline" 
                      type="button" 
                      className="h-11 sm:h-12 px-6 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-base"
                      disabled={isSubmitting}
                    >
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button 
                    type="submit" 
                    className="h-11 sm:h-12 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-indigo-500/20 text-base"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="transition-transform duration-200 group-hover:translate-x-0.5" />
                    Send Message
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button className="text-gray-600 hover:text-indigo-600 transition-all duration-200 text-sm sm:text-base cursor-pointer px-3 py-1.5 rounded-md hover:bg-indigo-50/80 backdrop-blur-sm relative z-10 flex items-center gap-1.5 sm:gap-2">
                Privacy Policy
                <ExternalLink size={isMobile ? 14 : 16} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </DialogTrigger>
            <DialogContent 
              className="w-[min(calc(100%-2rem),800px)] sm:w-[min(95vw,800px)] md:w-[min(90vw,800px)] h-[min(calc(100vh-2rem),750px)] sm:h-[min(85vh,750px)] p-0 border-0 shadow-xl overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm flex flex-col data-[state=open]:duration-300"
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 opacity-70" />
              
              {/* Animated gradient orbs - only shown on large screens */}
              <div className="hidden xl:block absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-200 blur-3xl opacity-20 animate-float-slow" />
              <div className="hidden xl:block absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-200 blur-3xl opacity-20 animate-float-medium" />
              
              {/* Header - Fixed on mobile */}
              <div className="relative p-4 sm:p-6 border-b border-gray-100 bg-white/50 backdrop-blur-sm">
                <DialogHeader>
                  <DialogTitle className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                    Privacy Policy
                  </DialogTitle>
                  <DialogDescription className="text-sm sm:text-base text-gray-600">
                    Last updated: January 1, 2025
                  </DialogDescription>
                </DialogHeader>
              </div>

              {/* Scrollable content */}
              <div className="relative flex-1 overflow-y-auto">
                <div className="p-4 sm:p-6">
                  <div className="prose prose-sm sm:prose max-w-none text-gray-600 space-y-4 sm:space-y-6">
                    <div className="text-base sm:text-base">
                      <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">PRIVACY POLICY FOR THE REACH REPORT × DYLAN HUEY</h2>
                      <p className="font-medium mb-3">EFFECTIVE DATE: JANUARY 1, 2025</p>
                      
                      <p className="mb-4">
                        This Privacy Policy outlines how REACH Projects, Inc. ("we," "us," or "our") collects, uses, and protects your personal information when you subscribe to the REACH Report × Dylan Huey Newsletter ("Newsletter"). By subscribing, you agree to the terms of this Privacy Policy.
                      </p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Information We Collect</h3>
                      <p className="mb-4">When you subscribe to the Newsletter, we may collect:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Your name</li>
                        <li>Your email address</li>
                        <li>Any other information voluntarily provided by you</li>
                      </ul>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">How We Use Your Information</h3>
                      <p className="mb-4">We use your information to:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>Send you the Newsletter, updates, and related content</li>
                        <li>Communicate with you about Newsletter features, updates, and changes</li>
                        <li>Monitor, analyze, and improve the performance and effectiveness of the Newsletter</li>
                        <li>Comply with legal and regulatory requirements</li>
                      </ul>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Data Usage, Analytics, and Tracking</h3>
                      <p className="mb-4">
                        We may use email analytics to track email open rates, click-through rates, and other engagement metrics. We use this data to understand how our Newsletter is performing and to improve content delivery. This may include the use of tracking pixels, cookies, and third-party analytics services.
                      </p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Disclosure of Information</h3>
                      <p className="mb-4">We do not sell or rent your personal information. We may share your information in the following instances:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>With trusted third-party service providers who assist in operating the Newsletter under strict confidentiality agreements</li>
                        <li>To comply with legal requirements, law enforcement requests, or court orders</li>
                        <li>To protect our rights, property, or safety, or that of others</li>
                      </ul>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">International Data Transfers and Compliance</h3>
                      <p className="mb-4">
                        If you are located outside the United States, your information may be transferred to and processed in the United States. By submitting your information, you consent to this transfer, processing, and storage. We comply with international data protection laws including:
                      </p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>General Data Protection Regulation (GDPR) for individuals in the European Economic Area (EEA)</li>
                        <li>Personal Information Protection and Electronic Documents Act (PIPEDA) for Canadian residents</li>
                      </ul>

                      <p className="mb-4">If you are covered under these regulations, you have the following rights:</p>
                      <ul className="list-disc pl-6 mb-4">
                        <li>The right to access, correct, or delete your personal data</li>
                        <li>The right to object to processing or request restrictions</li>
                        <li>The right to data portability</li>
                      </ul>
                      <p className="mb-4">To exercise any of these rights, please contact us at postmaster@reachprojects.co.</p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Data Retention</h3>
                      <p className="mb-4">
                        We retain your personal information only as long as necessary to provide you with the Newsletter and for legitimate business purposes, unless a longer retention period is required by law.
                      </p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Your Choices and Unsubscribe</h3>
                      <p className="mb-4">
                        You may only unsubscribe from the Newsletter by clicking the "Unsubscribe" link included at the bottom of each email. We do not accept unsubscribe requests via email, phone, or any other method. Once unsubscribed, you will no longer receive the Newsletter, but we may retain your information for record-keeping and legal purposes.
                      </p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Third-Party Links</h3>
                      <p className="mb-4">
                        The Newsletter may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of these sites. We encourage you to review their privacy policies.
                      </p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Security Measures</h3>
                      <p className="mb-4">
                        We take reasonable steps to protect your personal information. However, no internet or email transmission is ever fully secure or error-free. You provide information at your own risk.
                      </p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Children's Privacy</h3>
                      <p className="mb-4">
                        The Newsletter is intended for users 18 years of age or older. We do not knowingly collect personal information from children under 13 years old. If you believe we have collected such information, contact us immediately.
                      </p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Changes to This Privacy Policy</h3>
                      <p className="mb-4">
                        We may update this Privacy Policy from time to time. Any changes will be posted in the Newsletter or sent via email. Your continued use of the Newsletter after changes are made indicates acceptance of the updated policy.
                      </p>

                      <h3 className="text-base sm:text-lg font-semibold text-gray-900 mt-6 mb-3">Contact Us</h3>
                      <p className="mb-4">
                        If you have questions or wish to exercise your rights under this policy, please contact:
                      </p>
                      <p className="mb-4">
                        REACH Projects, Inc.<br />
                        Email: postmaster@reachprojects.co
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer - Fixed on mobile */}
              <div className="relative p-4 sm:p-6 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                <div className="flex justify-end">
                  <DialogClose asChild>
                    <Button 
                      variant="outline" 
                      type="button" 
                      className="h-11 sm:h-12 px-6 border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 text-base"
                    >
                      Close
                    </Button>
                  </DialogClose>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  </footer>
));

FooterContent.displayName = 'FooterContent';

// Main footer component with optimized rendering
const SiteFooter = ({ isMobile }) => {
  const [contactForm, setContactForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: contactForm.name,
            email: contactForm.email,
            phone: contactForm.phone,
            message: contactForm.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      // Show success message
      toast.success('Message sent successfully!', {
        className: 'bg-green-50 text-green-800 border-green-200',
        icon: '✨'
      });
      
    // Reset form
    setContactForm(initialFormState);
      
      // Close the dialog
      const closeButton = document.querySelector('[data-dialog-close]');
      if (closeButton) closeButton.click();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to send message. Please try again.', {
        className: 'bg-red-50 text-red-800 border-red-200'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <FooterContent 
      isMobile={isMobile}
      handleContactChange={handleContactChange}
      handleContactSubmit={handleContactSubmit}
      contactForm={contactForm}
      isSubmitting={isSubmitting}
    />
  );
};

export default memo(SiteFooter);