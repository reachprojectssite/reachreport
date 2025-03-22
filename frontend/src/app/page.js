"use client";

import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, ExternalLink, Sparkles, Bell, ArrowRight, Clock, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Home() {
  const [email, setEmail] = useState("");
  const [currentWord, setCurrentWord] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isBellAnimated, setIsBellAnimated] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });
  const statsRef = useRef(null);
  const words = ["CREATORS", "INFLUENCERS", "VISIONARIES", "INNOVATORS"];

  // ... rest of the code remains exactly the same ...
}