import React, { useEffect, useRef, useState } from 'react';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen">
      <SEO 
        title="About EaseMySaaS - Transforming Businesses with AI"
        description="Learn about EaseMySaaS and our mission to transform chaos into revenue. We help B2B startups build scalable AI solutions and streamline operations with 200+ successful transformations."
        keywords="about EaseMySaaS, AI company story, SaaS development team, business transformation, AI consulting company, B2B automation experts"
        url="https://www.easemysaas.com/about"
        type="about"
      />
      <Header />
      
      <main ref={sectionRef} className="pt-20">
        {/* Hero Section */}
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
                  <span className="text-sm font-medium text-gray-700">Our Story</span>
                </div>
                
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                  About <span className="gradient-text">EaseMySaaS</span>
                </h1>
                
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-200">
                  <p className="text-xl text-gray-600 leading-relaxed mb-4">
                    EaseMySaaS was built on one fundamental belief:
                  </p>
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                    You don't need a big team or a big budget to scale - you need clarity, ownership, and process.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        We Transform <span className="gradient-text">Chaos</span> into <span className="gradient-text">Revenue</span>
                      </h2>
                      <p className="text-xl text-gray-600 leading-relaxed">
                        We help B2B startups turn chaotic sales funnels into clean, repeatable engines that drive revenue.
                        But we don't do it the traditional way.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
                      <div className="grid gap-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-red-700 font-semibold text-lg">No bloated decks</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-red-700 font-semibold text-lg">No jargon</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-red-700 font-semibold text-lg">No unnecessary tools</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200 shadow-xl">
                    <div className="text-center space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">Our Approach</h3>
                      <p className="text-xl font-medium text-gray-800 leading-relaxed">
                        Just deeply involved consulting, custom-built for your exact stage - whether you're at <span className="text-blue-600 font-bold">$10K MRR</span> or looking to hit <span className="text-purple-600 font-bold">$1M MRR</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '3s' }}></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-200 mb-6">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Our Journey</span>
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">The <span className="gradient-text">Origin</span></h2>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left: Story */}
                  <div className="space-y-8">
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200">
                      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p>
                          When I started EaseMySaaS, I didn't have a playbook. Just a <span className="font-semibold text-gray-900">whiteboard</span>, a <span className="font-semibold text-gray-900">Google Sheet</span>, and one core problem I wanted to solve:
                        </p>
                        
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-1">
                          <blockquote className="bg-white rounded-xl p-8 italic text-xl text-gray-800 border-l-4 border-transparent">
                            "Why are so many high-potential SaaS startups leaking revenue - not because of product, but because of broken sales ops?"
                          </blockquote>
                        </div>
                        
                        <p>
                          That question led me to build a consulting framework grounded in <span className="font-semibold text-blue-600">real execution</span>, not theory.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Results */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200 shadow-xl">
                      <div className="text-center space-y-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900">200+</h3>
                        <p className="text-lg text-gray-600">Startups Transformed</p>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">Notable Clients</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                          <p className="font-bold text-blue-600">Delhivery</p>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                          <p className="font-bold text-purple-600">Yatra</p>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-blue-50 rounded-xl border border-pink-200">
                          <p className="font-bold text-pink-600">Flipkart</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-4 text-center">
                        Helping them build lean sales processes that scale
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
                <div className="text-center mb-16">
                  <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 shadow-lg border border-blue-200 mb-6">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Our Values</span>
                  </div>
                  <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">What We <span className="gradient-text">Stand For</span></h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Clarity over complexity</h3>
                          <p className="text-gray-700 leading-relaxed">
                            We strip away noise. Every strategy, dashboard, and funnel we build is rooted in simplicity - so your team can execute without needing 10 meetings to understand it.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ownership over hours</h3>
                          <p className="text-gray-700 leading-relaxed">
                            EaseMySaaS runs on async work. No fixed timings. No micromanagement. Everyone here is trusted to own their outcomes. It's not easy - but it builds leaders, not employees.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Profit with purpose</h3>
                          <p className="text-gray-700 leading-relaxed">
                            We're proudly bootstrapped, profitable, and growing fast. But we never chase growth for the sake of it. Our mission is to scale sustainably - for us and our clients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group hover:transform hover:scale-105 transition-all duration-300">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
                      <div className="flex items-start space-x-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-4">Culture that works</h3>
                          <p className="text-gray-700 leading-relaxed">
                            No HR surveillance. No "approved leave" nonsense. If someone needs a break, they take it. If they want to work from a cafe in the mountains, they do. What matters is - did we show up for the client? Did we ship what we promised?
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
                <h2 className="text-4xl font-bold text-gray-900 mb-12">What We Actually Do</h2>
                
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sales Funnel Audits</h3>
                    <p className="text-gray-700">Deep diagnostic + action plan</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sales Process Design</h3>
                    <p className="text-gray-700">From lead capture to closed deal</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">CRM Optimization</h3>
                    <p className="text-gray-700">HubSpot, LeadSquared, Salesforce - minus the overkill</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Sales Ops Buildout</h3>
                    <p className="text-gray-700">Reporting, accountability systems, feedback loops</p>
                  </div>

                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Founder Coaching</h3>
                    <p className="text-gray-700">For those building or scaling their internal GTM teams</p>
                  </div>
                </div>

                <div className="mt-12 text-center">
                  <p className="text-xl font-semibold text-gray-800 mb-4">
                    We're not just consultants.
                  </p>
                  <p className="text-xl text-gray-700">
                    We're the systems partner that founders call when they're tired of guesswork.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Why Clients Choose Us (And Stay)</h2>
                
                <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                  <p className="text-xl font-semibold text-gray-800">
                    Because we don't just consult - we execute.
                  </p>
                  
                  <p>
                    We've taken startups from 5 to 100 clients in 6 months, built async teams that outperform agencies 5x their size, and created revenue engines that run with half the tool stack.
                  </p>
                  
                  <p>
                    Our best clients didn't find us via ads. They were referred by people who saw us stay up till 3AM to deliver on a promise.
                  </p>
                  
                  <p className="font-semibold text-gray-800">
                    And that's the kind of work we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
                  <div className="text-white space-y-8">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mx-auto flex items-center justify-center shadow-lg mb-8">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    
                    <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                      Ready to Transform Your Sales Process?
                    </h2>
                    
                    <div className="space-y-4">
                      <p className="text-xl lg:text-2xl font-medium">
                        If you're scaling a B2B product and tired of duct-taping your sales process - we should talk.
                      </p>
                      <p className="text-lg lg:text-xl opacity-90">
                        Because building a startup is hard enough.
                      </p>
                      <p className="text-xl lg:text-2xl font-bold">
                        Your sales engine shouldn't make it harder.
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center space-x-3 bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                      >
                        <span>Schedule Free Discovery Call</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                      
                      <a
                        href="mailto:Info@easemysaas.com"
                        className="group inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-white/30 transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Email Us Direct</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage; 