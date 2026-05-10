import type { Metadata } from 'next';
import Homepage from '../views/Homepage';

export const metadata: Metadata = {
  title: 'EaseMySaaS - AI-Powered Business Automation & CRM Solutions',
  description:
    'Transform your business with AI automation, custom CRM solutions, intelligent workflows, and SaaS development.',
  keywords: [
    'AI business automation',
    'custom CRM solutions',
    'SaaS development',
    'AI integration',
    'business transformation',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.easemysaas.com',
    images: ['/logo-icon.svg'],
  },
};

export default function Page() {
  return <Homepage />;
}

