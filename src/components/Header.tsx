import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: '#offres', label: 'Nos offres' },
    { href: '#jeux', label: 'Nos jeux' },
    { href: '#album', label: 'Album 2025' },
    { href: '#apropos', label: 'À propos' },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 px-4 sm:px-6 lg:px-20 bg-white/95 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
      <div className="w-full max-w-[1280px] mx-auto py-3 sm:p-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex justify-center items-center overflow-hidden flex-shrink-0">
            <img src="/images/logo-trophy.png" alt="" className="w-5 h-5 sm:w-6 sm:h-6 object-contain mix-blend-lighten" />
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div className="flex items-center">
              <span className="text-red-600 text-lg sm:text-xl font-bold font-['Poppins'] leading-7">You</span>
              <span className="text-slate-800 text-lg sm:text-xl font-bold font-['Poppins'] leading-7">canwin</span>
            </div>
            <div className="px-1.5 sm:px-2 py-0.5 bg-green-100 rounded-full">
              <span className="text-green-800 text-[9px] sm:text-[10px] font-semibold font-['Poppins'] leading-4">GAMES</span>
            </div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex justify-start items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="px-3 py-2 rounded-md text-slate-700 text-sm font-medium font-['Poppins'] leading-5 hover:bg-slate-100 transition-colors">
              {link.label}
            </a>
          ))}
          <div className="pl-4 inline-flex items-center gap-3">
            <a href="#demo" className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md flex items-center gap-2 text-white text-sm font-medium font-['Poppins'] leading-5 hover:opacity-90 transition-opacity">
              Demander une démo
              <span>→</span>
            </a>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile/Tablet dropdown menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
          <nav className="flex flex-col p-4 gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 rounded-lg text-slate-700 text-base font-medium font-['Poppins'] hover:bg-slate-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="mt-2 px-4 py-3 bg-gradient-to-r from-green-600 to-green-800 rounded-lg text-white text-base font-medium font-['Poppins'] text-center flex items-center justify-center gap-2"
            >
              Demander une démo
              <span>→</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
