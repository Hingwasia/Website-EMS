import type { Metadata } from 'next';
import ContactPage from '../../views/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Us - Get AI Solutions for Your Business',
  description:
    'Contact EaseMySaaS for custom AI solutions, automation, and SaaS development. Free consultation available.',
  keywords: [
    'contact AI company',
    'AI consultation',
    'SaaS development inquiry',
    'business automation contact',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.easemysaas.com/contact',
    images: ['/logo-icon.svg'],
  },
};

export default function Page() {
  return <ContactPage />;
}
