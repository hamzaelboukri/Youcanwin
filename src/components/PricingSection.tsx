import { Check, Zap, TrendingUp, Globe } from 'lucide-react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      subtitle: 'Campagne locale',
      description: 'Idéal pour tester sur un marché',
      popular: false,
      features: [
        { text: "Jusqu'à 1000 utilisateurs", check: 'green' },
        { text: "Jusqu'à 10K QR codes", check: 'green' },
        { text: '1 pays / région', check: 'green' },
        { text: 'Album standard (équipe nationale)', check: 'green' },
        { text: 'Hébergement Cloud sécurisé', check: 'green' },
        { text: 'Backoffice simplifié', check: 'green' },
        { text: 'Support par email', check: 'green' },
        { text: '1 marque', check: 'green' },
      ],
      cta: 'Demander un devis',
      ctaStyle: 'bg-white border-2 border-slate-300 text-slate-700 hover:border-green-600 hover:text-green-600',
    },
    {
      name: 'Scale',
      icon: TrendingUp,
      iconBg: 'bg-red-100',
      iconColor: 'text-red-600',
      subtitle: 'Expansion nationale',
      description: "Pour des campagnes d'envergure",
      popular: true,
      features: [
        { text: "Jusqu'à 50 000 utilisateurs", check: 'green' },
        { text: 'QR codes illimités', check: 'red' },
        { text: 'Multi-pays (jusqu\'à 5)', check: 'red' },
        { text: 'Album complet (toutes les équipes)', check: 'red' },
        { text: 'Cloud ou On-Premise', check: 'red' },
        { text: 'Backoffice avancé avec analytics', check: 'green' },
        { text: 'Support prioritaire 24/7', check: 'red' },
        { text: "Jusqu'à 3 marques", check: 'green' },
        { text: 'API REST disponible', check: 'green' },
      ],
      cta: 'Planifier une démo',
      ctaStyle: 'bg-red-600 text-white hover:bg-red-700',
    },
    {
      name: 'Enterprise',
      icon: Globe,
      iconBg: 'bg-green-100',
      iconColor: 'text-green-600',
      subtitle: 'Solution globale',
      description: 'Pour les groupes internationaux',
      popular: false,
      features: [
        { text: 'Utilisateurs illimités', check: 'green' },
        { text: 'QR codes illimités', check: 'green' },
        { text: 'Déploiement mondial', check: 'green' },
        { text: 'Albums personnalisés par région', check: 'green' },
        { text: 'Infrastructure dédiée (On-Premise)', check: 'green' },
        { text: 'Multi-marques illimité', check: 'green' },
        { text: 'Développements sur-mesure', check: 'green' },
        { text: 'Account manager dédié', check: 'green' },
        { text: 'SLA garanti 99.9%', check: 'green' },
        { text: 'Formation et onboarding complet', check: 'green' },
      ],
      cta: 'Contactez-nous',
      ctaStyle: 'bg-white border-2 border-slate-300 text-slate-700 hover:border-green-600 hover:text-green-600',
    },
  ];

  return (
    <section id="offres" className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-['Poppins'] mb-4">
            Des formules adaptées à votre échelle
          </h2>
          <p className="text-slate-600 text-lg font-['Poppins']">
            Choisissez la solution qui correspond à vos besoins et votre ambition
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 border border-slate-200 ${
                plan.popular ? 'ring-2 ring-red-500 scale-105 z-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-red-600 text-white px-4 py-1 rounded-full text-xs font-bold">
                    POPULAIRE
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 ${plan.iconBg} rounded-lg flex items-center justify-center`}>
                    <plan.icon className={`w-5 h-5 ${plan.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 font-['Poppins']">{plan.name}</h3>
                    <p className="text-green-600 font-semibold text-sm font-['Poppins']">{plan.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm font-['Poppins']">{plan.description}</p>
              </div>

              <p className="text-slate-600 text-sm mb-6 font-['Poppins']">
                Tarification sur mesure selon vos volumes
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        feature.check === 'green' ? 'text-green-600' : 'text-red-600'
                      }`}
                    />
                    <span className="text-slate-700 text-sm font-['Poppins']">{feature.text}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#demo"
                className={`block w-full py-3 rounded-lg font-medium text-center transition-colors ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
