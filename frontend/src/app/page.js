"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-white">
      {/* Background gradient elements */}
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-purple-100 blur-3xl opacity-50" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-blue-100 blur-3xl opacity-50" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-red-100 blur-3xl opacity-30" />
      
      {/* Header */}
      <header className="flex justify-between items-center p-5">
        <div className="font-bold text-lg">REACH X Dylan Huey</div>
        <Button variant="outline" className="rounded-full">Archive</Button>
      </header>
      
      {/* Main content */}
      <main className="max-w-4xl mx-auto px-4 pt-20 pb-32 relative z-10">
        <div className="text-center mb-16">
          <p className="text-gray-500 uppercase tracking-wider mb-2">FOR THE NEXT GENERATION OF</p>
          <h1 className="text-6xl font-bold mb-4">INFLUENCERS</h1>
          <h2 className="text-3xl font-medium flex items-center justify-center gap-2">
            The REACH Report <span className="text-gray-400">×</span> Dylan Huey
            <span className="text-yellow-400 text-2xl">✧</span>
          </h2>
        </div>
        
        {/* Subscription card */}
        <Card className="max-w-md mx-auto p-6 shadow-lg">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Join the community</h3>
            <p className="text-gray-600">Get the latest insights biweekly.</p>
          </div>
          
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="your@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md"
            />
            <Button 
              className="w-full bg-black text-white hover:bg-gray-800"
            >
              Subscribe for free
            </Button>
          </div>
        </Card>
      </main>
    </div>
  );
}