
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background pt-12 pb-8 border-t border-border/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ibex. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: 'Terms', path: '/terms' },
              { name: 'Privacy', path: '/privacy' },
              { name: 'Cookies', path: '/cookies' }
            ].map((item) => (
              <Link 
                key={item.name} 
                to={item.path} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
