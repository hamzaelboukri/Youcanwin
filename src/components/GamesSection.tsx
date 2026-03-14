import { TrendingUp, Users, Star, Settings } from 'lucide-react';

export default function GamesSection() {
  const games = [
    {
      image: '/images/album-digital.png',
      title: 'Album Digital 2025',
      description: 'Collection de cartes avec échanges et défis.',
      badge: 'STAR',
      badgeColor: 'bg-green-500',
    },
    {
      image: '/images/quiz-football.png',
      title: 'Quiz Football',
      description: "Questions sur l'actualité et l'histoire du foot.",
      badge: 'BIENTÔT',
      badgeColor: 'bg-green-500',
    },
    {
      image: '/images/tombola.png',
      title: 'Tombola digitale',
      description: 'Tirages au sort avec lots sponsorisés.',
      badge: null,
      badgeColor: null,
    },
    {
      image: '/images/pronostics.png',
      title: 'Pronostics',
      description: 'Prédictions de matchs et classements.',
      badge: null,
      badgeColor: null,
    },
  ];

  const stats = [
    { icon: TrendingUp, value: '500K+', label: 'Interactions mensuelles' },
    { icon: Users, value: '50+', label: 'Marques partenaires' },
    { icon: Star, value: '98%', label: 'Taux de satisfaction' },
    { icon: Settings, value: '24/7', label: 'Support technique' },
  ];

  return (
    <section id="jeux" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Poppins'] mb-4">
            Catalogue de jeux
          </h2>
          <p className="text-slate-600 text-lg font-['Poppins']">
            Des mécaniques éprouvées pour engager vos audiences
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {games.map((game, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover"
                />
                {game.badge && (
                  <span
                    className={`absolute top-3 right-3 ${game.badgeColor} text-white px-2 py-1 rounded text-xs font-bold`}
                  >
                    {game.badge}
                  </span>
                )}
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 font-['Poppins'] text-lg mb-2">{game.title}</h3>
                <p className="text-slate-600 text-sm font-['Poppins'] mb-4">{game.description}</p>
                <a
                  href="#album"
                  className="inline-flex items-center gap-1 text-green-600 font-medium text-sm hover:underline font-['Poppins']"
                >
                  Découvrir
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-dashed border-slate-300 pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                  <stat.icon className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-green-600 font-['Poppins'] mb-1">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm font-['Poppins']">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
