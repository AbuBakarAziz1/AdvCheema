import { Mail, Phone } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-[#A4C32C] via-[#8FB023] to-[#7A9C1A] text-white py-3 px-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-sm px-4">
        <div className="flex gap-6 items-center">
          <a 
            href="mailto:sales@cheemaadv.com" 
            className="flex items-center gap-2 hover:text-white/90 hover:brightness-110 transition-all duration-200 group"
          >
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">sales@cheemaadv.com</span>
          </a>
        </div>
        <div className="flex gap-6 items-center">
          <a 
            href="tel:+971502040101" 
            className="flex items-center gap-2 hover:text-white/90 hover:brightness-110 transition-all duration-200 group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">+971 50 204 0101</span>
          </a>
          <span className="text-white/70">|</span>
          <a 
            href="tel:0508692014" 
            className="flex items-center gap-2 hover:text-white/90 hover:brightness-110 transition-all duration-200 group"
          >
            <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">050 869 2014</span>
          </a>
        </div>
      </div>
    </div>
  );
}