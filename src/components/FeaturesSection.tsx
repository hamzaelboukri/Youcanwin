import { Check, QrCode, Layers, Trophy, BarChart3, Calendar } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: QrCode,
      title: 'Activation instantanée',
      description: 'QR codes uniques sur chaque produit',
    },
    {
      icon: Layers,
      title: 'Collection digitale',
      description: 'Cartes de joueurs, raretés, échanges',
    },
    {
      icon: Trophy,
      title: 'Récompenses exclusives',
      description: 'Tirages au sort, lots partenaires, expériences VIP',
    },
    {
      icon: BarChart3,
      title: 'Analytics avancés',
      description: 'Dashboard temps réel, insights consommateurs',
    },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-12 xl:px-24 py-12 sm:py-16 lg:py-20 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden flex flex-col lg:flex-row border border-slate-100">
          <div className="lg:w-1/2 flex-shrink-0">
            <img
              className="w-full h-full min-h-[350px] lg:min-h-[520px] object-cover object-center rounded-t-3xl lg:rounded-t-none lg:rounded-l-3xl"
              src="/images/features-solution.png"
              alt="YouCanWin solution - Football sur terrain"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col justify-start items-start gap-4 sm:gap-5 p-6 sm:p-8 lg:p-12">
            <div className="px-3 py-1.5 bg-green-100 rounded-full inline-flex justify-start items-center gap-2">
              <Check className="w-4 h-4 text-green-700" />
              <span className="text-green-800 text-sm font-medium font-['Poppins']">Solution complète</span>
            </div>
            <h2 className="text-slate-900 text-2xl sm:text-3xl lg:text-4xl font-bold font-['Poppins'] leading-tight">
              Le terrain de jeu digital de votre marque
            </h2>
            <p className="text-slate-600 text-base lg:text-lg font-normal font-['Poppins'] leading-7">
              YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d&apos;engagement avec vos consommateurs.
            </p>
            <div className="flex flex-col justify-start items-start gap-4 w-full">
              {features.map((feature, index) => (
                <div key={index} className="flex justify-start items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex flex-col justify-start items-start">
                    <div className="text-slate-900 text-base font-semibold font-['Poppins'] leading-6">
                      {feature.title}
                    </div>
                    <div className="text-slate-600 text-sm font-normal font-['Poppins'] leading-5">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="#demo"
              className="mt-1 px-6 py-3.5 bg-red-600 rounded-xl inline-flex justify-center items-center gap-2 text-white text-base font-medium font-['Poppins'] leading-6 hover:bg-red-700 transition-colors w-full sm:w-auto"
            >
              Planifier une démo
              <Calendar className="w-5 h-5 flex-shrink-0" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
