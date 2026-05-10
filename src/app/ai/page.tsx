import type { Metadata } from 'next';
import AIPage from '../../views/AIPage';

export const metadata: Metadata = {
  title: 'AI Solutions & Services',
  description:
    'Discover how our AI-powered solutions can transform your business with custom integrations, automation, and intelligent systems.',
  keywords: [
    'AI solutions',
    'artificial intelligence services',
    'AI automation',
    'machine learning',
    'AI integration',
  ],
  alternates: {
    canonical: '/ai',
  },
  openGraph: {
    type: 'article',
    url: 'https://www.easemysaas.com/ai',
    images: ['/logo-icon.svg'],
  },
};

export default function Page() {
  return <AIPage />;
}
