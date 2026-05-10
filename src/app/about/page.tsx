import type { Metadata } from 'next';
import AboutPage from '../../views/AboutPage';

export const metadata: Metadata = {
  title: 'About EaseMySaaS - Transforming Businesses with AI',
  description:
    'Learn about EaseMySaaS and our mission to transform chaos into revenue with scalable AI solutions and streamlined operations.',
  keywords: [
    'about EaseMySaaS',
    'AI company story',
    'SaaS development team',
    'business transformation',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.easemysaas.com/about',
    images: ['/logo-icon.svg'],
  },
};

export default function Page() {
  return <AboutPage />;
}
