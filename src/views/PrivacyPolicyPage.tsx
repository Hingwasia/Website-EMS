import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PrivacyPolicyHeroSection from '../components/privacy-policy/PrivacyPolicyHeroSection';
import PrivacyPolicyContentSection from '../components/privacy-policy/PrivacyPolicyContentSection';

const PrivacyPolicyPage: React.FC = () => {
  const privacyStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": "Privacy Policy - EaseMySaaS",
        "description": "Privacy policy explaining how EaseMySaaS protects user data and respects privacy",
        "url": "https://www.easemysaas.com/privacy-policy",
        "mainEntity": {
          "@type": "Article",
          "headline": "EaseMySaaS Privacy Policy",
          "description": "Our privacy policy outlines how we collect, use, and protect your personal information",
          "author": {
            "@type": "Organization",
            "name": "EaseMySaaS"
          },
          "publisher": {
            "@type": "Organization",
            "name": "EaseMySaaS"
          }
        }
      },
      {
        "@type": "Organization",
        "name": "EaseMySaaS",
        "url": "https://www.easemysaas.com",
        "privacyPolicy": "https://www.easemysaas.com/privacy-policy"
      }
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy - EaseMySaaS Data Protection"
        description="Read our privacy policy to understand how EaseMySaaS protects your data and respects your privacy. Transparent data practices for AI and SaaS solutions."
        keywords="privacy policy, data protection, EaseMySaaS privacy, user data security, AI data privacy, SaaS privacy policy"
        url="https://www.easemysaas.com/privacy-policy"
        type="website"
        structuredData={privacyStructuredData}
      />
      <Header />
      <main id="main-content" tabIndex={-1} className="pt-20">
        <PrivacyPolicyHeroSection />
        <PrivacyPolicyContentSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicyPage; 