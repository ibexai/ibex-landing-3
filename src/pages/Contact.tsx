
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/Contact';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Have questions or ready to get started? We're here to help you every step of the way.
              </p>
            </div>
          </div>
        </section>
        
        {/* Reuse Contact component */}
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
