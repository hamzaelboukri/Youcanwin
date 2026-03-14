import { Lightbulb, Gift, QrCode } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="self-stretch min-h-[810px] relative bg-white flex justify-center items-center overflow-hidden">
      <div className="w-full h-full absolute inset-0 pointer-events-none">
        <div className="w-full h-full absolute inset-0 opacity-50 bg-gradient-to-br from-green-50 via-white to-red-50" />
        <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-slate-200/30 to-slate-200/0" />
      </div>
      <div className="max-w-[1280px] w-full px-4 py-32 relative z-10 flex flex-col lg:flex-row justify-start items-start gap-8">
        <div className="flex flex-col justify-start items-start gap-8 flex-1 pl-4 border-l-2 border-l-sky-200">
          <div className="flex flex-col gap-0 relative">
            <h1 className="text-slate-900 text-5xl sm:text-6xl lg:text-7xl font-bold font-['Poppins'] leading-tight">
              Transformez
              <br />
              chaque{' '}
              <span className="inline-block relative">
                <span className="text-green-600">
                  produit
                </span>
                <span className="absolute left-0 -bottom-1 block w-full">
                  <svg
                    viewBox="0 0 80 16"
                    className="w-full h-4 text-green-600"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M 0 10 Q 40 0 80 10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="25" cy="6" r="2.5" fill="#1e293b" />
                  </svg>
                </span>
              </span>
              <br />
              en expérience de
              <br />
              jeu
            </h1>
          </div>
          <div className="flex flex-col justify-start items-start mt-2">
            <p className="text-slate-600 text-xl sm:text-2xl font-normal font-['Poppins'] leading-8">
              YouCanWin connecte vos marques aux fans de
              <br />
              football à travers des mécaniques de
              <br />
              gamification innovantes.{' '}
              <span className="text-slate-900 font-semibold">
                Codes QR, cartes
                <br />
                digitales, défis et récompenses.
              </span>
            </p>
          </div>
          <div className="pt-6 mt-2 border-t border-slate-200 flex flex-wrap justify-start items-start gap-8">
            <div className="w-44 flex flex-col justify-start items-start gap-1">
              <div className="text-green-600 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10">500K+</div>
              <div className="text-slate-600 text-sm font-medium font-['Poppins'] leading-5">Interactions/mois</div>
            </div>
            <div className="w-44 flex flex-col justify-start items-start gap-1">
              <div className="text-green-600 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10">50+</div>
              <div className="text-slate-600 text-sm font-medium font-['Poppins'] leading-5">Marques actives</div>
            </div>
            <div className="w-44 flex flex-col justify-start items-start gap-1">
              <div className="text-green-600 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-10">x3.5</div>
              <div className="text-slate-600 text-sm font-medium font-['Poppins'] leading-5">ROI moyen</div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-start items-start gap-4">
            <a
              href="#demo"
              className="h-16 px-8 pt-4 pb-5 bg-gradient-to-r from-green-600 to-green-800 rounded-xl shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10)] shadow-lg flex justify-start items-center gap-2 text-white text-lg font-medium font-['Poppins'] leading-7 hover:opacity-90 transition-opacity"
            >
              Voir la démo
              <span>→</span>
            </a>
            <a
              href="#comment"
              className="h-16 px-8 pt-4 pb-5 bg-white rounded-xl border border-slate-800 flex justify-start items-center gap-2 text-slate-700 text-lg font-medium font-['Poppins'] leading-7 hover:bg-slate-50 transition-colors"
            >
              <Lightbulb className="w-5 h-5 text-slate-600" />
              Comment ça marche
            </a>
          </div>
          <div className="pt-8 border-t border-slate-200 flex flex-col justify-start items-start gap-4">
            <div className="text-slate-500 text-xs font-medium font-['Poppins'] uppercase leading-4 tracking-tight">
              ILS NOUS FONT CONFIANCE
            </div>
            <div className="flex flex-wrap justify-start items-center gap-8">
              <span className="text-slate-400 text-sm font-medium font-['Poppins'] leading-5">Maroc Telecom</span>
              <span className="text-slate-400 text-sm font-medium font-['Poppins'] leading-5">Inwi</span>
              <span className="text-slate-400 text-sm font-medium font-['Poppins'] leading-5">Orange</span>
              <span className="text-slate-400 text-sm font-medium font-['Poppins'] leading-5">Carrefour</span>
            </div>
          </div>
        </div>
        <div className="pl-0 lg:pl-8 flex flex-col justify-start items-center w-full lg:w-auto">
          <div className="relative flex flex-col justify-start items-center px-4 sm:px-16">
            <div className="max-w-96 w-full relative flex flex-col justify-start items-start">
              <div className="p-2 bg-slate-900 rounded-[40px] shadow-2xl ring-8 ring-slate-900 ring-inset flex flex-col justify-start items-start overflow-hidden">
                <div className="min-w-80 w-full pb-56 bg-white rounded-[32px] flex flex-col justify-start items-center gap-4 overflow-hidden">
                  <div className="self-stretch px-6 py-8 bg-gradient-to-b from-green-600 to-green-800 flex flex-col justify-start items-start gap-2">
                    <div className="opacity-90 text-white text-xs font-medium font-['Poppins'] uppercase leading-4 tracking-tight">
                      ALBUM DIGITAL 2025
                    </div>
                    <div className="text-white text-2xl font-bold font-['Poppins'] leading-8">Ma Collection</div>
                    <div className="pt-2 flex justify-start items-center gap-4">
                      <div className="flex flex-col items-center">
                        <div className="text-white text-2xl font-bold font-['Poppins'] leading-8">127</div>
                        <div className="opacity-75 text-white text-xs font-normal font-['Poppins'] leading-4">Cartes</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-white text-2xl font-bold font-['Poppins'] leading-8">76%</div>
                        <div className="opacity-75 text-white text-xs font-normal font-['Poppins'] leading-4">Complet</div>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="text-white text-2xl font-bold font-['Poppins'] leading-8">#12</div>
                        <div className="opacity-75 text-white text-xs font-normal font-['Poppins'] leading-4">Rang</div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-80 grid grid-cols-3 gap-2 p-4">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="w-full aspect-[2/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full px-4 py-3 bg-white border-t border-gray-200 flex justify-between items-center gap-2">
                <div className="flex-1 min-w-0 flex items-center gap-2 px-3 py-2 bg-white rounded-xl shadow-md border border-slate-100">
                  <div className="w-9 h-9 rounded-lg bg-[#FCEEEE] flex items-center justify-center flex-shrink-0">
                    <Gift className="w-5 h-5 text-red-600" strokeWidth={2} />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-slate-900 text-[11px] font-semibold font-['Poppins'] leading-4 truncate">Récompense</span>
                    <span className="text-slate-500 text-[9px] font-normal font-['Poppins'] leading-3">Tirage hebdomadaire</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center" />
                  <span className="text-slate-500 text-[9px] font-normal font-['Poppins'] leading-3">Scanner</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center" />
                  <span className="text-slate-500 text-[9px] font-normal font-['Poppins'] leading-3">Échanges</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 flex items-center justify-center" />
                  <span className="text-slate-500 text-[9px] font-normal font-['Poppins'] leading-3">Profil</span>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-[-16px] sm:right-4 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-start items-start">
              <div className="flex justify-start items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex justify-center items-center">
                  <QrCode className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex flex-col">
                  <div className="text-slate-900 text-sm font-semibold font-['Poppins'] leading-5">Scan QR Code</div>
                  <div className="text-slate-500 text-xs font-normal font-['Poppins'] leading-4">Débloquer une carte</div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 sm:left-[-16px] bottom-0 p-4 bg-white rounded-2xl shadow-xl border border-slate-100 flex justify-start items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#FCEEEE] flex items-center justify-center flex-shrink-0">
                <Gift className="w-5 h-5 text-red-600" strokeWidth={2} />
              </div>
              <div className="flex flex-col">
                <div className="text-slate-900 text-sm font-semibold font-['Poppins'] leading-5">Récompense</div>
                <div className="text-slate-500 text-xs font-normal font-['Poppins'] leading-4">Tirage hebdomadaire</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
