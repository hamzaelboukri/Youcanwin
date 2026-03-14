import { QrCode, Users, Settings, BarChart3, Gift, Bell, CloudDownload, Briefcase, Target, ArrowRight } from 'lucide-react';

export default function BackofficeSection() {
  const features = [
    {
      icon: QrCode,
      title: 'Générateur QR Codes',
      description: 'Créez et téléchargez vos QR codes uniques en masse',
    },
    {
      icon: Users,
      title: 'CRM Participants',
      description: 'Collectez et gérez vos participants avec segmentation avancée',
    },
    {
      icon: Settings,
      title: 'Configuration jeux',
      description: 'Paramétrez entièrement vos jeux : règles, lots, durée, visuels',
    },
    {
      icon: BarChart3,
      title: 'Analytics temps réel',
      description: 'Suivez vos KPIs : scans, conversions, engagement, ROI',
    },
    {
      icon: Gift,
      title: 'Gestion des lots',
      description: 'Définissez vos récompenses et gérez les tirages au sort',
    },
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Envoyez des push, emails et SMS à vos participants',
    },
    {
      icon: CloudDownload,
      title: 'Export données',
      description: 'Téléchargez vos données en CSV, Excel ou via API',
    },
    {
      icon: Briefcase,
      title: 'Multi-campagnes',
      description: 'Gérez plusieurs campagnes simultanément',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full mb-6 border border-green-200">
            <Target className="w-4 h-4 text-green-600" />
            <span className="text-green-800 font-medium font-['Poppins'] text-sm">Backoffice tout-en-un</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 font-['Poppins'] mb-4">
            Gérez tout depuis une interface unique
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto font-['Poppins']">
            Notre backoffice intuitif vous permet de créer, configurer et piloter vos campagnes en toute autonomie
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-base text-slate-900 font-['Poppins'] mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed font-['Poppins']">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#demo"
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors font-semibold font-['Poppins']"
          >
            Demander un accès au backoffice
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
