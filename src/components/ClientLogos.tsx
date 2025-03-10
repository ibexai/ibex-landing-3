
import React, { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';

// Client logo data
const clients = [
  {
    name: "Casimba",
    logoUrl: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/logos/casimba.svg?w=200&h=100&fit=crop&auto=format",
    website: "https://casimbagaming.com/"
  },
  {
    name: "Easybet",
    logoUrl: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/logos/easybet.png?w=200&h=100&fit=crop&auto=format",
    website: "https://easybet.co.z"
  },
  {
    name: "Aardvark",
    logoUrl: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/logos/aardvark.jpeg?w=200&h=100&fit=crop&auto=format",
    website: "https://adv.bet/"
  },
  {
    name: "Dream Veags",
    logoUrl: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/logos/dreamvegas.webp?w=200&h=100&fit=crop&auto=format",
    website: "https://casimbagaming.com/brand/dream-vegas/"
  },
  {
    name: "Lumi Casino",
    logoUrl: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/logos/lumi.webp?w=200&h=100&fit=crop&auto=format",
    website: "https://casimbagaming.com/brand/lumi-casino/"
  },
  {
    name: "Grand Ivy",
    logoUrl: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/logos/grandivy.png?w=200&h=100&fit=crop&auto=format",
    website: "https://casimbagaming.com/brand/grand-ivy/"
  },
  {
    name: "Playbet",
    logoUrl: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/logos/playbet.webp?w=200&h=100&fit=crop&auto=format",
    website: "https://playbet.net/"
  },
  {
    name: "Casilime",
    logoUrl: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/logos/casilime.png?w=200&h=100&fit=crop&auto=format",
    website: "https://casimbagaming.com/brand/casilime/"
  }
];

const ClientLogos: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 md:py-20 bg-background border-t border-border/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className={`text-2xl md:text-3xl font-display font-bold mb-4 ${getAnimationClass(isInView, 'fade-up')}`}>
            Trusted by leading iGaming companies worldwide
          </h2>
          <p className={`text-lg text-muted-foreground ${getAnimationClass(isInView, 'fade-up', 100)}`}>
            Join the operators that rely on Ibex every day
          </p>
        </div>
        
        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex items-center justify-center p-4 rounded-lg transition-all ${getAnimationClass(isInView, 'fade-up', 100 + index * 50)}`}
            >
              <div className="w-full h-16 relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <img 
                  src={client.logoUrl} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
