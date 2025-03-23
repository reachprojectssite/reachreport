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
    phone: "",
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
      phone: "",
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
                  <DialogTitle className="text-lg sm:text-xl font-bold">Privacy Policy for The REACH Report × Dylan Huey</DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm text-gray-500">Effective Date: January 1, 2025</DialogDescription>
                </DialogHeader>
                <div className="mt-4 text-xs sm:text-sm">
                  <p className="mb-4">
                    THIS PRIVACY POLICY OUTLINES HOW REACH PROJECTS, INC. ("WE," "US," OR "OUR") COLLECTS, USES, AND PROTECTS YOUR PERSONAL INFORMATION WHEN YOU SUBSCRIBE TO THE REACH REPORT × DYLAN HUEY NEWSLETTER ("NEWSLETTER"). BY SUBSCRIBING, YOU AGREE TO THE TERMS OF THIS PRIVACY POLICY.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">INFORMATION WE COLLECT</h3>
                  <p className="mb-4">WHEN YOU SUBSCRIBE TO THE NEWSLETTER, WE MAY COLLECT:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>YOUR NAME</li>
                    <li>YOUR EMAIL ADDRESS</li>
                    <li>ANY OTHER INFORMATION VOLUNTARILY PROVIDED BY YOU</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-2">HOW WE USE YOUR INFORMATION</h3>
                  <p className="mb-4">WE USE YOUR INFORMATION TO:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>SEND YOU THE NEWSLETTER, UPDATES, AND RELATED CONTENT</li>
                    <li>COMMUNICATE WITH YOU ABOUT NEWSLETTER FEATURES, UPDATES, AND CHANGES</li>
                    <li>MONITOR, ANALYZE, AND IMPROVE THE PERFORMANCE AND EFFECTIVENESS OF THE NEWSLETTER</li>
                    <li>COMPLY WITH LEGAL AND REGULATORY REQUIREMENTS</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-2">DATA USAGE, ANALYTICS, AND TRACKING</h3>
                  <p className="mb-4">
                    WE MAY USE EMAIL ANALYTICS TO TRACK EMAIL OPEN RATES, CLICK-THROUGH RATES, AND OTHER ENGAGEMENT METRICS. WE USE THIS DATA TO UNDERSTAND HOW OUR NEWSLETTER IS PERFORMING AND TO IMPROVE CONTENT DELIVERY. THIS MAY INCLUDE THE USE OF TRACKING PIXELS, COOKIES, AND THIRD-PARTY ANALYTICS SERVICES.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">DISCLOSURE OF INFORMATION</h3>
                  <p className="mb-4">WE DO NOT SELL OR RENT YOUR PERSONAL INFORMATION. WE MAY SHARE YOUR INFORMATION IN THE FOLLOWING INSTANCES:</p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>WITH TRUSTED THIRD-PARTY SERVICE PROVIDERS WHO ASSIST IN OPERATING THE NEWSLETTER UNDER STRICT CONFIDENTIALITY AGREEMENTS</li>
                    <li>TO COMPLY WITH LEGAL REQUIREMENTS, LAW ENFORCEMENT REQUESTS, OR COURT ORDERS</li>
                    <li>TO PROTECT OUR RIGHTS, PROPERTY, OR SAFETY, OR THAT OF OTHERS</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-2">INTERNATIONAL DATA TRANSFERS AND COMPLIANCE</h3>
                  <p className="mb-4">
                    IF YOU ARE LOCATED OUTSIDE THE UNITED STATES, YOUR INFORMATION MAY BE TRANSFERRED TO AND PROCESSED IN THE UNITED STATES. BY SUBMITTING YOUR INFORMATION, YOU CONSENT TO THIS TRANSFER, PROCESSING, AND STORAGE. WE COMPLY WITH INTERNATIONAL DATA PROTECTION LAWS INCLUDING:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>GENERAL DATA PROTECTION REGULATION (GDPR) FOR INDIVIDUALS IN THE EUROPEAN ECONOMIC AREA (EEA)</li>
                    <li>PERSONAL INFORMATION PROTECTION AND ELECTRONIC DOCUMENTS ACT (PIPEDA) FOR CANADIAN RESIDENTS</li>
                  </ul>
                  <p className="mb-4">
                    IF YOU ARE COVERED UNDER THESE REGULATIONS, YOU HAVE THE FOLLOWING RIGHTS:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>THE RIGHT TO ACCESS, CORRECT, OR DELETE YOUR PERSONAL DATA</li>
                    <li>THE RIGHT TO OBJECT TO PROCESSING OR REQUEST RESTRICTIONS</li>
                    <li>THE RIGHT TO DATA PORTABILITY</li>
                  </ul>
                  <p className="mb-4">
                    TO EXERCISE ANY OF THESE RIGHTS, PLEASE CONTACT US AT POSTMASTER@REACHPROJECTS.CO.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">DATA RETENTION</h3>
                  <p className="mb-4">
                    WE RETAIN YOUR PERSONAL INFORMATION ONLY AS LONG AS NECESSARY TO PROVIDE YOU WITH THE NEWSLETTER AND FOR LEGITIMATE BUSINESS PURPOSES, UNLESS A LONGER RETENTION PERIOD IS REQUIRED BY LAW.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">YOUR CHOICES AND UNSUBSCRIBE</h3>
                  <p className="mb-4">
                    YOU MAY ONLY UNSUBSCRIBE FROM THE NEWSLETTER BY CLICKING THE "UNSUBSCRIBE" LINK INCLUDED AT THE BOTTOM OF EACH EMAIL. WE DO NOT ACCEPT UNSUBSCRIBE REQUESTS VIA EMAIL, PHONE, OR ANY OTHER METHOD. ONCE UNSUBSCRIBED, YOU WILL NO LONGER RECEIVE THE NEWSLETTER, BUT WE MAY RETAIN YOUR INFORMATION FOR RECORD-KEEPING AND LEGAL PURPOSES.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">THIRD-PARTY LINKS</h3>
                  <p className="mb-4">
                    THE NEWSLETTER MAY CONTAIN LINKS TO THIRD-PARTY WEBSITES. WE ARE NOT RESPONSIBLE FOR THE PRIVACY PRACTICES, CONTENT, OR SECURITY OF THESE SITES. WE ENCOURAGE YOU TO REVIEW THEIR PRIVACY POLICIES.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">SECURITY MEASURES</h3>
                  <p className="mb-4">
                    WE TAKE REASONABLE STEPS TO PROTECT YOUR PERSONAL INFORMATION. HOWEVER, NO INTERNET OR EMAIL TRANSMISSION IS EVER FULLY SECURE OR ERROR-FREE. YOU PROVIDE INFORMATION AT YOUR OWN RISK.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">CHILDREN'S PRIVACY</h3>
                  <p className="mb-4">
                    THE NEWSLETTER IS INTENDED FOR USERS 18 YEARS OF AGE OR OLDER. WE DO NOT KNOWINGLY COLLECT PERSONAL INFORMATION FROM CHILDREN UNDER 13 YEARS OLD. IF YOU BELIEVE WE HAVE COLLECTED SUCH INFORMATION, CONTACT US IMMEDIATELY.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">CHANGES TO THIS PRIVACY POLICY</h3>
                  <p className="mb-4">
                    WE MAY UPDATE THIS PRIVACY POLICY FROM TIME TO TIME. ANY CHANGES WILL BE POSTED IN THE NEWSLETTER OR SENT VIA EMAIL. YOUR CONTINUED USE OF THE NEWSLETTER AFTER CHANGES ARE MADE INDICATES ACCEPTANCE OF THE UPDATED POLICY.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">CONTACT US</h3>
                  <p className="mb-4">
                    IF YOU HAVE QUESTIONS OR WISH TO EXERCISE YOUR RIGHTS UNDER THIS POLICY, PLEASE CONTACT:
                  </p>
                  <p className="mb-4">
                    REACH PROJECTS, INC.<br />
                    EMAIL: POSTMASTER@REACHPROJECTS.CO
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
                  <DialogTitle className="text-lg sm:text-xl font-bold">Terms of Service for The REACH Report × Dylan Huey</DialogTitle>
                  <DialogDescription className="text-xs sm:text-sm text-gray-500">Effective Date: January 1, 2025</DialogDescription>
                </DialogHeader>
                <div className="mt-4 text-xs sm:text-sm">
                  <p className="mb-4">
                    THESE TERMS OF SERVICE ("TERMS") GOVERN YOUR ACCESS TO AND USE OF THE REACH REPORT × DYLAN HUEY NEWSLETTER ("NEWSLETTER"). BY SUBSCRIBING TO OR USING THE NEWSLETTER, YOU AGREE TO BE BOUND BY THESE TERMS.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">ACCEPTANCE OF TERMS</h3>
                  <p className="mb-4">
                    BY SUBSCRIBING TO THE NEWSLETTER, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS. IF YOU DO NOT AGREE TO THESE TERMS, DO NOT SUBSCRIBE TO OR USE THE NEWSLETTER.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">NEWSLETTER DESCRIPTION</h3>
                  <p className="mb-4">
                    THE REACH REPORT × DYLAN HUEY IS A BIWEEKLY NEWSLETTER PROVIDING INFORMATION, ANALYSIS, AND INSIGHTS RELATED TO MARKETING, SOCIAL MEDIA, AND THE CREATOR ECONOMY. THE NEWSLETTER IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">SUBSCRIPTION AND DELIVERY</h3>
                  <p className="mb-4">
                    TO RECEIVE THE NEWSLETTER, YOU MUST PROVIDE A VALID EMAIL ADDRESS. WE WILL SEND THE NEWSLETTER TO THE EMAIL ADDRESS YOU PROVIDE. YOU ARE RESPONSIBLE FOR ENSURING THAT YOUR EMAIL ADDRESS IS ACCURATE AND REMAINS CURRENT.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">INTELLECTUAL PROPERTY RIGHTS</h3>
                  <p className="mb-4">
                    ALL CONTENT IN THE NEWSLETTER, INCLUDING BUT NOT LIMITED TO TEXT, GRAPHICS, LOGOS, IMAGES, AND DATA COMPILATIONS, IS THE PROPERTY OF REACH PROJECTS, INC. OR ITS CONTENT SUPPLIERS AND IS PROTECTED BY UNITED STATES AND INTERNATIONAL COPYRIGHT LAWS.
                  </p>
                  <p className="mb-4">
                    YOU MAY NOT REPRODUCE, DISTRIBUTE, MODIFY, CREATE DERIVATIVE WORKS OF, PUBLICLY DISPLAY, PUBLICLY PERFORM, REPUBLISH, DOWNLOAD, STORE, OR TRANSMIT ANY CONTENT FROM THE NEWSLETTER WITHOUT OUR PRIOR WRITTEN CONSENT, EXCEPT FOR:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>TEMPORARY STORAGE OF COPIES SOLELY AS NECESSARY TO VIEW THE NEWSLETTER</li>
                    <li>STORING FILES AUTOMATICALLY CACHED BY YOUR WEB BROWSER FOR DISPLAY ENHANCEMENT PURPOSES</li>
                    <li>PRINTING A REASONABLE NUMBER OF PAGES FROM THE NEWSLETTER FOR PERSONAL, NON-COMMERCIAL USE</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-2">USER CONDUCT</h3>
                  <p className="mb-4">
                    YOU AGREE NOT TO USE THE NEWSLETTER:
                  </p>
                  <ul className="list-disc pl-6 mb-4 space-y-1">
                    <li>IN ANY WAY THAT VIOLATES APPLICABLE LAWS OR REGULATIONS</li>
                    <li>TO IMPERSONATE OR ATTEMPT TO IMPERSONATE REACH PROJECTS, INC., ITS EMPLOYEES, OR OTHER USERS</li>
                    <li>TO ENGAGE IN ANY CONDUCT THAT RESTRICTS OR INHIBITS ANYONE'S USE OF THE NEWSLETTER</li>
                    <li>TO ATTEMPT TO GAIN UNAUTHORIZED ACCESS TO THE NEWSLETTER OR RELATED SYSTEMS</li>
                  </ul>
                  
                  <h3 className="font-bold mt-6 mb-2">THIRD-PARTY LINKS</h3>
                  <p className="mb-4">
                    THE NEWSLETTER MAY CONTAIN LINKS TO THIRD-PARTY WEBSITES OR SERVICES THAT ARE NOT OWNED OR CONTROLLED BY REACH PROJECTS, INC. WE HAVE NO CONTROL OVER, AND ASSUME NO RESPONSIBILITY FOR, THE CONTENT, PRIVACY POLICIES, OR PRACTICES OF ANY THIRD-PARTY WEBSITES OR SERVICES.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">DISCLAIMER OF WARRANTIES</h3>
                  <p className="mb-4">
                    THE NEWSLETTER IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. REACH PROJECTS, INC. DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">LIMITATION OF LIABILITY</h3>
                  <p className="mb-4">
                    IN NO EVENT SHALL REACH PROJECTS, INC., ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE NEWSLETTER.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">INDEMNIFICATION</h3>
                  <p className="mb-4">
                    YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS REACH PROJECTS, INC. AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS FROM AND AGAINST ANY CLAIMS, LIABILITIES, DAMAGES, JUDGMENTS, AWARDS, LOSSES, COSTS, EXPENSES, OR FEES ARISING OUT OF OR RELATING TO YOUR VIOLATION OF THESE TERMS.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">TERMINATION</h3>
                  <p className="mb-4">
                    WE MAY TERMINATE OR SUSPEND YOUR ACCESS TO THE NEWSLETTER IMMEDIATELY, WITHOUT PRIOR NOTICE, FOR ANY REASON WHATSOEVER, INCLUDING WITHOUT LIMITATION IF YOU BREACH THESE TERMS.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">CHANGES TO TERMS</h3>
                  <p className="mb-4">
                    WE RESERVE THE RIGHT TO MODIFY OR REPLACE THESE TERMS AT ANY TIME. IF A REVISION IS MATERIAL, WE WILL PROVIDE AT LEAST 30 DAYS' NOTICE PRIOR TO ANY NEW TERMS TAKING EFFECT. WHAT CONSTITUTES A MATERIAL CHANGE WILL BE DETERMINED AT OUR SOLE DISCRETION.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">GOVERNING LAW</h3>
                  <p className="mb-4">
                    THESE TERMS SHALL BE GOVERNED BY AND CONSTRUED IN ACCORDANCE WITH THE LAWS OF THE STATE OF CALIFORNIA, WITHOUT REGARD TO ITS CONFLICT OF LAW PROVISIONS.
                  </p>
                  
                  <h3 className="font-bold mt-6 mb-2">CONTACT US</h3>
                  <p className="mb-4">
                    IF YOU HAVE ANY QUESTIONS ABOUT THESE TERMS, PLEASE CONTACT US AT:
                  </p>
                  <p className="mb-4">
                    REACH PROJECTS, INC.<br />
                    EMAIL: POSTMASTER@REACHPROJECTS.CO
                  </p>
                </div>
              </DialogContent>
            </Dialog>
            
            <a 
              href="/donate" 
              className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base"
            >
              Donate
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;