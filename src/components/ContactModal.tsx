"use client";

import React, { useEffect, useRef, useState } from 'react';
import { sendEmail } from '../utils/emailjs';
import { validateContactModalForm, type ContactModalFormValues } from '../utils/formValidation';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  console.log('ContactModal rendered with isOpen:', isOpen);
  
  const [isAnimating, setIsAnimating] = useState(false);
  const firstFieldRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    Full_Name: '',
    Email_Address: '',
    Company_Name: '',
    Current_Stack: '',
    Biggest_Challenge: '',
    Phone_Number: '',
    Service_Interest: 'discovery-call',
    Project_Budget: '',
    Project_Details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactModalFormValues, string>>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nextErrors = validateContactModalForm(formData);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setSubmitStatus('idle');
      setIsSubmitting(false);
      const firstInvalidField = Object.keys(nextErrors)[0];
      window.requestAnimationFrame(() => {
        document.getElementById(firstInvalidField)?.focus();
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        Full_Name: formData.Full_Name,
        Email_Address: formData.Email_Address,
        Company_Name: formData.Company_Name,
        Current_Stack: formData.Current_Stack,
        Biggest_Challenge: formData.Biggest_Challenge,
        Phone_Number: formData.Phone_Number || 'Not provided',
        Service_Interest: formData.Service_Interest,
        Project_Budget: formData.Project_Budget || 'Not specified',
        Project_Details: formData.Project_Details || 'Discovery call request',
      };

      await sendEmail(templateParams);

      setSubmitStatus('success');
      setFormData({
        Full_Name: '',
        Email_Address: '',
        Company_Name: '',
        Current_Stack: '',
        Biggest_Challenge: '',
        Phone_Number: '',
        Service_Interest: 'discovery-call',
        Project_Budget: '',
        Project_Details: ''
      });
      
      // Close modal after a short delay to show success message
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };


  const getFieldClass = (field: keyof ContactModalFormValues) =>
    `w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent ${errors[field] ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-600'}`;

  const setFieldError = (field: keyof ContactModalFormValues, nextValues: ContactModalFormValues) => {
    const fieldError = validateContactModalForm(nextValues)[field];
    setErrors(prev => {
      const updated = { ...prev };
      if (fieldError) {
        updated[field] = fieldError;
      } else {
        delete updated[field];
      }
      return updated;
    });
    return fieldError;
  };

  const handleFieldBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const field = name as keyof ContactModalFormValues;
    setFieldError(field, { ...formData, [field]: value } as ContactModalFormValues);
  };

  // Handle modal animation and escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      setIsAnimating(true);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      window.requestAnimationFrame(() => {
        firstFieldRef.current?.focus();
      });
    } else {
      setIsAnimating(false);
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`fixed inset-0 z-[9999] overflow-y-auto transition-all duration-300 ${
      isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`} role="presentation">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 transition-all duration-300 ${
          isAnimating && isOpen ? 'bg-[#00000040]' : 'bg-[#00000000]'
        }`}
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className={`relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 ease-out ${
          isAnimating && isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`} role="dialog" aria-modal="true" aria-labelledby="discovery-call-title" aria-describedby="discovery-call-desc">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
            aria-label="Close discovery call form"
          >
            <svg className="w-6 h-6" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal content */}
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 id="discovery-call-title" className="text-3xl font-bold text-gray-900 mb-4">
                Get Your Free <span className="gradient-text">Discovery Call</span>
              </h3>
              <p id="discovery-call-desc" className="text-lg text-gray-600">
                Let's identify the specific opportunities to optimize your sales infrastructure.
              </p>
            </div>

            
            <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-describedby="contact-modal-summary">
              <div id="contact-modal-summary" aria-live="polite" className="sr-only">
                {Object.keys(errors).length > 0 ? 'Please fix the highlighted fields before submitting.' : ''}
              </div>

              {Object.keys(errors).length > 0 && (
                <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-4">
                  <p className="font-medium text-red-800">Please review the highlighted fields below.</p>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Full_Name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    ref={firstFieldRef}
                    type="text"
                    id="Full_Name"
                    name="Full_Name"
                    required
                    autoComplete="name"
                    aria-invalid={Boolean(errors.Full_Name)}
                    aria-describedby={errors.Full_Name ? 'modal-Full_Name-error' : undefined}
                    value={formData.Full_Name}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    className={getFieldClass('Full_Name')}
                    placeholder="Your full name"
                  />
                  {errors.Full_Name && <p id="modal-Full_Name-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Full_Name}</p>}
                </div>
                <div>
                  <label htmlFor="Email_Address" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="Email_Address"
                    name="Email_Address"
                    required
                    autoComplete="email"
                    aria-invalid={Boolean(errors.Email_Address)}
                    aria-describedby={errors.Email_Address ? 'modal-Email_Address-error' : undefined}
                    value={formData.Email_Address}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    className={getFieldClass('Email_Address')}
                    placeholder="your@email.com"
                  />
                  {errors.Email_Address && <p id="modal-Email_Address-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Email_Address}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Company_Name" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="Company_Name"
                    name="Company_Name"
                    required
                    autoComplete="organization"
                    aria-invalid={Boolean(errors.Company_Name)}
                    aria-describedby={errors.Company_Name ? 'modal-Company_Name-error' : undefined}
                    value={formData.Company_Name}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    className={getFieldClass('Company_Name')}
                    placeholder="Your company"
                  />
                  {errors.Company_Name && <p id="modal-Company_Name-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Company_Name}</p>}
                </div>
                <div>
                  <label htmlFor="Project_Budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="Project_Budget"
                    name="Project_Budget"
                    aria-invalid={Boolean(errors.Project_Budget)}
                    aria-describedby={errors.Project_Budget ? 'modal-Project_Budget-error' : undefined}
                    value={formData.Project_Budget}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    className={getFieldClass('Project_Budget')}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5l">Under ?5 Lakhs</option>
                    <option value="5l-15l">?5 - 15 Lakhs</option>
                    <option value="15l-50l">?15 - 50 Lakhs</option>
                    <option value="above-50l">Above ?50 Lakhs</option>
                  </select>
                  {errors.Project_Budget && <p id="modal-Project_Budget-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Project_Budget}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Current_Stack" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Tech Stack
                  </label>
                  <input
                    type="text"
                    id="Current_Stack"
                    name="Current_Stack"
                    aria-invalid={Boolean(errors.Current_Stack)}
                    aria-describedby={errors.Current_Stack ? 'modal-Current_Stack-error' : undefined}
                    value={formData.Current_Stack}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    className={getFieldClass('Current_Stack')}
                    placeholder="e.g., HubSpot, Salesforce, Pipedrive..."
                  />
                  {errors.Current_Stack && <p id="modal-Current_Stack-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Current_Stack}</p>}
                </div>
                <div>
                  <label htmlFor="Phone_Number" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="Phone_Number"
                    name="Phone_Number"
                    inputMode="tel"
                    autoComplete="tel"
                    aria-invalid={Boolean(errors.Phone_Number)}
                    aria-describedby={errors.Phone_Number ? 'modal-Phone_Number-error' : undefined}
                    value={formData.Phone_Number}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    className={getFieldClass('Phone_Number')}
                    placeholder="+91-XXXXXXXXXX"
                  />
                  {errors.Phone_Number && <p id="modal-Phone_Number-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Phone_Number}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="Biggest_Challenge" className="block text-sm font-medium text-gray-700 mb-2">
                  Biggest Challenges *
                </label>
                <textarea
                  id="Biggest_Challenge"
                  name="Biggest_Challenge"
                  required
                  rows={4}
                  aria-invalid={Boolean(errors.Biggest_Challenge)}
                  aria-describedby={errors.Biggest_Challenge ? 'modal-Biggest_Challenge-error' : undefined}
                  value={formData.Biggest_Challenge}
                  onChange={handleInputChange}
                  onBlur={handleFieldBlur}
                  className={getFieldClass('Biggest_Challenge')}
                  placeholder="Describe your main sales process challenges..."
                />
                {errors.Biggest_Challenge && <p id="modal-Biggest_Challenge-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Biggest_Challenge}</p>}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="Service_Interest" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="Service_Interest"
                    name="Service_Interest"
                    required
                    aria-invalid={Boolean(errors.Service_Interest)}
                    aria-describedby={errors.Service_Interest ? 'modal-Service_Interest-error' : undefined}
                    value={formData.Service_Interest}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    className={getFieldClass('Service_Interest')}
                  >
                    <option value="">Select a service</option>
                    <option value="discovery-call">Discovery Call</option>
                    <option value="crm-implementation">CRM Implementation</option>
                    <option value="ai-solutions">AI Solutions</option>
                    <option value="business-automation">Business Automation</option>
                    <option value="data-analytics">Data Analytics</option>
                    <option value="consulting">Strategic Consulting</option>
                    <option value="training">Training & Support</option>
                  </select>
                  {errors.Service_Interest && <p id="modal-Service_Interest-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Service_Interest}</p>}
                </div>
                <div>
                  <label htmlFor="Project_Details" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="Project_Details"
                    name="Project_Details"
                    rows={4}
                    aria-invalid={Boolean(errors.Project_Details)}
                    aria-describedby={errors.Project_Details ? 'modal-Project_Details-error' : undefined}
                    value={formData.Project_Details}
                    onChange={handleInputChange}
                    onBlur={handleFieldBlur}
                    className={getFieldClass('Project_Details')}
                    placeholder="Optional additional context for the discovery call..."
                  />
                  {errors.Project_Details && <p id="modal-Project_Details-error" className="mt-2 text-sm text-red-600" role="alert">{errors.Project_Details}</p>}
                </div>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4" role="status" aria-live="polite">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-700 font-medium">Success! We'll be in touch within 24 hours. Closing modal...</p>
                  </div>
                </div>
              )}
              
              {submitStatus === 'error' && !Object.keys(errors).length && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4" role="alert">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-700 font-medium">Failed to send. Please try again or email us directly.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 ${
                  isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'btn-primary bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl transform hover:scale-105'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Scheduling...
                  </div>
                ) : (
                  'Schedule Free Discovery Call'
                )}
              </button>
            </form>


            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 text-center">
                Or email us directly at{' '}
                <a href="mailto:Info@easemysaas.com" className="text-blue-600 hover:underline">
                  Info@easemysaas.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal; 


