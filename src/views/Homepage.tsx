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
  const enhancedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "name": "EaseMySaaS",
        "url": "https://www.easemysaas.com",
        "logo": "https://www.easemysaas.com/logo-icon.svg",
        "description": "Transform your business with AI-powered SaaS solutions. We help businesses streamline operations, boost productivity, and drive growth through custom AI integrations and automation.",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 95820 24696",
          "contactType": "customer service",
          "availableLanguage": "English",
          "areaServed": "Worldwide"
        },
        "foundingDate": "2024",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://www.linkedin.com/company/easemysaas",
          "https://twitter.com/easemysaas"
        ],
        "knowsAbout": [
          "AI Business Automation",
          "Custom CRM Solutions", 
          "SaaS Development",
          "Business Process Optimization",
          "Sales Funnel Automation"
        ],
        // Real statistics from the website
        "numberOfEmployees": "10-50",
        "slogan": "Transform chaos into revenue"
      },
      {
        "@type": "WebSite",
        "name": "EaseMySaaS",
        "url": "https://www.easemysaas.com",
        "description": "AI-powered business automation and custom CRM solutions",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.easemysaas.com/?s={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "name": "EaseMySaaS AI Automation Services",
        "description": "AI-powered business automation and custom CRM solutions for businesses of all sizes",
        "provider": {
          "@type": "Organization",
          "name": "EaseMySaaS"
        },
        "areaServed": "Worldwide",
        "serviceType": "Business Automation",
        "audience": [
          {
            "@type": "Audience",
            "audienceType": "Small and Medium Businesses",
            "name": "SMBs"
          },
          {
            "@type": "Audience", 
            "audienceType": "Mid-Market Companies",
            "name": "Mid-Market"
          },
          {
            "@type": "Audience",
            "audienceType": "Enterprise Organizations", 
            "name": "Enterprise"
          }
        ]
      },
      // Real client organizations from the website
      {
        "@type": "ItemList",
        "name": "Trusted Clients",
        "itemListElement": [
          {
            "@type": "Organization",
            "name": "Exicom"
          },
          {
            "@type": "Organization", 
            "name": "Hero Vired"
          },
          {
            "@type": "Organization",
            "name": "Humanize Tech"
          },
          {
            "@type": "Organization",
            "name": "Kyno Health" 
          },
          {
            "@type": "Organization",
            "name": "Fitpass"
          },
          {
            "@type": "Organization",
            "name": "Hair Originals"
          },
          {
            "@type": "Organization",
            "name": "Frido"
          },
          {
            "@type": "Organization",
            "name": "Raheja Developers"
          },
          {
            "@type": "Organization",
            "name": "Buniyaad Realty"
          },
          {
            "@type": "Organization",
            "name": "Multimoney Forex"
          },
          {
            "@type": "Organization",
            "name": "Urbando Housing"
          },
          {
            "@type": "Organization",
            "name": "Zo World (Zostel)"
          },
          {
            "@type": "Organization",
            "name": "HCL Avitas"
          }
        ]
      },
      // Real testimonials from the website
     
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="EaseMySaaS - AI-Powered Business Automation & CRM Solutions"
        description="🚀 Transform your business with AI automation! Custom CRM solutions, intelligent workflows, and SaaS development. 300+ successful transformations. Free consultation available."
        keywords="AI business automation, custom CRM solutions, SaaS development, AI integration, business transformation, intelligent workflows, productivity automation, B2B SaaS, Hero Vired partner, Exicom partner"
        url="https://www.easemysaas.com"
        structuredData={enhancedStructuredData}
      />
      <Header />
      <main id="main-content" tabIndex={-1}>
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