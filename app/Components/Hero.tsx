import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-primary to-primary/80 text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Signage Making Company in Sharjah
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            At Cheema Advertising, we take pride in being a leading signage making company in Sharjah, UAE. 
            Backed by 20+ years of expertise, we craft impactful signboards designed to leave a powerful first impression.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105"
            >
              Get in Touch With Us
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary transition transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-lg">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Successfully Crafted Signboards</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg">Customer Satisfied Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
