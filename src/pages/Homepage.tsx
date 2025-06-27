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
       "telephone": "+91 95820 24696",
       "contactType": "customer service"
     }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="EaseMySaaS - AI-Powered Business Automation & CRM Solutions"
        description="🚀 Transform your business with AI automation! Custom CRM solutions, intelligent workflows, and SaaS development. 200+ successful transformations. Free consultation available."
        keywords="AI business automation, custom CRM solutions, SaaS development, AI integration, business transformation, intelligent workflows, productivity automation, B2B SaaS"
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