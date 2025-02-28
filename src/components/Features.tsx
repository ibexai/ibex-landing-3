
import React, { useRef, useState, useEffect } from 'react';
import { useInView, getStaggeredAnimation } from '@/lib/animations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Feature data
const features = [
  {
    title: "Intuitive Dashboard",
    description: "Access all your key metrics and tools from a single, beautifully designed interface that adapts to your workflow.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    )
  },
  {
    title: "Seamless Integrations",
    description: "Connect with the tools you already use. Our platform integrates with 100+ popular business applications out of the box.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    )
  },
  {
    title: "Automated Workflows",
    description: "Reduce manual tasks and human error with intelligent automation that handles repetitive processes with precision.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    )
  },
  {
    title: "Advanced Analytics",
    description: "Make data-driven decisions with comprehensive analytics that provide actionable insights into your business performance.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
      </svg>
    )
  },
  {
    title: "Enterprise Security",
    description: "Rest easy knowing your data is protected by bank-level encryption, regular security audits, and compliance with industry standards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    )
  },
  {
    title: "Dedicated Support",
    description: "Get help when you need it with 24/7 customer support from a team of experts who are committed to your success.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    )
  }
];

// Featured carousel items
const featuredItems = [
  {
    title: "Unified Business Platform",
    description: "Centralize your operations with our all-in-one platform that connects every aspect of your business. From customer management to financial reporting, everything works together seamlessly.",
    features: ["Real-time collaboration", "Customizable workflows", "Comprehensive reporting", "Mobile accessibility"],
    imageText: "Interactive Dashboard Preview"
  },
  {
    title: "AI-Powered Insights",
    description: "Harness the power of artificial intelligence to uncover hidden patterns in your data and receive actionable recommendations tailored to your business objectives.",
    features: ["Predictive analytics", "Automated reporting", "Custom AI models", "Trend forecasting"],
    imageText: "AI Analytics Dashboard",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1470&auto=format&fit=crop"
  },
  {
    title: "Enterprise Collaboration Suite",
    description: "Break down silos between departments with our comprehensive collaboration tools designed to keep your team connected and productive, no matter where they work.",
    features: ["Team workspaces", "Document collaboration", "Video conferencing", "Task management"],
    imageText: "Collaboration Workspace"
  }
];

const Features: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Auto-advance the carousel with reduced speed (from 6000ms to 10000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % featuredItems.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);
  
  const nextFeature = () => {
    setActiveFeature((prev) => (prev + 1) % featuredItems.length);
  };
  
  const prevFeature = () => {
    setActiveFeature((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };
  
  return (
    <section
      ref={sectionRef}
      id="features"
      className="section-spacing bg-secondary/10"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary ${isInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Powerful Capabilities
          </div>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${isInView ? 'animate-fade-up delay-100' : 'opacity-0'}`}>
            Everything you need to succeed
          </h2>
          <p className={`text-lg text-muted-foreground ${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Our comprehensive suite of features is designed to streamline your business processes and drive growth.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-card bg-card rounded-xl p-6 shadow-md border border-border/20 ${getStaggeredAnimation(isInView, index, 100)}`}
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Featured Carousel */}
        <div className={`mt-20 ${isInView ? 'animate-fade-up delay-[600ms]' : 'opacity-0'}`}>
          <div className="text-center mb-10">
            <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
              Featured
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold">
              Discover our key capabilities
            </h3>
          </div>
          
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl shadow-md border border-border/20">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeFeature * 100}%)` }}
              >
                {featuredItems.map((item, index) => (
                  <div 
                    key={index}
                    className="min-w-full bg-card"
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">{item.title}</h3>
                        <p className="text-muted-foreground mb-6">{item.description}</p>
                        <ul className="space-y-3">
                          {item.features.map((feature, i) => (
                            <li key={i} className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`${item.image ? 'relative' : 'bg-muted/20'} min-h-[300px] md:min-h-[400px] flex items-center justify-center`}>
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.imageText} 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <p className="text-muted-foreground animate-pulse">{item.imageText}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevFeature} 
              className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-border/20 z-10 hover:bg-primary/20 transition-colors"
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextFeature} 
              className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md border border-border/20 z-10 hover:bg-primary/20 transition-colors"
              aria-label="Next feature"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            
            {/* Indicator Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeFeature 
                      ? "bg-primary w-8" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to feature ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
