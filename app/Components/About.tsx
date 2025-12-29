"use client";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

function useInView<T extends Element>(ref: React.RefObject<T | null>, rootMargin = '0px') {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { root: null, rootMargin, threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, rootMargin]);

  return inView;
}

function Counter({ target, suffix = '', duration = 1500 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  useEffect(() => {
    if (!inView && value !== 0) {
      startedRef.current = false;
      requestAnimationFrame(() => setValue(0));
    }
  }, [inView, value]);

  return (
    <div ref={containerRef} className="text-4xl font-bold">
      {value}
      {suffix}
    </div>
  );
}

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            <div className="space-y-4 text-gray-700 text-lg">
              <p>
                At Cheema Advertising, we combine innovation, craftsmanship, and attention to 
                detail to produce signboards that elevate your brand. With a commitment to quality 
                and precision, we offer signage services that ensure your business stands out.
              </p>
              <p>
                From custom signboards to LED displays, our focus is on delivering solutions that 
                are not only eye-catching but also durable and reliable. As a trusted signboard 
                company, we cater to businesses looking for top-tier signboard advertising at 
                competitive costs.
              </p>
              <p>
                Let us bring your vision to life with the best signage solutions in the industry.
              </p>
            </div>
             <Link
                  href="/about"
                  className="inline-flex mt-8 items-center self-start bg-linear-to-r from-primary to-black/50 text-white font-semibold px-5 py-2.5 rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group/btn"
                >
                  About Us
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Link>
            {/* <Link
              href="/about"
              className="inline-block mt-8 bg-primary text-black px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              About Us
            </Link> */}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary text-black p-8 rounded-lg text-center">
              <Counter target={1000} suffix="+" duration={1500} />
              <div className="text-sm">Successfully Crafted Signboards</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2"><Counter target={100} suffix="%" duration={1200} /></div>
              <div className="text-sm text-gray-700">Customer Satisfied Service</div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg text-center">
              <div className="text-4xl font-bold text-primary mb-2"><Counter target={20} suffix="+" duration={1000} /></div>
              <div className="text-sm text-gray-700">Years of Experience</div>
            </div>
            <div className="bg-primary text-black p-8 rounded-lg text-center">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-sm">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
