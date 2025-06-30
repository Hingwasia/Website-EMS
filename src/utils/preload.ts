// Resource preloading utilities for performance optimization

interface PreloadResource {
  href: string;
  as: string;
  type?: string;
  crossorigin?: string;
  media?: string;
}

// Preload critical assets
export const preloadCriticalAssets = (): void => {
  const criticalAssets: PreloadResource[] = [
    // Preload critical fonts (if using custom fonts)
    // { href: '/fonts/roboto.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    
    // Preload critical images
    { href: '/logo-icon.svg', as: 'image' },
    
    // Preload critical CSS (if using external stylesheets)
    // { href: '/critical.css', as: 'style' },
  ];

  criticalAssets.forEach(asset => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = asset.href;
    link.as = asset.as;
    if (asset.type) link.type = asset.type;
    if (asset.crossorigin) link.crossOrigin = asset.crossorigin;
    if (asset.media) link.media = asset.media;
    
    document.head.appendChild(link);
  });
};

// Prefetch next likely pages
export const prefetchPages = (pages: string[]): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      pages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
      });
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      pages.forEach(page => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = page;
        document.head.appendChild(link);
      });
    }, 2000);
  }
};

// Preconnect to external domains
export const preconnectToExternalDomains = (): void => {
  const domains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    // Add other external domains you connect to
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

// DNS prefetch for external domains
export const dnsPrefetchExternalDomains = (): void => {
  const domains = [
    '//www.google-analytics.com',
    '//www.googletagmanager.com',
    // Add other domains for DNS prefetch
  ];

  domains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = (): void => {
  // Run immediately for critical resources
  preloadCriticalAssets();
  preconnectToExternalDomains();
  dnsPrefetchExternalDomains();
  
  // Prefetch likely next pages after initial load
  const likelyNextPages = ['/ai', '/ai-packages', '/contact'];
  prefetchPages(likelyNextPages);
};

// Image optimization utilities
export const createOptimizedImageSrcSet = (baseSrc: string, sizes: number[]): string => {
  return sizes
    .map(size => `${baseSrc}?w=${size} ${size}w`)
    .join(', ');
};

export const getOptimalImageSizes = (maxWidth: number): string => {
  return `(max-width: 768px) ${Math.round(maxWidth * 0.9)}px, ${maxWidth}px`;
}; 