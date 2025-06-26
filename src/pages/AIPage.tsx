import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import AIHeroSection from '../components/ai-page/AIHeroSection';
import AITransformationSection from '../components/ai-page/AITransformationSection';
import AIServicesSection from '../components/ai-page/AIServicesSection';
import AISuccessStoriesSection from '../components/ai-page/AISuccessStoriesSection';
// import AIPackagesSection from '../components/ai-page/AIPackagesSection';
import DiscoverySection from '../components/DiscoverySection';

const AIPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AIHeroSection />
        <AITransformationSection />
        <AIServicesSection />
        <AISuccessStoriesSection />
        {/* <AIPackagesSection /> */}
        <DiscoverySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AIPage; 