
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 md:px-6 py-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">Cookie Policy</h1>
            
            <div className="prose prose-lg prose-invert">
              <p className="text-muted-foreground">Last updated: April 15, 2023</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. What Are Cookies</h2>
              <p>Cookies are small pieces of data stored on your device (computer or mobile device) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Cookies</h2>
              <p>We use cookies for a variety of reasons detailed below:</p>
              <ul className="list-disc pl-8 mt-4 mb-4">
                <li>Essential Cookies: These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.</li>
                <li>Analytics Cookies: These help us to understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                <li>Functionality Cookies: These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
                <li>Targeting Cookies: These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Your Choices Regarding Cookies</h2>
              <p>If you prefer to restrict, block, or delete cookies from our website, you can use your browser to do this. Each browser is different, so check the 'Help' menu of your particular browser to learn how to change your cookie preferences.</p>
              <p>Please be aware that restricting cookies may impact the functionality of our website. You can learn more about cookies at <a href="https://www.allaboutcookies.org" className="text-primary hover:underline">All About Cookies</a>.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Changes to This Policy</h2>
              <p>We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
              <p>If you have any questions about our Cookie Policy, please contact us at privacy@ibex.com.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cookies;
