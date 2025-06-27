import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProcessSection from '../components/ProcessSection';
import ResultsSection from '../components/ResultsSection';
import DiscoverySection from '../components/DiscoverySection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const Homepage: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EaseMySaaS",
    "url": "https://www.easemysaas.com",
    "logo": "https://www.easemysaas.com/logo-icon.svg",
    "description": "Transform your business with AI-powered SaaS solutions. We help businesses streamline operations, boost productivity, and drive growth through custom AI integrations and automation.",
    "sameAs": [
      "https://www.linkedin.com/company/easemysaas",
      "https://twitter.com/easemysaas"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-XXX-XXX-XXXX",
      "contactType": "customer service"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="EaseMySaaS - AI-Powered SaaS Solutions for Business Growth"
        description="Transform your business with AI-powered SaaS solutions. We help businesses streamline operations, boost productivity, and drive growth through custom AI integrations and automation."
        keywords="AI SaaS solutions, business automation, artificial intelligence, SaaS development, business growth, AI integration, productivity tools, custom SaaS"
        url="https://www.easemysaas.com"
        structuredData={structuredData}
      />
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