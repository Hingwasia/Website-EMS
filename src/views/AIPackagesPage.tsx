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
  const packagesStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "name": "AI SaaS Packages",
        "description": "Comprehensive AI SaaS packages designed for businesses of all sizes - from startup-friendly AI tools to enterprise automation solutions",
        "brand": {
          "@type": "Brand",
          "name": "EaseMySaaS"
        },
        "manufacturer": {
          "@type": "Organization",
          "name": "EaseMySaaS"
        },
        "category": "Software as a Service",
        "audience": [
          {
            "@type": "Audience",
            "audienceType": "Small Business"
          },
          {
            "@type": "Audience",
            "audienceType": "Medium Business"
          },
          {
            "@type": "Audience",
            "audienceType": "Enterprise"
          }
        ]
      },
      {
        "@type": "Service",
        "name": "CRM Solutions",
        "description": "Custom CRM solutions and implementation services",
        "provider": {
          "@type": "Organization",
          "name": "EaseMySaaS"
        },
        "serviceType": "CRM Implementation",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "name": "AI Automation Services",
        "description": "AI-powered business automation and intelligent workflow solutions",
        "provider": {
          "@type": "Organization",
          "name": "EaseMySaaS"
        },
        "serviceType": "Business Automation",
        "areaServed": "Worldwide"
      },
      {
        "@type": "Service",
        "name": "AI + CRM Integration",
        "description": "Combined AI automation with custom CRM solutions for comprehensive business transformation",
        "provider": {
          "@type": "Organization",
          "name": "EaseMySaaS"
        },
        "serviceType": "Integrated Solutions",
        "areaServed": "Worldwide"
      },
      {
        "@type": "WebPage",
        "name": "AI SaaS Packages & Pricing",
        "description": "Explore our AI SaaS packages with transparent pricing and proven results",
        "url": "https://www.easemysaas.com/ai-packages"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI SaaS Packages & Pricing - Affordable AI Solutions"
        description="Explore our AI SaaS packages designed for businesses of all sizes. From startup-friendly AI tools to enterprise automation solutions. Transparent pricing and proven results."
        keywords="AI packages, SaaS pricing, AI automation packages, business AI solutions, AI tools pricing, SaaS packages, AI integration pricing"
        url="https://www.easemysaas.com/ai-packages"
        type="service"
        structuredData={packagesStructuredData}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
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