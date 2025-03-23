"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Optimize font loading
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Add display swap for better performance
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata = {
  title: "ReachReport - Insights for Creators and Marketers",
  description: "The REACH Report x Dylan Huey - Breaking down the latest in marketing, social media, and the creator economy.",
  keywords: ["creator economy", "marketing", "social media", "influencers", "newsletter"],
  authors: [{ name: "Dylan Huey" }],
  openGraph: {
    title: "ReachReport - Insights for Creators and Marketers",
    description: "The REACH Report x Dylan Huey - Breaking down the latest in marketing, social media, and the creator economy.",
    url: "https://reachreport.com",
    siteName: "ReachReport",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ReachReport - Insights for Creators and Marketers",
    description: "The REACH Report x Dylan Huey - Breaking down the latest in marketing, social media, and the creator economy.",
    creator: "@dylanhuey",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script 
          data-beehiiv-publication-id="pub_32491422-c94a-40b2-baec-c90cbb498271"
          src="https://embed.beehiiv.com/subscribe.js"
          async
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}