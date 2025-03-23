"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Mail, X, ChevronDown, ChevronUp, ArrowLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ArchivesModal({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

  // Check localStorage for existing email on mount
  useEffect(() => {
    const storedEmail = localStorage.getItem("archivesEmail");
    if (storedEmail && EMAIL_REGEX.test(storedEmail)) {
      setEmail(storedEmail);
      setIsValidEmail(true);
      fetchPosts();
    }
  }, []);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!EMAIL_REGEX.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    try {
      // Check if email already exists in subscribers table
      const { data: existingSubscriber } = await supabase
        .from('subscribers')
        .select('email')
        .eq('email', email)
        .single();

      if (existingSubscriber) {
        // If subscriber exists, just grant access
        setIsValidEmail(true);
        localStorage.setItem("archivesEmail", email);
        fetchPosts();
        toast.info("Welcome back! Accessing archives...");
      } else {
        // If not a subscriber, add them
        const { error: insertError } = await supabase
          .from('subscribers')
          .insert([{ email }]);

        if (insertError) throw insertError;

        // Grant access and show success message
        setIsValidEmail(true);
        localStorage.setItem("archivesEmail", email);
        fetchPosts();
        toast.success("Welcome! You're now subscribed and can access the archives.");
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPosts = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/rss-feed");
      if (!response.ok) throw new Error("Failed to fetch RSS feed");
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError("Failed to load archive content. Please try again later.");
      console.error("Error fetching RSS feed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  const handleBack = () => {
    setSelectedPost(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <Button variant="ghost" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
            Newsletter Archives
          </Button>
        )}
      </DialogTrigger>
      <DialogContent 
        className="w-[min(calc(100%-2rem),1200px)] sm:w-[min(95vw,1200px)] md:w-[min(90vw,1200px)] lg:w-[min(85vw,1200px)] h-[min(calc(100vh-2rem),900px)] sm:h-[min(90vh,900px)] p-0 border-0 shadow-xl overflow-hidden rounded-lg bg-white/80 backdrop-blur-sm flex flex-col data-[state=open]:duration-300"
      >
        {/* Gradient background - subtle for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 opacity-70" />
        
        {/* Animated gradient orbs - only shown on large screens */}
        <div className="hidden xl:block absolute top-0 left-0 w-64 h-64 rounded-full bg-purple-200 blur-3xl opacity-20 animate-float-slow" />
        <div className="hidden xl:block absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-200 blur-3xl opacity-20 animate-float-medium" />
        
        {/* Header - compact for better space usage */}
        <div className="relative flex-none p-2 sm:p-3 md:p-4 border-b border-gray-100 bg-white/50 backdrop-blur-sm">
          <DialogHeader>
            <DialogTitle className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {selectedPost ? "Newsletter Post" : "Newsletter Archives"}
            </DialogTitle>
          </DialogHeader>
        </div>

        {/* Content area - with proper scrolling */}
        <div className="relative flex-1 flex flex-col min-h-0">
          {!isValidEmail ? (
            // Email gate form - centered with proper spacing
            <div className="flex-1 p-4 flex items-center justify-center">
              <div className="w-full max-w-[min(320px,100%-32px)] space-y-4">
                <div className="text-center space-y-2">
                  <Mail className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-indigo-600" />
                  <h3 className="text-base sm:text-lg font-semibold">Access the Archives</h3>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Enter your email to view our newsletter archives
                  </p>
                </div>
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-10 sm:h-11 bg-white/50 backdrop-blur-sm border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                    required
                  />
                  <Button
                    type="submit"
                    className="w-full h-10 sm:h-11 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white text-sm sm:text-base"
                  >
                    Access Archives
                  </Button>
                </form>
              </div>
            </div>
          ) : selectedPost ? (
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex-none bg-white/50 backdrop-blur-sm p-2 sm:p-3 md:p-4 border-b">
                <div className="flex items-center gap-2 sm:gap-3">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleBack}
                    className="hover:bg-white/80 h-8 w-8 sm:h-9 sm:w-9"
                  >
                    <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-900 truncate">{selectedPost.title}</h2>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {new Date(selectedPost.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              </div>
              <ScrollArea className="flex-1">
                <div className="p-4 sm:p-6 md:p-8 max-w-[min(900px,100%-32px)] mx-auto">
                  {selectedPost.image && (
                    <div className="mb-6">
                      <div className="relative rounded-lg overflow-hidden">
                        <img
                          src={selectedPost.image}
                          alt={selectedPost.title}
                          className="w-full h-auto"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                  <div 
                    className="newsletter-content text-[15px] sm:text-base md:text-lg"
                    dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                  />
                </div>
              </ScrollArea>
            </div>
          ) : (
            <ScrollArea className="flex-1">
              <div className="p-3 sm:p-4 md:p-6 max-w-[min(900px,100%-32px)] mx-auto">
                {posts.map((post, index) => (
                  <div
                    key={index}
                    className="mb-3 sm:mb-4 p-3 sm:p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-gray-200 hover:border-indigo-200 transition-colors duration-200 cursor-pointer active:bg-gray-50"
                    onClick={() => handlePostClick(post)}
                  >
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5">{post.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 line-clamp-2 mb-2">{post.subtitle}</p>
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-400">
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                      <span className="flex items-center gap-1">
                        Read More <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
} 