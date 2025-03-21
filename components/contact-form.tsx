"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(event.currentTarget)
      const response = await fetch('https://formspree.io/f/mqaeakyo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section className="py-24 px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-white text-xl">Thanks for reaching out! We will get back to you soon.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact-form" className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          <span className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">Get in Touch</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <Input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                required 
              />
            </div>
            <div>
              <Input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                required 
              />
            </div>
          </div>
          <div>
            <Input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              required 
            />
          </div>
          <div>
            <Textarea 
              name="message"
              placeholder="Your Message" 
              rows={4} 
              required 
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-yellow-400 to-white text-black font-bold hover:from-yellow-500 hover:to-gray-100"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  )
}

