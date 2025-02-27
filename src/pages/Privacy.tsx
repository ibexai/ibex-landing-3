
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 md:px-6 py-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg prose-invert">
              <p className="text-muted-foreground">Last updated: April 15, 2023</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>Ibex ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
              <ul className="list-disc pl-8 mt-4 mb-4">
                <li>Personal Data: Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you register with us or when you choose to participate in various activities related to our services.</li>
                <li>Derivative Data: Information our servers automatically collect when you access our services, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing our services.</li>
                <li>Financial Data: Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase our services.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Use of Your Information</h2>
              <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you to:</p>
              <ul className="list-disc pl-8 mt-4 mb-4">
                <li>Create and manage your account.</li>
                <li>Process your transactions.</li>
                <li>Send you administrative information, such as updates, security alerts, and support messages.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Deliver targeted advertising, newsletters, and other information regarding promotions and our website to you.</li>
                <li>Monitor and analyze usage and trends to improve your experience with our services.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Disclosure of Your Information</h2>
              <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
              <ul className="list-disc pl-8 mt-4 mb-4">
                <li>By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                <li>Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                <li>Marketing Communications: With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes.</li>
                <li>Interactions with Other Users: If you interact with other users of our website, those users may see your name, profile photo, and descriptions of your activity.</li>
                <li>Online Postings: When you post comments, contributions, or other content to our website, your posts may be viewed by all users and may be publicly distributed outside the website in perpetuity.</li>
                <li>Business Transfers: If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Contact Us</h2>
              <p>If you have questions or comments about this Privacy Policy, please contact us at privacy@ibex.com.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
