"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="pl-0 flex items-center gap-2 text-gray-600 hover:text-indigo-600">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Button>
        </Link>
      </div>
      
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-gray-500">For The Reach Report × Dylan Huey</p>
          <p className="text-sm text-gray-500">Effective Date: January 1, 2025</p>
        </div>
        
        <p className="text-sm sm:text-base">
          This privacy policy outlines how Reach Projects, Inc. ("we," "us," or "our") collects, uses, and protects your personal information when you subscribe to The Reach Report × Dylan Huey newsletter ("Newsletter"). By subscribing, you agree to the terms of this privacy policy.
        </p>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Information We Collect</h2>
          <p className="text-sm sm:text-base">When you subscribe to the Newsletter, we may collect:</p>
          <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Any other information voluntarily provided by you</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">How We Use Your Information</h2>
          <p className="text-sm sm:text-base">We use your information to:</p>
          <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
            <li>Send you the Newsletter, updates, and related content</li>
            <li>Communicate with you about Newsletter features, updates, and changes</li>
            <li>Monitor, analyze, and improve the performance and effectiveness of the Newsletter</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Data Usage, Analytics, and Tracking</h2>
          <p className="text-sm sm:text-base">
            We may use email analytics to track email open rates, click-through rates, and other engagement metrics. We use this data to understand how our Newsletter is performing and to improve content delivery. This may include the use of tracking pixels, cookies, and third-party analytics services.
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Disclosure of Information</h2>
          <p className="text-sm sm:text-base">
            We do not sell or rent your personal information. We may share your information in the following instances:
          </p>
          <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
            <li>With trusted third-party service providers who assist in operating the Newsletter under strict confidentiality agreements</li>
            <li>To comply with legal requirements, law enforcement requests, or court orders</li>
            <li>To protect our rights, property, or safety, or that of others</li>
          </ul>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">International Data Transfers and Compliance</h2>
          <p className="text-sm sm:text-base">
            If you are located outside the United States, your information may be transferred to and processed in the United States. By submitting your information, you consent to this transfer, processing, and storage. We comply with international data protection laws including:
          </p>
          <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
            <li>General Data Protection Regulation (GDPR) for individuals in the European Economic Area (EEA)</li>
            <li>Personal Information Protection and Electronic Documents Act (PIPEDA) for Canadian residents</li>
          </ul>
          <p className="text-sm sm:text-base mt-2">
            If you are covered under these regulations, you have the following rights:
          </p>
          <ul className="list-disc pl-5 text-sm sm:text-base space-y-1">
            <li>The right to access, correct, or delete your personal data</li>
            <li>The right to object to processing or request restrictions</li>
            <li>The right to data portability</li>
          </ul>
          <p className="text-sm sm:text-base mt-2">
            To exercise any of these rights, please contact us at postmaster@reachprojects.co.
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Data Retention</h2>
          <p className="text-sm sm:text-base">
            We retain your personal information only as long as necessary to provide you with the Newsletter and for legitimate business purposes, unless a longer retention period is required by law.
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Your Choices and Unsubscribe</h2>
          <p className="text-sm sm:text-base">
            You may only unsubscribe from the Newsletter by clicking the "Unsubscribe" link included at the bottom of each email. We do not accept unsubscribe requests via email, phone, or any other method. Once unsubscribed, you will no longer receive the Newsletter, but we may retain your information for record-keeping and legal purposes.
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Third-Party Links</h2>
          <p className="text-sm sm:text-base">
            The Newsletter may contain links to third-party websites. We are not responsible for the privacy practices, content, or security of these sites. We encourage you to review their privacy policies.
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Security Measures</h2>
          <p className="text-sm sm:text-base">
            We take reasonable steps to protect your personal information. However, no internet or email transmission is ever fully secure or error-free. You provide information at your own risk.
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Children's Privacy</h2>
          <p className="text-sm sm:text-base">
            The Newsletter is intended for users 18 years of age or older. We do not knowingly collect personal information from children under 13 years old. If you believe we have collected such information, contact us immediately.
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Changes to This Privacy Policy</h2>
          <p className="text-sm sm:text-base">
            We may update this Privacy Policy from time to time. Any changes will be posted in the Newsletter or sent via email. Your continued use of the Newsletter after changes are made indicates acceptance of the updated policy.
          </p>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-semibold">Contact Us</h2>
          <p className="text-sm sm:text-base">
            If you have questions or wish to exercise your rights under this policy, please contact:
          </p>
          <p className="text-sm sm:text-base font-medium mt-2">
            Reach Projects, Inc.<br />
            Email: postmaster@reachprojects.co
          </p>
        </div>
      </div>
    </div>
  );
}