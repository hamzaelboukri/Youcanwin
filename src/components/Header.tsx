import { Trophy } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 px-20 bg-white/95 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] backdrop-blur-[6px]">
      <div className="w-full max-w-[1280px] mx-auto p-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex justify-center items-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="text-red-600 text-xl font-bold font-['Poppins'] leading-7">You</span>
              <span className="text-slate-800 text-xl font-bold font-['Poppins'] leading-7">canwin</span>
            </div>
            <div className="px-2 py-0.5 bg-green-100 rounded-full">
              <span className="text-green-800 text-[10px] font-semibold font-['Poppins'] leading-4">GAMES</span>
            </div>
          </div>
        </div>
        <nav className="flex justify-start items-center gap-1">
          <a href="#offres" className="px-3 py-2 rounded-md text-slate-700 text-sm font-medium font-['Poppins'] leading-5 hover:bg-slate-100 transition-colors">
            Nos offres
          </a>
          <a href="#jeux" className="px-3 py-2 rounded-md text-slate-700 text-sm font-medium font-['Poppins'] leading-5 hover:bg-slate-100 transition-colors">
            Nos jeux
          </a>
          <a href="#album" className="px-3 py-2 rounded-md text-slate-700 text-sm font-medium font-['Poppins'] leading-5 hover:bg-slate-100 transition-colors">
            Album 2025
          </a>
          <div className="pl-4 inline-flex flex-col justify-start items-start">
            <div className="inline-flex justify-start items-center gap-3">
              <a href="#apropos" className="px-3 py-2 rounded-md text-slate-700 text-sm font-medium font-['Poppins'] leading-5 hover:bg-slate-100 transition-colors">
                À propos
              </a>
              <a href="#demo" className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-800 rounded-lg shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10)] shadow-md flex justify-start items-center gap-2 overflow-hidden text-white text-sm font-medium font-['Poppins'] leading-5 hover:opacity-90 transition-opacity">
                Demander une démo
                <span>→</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
