import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../index.css';
import 'nprogress/nprogress.css';
import ScrollToTop from '../ScrollToTop';
import ClientEffects from '../components/ClientEffects';
import NavigationProgress from '../components/NavigationProgress';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.easemysaas.com'),
  title: {
    default: 'EaseMySaaS',
    template: '%s | EaseMySaaS',
  },
  description:
    'AI-powered business automation and custom CRM solutions for modern teams.',
  keywords: [
    'AI business automation',
    'custom CRM solutions',
    'SaaS development',
    'AI integration',
  ],
  openGraph: {
    siteName: 'EaseMySaaS',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.easemysaas.com',
    images: ['/logo-icon.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@easemysaas',
    images: ['/logo-icon.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <NavigationProgress />
        {children}
        <ScrollToTop />
        <ClientEffects />
      </body>
    </html>
  );
}
