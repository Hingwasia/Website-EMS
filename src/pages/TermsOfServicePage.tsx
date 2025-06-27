import React from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import TermsOfServiceHeroSection from '../components/terms-of-service/TermsOfServiceHeroSection';
import TermsOfServiceContentSection from '../components/terms-of-service/TermsOfServiceContentSection';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Terms of Service - EaseMySaaS Legal Terms"
        description="Review our terms of service for using EaseMySaaS AI and SaaS solutions. Clear legal terms and conditions for our business transformation services."
        keywords="terms of service, legal terms, EaseMySaaS terms, service agreement, AI services terms, SaaS terms and conditions"
        url="https://www.easemysaas.com/terms-of-service"
        type="website"
      />
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