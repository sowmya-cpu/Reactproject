import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative py-20 px-6 lg:px-8 overflow-hidden min-h-[100vh] bg-gradient-to-br from-black via-neutral-900 to-black">
      {/* Grid background */}
      <div className="absolute inset-0 grid grid-cols-[repeat(20,_minmax(0,_1fr))] grid-rows-[repeat(20,_minmax(0,_1fr))] opacity-20">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-r border-b border-yellow-500/30"></div>
        ))}
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto relative text-center z-10 flex flex-col items-center justify-center h-[calc(100vh-8rem)]">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
          <span className="text-white">Learn, </span>
          <span className="text-yellow-200">Build</span>
          <span className="text-white">, </span>
          <span className="text-yellow-300">Grow with </span>
          <span className="text-yellow-400">AI</span>
        </h1>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Switch Dimension: Your partner in leveraging cutting-edge AI solutions to revolutionize your industry and
          stay ahead of the competition.
        </p>
        <Link href="#contact-form">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-white text-black font-bold hover:from-yellow-500 hover:to-gray-100"
          >
            Get in Touch
          </Button>
        </Link>
      </div>
    </section>
  )
}

