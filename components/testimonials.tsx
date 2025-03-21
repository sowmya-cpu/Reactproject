import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Switch Dimension transformed our business with their AI solutions. We saw a 200% increase in efficiency within months.",
  },
  {
    name: "Michael Chen",
    role: "CTO, InnovateCo",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The team at Switch Dimension is exceptional. Their AI expertise helped us stay ahead in a competitive market.",
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-12 text-center">
          <span className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">
            What Our Clients Say
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative bg-black p-6 rounded-lg overflow-hidden"
              style={{
                backgroundImage: "linear-gradient(to bottom right, rgba(250, 204, 21, 0.1), rgba(107, 114, 128, 0.1))",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
                border: "2px solid transparent",
              }}
            >
              <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

