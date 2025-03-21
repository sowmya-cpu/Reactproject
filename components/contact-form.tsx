"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("https://formspree.io/f/mqaeakyo", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact-form" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          <span className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">Get in Touch</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <Input type="text" name="name" placeholder="Your Name" required />
            <Input type="email" name="email" placeholder="Your Email" required />
          </div>
          <Input type="text" name="subject" placeholder="Subject" required />
          <Textarea name="message" placeholder="Your Message" rows={4} required />
          <Button type="submit" disabled={isSubmitting} className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
