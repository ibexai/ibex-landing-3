
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Top */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo & Info */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="text-xl font-display font-semibold text-foreground tracking-tight inline-block mb-4">
              SaasFlow
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Streamline your business operations and unlock growth potential with our comprehensive SaaS platform.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {['twitter', 'facebook', 'linkedin', 'github'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Integrations', 'Changelog', 'Documentation'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {['About', 'Customers', 'Careers', 'Press', 'Partners'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {['Blog', 'Newsletter', 'Events', 'Help Center', 'Tutorials'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} SaasFlow. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {['Terms', 'Privacy', 'Cookies', 'License', 'Sitemap'].map((item) => (
              <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
