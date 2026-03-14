import { TrendingUp, Users, Star, Settings } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    { icon: TrendingUp, value: '500K+', label: 'Interactions mensuelles' },
    { icon: Users, value: '50+', label: 'Marques partenaires' },
    { icon: Star, value: '98%', label: 'Taux de satisfaction' },
    { icon: Settings, value: '24/7', label: 'Support technique' },
  ];

  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-green-600 font-['Poppins']">
                  {stat.value}
                </div>
                <div className="text-slate-600 text-sm font-['Poppins']">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
