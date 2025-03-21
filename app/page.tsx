import Hero from "@/components/hero"
import Features from "@/components/features"
import AboutUs from "@/components/about-us"
import Testimonials from "@/components/testimonials"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <div className="section-divider" />
      <Features />
      <AboutUs />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  )
}

