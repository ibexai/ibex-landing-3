
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background elements */}
      <div className="app-background"></div>
      <div className="glow-overlay"></div>
      
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-muted-foreground">
                Ibex has been proven to successfully automate retention campaigns and optimise the LTV impact of iGaming companies across the world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1 - Real-Time Automation */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-5px]">
                <div className="bg-secondary/40 p-6 flex items-center justify-center border-b">
                  <img 
                    src="/lovable-uploads/f57b7eae-49bc-4580-a10e-50a3ba7586ee.png" 
                    alt="Ibex Logo" 
                    className="h-16" 
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Real-Time Automation</h3>
                  <p className="text-muted-foreground mb-4">Boosting operational efficiency by 45% through AI-powered analytics.</p>
                  <Link to="/case-studies/real-time-automation" className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Case Study 2 - Randomised Trial vs Optimove */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-5px]">
                <div className="bg-secondary/40 p-6 flex items-center justify-center border-b">
                  <img 
                    src="/lovable-uploads/f57b7eae-49bc-4580-a10e-50a3ba7586ee.png" 
                    alt="Ibex Logo" 
                    className="h-16" 
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Randomised Trial vs Optimove</h3>
                  <p className="text-muted-foreground mb-4">A comparative study showing 23% better retention metrics with Ibex.</p>
                  <Link to="/case-studies/randomised-trial" className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to maximise your player LTV?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how Ibex can work for you.
              </p>
              <Button 
                variant="subtle" 
                size="lg" 
                className="rounded-full px-8 py-6 text-base transition-all hover:shadow-md"
                onClick={() => {
                  window.location.href = '/contact';
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
