import React, { useEffect, useState } from 'react';
import { FaFileContract } from 'react-icons/fa';

const TermsOfServiceHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute top-32 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200 mb-8">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Legal</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <FaFileContract className="inline-block mr-4 text-blue-600" /> <span className="gradient-text">Terms</span> of Service
            </h1>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 text-lg text-gray-600">
                <div>
                  <p className="font-semibold text-gray-800">Effective Date:</p>
                  <p>1st June 2025</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Last Updated:</p>
                  <p>1st June 2025</p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xl text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") govern your use of the <span className="font-bold text-gray-900">EaseMySaaS</span> website and services, offered by <span className="font-bold text-gray-900">Vrindayards Solutions Private Limited</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsOfServiceHeroSection; 