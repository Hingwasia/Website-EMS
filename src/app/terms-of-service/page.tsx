import type { Metadata } from 'next';
import TermsOfServicePage from '../../views/TermsOfServicePage';

export const metadata: Metadata = {
  title: 'Terms of Service - EaseMySaaS Legal Terms',
  description:
    'Review our terms of service for using EaseMySaaS AI and SaaS solutions.',
  keywords: [
    'terms of service',
    'legal terms',
    'EaseMySaaS terms',
    'service agreement',
  ],
  alternates: {
    canonical: '/terms-of-service',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.easemysaas.com/terms-of-service',
    images: ['/logo-icon.svg'],
  },
};

export default function Page() {
  return <TermsOfServicePage />;
}
