import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import ResultsSection from '../components/ResultsSection';
import DiscoverySection from '../components/DiscoverySection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <DiscoverySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Homepage; 