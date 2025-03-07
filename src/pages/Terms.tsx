
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">Terms of Use</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground">Last updated: July 2023</p>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>Welcome to Ibex. These Terms of Use govern your use of our website, applications, and services. Please read these terms carefully before using our services.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">2. Acceptance</h2>
                <p>By accessing or using the Ibex platform, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you should not access or use our services.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">3. Changes to the Terms</h2>
                <p>We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes indicates your acceptance of the modified terms.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">4. Registration and Account Security</h2>
                <p>To access certain features of our platform, you may need to register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
                <p>The Ibex platform, including all content, features, and functionality, is owned by us and is protected by international copyright, trademark, patent, and other intellectual property laws.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
                <p>You retain ownership of any content you submit to our platform. By submitting content, you grant us a worldwide, non-exclusive license to use, reproduce, modify, and display your content in connection with our services.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">7. Prohibited Activities</h2>
                <p>You agree not to use our platform for any unlawful purpose or in any way that could damage, disable, or impair our services. Prohibited activities include unauthorized access, data mining, and transmission of harmful code.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">8. Data Protection and Privacy</h2>
                <p>Our collection and use of personal information is governed by our Privacy Policy. By using our services, you consent to our data practices as described in our Privacy Policy.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
                <p>We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms of Use.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">10. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">11. Governing Law</h2>
                <p>These Terms of Use shall be governed by and construed in accordance with the laws of the jurisdiction in which we operate, without regard to its conflict of law provisions.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                <p>If you have any questions about these Terms of Use, please contact us at:</p>
                <p className="mt-2">Email: legal@ibex.ai</p>
              </section>
              
              <div className="mt-12 flex flex-col md:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link to="/privacy">Privacy Policy</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/cookies">Cookie Policy</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
