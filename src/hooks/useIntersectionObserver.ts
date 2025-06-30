import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  initialIsIntersecting?: boolean;
}

interface UseIntersectionObserverReturn {
  ref: React.RefCallback<HTMLElement>;
  isIntersecting: boolean;
  entry?: IntersectionObserverEntry;
}

// Shared intersection observer instance for better performance
const observerMap = new Map<string, IntersectionObserver>();
const observerElementCount = new Map<string, number>();

const createObserverKey = (options: IntersectionObserverInit): string => {
  return JSON.stringify({
    threshold: options.threshold,
    rootMargin: options.rootMargin,
    root: options.root
  });
};

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = false,
  initialIsIntersecting = false
}: UseIntersectionObserverOptions = {}): UseIntersectionObserverReturn => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(initialIsIntersecting);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const observerKey = createObserverKey({ threshold, rootMargin });

  const updateIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    const [intersectionEntry] = entries;
    setEntry(intersectionEntry);
    
    if (intersectionEntry.isIntersecting) {
      setIsIntersecting(true);
    } else if (!triggerOnce) {
      setIsIntersecting(false);
    }
  }, [triggerOnce]);

  // Ref callback to handle element updates
  const ref = useCallback((element: HTMLElement | null) => {
    // Clean up previous element
    if (elementRef.current) {
      const observer = observerMap.get(observerKey);
      if (observer) {
        observer.unobserve(elementRef.current);
        
        // Decrement element count
        const count = observerElementCount.get(observerKey) || 0;
        const newCount = Math.max(0, count - 1);
        observerElementCount.set(observerKey, newCount);
        
        // Clean up observer if no elements are being observed
        if (newCount === 0) {
          observer.disconnect();
          observerMap.delete(observerKey);
          observerElementCount.delete(observerKey);
        }
      }
    }

    // Set new element
    elementRef.current = element;

    if (element) {
      // Get or create observer for this configuration
      let observer = observerMap.get(observerKey);
      
      if (!observer) {
        observer = new IntersectionObserver(updateIntersection, {
          threshold,
          rootMargin
        });
        observerMap.set(observerKey, observer);
        observerElementCount.set(observerKey, 0);
      }

      // Increment element count
      const currentCount = observerElementCount.get(observerKey) || 0;
      observerElementCount.set(observerKey, currentCount + 1);

      observer.observe(element);
    }
  }, [observerKey, threshold, rootMargin, updateIntersection]);

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (triggerOnce && isIntersecting && elementRef.current) {
        const observer = observerMap.get(observerKey);
        if (observer) {
          observer.unobserve(elementRef.current);
        }
      }
    };
  }, [triggerOnce, isIntersecting, observerKey]);

  return { ref, isIntersecting, entry };
};

// Optimized hook for simple visibility detection
export const useInView = (options?: UseIntersectionObserverOptions) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    triggerOnce: true,
    ...options
  });
  
  return { ref, isInView: isIntersecting };
}; 