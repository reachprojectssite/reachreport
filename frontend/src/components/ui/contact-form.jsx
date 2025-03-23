"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DialogClose } from "@/components/ui/dialog";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3 sm:space-y-4">
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="name" className="text-sm">Name</Label>
        <Input 
          id="name" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
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
          value={formData.email} 
          onChange={handleChange} 
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
          value={formData.phone} 
          onChange={handleChange} 
          className="h-9 sm:h-10"
        />
      </div>
      <div className="space-y-1 sm:space-y-2">
        <Label htmlFor="message" className="text-sm">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          rows={4} 
          value={formData.message} 
          onChange={handleChange} 
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
  );
};

export default ContactForm;