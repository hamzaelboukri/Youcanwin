import { Calendar, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-red-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-['Poppins'] mb-4 sm:mb-6">
          Prêt à transformer votre marketing ?
        </h2>
        <p className="text-white/90 text-base sm:text-lg mb-6 sm:mb-8 font-['Poppins']">
          Rejoignez les marques qui engagent leurs fans avec YouCanWin
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center">
          <a
            href="#demo"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors font-semibold text-base sm:text-lg font-['Poppins'] w-full sm:w-auto"
          >
            <Calendar className="w-5 h-5 text-red-600" />
            Planifier une démo gratuite
          </a>
          <a
            href="mailto:games@agency.africa"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-red-700 border border-red-700 text-white rounded-lg hover:bg-red-800 transition-colors font-semibold text-base sm:text-lg font-['Poppins'] w-full sm:w-auto"
          >
            <Mail className="w-5 h-5" />
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
