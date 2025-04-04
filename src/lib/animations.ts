
import { useEffect, useState } from 'react';

// Intersection Observer Hook for scroll animations
export function useInView(ref: React.RefObject<HTMLElement>, options = {}) {
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      ...options
    });
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);
  
  return isInView;
}

// Animation className generator based on viewability
export function getAnimationClass(isInView: boolean, animation: string = 'fade-up', delay: number = 0) {
  const delayClass = delay > 0 ? ` delay-${delay}` : '';
  return isInView ? `animate-${animation}${delayClass}` : 'opacity-0';
}

// Staggered animations for lists of items
export function getStaggeredAnimation(isInView: boolean, index: number, baseDelay: number = 100) {
  const delay = baseDelay * index;
  const delayClass = delay > 0 ? ' delay-[' + delay + 'ms]' : '';
  return isInView ? `animate-fade-up${delayClass}` : 'opacity-0';
}

// Calculate parallax transformation for scroll
export function getParallaxStyle(scrollY: number, speed: number) {
  return {
    transform: `translateY(${scrollY * speed}px)`,
    transition: 'transform 0.1s ease-out'
  };
}

// Calculate combined parallax transformation for both scroll and mouse
export function getMouseParallaxStyle(scrollY: number, mouseX: number, mouseY: number, scrollSpeed: number, mouseSpeed: number) {
  return {
    transform: `translateY(${scrollY * scrollSpeed}px) translateX(${mouseX * mouseSpeed}px)`,
    transition: 'transform 0.1s ease-out'
  };
}
