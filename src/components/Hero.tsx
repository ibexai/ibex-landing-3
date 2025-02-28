
import React, { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { useInView, getAnimationClass } from '@/lib/animations';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, {
    threshold: 0.1
  });

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center section-spacing pt-32 overflow-hidden" id="hero">
        {/* Background Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background z-0"></div>
        
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMmExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAxIDFoLTFhMSAxIDAgMCAxLTEtMUgzN2ExIDEgMCAwIDEtMS0xeiIvPjwvZz48L2c+PC9zdmc+')] z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Pre-title Tag */}
            <div className={`inline-block mb-4 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary ${getAnimationClass(isInView, 'fade-in')}`}>
              Your Retention Copilot
            </div>
            
            {/* Main Headline */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 hero-text-shadow ${getAnimationClass(isInView, 'fade-up', 100)}`}>
              Simplify Retetion Marketing <br className="hidden md:inline" />
              <span className="text-primary">Amplify Your Results</span>
            </h1>
            
            {/* Subtitle */}
            <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 ${getAnimationClass(isInView, 'fade-up', 200)}`}>
              Our platform helps gaming businesses automate retention and optimise processes, reduce overhead, and focus on what truly matters: scale.
            </p>
            
            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${getAnimationClass(isInView, 'fade-up', 300)}`}>
              <Button size="lg" className="rounded-full px-8 py-6 text-base" onClick={scrollToContact}>
                Get in Touch
              </Button>
            </div>
            
            {/* Trust Indicator */}
            <div className={`mt-12 text-sm text-muted-foreground ${getAnimationClass(isInView, 'fade-up', 400)}`}>
              <p className="mb-5">Trusted by iGaming companies worldwide</p>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
      </section>

      {/* Dashboard Showcase Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Gradient for the dashboard section */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/90 z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className={`max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl ${getAnimationClass(isInView, 'scale-in', 500)}`}>
            {/* Dashboard Image */}
            <div className="relative bg-card rounded-2xl border border-primary/10 overflow-hidden">
              {/* Glowing border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 animate-pulse"></div>
              
              {/* The dashboard image */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Ibex Dashboard Interface" 
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">Analytics Dashboard</h3>
                  <p className="text-sm md:text-base opacity-90">Comprehensive view of your retention metrics and customer engagement data</p>
                </div>
              </div>
            </div>
            
            {/* Dashboard Features Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="glass-card p-5 rounded-xl border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Real-time Analytics</h4>
                <p className="text-muted-foreground text-sm">Track user engagement and retention in real-time to make data-driven decisions.</p>
              </div>
              
              <div className="glass-card p-5 rounded-xl border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Automated Campaigns</h4>
                <p className="text-muted-foreground text-sm">Set up trigger-based campaigns that respond to user behavior and increase engagement.</p>
              </div>
              
              <div className="glass-card p-5 rounded-xl border border-primary/10">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h4 className="text-lg font-semibold mb-2">Smart Segmentation</h4>
                <p className="text-muted-foreground text-sm">Analyze user behavior to create dynamic segments for targeted marketing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
