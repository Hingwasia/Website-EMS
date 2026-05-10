import React from 'react';
import SEO from '../components/SEO';
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
  const aiStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "AI Solutions & Services for Business Transformation",
        "description": "Discover how our AI-powered solutions can transform your business with custom AI integrations, automation, and intelligent systems",
        "author": {
          "@type": "Organization",
          "name": "EaseMySaaS"
        },
        "publisher": {
          "@type": "Organization",
          "name": "EaseMySaaS",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.easemysaas.com/logo-icon.svg"
          }
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-01-01",
        "url": "https://www.easemysaas.com/ai",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.easemysaas.com/ai"
        }
      },
      {
        "@type": "Service",
        "name": "AI Business Transformation",
        "description": "Comprehensive AI solutions including machine learning, automation, and intelligent systems to boost productivity and drive growth",
        "provider": {
          "@type": "Organization",
          "name": "EaseMySaaS"
        },
        "serviceType": "Artificial Intelligence Services",
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AI Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom AI Integration",
                "description": "Tailored AI solutions integrated into existing business processes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Business Process Automation",
                "description": "Intelligent automation of repetitive business tasks"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI-Powered Analytics",
                "description": "Advanced analytics and insights powered by artificial intelligence"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "name": "AI Solutions & Services",
        "description": "Comprehensive AI solutions for business transformation",
        "url": "https://www.easemysaas.com/ai"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI Solutions & Services"
        description="Discover how our AI-powered solutions can transform your business. Custom AI integrations, automation, and intelligent systems to boost productivity and drive growth."
        keywords="AI solutions, artificial intelligence services, AI automation, machine learning, AI integration, business AI, intelligent automation"
        url="https://www.easemysaas.com/ai"
        type="article"
        structuredData={aiStructuredData}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
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