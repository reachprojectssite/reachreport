"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 640px)");
  
  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white">
      {/* ... (all previous sections remain the same until the footer) ... */}
      
      {/* Footer with Contact popup */}
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
                    {/* ... (contact form fields remain the same) ... */}
                  </form>
                </DialogContent>
              </Dialog>
              
              {/* Privacy Policy Dialog */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="text-gray-600 hover:text-indigo-600 transition-colors text-sm sm:text-base">
                    Privacy Policy
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-xl font-bold">Privacy Policy for The REACH Report × Dylan Huey</DialogTitle>
                    <DialogDescription className="text-sm text-gray-500">Effective Date: January 1, 2025</DialogDescription>
                  </DialogHeader>
                  <div className="mt-4 text-sm">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}