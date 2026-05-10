"use client";

import { useEffect } from 'react';
import { initializePerformanceOptimizations } from '../utils/preload';

export default function ClientEffects() {
  useEffect(() => {
    initializePerformanceOptimizations();
  }, []);

  return null;
}
