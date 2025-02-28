
import React, { useRef } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';

// Client logo data
const clients = [
  {
    name: "TechVision",
    logoUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=200&h=100&fit=crop&auto=format",
    website: "https://example.com/techvision"
  },
  {
    name: "Apex Solutions",
    logoUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&auto=format",
    website: "https://example.com/apex"
  },
  {
    name: "Quantum Systems",
    logoUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=200&h=100&fit=crop&auto=format",
    website: "https://example.com/quantum"
  },
  {
    name: "Nebula Innovations",
    logoUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=200&h=100&fit=crop&auto=format",
    website: "https://example.com/nebula"
  },
  {
    name: "Zenith Media",
    logoUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&h=100&fit=crop&auto=format",
    website: "https://example.com/zenith"
  },
  {
    name: "Vertex Networks",
    logoUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=200&h=100&fit=crop&auto=format",
    website: "https://example.com/vertex"
  },
  {
    name: "Horizon Labs",
    logoUrl: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=200&h=100&fit=crop&auto=format",
    website: "https://example.com/horizon"
  },
  {
    name: "Pulse Digital",
    logoUrl: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=200&h=100&fit=crop&auto=format",
    website: "https://example.com/pulse"
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
            Trusted by leading companies
          </h2>
          <p className={`text-lg text-muted-foreground ${getAnimationClass(isInView, 'fade-up', 100)}`}>
            Join the hundreds of businesses that rely on Ibex every day
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
