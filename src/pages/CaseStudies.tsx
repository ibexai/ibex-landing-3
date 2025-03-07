
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
              {/* Case Study 1 */}
              <div className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="aspect-w-16 aspect-h-9 bg-secondary">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-accent/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">1</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Tech Solutions Inc.</h3>
                  <p className="text-muted-foreground mb-4">Boosting operational efficiency by 45% through AI-powered analytics.</p>
                  <a href="#" className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Case Study 2 */}
              <div className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="aspect-w-16 aspect-h-9 bg-secondary">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-accent/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">2</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Global Retail Chain</h3>
                  <p className="text-muted-foreground mb-4">Implementing an omnichannel solution that increased sales by 28%.</p>
                  <a href="#" className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Case Study 3 */}
              <div className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="aspect-w-16 aspect-h-9 bg-secondary">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-accent/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">3</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Healthcare Provider</h3>
                  <p className="text-muted-foreground mb-4">Streamlining patient management with 60% improved response times.</p>
                  <a href="#" className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
              {/* Case Study 4 */}
              <div className="glass-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <div className="aspect-w-16 aspect-h-9 bg-secondary">
                  <div className="flex items-center justify-center h-full bg-gradient-to-br from-primary/20 to-accent/10">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">4</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Financial Services</h3>
                  <p className="text-muted-foreground mb-4">Automating compliance procedures reducing overhead by 35%.</p>
                  <a href="#" className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
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
              <a href="/contact" className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2">
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
