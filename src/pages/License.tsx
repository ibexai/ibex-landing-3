
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const License: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 md:px-6 py-32">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">License Agreement</h1>
            
            <div className="prose prose-lg prose-invert">
              <p className="text-muted-foreground">Last updated: April 15, 2023</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Grant of License</h2>
              <p>Subject to the terms of this Agreement, Ibex grants you a limited, non-exclusive, non-transferable license to access and use our software and services for your internal business purposes.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Restrictions</h2>
              <p>You may not:</p>
              <ul className="list-disc pl-8 mt-4 mb-4">
                <li>Copy, modify, or create derivative works of the software or documentation.</li>
                <li>Reverse engineer, disassemble, or decompile the software or attempt to discover the source code.</li>
                <li>Sublicense, rent, lease, or transfer the software or your rights under this Agreement.</li>
                <li>Remove or alter any proprietary notices or labels on the software.</li>
                <li>Use the software in any manner that violates applicable law.</li>
                <li>Access the software to build a competing product or service.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Ownership</h2>
              <p>Ibex retains all right, title, and interest in and to the software, including all intellectual property rights. You acknowledge that you acquire no ownership rights in the software.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Term and Termination</h2>
              <p>This Agreement continues until terminated. Ibex may terminate this Agreement immediately if you breach any material term. Upon termination, you must cease all use of the software and destroy all copies.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Warranty Disclaimer</h2>
              <p>THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. IBEX DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
              <p>IN NO EVENT WILL IBEX BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING OUT OF OR RELATED TO THIS AGREEMENT OR THE SOFTWARE.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. General</h2>
              <p>This Agreement constitutes the entire agreement between you and Ibex regarding the software and supersedes all prior agreements and understandings, whether written or oral.</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
              <p>If you have any questions about this License Agreement, please contact us at legal@ibex.com.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default License;
