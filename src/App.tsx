import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import JourneySection from './components/JourneySection';
import BenefitsSection from './components/BenefitsSection';
import BackofficeSection from './components/BackofficeSection';
import CapabilitiesSection from './components/CapabilitiesSection';
import PricingSection from './components/PricingSection';
import GamesSection from './components/GamesSection';
import StatsSection from './components/StatsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <JourneySection />
      <BenefitsSection />
      <BackofficeSection />
      <CapabilitiesSection />
      <PricingSection />
      <GamesSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
