
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
                  <div className="h-20 w-20 rounded-full bg-primary/10 p-4 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364Z" stroke="currentColor" strokeWidth="2" />
                      <path d="M16.5 7.5L16.5 7.505" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 16.5L7.505 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7.5 7.5L7.505 7.505" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.5 16.5L16.505 16.505" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
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
                  <div className="h-20 w-20 rounded-full bg-primary/10 p-4 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7L9 4L15 7L21 4V17L15 20L9 17L3 20V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 4V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M15 7V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M21 12C19.8954 12 19 11.1046 19 10C19 8.89543 19.8954 8 21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <path d="M3 15C4.10457 15 5 14.1046 5 13C5 11.8954 4.10457 11 3 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
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
