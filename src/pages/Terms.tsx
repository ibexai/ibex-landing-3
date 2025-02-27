
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 md:px-6 py-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg prose-invert">
              <p className="text-muted-foreground">Last updated: April 15, 2023</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>Welcome to Ibex. These Terms of Service govern your use of our website, products, and services.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Acceptance of Terms</h2>
              <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use License</h2>
              <p>Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Service Availability and Modifications</h2>
              <p>We reserve the right to withdraw or amend our service, and any service or material we provide, without notice. We will not be liable if for any reason all or any part of our service is unavailable at any time or for any period.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. User Responsibilities</h2>
              <p>You are responsible for ensuring that all persons who access our service through your account are aware of these Terms and comply with them.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
              <p>In no event will Ibex, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
              <p>These terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at legal@ibex.com.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
