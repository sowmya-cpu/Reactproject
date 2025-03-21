import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              <span className="bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text">About Us</span>
            </h2>
            <p className="text-gray-300 mb-4">
              Switch Dimension is at the forefront of AI innovation, dedicated to transforming businesses through
              cutting-edge artificial intelligence solutions. Our team of experts combines deep technical knowledge with
              industry insights to deliver tailored AI strategies that drive growth and efficiency.
            </p>
            <p className="text-gray-300">
              We believe in the power of AI to revolutionize industries, and we are committed to guiding our clients
              through every step of their AI journey. From concept to implementation, Switch Dimension is your trusted
              partner in navigating the exciting world of artificial intelligence.
            </p>
          </div>
          <div className="relative w-full min-h-[250px] md:h-[400px] flex items-center justify-center">
            <Image
              src="/images/SRI_3333.JPG"
              alt="About Switch Dimension"
              width={400}
              height={300}
              className="rounded-lg max-w-[300px] md:max-w-full md:h-full md:w-full md:object-cover"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

