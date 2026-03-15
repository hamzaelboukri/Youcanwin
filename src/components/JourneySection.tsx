import { ShoppingCart, QrCode, CreditCard, Puzzle, Gift } from 'lucide-react';

export default function JourneySection() {
  const steps = [
    {
      number: 1,
      icon: ShoppingCart,
      title: 'Achat produit',
      description: 'Le client achète votre produit en magasin',
      color: '#0B6B3A',
    },
    {
      number: 2,
      icon: QrCode,
      title: 'Scan QR Code',
      description: "Il scanne le code sur l'emballage",
      color: '#0B6B3A',
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Déblocage carte',
      description: 'Une carte digitale est débloquée',
      color: '#0B6B3A',
    },
    {
      number: 4,
      icon: Puzzle,
      title: 'Collection',
      description: 'Il complète sa collection',
      color: '#B01219',
    },
    {
      number: 5,
      icon: Gift,
      title: 'Récompenses',
      description: 'Participe aux tirages',
      color: '#B01219',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-['Poppins'] mb-2 sm:mb-3">
            Un parcours client simple et engageant
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-['Poppins'] max-w-2xl mx-auto">
            De l&apos;achat du produit à la récompense, en 5 étapes
          </p>
        </div>

        {/* Mobile: vertical list | Tablet: 2 cols | Desktop: 5 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-white rounded-2xl border border-slate-200/80 p-5 sm:p-6 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-200"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex-shrink-0 border-2 flex items-center justify-center"
                  style={{ borderColor: `${step.color}40`, backgroundColor: `${step.color}0D` }}
                >
                  <step.icon
                    className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0"
                    style={{ color: step.color }}
                  />
                </div>
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: step.color }}
                >
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 font-['Poppins'] text-base sm:text-lg mb-1.5 sm:mb-2">
                {step.title}
              </h3>
              <p className="text-slate-600 text-sm font-['Poppins'] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
