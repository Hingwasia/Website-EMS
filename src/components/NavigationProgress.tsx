"use client";

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';

let configured = false;

const isModifiedEvent = (event: MouseEvent) =>
  event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

export default function NavigationProgress() {
  const pathname = usePathname();

  useEffect(() => {
    if (!configured) {
      configured = true;
      NProgress.configure({
        showSpinner: false,
        trickleSpeed: 120,
        minimum: 0.12,
      });
    }

    NProgress.done();
  }, [pathname]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (isModifiedEvent(event)) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest('a');

      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      let nextUrl: URL;
      try {
        nextUrl = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      const currentUrl = new URL(window.location.href);
      if (nextUrl.origin !== currentUrl.origin) return;
      if (nextUrl.pathname === currentUrl.pathname && nextUrl.search === currentUrl.search) return;

      NProgress.start();
    };

    document.addEventListener('click', handleClick, true);
    return () => document.removeEventListener('click', handleClick, true);
  }, []);

  return null;
}
