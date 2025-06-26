import React from 'react';
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