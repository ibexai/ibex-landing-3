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
              <p className="text-muted-foreground">Last updated: March 10, 2025</p>
              
              <section className="mt-8">
                <p>This policy sets out the data that Ibex collects about you and how it is used. Ibex does not publish, sell or trade your personal information, and none of this information will be provided to third parties unless otherwise specified.</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Who we are</h2>
                <p>As used in this Privacy Policy, "Ibex," "us" and "we" refer to Ibex.ai Ltd and its affiliates. The "Website", "Site" or "Portal" mean Ibex.ai websites (including, without limitation, www.ibex.ai, and any successor URLs, mobile or localized versions, and related domains and subdomains).</p>
                <p className="mt-2">At Ibex, we value your privacy and committed to preserving it. We aim to be as transparent as possible with how we collect and process your data and personal information. We will never sell your personal data and we carry out all processing operations in strict compliance with the EU General Protection Regulation ("GDPR").</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Why we use your personal data</h2>
                <p>We process your personal data for our legitimate interests as a business, but only if necessary for the purpose for which we collected it. We may use your data:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>To analyse trends, administer or optimise the Website, monitor usage or traffic patterns (including to track visitors movements around the website) and gather demographic information about our user base as a whole</li>
                  <li>To communicate directly with you, including by sending you newsletters, promotions and special offers or information about new products and services</li>
                  <li>To deliver you advertising, including by serving and managing ads on third-party sites, and to tailor ads based on your interests and browsing history</li>
                  <li>For the purposes described to you at the time of collection or as otherwise described in this Privacy Policy</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">How we collect data</h2>
                <p>We collect information from the following sources when you contact us or visit our website:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>From forms submitted by visitors (to request further information, download a resources, etc.)</li>
                  <li>Via verbal and written communications: When you send us an email, call or write a letter, or if we meet you face to face</li>
                  <li>Via third parties: We sometimes receive personal data from third parties</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">The data we use</h2>
                <p>We use several different categories of data about you:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>Contact details</li>
                  <li>Emails and records of verbal conversations</li>
                  <li>Activity on our website and social media channels</li>
                  <li>Employment information (job title, responsibilities, position within the organisation etc.)</li>
                  <li>Your status relating to our organisation, such as communication preferences and records of marketing activity that has been sent to you</li>
                  <li>Information telling us where we obtained your data</li>
                </ul>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Marketing content and email subscriptions</h2>
                <p>You may opt-in to receive communications from us about subjects that we believe may be of interest to you, as well as news or offers from us or third parties, which may include our newsletter or information about special offers, products or offerings, or other items. The communications maybe via email, SMS, telephone or social media.</p>
                <p className="mt-2">The topic and frequency of our communications may change and if, at any time, you would like to stop receiving marketing communications from us, you may follow the opt-out instructions contained in any such communication. Alternatively, you can email us and request to opt-out at support@ibex.ai. If you opt-out of receiving marketing communications from us, we may still send you information about content you've downloaded or any services you have requested or received from us, or for other customer service purposes.</p>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Retention/Deletion Policy</h2>
                <p>Use of Ibex system requires the provision of customer data ("Customer Data") by our clients.</p>
                <p className="mt-2">All customer data shall be retained until the earlier of:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>client request for customer data deletion; or</li>
                  <li>termination of the agreement between Ibex and the client</li>
                </ul>
              </section>

              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Contact us</h2>
                <p>If you have any questions about this Privacy Policy or our site in general, please contact us at support@ibex.ai</p>
                <p className="mt-2">Written inquiries may be sent to:</p>
                <p className="mt-2">
                  Ibex.ai<br />
                  2nd Floor Malta House<br />
                  36-38 Piccadilly<br />
                  London, W1J 0DP
                </p>
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
