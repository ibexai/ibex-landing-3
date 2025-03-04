
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FeaturesComponent from '@/components/Features';

const Features: React.FC = () => {
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
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Features</h1>
              <p className="text-xl text-muted-foreground">
                Explore the powerful capabilities that make Ibex the platform to beat when it comes to LTV optimisation.
              </p>
            </div>
          </div>
        </section>

        {/* Reuse the Features component */}
        <FeaturesComponent />
      </main>
      <Footer />
    </div>
  );
};

export default Features;
