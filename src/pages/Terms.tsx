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
              <p className="text-muted-foreground">Last updated: March 10, 2025</p>
              
              <section className="mt-8">
                <p>Ibex.ai Ltd, (hereinafter, "Ibex"), authorizes you to view, copy and print the materials at this website (hereinafter, the "Site") subject to the following terms and conditions:</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Use of Site</h2>
                <p>Except as expressly stated herein, you are authorized to view copy, and print the content of this Site subject to the following conditions:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>it is used only for your personal, informational, non-commercial purposes, you may not modify the materials at this site in any way or reproduce or publicly display, perform or distribute or otherwise use them for any public commercial purpose. Any use of this material on any other website for any purpose is prohibited</li>
                  <li>any copy or portion must include the Ibex copyright and other proprietary notices</li>
                  <li>no modifications or reproductions are made; and</li>
                  <li>Ibex reserves the right to revoke such authorization at any time.</li>
                </ul>
                <p className="mt-2">The materials at this Site are copyrighted and any unauthorized use of any materials at this Site may violate copyright, trademark, and other laws. If you breach any of these Terms, your authorization to use this Site automatically terminates and you must immediately destroy any copied or printed materials.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
                <p>All information (hereinafter, the "Information") posted on this Site is subject to change without notice. Ibex may make changes to the materials, products and services (hereinafter, the "Products") available at this Site, or to the prices described herein, at any time without notice. Our Site may contain references to Products that have not been announced in your country and Ibex retains the right to announce or make available such Products at its sole discretion. Please consult Ibex for information regarding the Products that may be available to you. Some of the Information on this Site may contain projections or other forward-looking statements regarding future events. We wish to caution you that these statements are only predictions and that actual events or results may differ materially.</p>
                <p className="mt-2">Information, services and other material available through this Site are furnished "As Is" and "As Available" without any warranty whatsoever. Although Ibex has attempted to provide accurate Information on this Site, Ibex assumes no responsibility for the accuracy and completeness of the Information, Products or other material at this Site. All other warranties, express or implied, including any warranties of merchantability, fitness for any particular purpose, or non-infringement of intellectual property are specifically excluded and disclaimed. Ibex does not warrant that the Products will meet user's requirements, and that the operation of the services will be uninterrupted or error free, or that the Site or the server that makes it available are free of viruses or bugs.</p>
                <p className="mt-2">Ibex's obligations with respect to its products and services are governed solely by the agreements under which they are provided and nothing on this Site should be construed to alter such agreements. The materials and services at this Site may be out of date, and Ibex makes no commitment to update the materials and services at this Site.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                <p>In no event will Ibex, its suppliers, or other third parties mentioned at this Site be liable for any damages whatsoever (including, without limitation, those resulting from lost profits, lost savings, lost data, business interruption or other special, consequential or incidental damages) arising out of or relating to the use, inability to use, or the results of use of this Site, any websites linked to this site, or any materials, information, product or service contained at any or all such sites, whether based on warranty, contract, tort or any other legal theory and whether or not Ibex has been advised of the possibility of such loss or damages. If your use of the materials, Information or services from this Site results in the need for servicing, repair of correction of equipment or data, you assume all costs thereof.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
                <p>Ibex is committed to preserving your privacy. Read more on our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> page.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
                <p>All Intellectual Property referenced on the Site, including patents, copyrights, logos, trademarks and trade secrets are legally owned by Ibex or third parties. These rights apply to the Information, computer code of the web site, graphical design, products, company names, etc. All contents of this Site are protected by copyright and trademark rights, except as specifically permitted herein.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Links to Third-Party Websites</h2>
                <p>Links on this Site to third-party websites are provided solely as a convenience to you. If you use these links, you will leave this Site. Ibex has not reviewed all of these third-party sites and does not control and is not responsible for any of these sites or their content. Thus, Ibex does not endorse or make any representations about them, or any information, software or other products or materials found there, or any results that may be obtained from using them. If you decide to access any of the third-party websites linked to this Site, you do this entirely at your own risk.</p>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Linking to this site</h2>
                <p>You may create links to this Site from other sites, but only in accordance with the terms herein and in compliance with all applicable laws:</p>
                <ul className="list-disc pl-8 mt-2 space-y-1">
                  <li>The other site does not content that could be construed as distasteful, offensive or controversial, and contains only content that is appropriate for all age groups</li>
                  <li>May link to but not replicate Ibex content</li>
                  <li>Should not create a browser or border environment around Ibex content</li>
                  <li>Should not imply that Ibex is endorsing it or its products</li>
                  <li>Should not misrepresent its relationship with Ibex</li>
                  <li>Should not present false information about Ibex products or services</li>
                  <li>Should not use the Ibex logo or marks without permission from Ibex</li>
                </ul>
              </section>
              
              <section className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">General</h2>
                <p>Ibex may revise these Terms at any time by updating this posting. You should visit this page from time to time to review the then-current Terms because they are binding on you. Certain provisions of these Terms may be superseded by expressly designated legal notices or terms located on particular pages at this Site.</p>
                <p className="mt-2">If any term or provision of this Legal Notice is for any reason held to be invalid, such invalidity shall not affect any other term or provision, and this Legal Notice shall be interpreted as if such term or provision had never been contained in this Legal Notice.</p>
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
