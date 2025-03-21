import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
            Ready to Switch to the Future?
          </span>
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Join the AI revolution and transform your business today. Let's build the future together.
        </p>
        <Button
          size="lg"
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold hover:from-yellow-500 hover:to-orange-600"
        >
          Get Started Now
        </Button>
      </div>
    </section>
  )
}

