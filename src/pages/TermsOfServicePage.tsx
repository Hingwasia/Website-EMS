import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import TermsOfServiceHeroSection from '../components/terms-of-service/TermsOfServiceHeroSection';
import TermsOfServiceContentSection from '../components/terms-of-service/TermsOfServiceContentSection';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <TermsOfServiceHeroSection />
        <TermsOfServiceContentSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TermsOfServicePage; 