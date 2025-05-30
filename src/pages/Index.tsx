
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import ClientLogos from '@/components/ClientLogos';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

const Index = () => {
  // Use the hook to scroll to top on route change
  useScrollToTop();

  // Smooth scroll functionality for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchorLink = target.closest('a[href^="#"]');
      
      if (anchorLink) {
        e.preventDefault();
        const targetId = anchorLink.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="antialiased min-h-screen bg-transparent relative">
      {/* Background effects with lower z-index to be behind content */}
      <div className="fixed inset-0 z-[-50]">
        <div className="keak-gradient absolute inset-0"></div>
        <div className="light-rays absolute inset-0"></div>
        <div className="sunburst-effect absolute inset-0"></div>
        <div className="app-background absolute inset-0"></div>
        <div className="glow-overlay absolute inset-0"></div>
        <div className="backup-pattern absolute inset-0"></div>
      </div>
      
      <Header />
      <main className="pt-16 md:pt-20 relative z-10">
        <Hero />
        <Features />
        <Testimonials />
        <ClientLogos />
        <Contact />
        
        {/* ISO Certification */}
        <div className="container mx-auto px-4 md:px-6 py-8 flex flex-col items-center relative z-10">
          <a 
            href="https://clients.britishassessment.com/verify.asp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="https://cdn.prod.website-files.com/5ece6ad43b049e7047e1ea80/660e6770c43d03dd72cdde3b_27001%20RGB%20White.png" 
              alt="ISO 27001 Certification" 
              className="h-24 w-auto"
            />
          </a>
          <p className="text-muted-foreground mt-2">Certificate No 224552</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
