import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useInView, getAnimationClass } from '@/lib/animations';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, {
    threshold: 0.1
  });
  const isMobile = useIsMobile();
  
  // State to track scroll position and mouse position for parallax effect
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Handle mouse move for parallax effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!parallaxContainerRef.current) return;
    
    const { left, top, width, height } = parallaxContainerRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - left) / width - 0.5; // -0.5 to 0.5
    const mouseY = (e.clientY - top) / height - 0.5; // -0.5 to 0.5
    
    setMousePosition({ x: mouseX, y: mouseY });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <section ref={heroRef} className="relative min-h-[80vh] flex flex-col items-center justify-center section-spacing pt-20 pb-0" id="hero">
      {/* Enhanced Background Elements (removed as they're now at the page level) */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-0"></div>
      
      {/* Light Ray Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent z-0 light-ray-animation"></div>
      
      {/* Subtle Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMmExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAxIDFoLTFhMSAxIDAgMCAxLTEtMUgzN2ExIDEgMCAwIDEtMS0xeiIvPjwvZz48L2c+PC9zdmc+')] z-0"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center mb-8">
        <div className="max-w-4xl mx-auto">
          {/* Pre-title Tag */}
          <div className={`inline-block mb-4 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary ${getAnimationClass(isInView, 'fade-in')}`}>
            Your Retention Copilot
          </div>
          
          {/* Main Headline */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-4 hero-text-shadow ${getAnimationClass(isInView, 'fade-up', 100)}`}>
            Simplify Retention Marketing <br className="hidden md:inline" />
            <span className="text-primary">Amplify Your Results</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 ${getAnimationClass(isInView, 'fade-up', 200)}`}>
            Our platform helps gaming businesses automate retention and optimise processes, reduce overhead, and focus on what truly matters: impact.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-4 ${getAnimationClass(isInView, 'fade-up', 300)}`}>
            <Button 
              variant="subtle" 
              size="lg" 
              className="rounded-full px-8 py-6 text-base transition-all hover:shadow-md" 
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
          </div>
          
          {/* Trust Indicator */}
          <div className={`text-sm text-muted-foreground ${getAnimationClass(isInView, 'fade-up', 400)}`}>
            <p>Trusted by iGaming companies worldwide</p>
          </div>
        </div>
      </div>
      
      {/* Parallax Images Section - improved responsive behavior */}
      <div 
        ref={parallaxContainerRef} 
        className="relative w-full max-w-6xl mx-auto mt-8 h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-2xl z-10"
        onMouseMove={!isMobile ? handleMouseMove : undefined}
      >
        {/* Base layer - moves slowest */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            transform: isMobile ? 
              `translateY(${scrollY * 0.02}px)` : 
              `translateY(${scrollY * 0.05}px) translateX(${mousePosition.x * -10}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://ibex-landing.s3.eu-west-2.amazonaws.com/static/Base.png" 
            alt="Dashboard Base" 
            className="w-full h-full object-contain sm:object-cover rounded-2xl"
          />
        </div>
        
        {/* Phone layer - moves a bit faster */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            transform: isMobile ? 
              `translateY(${scrollY * -0.04}px)` : 
              `translateY(${scrollY * -0.1}px) translateX(${mousePosition.x * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://ibex-landing.s3.eu-west-2.amazonaws.com/static/Phone.png" 
            alt="Mobile App" 
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Highlight 1 - moves faster */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            transform: isMobile ? 
              `translateY(${scrollY * -0.06}px)` : 
              `translateY(${scrollY * -0.15}px) translateX(${mousePosition.x * -15}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://ibex-landing.s3.eu-west-2.amazonaws.com/static/highlight-1.png" 
            alt="Feature Highlight" 
            className="w-full h-full object-contain px-4"
          />
        </div>
        
        {/* Highlight 2 - moves fastest */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            transform: isMobile ? 
              `translateY(${scrollY * -0.08}px)` : 
              `translateY(${scrollY * -0.2}px) translateX(${mousePosition.x * 20}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <img 
            src="https://ibex-landing.s3.eu-west-2.amazonaws.com/static/highlight-2.png" 
            alt="Feature Highlight" 
            className="w-full h-full object-contain px-4"
          />
        </div>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Hero;
