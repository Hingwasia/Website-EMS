import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './ScrollToTop';

// Lazy load all page components for better performance
const Homepage = React.lazy(() => import('./pages/Homepage'));
const AIPage = React.lazy(() => import('./pages/AIPage'));
const AIPackagesPage = React.lazy(() => import('./pages/AIPackagesPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const PrivacyPolicyPage = React.lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = React.lazy(() => import('./pages/TermsOfServicePage'));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/ai" element={<AIPage />} />
            <Route path="/ai-packages" element={<AIPackagesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;