
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-muted-foreground">Last updated: May 1, 2024</p>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>This Privacy Policy describes how Ibex AI ("Ibex," "we," "our," or "us") collects, uses, and discloses your information and explains the choices you have with respect to that information. When we refer to "Ibex," we mean the Ibex entity that acts as the controller or processor of your information, as explained in more detail in the "Identifying the Data Controller and Processor" section below.</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">2. Applicability Of This Privacy Policy</h2>
                <p>This Privacy Policy applies to Ibex's online workplace analytics software, platform, and services, including the associated Ibex mobile and desktop applications (collectively, the "Services"), Ibex.ai and other Ibex websites (collectively, the "Websites") and other interactions (e.g., customer service inquiries, user conferences, etc.) you may have with Ibex. If you do not agree with the terms, do not access or use the Services, Websites or any other aspect of Ibex's business.</p>
                <p>This Privacy Policy does not apply to any third-party applications or software that integrate with the Services through the Ibex platform ("Third-Party Services"), or any other third-party products, services or businesses. In addition, a separate agreement governs delivery, access and use of the Services (the "Terms of Service"), including the processing of any content submitted through Services accounts (collectively, "Customer Data").</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">3. Information We Collect And Receive</h2>
                <p>Ibex may collect and receive Customer Data and other information and data ("Other Information") in a variety of ways:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Customer Data. Customer data refers to data, content, and information that users ("Users") submit to, or use with, the Services, such as user account information, user location, user settings, etc. To use our Services, you may need to provide us with information about yourself, such as name, email address, and other account information.</li>
                  <li>Other Information. Ibex also collects, generates and/or receives Other Information, such as:
                    <ol className="list-decimal pl-8 mt-2 space-y-1">
                      <li>Usage Information: Ibex stores information about your activity on the Services, such as when you access the service, features you use, and how, when and for how long you use them.</li>
                      <li>Device Information: Ibex collects information about the device you are using the Services on, including the type of device, operating system, device settings, application IDs, and unique device identifiers.</li>
                      <li>Geolocation data: User IP addresses and physical locations are recorded to determine the relevant jurisdiction applicable to the use of our Services.</li>
                    </ol>
                  </li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">4. How We Use Information</h2>
                <p>Ibex uses the information we collect in various ways, including to:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Provide, operate, and maintain our Services</li>
                  <li>Improve, personalize, and expand our Services</li>
                  <li>Understand and analyze how you use our Services</li>
                  <li>Develop new products, services, features, and functionality</li>
                  <li>Communicate with you, either directly or through one of our partners, for customer service, to provide you with updates and other information relating to the Services, and for marketing and promotional purposes</li>
                  <li>Process your transactions</li>
                  <li>Send you text messages and push notifications</li>
                  <li>Find and prevent fraud</li>
                  <li>For compliance purposes, including enforcing our Terms of Service, or other legal rights, or as may be required by applicable laws and regulations or requested by any judicial process or governmental agency</li>
                </ul>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">5. How We Share And Disclose Information</h2>
                <p>Ibex will not sell or rent your information to third parties outside Ibex without your consent, except as noted in this Policy. We may share your information with the following types of service providers:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Business Transfers: If we are involved in a merger, acquisition, bankruptcy, reorganization or sale of assets such that your information would be transferred or become subject to a different privacy policy, we'll notify you in advance so you can opt out of any such transfer.</li>
                  <li>Third Party Service Providers and Partners: We engage third party companies or individuals as service providers or business partners to process information and support our business. These third parties may have access to or process your information as part of providing those services for us.</li>
                  <li>Legal Requirements: We may disclose your information if required to do so by law or in the good faith belief that such action is necessary to comply with a legal obligation, protect and defend our rights or property, act in urgent circumstances to protect the personal safety of users of the Services or the public, or protect against legal liability.</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                <p>Depending on the jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Access the personal information we have about you</li>
                  <li>Correct inaccuracies in your personal information</li>
                  <li>Delete your personal information</li>
                  <li>Transfer your personal information to a third party</li>
                  <li>Restrict processing of your personal information</li>
                  <li>Object to our processing of your personal information</li>
                  <li>Withdraw your consent to our processing of your information</li>
                </ul>
                <p className="mt-2">These rights may be limited in some circumstances by local law. To exercise these rights, please contact us at privacy@ibex.ai.</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">7. Data Retention</h2>
                <p>We will retain your information for as long as your account is active or as needed to provide you Services. We will retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">8. Security</h2>
                <p>Ibex takes security of data very seriously. Ibex works hard to protect Other Information and Customer Data you provide from loss, misuse, and unauthorized access or disclosure. These steps take into account the sensitivity of the Other Information and Customer Data we collect, process and store, and the current state of technology.</p>
                <p className="mt-2">To learn more about current practices and policies regarding security and confidentiality of the Services, please contact us at security@ibex.ai.</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our practices, please contact us at:</p>
                <p className="mt-2">Email: privacy@ibex.ai</p>
              </section>
              
              <div className="mt-12 flex flex-col md:flex-row gap-4">
                <Button asChild variant="outline">
                  <Link to="/terms">Terms of Use</Link>
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

export default Privacy;
