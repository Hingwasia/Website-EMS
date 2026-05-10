import type { Metadata } from 'next';
import AIPackagesPage from '../../views/AIPackagesPage';

export const metadata: Metadata = {
  title: 'AI SaaS Packages & Pricing - Affordable AI Solutions',
  description:
    'Explore AI SaaS packages for every stage of growth, from startup-friendly tools to enterprise automation solutions.',
  keywords: [
    'AI packages',
    'SaaS pricing',
    'AI automation packages',
    'business AI solutions',
  ],
  alternates: {
    canonical: '/ai-packages',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.easemysaas.com/ai-packages',
    images: ['/logo-icon.svg'],
  },
};

export default function Page() {
  return <AIPackagesPage />;
}
