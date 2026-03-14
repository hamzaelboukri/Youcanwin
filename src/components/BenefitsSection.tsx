import { Zap, Heart, Share2 } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Zap,
      title: 'Engagement immédiat',
      description: 'Chaque produit devient une opportunité de jeu',
    },
    {
      icon: Heart,
      title: 'Fidélisation naturelle',
      description: 'Les clients reviennent pour compléter leur collection',
    },
    {
      icon: Share2,
      title: 'Viralité organique',
      description: 'Les fans partagent et échangent entre eux',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-green-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-['Poppins'] mb-4">
            Transformez vos ventes en expérience mémorable
          </h2>
          <p className="text-white text-lg lg:text-xl max-w-3xl mx-auto font-['Poppins'] opacity-90">
            YouCanWin offre à vos clients plus qu&apos;un produit : une expérience interactive complète autour du football
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-green-600/80 rounded-2xl p-8 text-center backdrop-blur-sm border border-green-500/30"
            >
              <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-['Poppins'] mb-3">{benefit.title}</h3>
              <p className="text-white/90 font-['Poppins'] leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
