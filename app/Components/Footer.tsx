import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">CHEEMA ADVERTISING</h3>
            <p className="text-gray-400">
              Cheema is a Signboard-making company based in Sharjah, Dubai, dedicated to 
              delivering top-notch services to meet your business needs.
            </p>
          </div>

          {/* Signboard Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Signboard Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/indoor-signboard" className="hover:text-white">Indoor Signage</Link></li>
              <li><Link href="/outdoor-signboard" className="hover:text-white">Outdoor Signage</Link></li>
              <li><Link href="/led-signboard" className="hover:text-white">LED Signage</Link></li>
              <li><Link href="/3d-signboard" className="hover:text-white">3D Signage</Link></li>
              <li><Link href="/digital-signboard" className="hover:text-white">Digital Signage</Link></li>
            </ul>
          </div>

          {/* Sticker Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Sticker Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/van-sticker" className="hover:text-white">Van Sticker Branding</Link></li>
              <li><Link href="/car-sticker" className="hover:text-white">Car Sticker Branding</Link></li>
              <li><Link href="/wall-sticker" className="hover:text-white">Wall Stickers</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/signboards" className="hover:text-white">Signboards</Link></li>
              <li><Link href="/stickers" className="hover:text-white">Stickers</Link></li>
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Cheema Advertising. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
