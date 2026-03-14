export default function Footer() {
  return (
    <footer className="bg-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="font-bold text-green-600 text-xl font-['Poppins']">Youcanwin</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 font-['Poppins']">
              Plateforme de jeux digitaux pour engager vos communautés autour du football. Un service d&apos;Agency Africa.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 border border-slate-300 rounded flex items-center justify-center text-slate-600 hover:border-green-600 hover:text-green-600 transition-colors">
                <span className="text-xs font-bold">f</span>
              </a>
              <a href="#" className="w-8 h-8 border border-slate-300 rounded flex items-center justify-center text-slate-600 hover:border-green-600 hover:text-green-600 transition-colors">
                <span className="text-xs font-bold">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 border border-slate-300 rounded-full flex items-center justify-center text-slate-600 hover:border-green-600 hover:text-green-600 transition-colors">
                <span className="text-xs">in</span>
              </a>
              <a href="#" className="w-8 h-8 border border-slate-300 rounded flex items-center justify-center text-slate-600 hover:border-green-600 hover:text-green-600 transition-colors">
                <span className="text-xs font-bold">in</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-slate-900 font-semibold mb-4 font-['Poppins']">Liens rapides</h3>
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
            <h3 className="text-slate-900 font-semibold mb-4 font-['Poppins']">Contact & Légal</h3>
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
                <a href="#cndp" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                  Protection des données (CNDP)
                </a>
              </li>
              <li>
                <a href="#conditions" className="text-slate-600 hover:text-green-600 transition-colors font-['Poppins']">
                  Conditions d&apos;utilisation
                </a>
              </li>
            </ul>
          </div>

          <div />
        </div>

        <div className="border-t border-slate-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-slate-600 font-['Poppins']">© 2025 Youcanwin. Tous droits réservés.</p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-lg text-green-800">
              <span className="text-green-600">✓</span>
              <span className="font-medium font-['Poppins']">Site conforme CNDP Maroc</span>
            </div>
            <p className="text-slate-600 font-['Poppins']">
              Un service de Agency.Africa –{' '}
              <a href="https://games.agency.africa" className="text-green-600 hover:underline">
                games.agency.africa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
