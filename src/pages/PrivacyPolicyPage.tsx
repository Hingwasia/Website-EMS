import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import PrivacyPolicyHeroSection from '../components/privacy-policy/PrivacyPolicyHeroSection';
import PrivacyPolicyContentSection from '../components/privacy-policy/PrivacyPolicyContentSection';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen">
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