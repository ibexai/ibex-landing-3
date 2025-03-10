
import React, { useRef, useState } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';

// Testimonial data
const testimonials = [
  {
    content: "We've tested IBEX next to our existing CRM solution and after 6 months decided to give 90% of all our campaigns to Ibex which has outperformed prior results by far.",
    author: "Ben Moody",
    role: "CMO",
    company: "Casimba",
    image: "https://ibex-landing.s3.eu-west-2.amazonaws.com/static/headshots/benmoody.jpeg"
  },
  {
    content: "The intuitive interface makes it easy for our entire team to collaborate. We've seen a 40% increase in productivity since implementing Ibex.",
    author: "Michael Chen",
    role: "CEO",
    company: "TechVision Inc.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
  },
  {
    content: "As a rapidly growing startup, we needed a solution that could scale with us. Ibex not only met our needs but exceeded our expectations.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "Novus Ventures",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  }
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="section-spacing bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary ${getAnimationClass(isInView, 'fade-in')}`}>
            Client Feedback
          </div>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${getAnimationClass(isInView, 'fade-up', 100)}`}>
            Trusted by businesses worldwide
          </h2>
          <p className={`text-lg text-muted-foreground ${getAnimationClass(isInView, 'fade-up', 200)}`}>
            Don't just take our word for it. Here's what our clients have to say about their experience.
          </p>
        </div>
        
        {/* Testimonial Carousel */}
        <div className={`max-w-5xl mx-auto ${getAnimationClass(isInView, 'fade-up', 300)}`}>
          <div className="relative">
            {/* Testimonial Cards */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="min-w-full p-2"
                  >
                    <div className="bg-card/95 border border-border rounded-lg overflow-hidden p-8">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="currentColor" 
                        className="w-12 h-12 text-primary/20 mb-6" 
                        viewBox="0 0 16 16"
                      >
                        <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                      </svg>
                      
                      <p className="text-lg font-medium mb-8">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center">
                        {/* Profile image */}
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-primary/20">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div>
                          <p className="font-medium">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md focus:outline-none"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md focus:outline-none"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === activeIndex 
                    ? "bg-primary w-8" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
