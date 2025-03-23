"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, Sparkles, Bell, ArrowRight, Clock, ChevronRight, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// Pre-defined static data
const WORDS = ["CREATORS", "INFLUENCERS", "VISIONARIES", "INNOVATORS"];
const LATEST_INSIGHTS = [
  {
    id: 1,
    title: "The Rise of AI in Creator Marketing",
    excerpt: "How artificial intelligence is transforming content creation and audience targeting.",
    category: "Tech Trends", 
    date: "May 15, 2025",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "TikTok's Algorithm Update: What Creators Need to Know",
    excerpt: "Breaking down the latest changes and how to optimize your content strategy.",
    category: "Platform Updates",
    date: "May 8, 2025",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Monetization Strategies for Micro-Influencers",
    excerpt: "Effective ways to generate revenue with audiences under 100K followers.",
    category: "Monetization",
    date: "May 1, 2025",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop"
  }
];

// Rest of the code remains exactly the same...