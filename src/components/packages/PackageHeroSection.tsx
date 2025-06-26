import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PackageHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-700 font-medium">Comprehensive AI & CRM Solutions</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="text-gray-900">Choose the Right</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">AI + CRM + Lead Plans</span>
                <span className="text-gray-900"> for Your Business</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                We offer scalable AI services for startups to enterprises. 
                <span className="font-semibold text-indigo-700"> Flexible packages tailored to your business needs.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#aiPackages"
                className="btn-primary bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View All Packages
              </a>
              <Link
                to="/contact"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-indigo-600 hover:text-indigo-600 transition-all duration-300"
              >
                Talk to a Consultant
              </Link>
            </div>

            {/* Package highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="text-2xl font-bold text-blue-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Service Categories</div>
                <div className="text-xs text-gray-500 mt-1">AI, CRM & Lead Generation</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="text-2xl font-bold text-indigo-600 mb-2">9</div>
                <div className="text-sm text-gray-600">Package Options</div>
                <div className="text-xs text-gray-500 mt-1">Starter to Enterprise</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
                <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Customizable</div>
                <div className="text-xs text-gray-500 mt-1">Tailored to your needs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-indigo-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default PackageHeroSection; 