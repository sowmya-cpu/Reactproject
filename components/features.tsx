import { Brain, Zap, TrendingUp } from "lucide-react"

const features = [
  {
    name: "Advanced AI Solutions",
    description: "Cutting-edge artificial intelligence tailored to your business needs.",
    icon: Brain,
  },
  {
    name: "Rapid Implementation",
    description: "Quick integration of AI technologies to boost your productivity.",
    icon: Zap,
  },
  {
    name: "Scalable Growth",
    description: "AI-driven strategies to scale your business efficiently.",
    icon: TrendingUp,
  },
]

export default function Features() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          <span className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
            Why Choose Switch Dimension?
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative bg-black p-6 rounded-lg overflow-hidden"
              style={{
                backgroundImage: "linear-gradient(to bottom right, rgba(250, 204, 21, 0.1), rgba(107, 114, 128, 0.1))",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                border: "2px solid transparent",
              }}
            >
              <feature.icon className="h-10 w-10 text-yellow-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

