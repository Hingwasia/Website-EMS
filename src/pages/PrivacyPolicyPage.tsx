import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PrivacyPolicyHeroSection from '../components/privacy-policy/PrivacyPolicyHeroSection';
import PrivacyPolicyContentSection from '../components/privacy-policy/PrivacyPolicyContentSection';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Privacy Policy - EaseMySaaS Data Protection"
        description="Read our privacy policy to understand how EaseMySaaS protects your data and respects your privacy. Transparent data practices for AI and SaaS solutions."
        keywords="privacy policy, data protection, EaseMySaaS privacy, user data security, AI data privacy, SaaS privacy policy"
        url="https://www.easemysaas.com/privacy-policy"
        type="website"
      />
      <Header />
      <main className="pt-20">
        <PrivacyPolicyHeroSection />
        <PrivacyPolicyContentSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicyPage; 