
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-background/95 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/3b77f73e-046e-4192-8154-4b6ac8915a65.png" 
              alt="Ibex Logo" 
              className="h-8 md:h-10" 
            />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {[
            { name: 'How it works', path: '/how-it-works' },
            { name: 'Features', path: '/features' },
            { name: 'Case Studies', path: '/case-studies' },
            // { name: 'Blog', path: '/blog' }
          ].map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className="text-sm font-medium text-foreground/80 hover:text-foreground btn-transition"
            >
              {item.name}
            </Link>
          ))}
          <Button variant="default" size="sm" className="ml-2 px-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => {
            window.location.href = '/contact';
          }}>
            Get in Touch
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-md animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {[
              { name: 'How it works', path: '/how-it-works' },
              { name: 'Features', path: '/features' },
              { name: 'Case Studies', path: '/case-studies' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' }
            ].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-lg font-medium text-foreground/80 hover:text-foreground btn-transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button 
              variant="default" 
              size="default" 
              className="mt-4 w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '/contact';
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
