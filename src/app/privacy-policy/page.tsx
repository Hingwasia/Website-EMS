import type { Metadata } from 'next';
import PrivacyPolicyPage from '../../views/PrivacyPolicyPage';

export const metadata: Metadata = {
  title: 'Privacy Policy - EaseMySaaS Data Protection',
  description:
    'Read our privacy policy to understand how EaseMySaaS protects your data and respects your privacy.',
  keywords: [
    'privacy policy',
    'data protection',
    'EaseMySaaS privacy',
    'user data security',
  ],
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.easemysaas.com/privacy-policy',
    images: ['/logo-icon.svg'],
  },
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
