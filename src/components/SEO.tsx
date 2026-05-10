import type { ReactNode } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url?: string;
  image?: string;
  type?: string;
  structuredData?: object;
}

const SEO = ({ structuredData }: SEOProps): ReactNode => {
  if (!structuredData) {
    return null;
  }

  return (
    <script type="application/ld+json">
      {JSON.stringify(structuredData)}
    </script>
  );
};

export default SEO;
