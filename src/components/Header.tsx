import { Menu } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 border-2 border-black flex items-center justify-center font-heading font-black leading-none text-xs text-center p-1 uppercase">
          Active Frame
        </div>
        <span className="font-heading font-black text-xl tracking-tighter uppercase hidden sm:block">
          Active Frame
        </span>
      </div>
      
      {/* Desktop Menu */}
      <nav className="hidden md:flex items-center gap-6 text-sm font-bold uppercase tracking-wide">
        <a href="#" className="hover:text-gray-600 transition-colors">Contact Us</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Terms & Conditions</a>
        <a href="#" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
      </nav>

      {/* Mobile Menu Icon */}
      <button className="md:hidden p-2">
        <Menu className="w-6 h-6" />
      </button>
    </header>
  );
}
