import { Users, QrCode, Globe, Layers, Cloud } from 'lucide-react';

export default function CapabilitiesSection() {
  const capabilities = [
    {
      icon: Users,
      title: 'Utilisateurs',
      subtitle: 'De 1K à illimité',
    },
    {
      icon: QrCode,
      title: 'QR Codes',
      subtitle: 'Volume adapté',
    },
    {
      icon: Globe,
      title: 'Couverture',
      subtitle: 'Local à mondial',
    },
    {
      icon: Layers,
      title: 'Albums',
      subtitle: 'Standard ou custom',
    },
    {
      icon: Cloud,
      title: 'Infrastructure',
      subtitle: 'Cloud ou On-Premise',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-dashed border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {capabilities.map((cap, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <cap.icon className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-bold text-slate-900 font-['Poppins'] text-base mb-1">{cap.title}</h3>
              <p className="text-slate-600 text-sm font-['Poppins']">{cap.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
