import { Check, QrCode, ShoppingBag, Gift, BarChart3, Calendar } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    {
      icon: QrCode,
      title: 'Activation instantanée',
      description: 'QR codes uniques sur chaque produit',
    },
    {
      icon: ShoppingBag,
      title: 'Collection digitale',
      description: 'Cartes de joueurs, raretés, échanges',
    },
    {
      icon: Gift,
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
    <section className="px-6 sm:px-12 lg:px-24 py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-stretch gap-12 lg:gap-16">
        <div className="w-full lg:w-[448px] flex-shrink-0 flex flex-col justify-center">
          <div className="max-w-[448px] mx-auto lg:mx-0">
            <img
              className="w-full h-auto max-h-[597px] object-cover object-top rounded-2xl shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] shadow-xl"
              src="/images/features-solution.png"
              alt="YouCanWin solution - Football sur terrain"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <div className="px-3 py-1.5 bg-green-100 rounded-full inline-flex justify-start items-center gap-2">
            <Check className="w-4 h-4 text-green-600" />
            <span className="text-green-800 text-sm font-medium font-['Poppins']">Solution complète</span>
          </div>
          <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Poppins'] leading-tight">
            Le terrain de jeu digital de votre
            <br />
            marque
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Poppins'] leading-7">
            YouCanWin transforme vos produits en expériences interactives. Chaque achat devient une opportunité d&apos;engagement avec vos consommateurs.
          </p>
          <div className="flex flex-col justify-start items-start gap-4">
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
            className="px-6 py-3 bg-red-600 rounded-lg inline-flex justify-between items-center gap-4 text-white text-base font-medium font-['Poppins'] leading-6 hover:bg-red-700 transition-colors min-w-[200px]"
          >
            Planifier une démo
            <Calendar className="w-5 h-5 flex-shrink-0" />
          </a>
        </div>
      </div>
    </section>
  );
}
