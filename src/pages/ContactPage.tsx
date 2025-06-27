import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const ContactPage: React.FC = () => {
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "EaseMySaaS",
      "url": "https://www.easemysaas.com",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 95820 24696",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "Worldwide"
      }
    }
  };

  const [formData, setFormData] = useState({
    Full_Name: '',
    Email_Address: '',
    Phone_Number: '',
    Company_Name: '',
    Service_Interest: '',
    Project_Budget: '',
    Project_Details: '',
    Current_Stack: '',
    Biggest_Challenge: ''
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Initialize EmailJS with your public key (replace 'YOUR_PUBLIC_KEY' with your actual public key)
      emailjs.init('Db4TAst00TIb7TuLO');
      
      const templateParams = {
        Full_Name: formData.Full_Name,
        Email_Address: formData.Email_Address,
        Company_Name: formData.Company_Name,
        Current_Stack: formData.Current_Stack,
        Biggest_Challenge: formData.Biggest_Challenge,
        Phone_Number: formData.Phone_Number,
        Service_Interest: formData.Service_Interest,
        Project_Budget: formData.Project_Budget,
        Project_Details: formData.Project_Details,
      };

      await emailjs.send(
        'service_v46y05j', // Your service ID
        'template_l94ktds', // Your template ID
        templateParams
      );

      setSubmitStatus('success');
      // Reset form
      setFormData({
        Full_Name: '',
        Email_Address: '',
        Phone_Number: '',
        Company_Name: '',
        Service_Interest: '',
        Project_Budget: '',
        Project_Details: '',
        Current_Stack: '',
        Biggest_Challenge: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Contact Us - Get AI Solutions for Your Business"
        description="Ready to transform your business with AI? Contact EaseMySaaS for custom AI solutions, automation, and SaaS development. Free consultation available. 24/7 support."
        keywords="contact AI company, AI consultation, SaaS development inquiry, business automation contact, AI solutions contact, get AI help"
        url="https://www.easemysaas.com/contact"
        type="website"
        structuredData={contactStructuredData}
      />
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Transform Your
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"> Business Together</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to revolutionize your operations with cutting-edge CRM and AI solutions? 
              Our experts are here to guide you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Consultation
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                24/7 Support
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Rapid Response
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started Today</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours with a customized solution.</p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="Full_Name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="Full_Name"
                        name="Full_Name"
                        required
                        value={formData.Full_Name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="Email_Address" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        id="Email_Address"
                        name="Email_Address"
                        required
                        value={formData.Email_Address}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="Phone_Number" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input
                        type="tel"
                        id="Phone_Number"
                        name="Phone_Number"
                        value={formData.Phone_Number}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+91-XXXXXXXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="Company_Name" className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <input
                        type="text"
                        id="Company_Name"
                        name="Company_Name"
                        value={formData.Company_Name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Current_Stack" className="block text-sm font-medium text-gray-700 mb-2">Current Tech Stack</label>
                    <input
                      type="text"
                      id="Current_Stack"
                      name="Current_Stack"
                      value={formData.Current_Stack}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., HubSpot, Salesforce, Pipedrive..."
                    />
                  </div>

                  <div>
                    <label htmlFor="Biggest_Challenge" className="block text-sm font-medium text-gray-700 mb-2">Biggest Challenge *</label>
                    <textarea
                      id="Biggest_Challenge"
                      name="Biggest_Challenge"
                      required
                      rows={3}
                      value={formData.Biggest_Challenge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="What are your biggest business challenges right now?"
                    ></textarea>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="Service_Interest" className="block text-sm font-medium text-gray-700 mb-2">Service Interest *</label>
                      <select
                        id="Service_Interest"
                        name="Service_Interest"
                        required
                        value={formData.Service_Interest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select a service</option>
                        <option value="crm-implementation">CRM Implementation</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="business-automation">Business Automation</option>
                        <option value="data-analytics">Data Analytics</option>
                        <option value="consulting">Strategic Consulting</option>
                        <option value="training">Training & Support</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="Project_Budget" className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                      <select
                        id="Project_Budget"
                        name="Project_Budget"
                        value={formData.Project_Budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-5l">Under ₹5 Lakhs</option>
                        <option value="5l-15l">₹5 - 15 Lakhs</option>
                        <option value="15l-50l">₹15 - 50 Lakhs</option>
                        <option value="above-50l">Above ₹50 Lakhs</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Project_Details" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                    <textarea
                      id="Project_Details"
                      name="Project_Details"
                      required
                      rows={4}
                      value={formData.Project_Details}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tell us about your project requirements, challenges, and goals..."
                    ></textarea>
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <p className="text-green-700 font-medium">Message sent successfully! We'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <p className="text-red-700 font-medium">Failed to send message. Please try again or contact us directly.</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${
                      isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg transform hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message & Get Free Consultation'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className={`transform transition-all duration-1000 delay-400 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              <div className="space-y-8">
                {/* Company Info */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+91-9582024696</p>
                        <p className="text-sm text-gray-500">Available 24/7 for urgent queries</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">Info@easemysaas.com</p>
                        <p className="text-sm text-gray-500">We respond within 2 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">Office</h4>
                        <p className="text-gray-600">Noida, India</p>
                        <p className="text-sm text-gray-500">Vrindayards Solutions Private Limited</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose EaseMySaaS?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">300+ Successful Business Transformations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">100% Client Satisfaction Rate</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">Expert Team of CRM & AI Specialists</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">24/7 Ongoing Support & Maintenance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"></div>
                      <span className="text-gray-700">ROI-Focused Implementation Strategy</span>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="tel:+919582024696"
                    className="bg-green-500 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-green-600 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919582024696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-green-700 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                question: "How long does a typical CRM implementation take?",
                answer: "Most CRM implementations take 4-12 weeks depending on complexity. We provide a detailed timeline during our initial consultation based on your specific requirements."
              },
              {
                question: "Do you provide training for our team?",
                answer: "Yes! We include comprehensive training for your team as part of every package. This includes hands-on sessions, documentation, and ongoing support to ensure successful adoption."
              },
              {
                question: "What if we need customizations?",
                answer: "We specialize in custom solutions. Our team can build tailored features, integrations, and workflows to match your unique business processes perfectly."
              },
              {
                question: "Is ongoing support included?",
                answer: "All our packages include post-implementation support. We offer different support tiers from basic maintenance to 24/7 premium support based on your needs."
              },
              {
                question: "Can you integrate with our existing systems?",
                answer: "Absolutely! We have experience integrating with 100+ different systems including ERP, accounting software, marketing tools, and custom applications."
              },
              {
                question: "What's your pricing structure?",
                answer: "Our pricing is project-based and depends on scope, complexity, and timeline. We provide transparent, fixed-price quotes with no hidden costs after our initial consultation."
              }
            ].map((faq, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-lg transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage; 