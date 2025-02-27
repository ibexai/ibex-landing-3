
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Sitemap: React.FC = () => {
  const sitestructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', path: '/' },
        { name: 'How it works', path: '/how-it-works' },
        { name: 'Features', path: '/features' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
      ]
    },
    {
      title: 'Legal Pages',
      links: [
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'License Agreement', path: '/license' }
      ]
    },
    {
      title: 'Blog Categories',
      links: [
        { name: 'Productivity', path: '/blog/category/productivity' },
        { name: 'Technology', path: '/blog/category/technology' },
        { name: 'Workplace', path: '/blog/category/workplace' },
        { name: 'Security', path: '/blog/category/security' },
        { name: 'Strategy', path: '/blog/category/strategy' },
        { name: 'Customer Success', path: '/blog/category/customer-success' }
      ]
    },
    {
      title: 'Case Study Industries',
      links: [
        { name: 'Financial Services', path: '/case-studies/industry/financial-services' },
        { name: 'Healthcare', path: '/case-studies/industry/healthcare' },
        { name: 'Retail', path: '/case-studies/industry/retail' },
        { name: 'Manufacturing', path: '/case-studies/industry/manufacturing' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 md:px-6 py-32">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-display font-bold mb-8">Sitemap</h1>
            
            <div className="grid md:grid-cols-2 gap-8">
              {sitestructure.map((section, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border/20">
                  <h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link to={link.path} className="text-muted-foreground hover:text-primary transition-colors">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground">
                Can't find what you're looking for? 
                <Link to="/contact" className="text-primary hover:underline ml-1">
                  Contact us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sitemap;
