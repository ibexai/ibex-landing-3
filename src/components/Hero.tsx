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
  return <section ref={heroRef} className="relative min-h-screen flex items-center justify-center section-spacing pt-32 overflow-hidden" id="hero">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 to-background z-0"></div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0xLjEuOS0yIDItMmgxMmExIDEgMCAwIDEgMSAxIDEgMSAwIDAgMSAxIDFoLTFhMSAxIDAgMCAxLTEtMUgzN2ExIDEgMCAwIDEtMS0xeiIvPjwvZz48L2c+PC9zdmc+')] z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pre-title Tag */}
          <div className={`inline-block mb-4 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary ${getAnimationClass(isInView, 'fade-in')}`}>
            Streamline Your Business Operations
          </div>
          
          {/* Main Headline */}
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 hero-text-shadow ${getAnimationClass(isInView, 'fade-up', 100)}`}>
            Simplify Your Workflow <br className="hidden md:inline" />
            <span className="text-primary">Amplify Your Results</span>
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 ${getAnimationClass(isInView, 'fade-up', 200)}`}>
            Our platform helps businesses automate complex processes, 
            reduce overhead, and focus on what truly matters: growth.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${getAnimationClass(isInView, 'fade-up', 300)}`}>
            <Button size="lg" className="rounded-full px-8 py-6 text-base" onClick={scrollToContact}>
              Get in Touch
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base" onClick={scrollToContact}>
              Book a Demo
            </Button>
          </div>
          
          {/* Trust Indicator */}
          <div className={`mt-12 text-sm text-muted-foreground ${getAnimationClass(isInView, 'fade-up', 400)}`}>
            <p className="mb-5">Trusted by 500+ companies worldwide</p>
            
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>;
};
export default Hero;