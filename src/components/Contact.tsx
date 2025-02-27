
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useInView, getAnimationClass } from '@/lib/animations';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };
  
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-spacing bg-secondary/30"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <div className={`mb-6 ${getAnimationClass(isInView, 'fade-up')}`}>
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary">
                Get in Touch
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Let's discuss your business needs
              </h2>
              <p className="text-muted-foreground">
                Have questions about our platform or need a custom solution? Fill out the form and one of our team members will get back to you shortly.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className={`space-y-6 ${getAnimationClass(isInView, 'fade-up', 100)}`}>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">hello@saasflow.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mr-4 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Office</h3>
                  <p className="text-muted-foreground">123 Innovation Way, San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form Side */}
          <div className={getAnimationClass(isInView, 'fade-up', 200)}>
            <form 
              className="bg-background rounded-xl shadow-sm border border-border/40 p-8"
              onSubmit={handleSubmit}
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="john@company.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Your Company Ltd."
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border border-input bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                
                <Button type="submit" className="w-full py-6">
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
