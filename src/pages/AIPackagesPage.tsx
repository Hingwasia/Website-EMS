import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PackageHeroSection from '../components/packages/PackageHeroSection';
import AIPackageTable from '../components/packages/AIPackageTable';
import CRMPackageTable from '../components/packages/CRMPackageTable';
import AICRMPackageTable from '../components/packages/AICRMPackageTable';
import DiscoverySection from '../components/DiscoverySection';

const AIPackagesPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="AI SaaS Packages & Pricing - Affordable AI Solutions"
        description="Explore our AI SaaS packages designed for businesses of all sizes. From startup-friendly AI tools to enterprise automation solutions. Transparent pricing and proven results."
        keywords="AI packages, SaaS pricing, AI automation packages, business AI solutions, AI tools pricing, SaaS packages, AI integration pricing"
        url="https://www.easemysaas.com/ai-packages"
        type="service"
      />
      <Header />
      <main id="packages">
        <PackageHeroSection />
        <CRMPackageTable />
        <AIPackageTable />
        <AICRMPackageTable />
        <DiscoverySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AIPackagesPage; 