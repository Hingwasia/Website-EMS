import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url = 'https://www.easemysaas.com',
  image = 'https://www.easemysaas.com/logo-icon.svg',
  type = 'website',
  structuredData
}) => {
  const fullTitle = title.includes('EaseMySaaS') ? title : `${title} | EaseMySaaS`;

  // Base Organization Schema with real data
  const organizationSchema = {
    "@context": "https://schema.org",
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
    ]
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
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
  };

  // Professional Service Schema based on actual services
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "EaseMySaaS AI Automation Services",
    "description": "AI-powered business automation and custom CRM solutions for SMBs, Mid-Market, and Enterprise businesses",
    "provider": {
      "@type": "Organization",
      "name": "EaseMySaaS"
    },
    "areaServed": "Worldwide",
    "serviceType": "Business Automation",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Business Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SMB AI Automation",
            "description": "Smart CRM + AI solutions for small & medium businesses"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Mid-Market Integration",
            "description": "Integrated systems and AI insights for mid-market companies"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Enterprise AI Strategy",
            "description": "Enterprise-grade AI-powered CRM and BI solutions"
          }
        }
      ]
    }
  };

  // Real client testimonials from the website
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EaseMySaaS", 
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
    },
    
  };

  // Combined structured data
  const combinedStructuredData = structuredData || {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      websiteSchema,
      serviceSchema,
      reviewSchema
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="EaseMySaaS" />
      <link rel="canonical" href={url} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="EaseMySaaS" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@easemysaas" />

      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Business Information */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />

      {/* Structured Data with Real Information */}
      <script type="application/ld+json">
        {JSON.stringify(combinedStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO; 