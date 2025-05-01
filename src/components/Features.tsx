import React, { useRef, useState, useEffect } from 'react';
import { useInView, getStaggeredAnimation } from '@/lib/animations';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Feature data
const features = [
  {
    title: "Intuitive Dashboards",
    description: "Access your key metrics from a beautifully designed interface that enhances your workflow.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    )
  },
  {
    title: "Daily campaigns",
    description: "Send daily, weekly or monthly retention and reactivation campaigns based on your rules or our AI models.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    )
  },
  {
    title: "Real time engagement",
    description: "Trigger pre-defined or AI-driven promotions and comms within seconds of a player's action.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    )
  },
  {
    title: "Fully personalised approach",
    description: "Treat every player based on their individual patterns - no need to treat all players in a customer segment the same.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    )
  },
  {
    title: "Tailored to iGaming",
    description: "Predict the impact of gaming-specific promo mechanics like match bonuses, free bets and cashback offers to maximise their impact.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
      </svg>
    )
  },
  {
    title: "Customised to your needs",
    description: "We're not a one-size-fits-all system. We'll tailor our engine to your specific data, needs and goals.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 0 1 0 .255c.007.378.136.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c-.007-.378-.136-.75-.43-.99l-1.004-.828a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    )
  }
];

// Featured carousel items
const featuredItems = [
  {
    title: "Bottom-up rather than top-down",
    description: "No need to use generic player segments. Ibex analyses the patterns of behaviour for each player and selects the best promo and template specifically for them.",
    features: ["Complete personalisation of campaigns", "AI-driven selection of best marketing action", "No one-size fits all segmentation"],
    imageText: "Interactive Dashboard Preview",
    image: "https://images.pexels.com/photos/159275/macro-focus-cogwheel-gear-159275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?q=80&w=1470&auto=format"
  },
  {
    title: "iGaming first",
    description: "Instead of using generic metrics to measure the success of campaigns, Ibex predicts and tracks the impact using gaming-specific modules.",
    features: ["Bonus engine", "Large library of promo mechanics", "Understanding of iGaming metrics (GGR, NGR)"],
    imageText: "AI Analytics Dashboard",
    image: "https://images.pexels.com/photos/262333/pexels-photo-262333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?q=80&w=1470&auto=format"
  },
  {
    title: "Customised to your needs",
    description: "All operators are different. Ibex is not a one-size-fits-all system: we will tailor our engine to your specific data, needs and goals, whether this is incorporating rev share data or setting up bespoke promo mechanics.",
    features: ["Bespoke integration", "Tailored to your platform", "Custom features"],
    imageText: "Collaboration Workspace",
    image: "https://images.pexels.com/photos/394377/pexels-photo-394377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1?q=80&w=1470&auto=format"
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
          Smarter Marketing Powered by AI
          </h2>
          <p className={`text-lg text-muted-foreground ${isInView ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
          At Ibex, we believe in the power of technology to make marketing more effective, efficient, and personalised. Our AI-driven platform takes the guesswork out of retention marketing, helping businesses make smarter decisions, reach the right players, and drive higher profits with less effort.
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
        <div className={`mt-20 ${isInView ? 'animate-fade-up delay-700' : 'opacity-0'}`}>
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
                      <div className="relative min-h-[300px] md:min-h-[400px] overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.imageText} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons - Updated to match Testimonials style */}
            <button 
              onClick={prevFeature} 
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md focus:outline-none"
              aria-label="Previous feature"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextFeature} 
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md focus:outline-none"
              aria-label="Next feature"
            >
              <ChevronRight className="w-5 h-5" />
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
