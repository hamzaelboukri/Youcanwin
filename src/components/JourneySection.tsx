import { ShoppingCart, QrCode, CreditCard, Layers, Gift } from 'lucide-react';

export default function JourneySection() {
  const steps = [
    {
      number: 1,
      icon: ShoppingCart,
      title: 'Achat produit',
      description: 'Le client achète votre produit en magasin',
      circleColor: 'bg-green-600',
      boxBg: 'bg-green-50',
      boxBorder: 'border-green-200',
      iconColor: 'text-green-600',
    },
    {
      number: 2,
      icon: QrCode,
      title: 'Scan QR Code',
      description: "Il scanne le code sur l'emballage",
      circleColor: 'bg-green-600',
      boxBg: 'bg-green-50',
      boxBorder: 'border-green-200',
      iconColor: 'text-green-600',
    },
    {
      number: 3,
      icon: CreditCard,
      title: 'Déblocage carte',
      description: 'Une carte digitale est débloquée',
      circleColor: 'bg-green-600',
      boxBg: 'bg-green-50',
      boxBorder: 'border-green-200',
      iconColor: 'text-green-600',
    },
    {
      number: 4,
      icon: Layers,
      title: 'Collection',
      description: 'Il complète sa collection',
      circleColor: 'bg-red-600',
      boxBg: 'bg-red-50',
      boxBorder: 'border-red-200',
      iconColor: 'text-red-600',
    },
    {
      number: 5,
      icon: Gift,
      title: 'Récompenses',
      description: 'Participe aux tirages',
      circleColor: 'bg-red-600',
      boxBg: 'bg-red-50',
      boxBorder: 'border-red-200',
      iconColor: 'text-red-600',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 font-['Poppins'] mb-3">
            Un parcours client simple et engageant
          </h2>
          <p className="text-slate-600 text-lg font-['Poppins']">
            De l&apos;achat du produit à la récompense, en 5 étapes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-start gap-3 mb-4">
                <div
                  className={`w-14 h-14 rounded-xl flex-shrink-0 ${step.boxBg} border ${step.boxBorder} flex items-center justify-center`}
                >
                  <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                </div>
                <div
                  className={`w-8 h-8 flex-shrink-0 ${step.circleColor} rounded-full flex items-center justify-center`}
                >
                  <span className="text-white font-bold text-sm">{step.number}</span>
                </div>
              </div>
              <h3 className="font-bold text-slate-900 font-['Poppins'] text-base mb-2">
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
