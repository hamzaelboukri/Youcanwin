import { ArrowRight } from 'lucide-react';

export default function GamesSection() {
  const games = [
    {
      image: '/images/album-digital.png',
      title: 'Album Digital 2025',
      description: 'Collection de cartes avec échanges et défis.',
      badge: 'STAR',
      badgeColor: 'bg-green-600',
      showLink: true,
      centered: false,
    },
    {
      image: '/images/quiz-football.png',
      title: 'Quiz Football',
      description: "Questions sur l'actualité et l'histoire du foot.",
      badge: 'BIENTÔT',
      badgeColor: 'bg-slate-800',
      showLink: false,
      centered: false,
    },
    {
      image: '/images/tombola.png',
      title: 'Tombola digitale',
      description: 'Tirages au sort avec lots sponsorisés.',
      badge: null,
      badgeColor: null,
      showLink: false,
      centered: true,
    },
    {
      image: '/images/pronostics.png',
      title: 'Pronostics',
      description: 'Prédictions de matchs et classements.',
      badge: null,
      badgeColor: null,
      showLink: false,
      centered: true,
    },
  ];

  return (
    <section id="jeux" className="py-16 lg:py-24 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Poppins'] mb-4">
            Catalogue de jeux
          </h2>
          <p className="text-slate-600 text-lg font-['Poppins']">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                {game.badge && (
                  <span
                    className={`absolute top-3 right-3 ${game.badgeColor} text-white px-3 py-1.5 rounded-md text-xs font-bold uppercase`}
                  >
                    {game.badge}
                  </span>
                )}
              </div>
              <div className={`p-6 ${game.centered ? 'text-center' : ''}`}>
                <h3 className="font-bold text-slate-900 font-['Poppins'] text-lg mb-2">{game.title}</h3>
                <p className="text-slate-600 text-sm font-['Poppins'] mb-4 leading-relaxed">{game.description}</p>
                {game.showLink && (
                  <a
                    href="#album"
                    className={`inline-flex items-center gap-1 text-[#16A34A] font-medium text-sm hover:underline font-['Poppins'] ${game.centered ? 'justify-center mx-auto' : ''}`}
                  >
                    Découvrir
                    <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
