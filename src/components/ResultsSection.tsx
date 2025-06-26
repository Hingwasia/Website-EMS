import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaChartLine, FaBullseye, FaStar } from 'react-icons/fa';

const ResultsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    clients: 0,
    revenue: 0,
    conversion: 0,
    satisfaction: 0
  });
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

  useEffect(() => {
    if (isVisible) {
      const animateCounters = () => {
        const targets = {
          clients: 300,
          revenue: 300,
          conversion: 85,
          satisfaction: 100
        };

        const duration = 2000;
        const steps = 60;
        const stepDuration = duration / steps;

        let currentStep = 0;

        const interval = setInterval(() => {
          currentStep++;
          const progress = currentStep / steps;

          setCounters({
            clients: Math.floor(targets.clients * progress),
            revenue: Math.floor(targets.revenue * progress),
            conversion: Math.floor(targets.conversion * progress),
            satisfaction: Math.floor(targets.satisfaction * progress)
          });

          if (currentStep >= steps) {
            clearInterval(interval);
            setCounters(targets);
          }
        }, stepDuration);
      };

      const timer = setTimeout(animateCounters, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      number: counters.clients,
      suffix: '+',
      label: 'Businesses Transformed',
      icon: <FaBuilding />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      number: counters.revenue,
      suffix: '%',
      label: 'Average Revenue Increase',
      icon: <FaChartLine />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      number: counters.conversion,
      suffix: '%',
      label: 'Funnel Conversion Improvement',
      icon: <FaBullseye />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      number: counters.satisfaction,
      suffix: '%',
      label: 'Client Satisfaction Rate',
      icon: <FaStar />,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const clientLogos = [
    { name: 'Exicom', logo: 'https://mma.prnewswire.com/media/2600729/Exicom_Logo.jpg' },
    { name: 'Hero Vired', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz0BadvHO2fQDKyZ2tvVfjguoWAJJI72qruw&s' },
    { name: 'Humanize Tech', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqzyn3ZM7Pu7vteR-grN3ESx6Y6GObg-WQlA&s' },
    { name: 'Kyno Health', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDua0TnatQD6CwdVGlWpIrHD6kDGKQXXzVLg&s' },
    { name: 'Steam Pro', logo: '🧹' },
    { name: 'Fitpass', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCa8xmxfhUHjygnnh_a17uXMebJ7Yerdk6eg&s' },
    { name: 'Hair Originals', logo: 'https://bsmedia.business-standard.com/_media/bs/img/article/2022-01/18/full/20220118151116.jpg' },
    { name: 'Frido', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRlc4ooykJCypYpRUYpnKxusCvP0tPtBpSTw&s' },
    { name: 'Raheja Developers', logo: 'https://bsmedia.business-standard.com/_media/bs/img/article/2020-07/17/full/20200717133531.jpg' },
    { name: 'Buniyaad Realty', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtryTFnBbP6YWFSKPQWS0gdwUvASnOuxsY8A&s' },
    { name: 'Multimoney Forex', logo: 'https://www.multimoney.co.in/blog/wp-content/uploads/2024/11/logo.png' },
    { name: 'Capture a Trip', logo: '📸' },
    { name: 'Urbando Housing', logo: 'https://urbando.in/wp-content/uploads/2022/06/urbando-new.png' },
    { name: 'Zo World (Zostel)', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdLrYopfYHY2yL5b0WwLGhFbra88unVPA_7A&s' },
    { name: 'MDRC', logo: '🔬' },
    { name: 'HCL Avitas', logo: 'https://mir-s3-cdn-cf.behance.net/projects/404/20845733.544f42f12100d.jpg' }
  ];

  const testimonials = [
    {
      quote: "EaseMySaaS transformed our scattered sales process into a revenue-generating machine. ROI was immediate.",
      author: "Sarah Chen",
      role: "VP Sales, TechCorp",
      metric: "300% ROI increase"
    },
    {
      quote: "Their systematic approach to CRM implementation saved us months of trial and error. Highly recommend!",
      author: "Michael Rodriguez",
      role: "Founder, ScaleUp",
      metric: "60% faster implementation"
    },
    {
      quote: "Finally, all our tools work together seamlessly. Our team productivity has never been higher.",
      author: "Emily Watson",
      role: "COO, InnovateLab",
      metric: "85% team efficiency gain"
    }
  ];

  return (
    <section id="results" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Results That <span className="gradient-text">Matter</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's how we've helped businesses 
              like yours achieve measurable growth through optimized sales infrastructure.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative text-center">
                  <div className="text-3xl mb-3">{stat.icon}</div>
                  <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}{stat.suffix}
                  </div>
                  <p className="text-gray-600 text-sm lg:text-base">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos */}
          <div className={`mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              Trusted by Growing Businesses
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {clientLogos.map((client, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-gray-50 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <img src={client.logo} alt={client.name} className="w-10 h-10 object-contain" />
                  <span className="font-semibold text-gray-700">{client.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'} hidden`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
              What Our Clients Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4">
                    <svg className="w-8 h-8 text-blue-600 mb-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H6.414l-2.707 2.707A1 1 0 012 11.414V4zm9 0a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-1.586l-2.707 2.707A1 1 0 0112 11.414V4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-green-600">{testimonial.metric}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Process Backed Section */}
          <div className={`mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Backed By Process
                </h3>
                <p className="text-blue-100 mb-6">
                  Our consulting isn't just advice – it's powered by a clear playbook & platform. 
                  Every recommendation is backed by proven methodologies and documented in our comprehensive Notion system.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <span>See Our Methodology</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-blue-100">Documented Playbooks</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <span className="text-blue-100">Proven Methodologies</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-pink-400 rounded-full"></div>
                      <span className="text-blue-100">Notion-Powered System</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-blue-100">Scalable Frameworks</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection; 