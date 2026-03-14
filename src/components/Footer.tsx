import { Trophy, Facebook, Twitter, Instagram, Linkedin, ShieldCheck, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex justify-center items-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="flex items-center">
                <span className="text-red-600 font-bold text-xl font-['Poppins']">You</span>
                <span className="text-slate-800 font-bold text-xl font-['Poppins']">canwin</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 font-['Poppins']">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d&apos;Agency.Africa.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-slate-200 rounded-lg flex items-center justify-center text-slate-600 hover:bg-slate-300 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-4 font-['Poppins']">Liens rapides</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#offres" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                  Nos offres
                </a>
              </li>
              <li>
                <a href="#jeux" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                  Nos jeux
                </a>
              </li>
              <li>
                <a href="#album" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                  Album 2025
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                  À propos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-900 font-bold mb-4 font-['Poppins']">Contact & Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:games@agency.africa"
                  className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']"
                >
                  games@agency.africa
                </a>
              </li>
              <li>
                <a href="#mentions" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="#cndp" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins'] inline-flex items-center gap-1">
                  Protection des données (CNDP)
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#conditions" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                  Conditions d&apos;utilisation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm mb-4">
            <p className="text-slate-600 font-['Poppins']">© 2025 Youcanwin. Tous droits réservés.</p>
            <p className="text-slate-600 font-['Poppins']">
              Un service de{' '}
              <a href="https://agency.africa" className="text-green-600 hover:underline font-['Poppins']">
                Agency.Africa
              </a>
              {' – '}
              <a href="https://games.agency.africa" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                games.agency.africa
              </a>
            </p>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg text-green-800">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span className="font-medium font-['Poppins'] text-sm">Site conforme CNDP Maroc</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
