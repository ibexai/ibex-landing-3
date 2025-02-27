
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useInView, getAnimationClass } from '@/lib/animations';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    id: 'global-finance',
    title: 'Global Finance Corp: 40% Increase in Operational Efficiency',
    industry: 'Financial Services',
    challenge: 'Manual workflows causing delays and errors in transaction processing',
    solution: 'Implemented end-to-end automation with real-time reporting',
    results: ['40% increase in operational efficiency', '90% reduction in processing errors', '$1.2M annual cost savings'],
    image: '/placeholder.svg'
  },
  {
    id: 'healthcare-provider',
    title: 'HealthTech Solutions: Streamlining Patient Care Coordination',
    industry: 'Healthcare',
    challenge: 'Disconnected systems creating barriers to effective patient care',
    solution: 'Unified platform connecting all departments with secure data sharing',
    results: ['65% reduction in administrative time', '32% improvement in patient satisfaction', 'Reduced average wait times by 28%'],
    image: '/placeholder.svg'
  },
  {
    id: 'retail-chain',
    title: 'Retail Chain Transformation: Modernizing Operations Across 200+ Locations',
    industry: 'Retail',
    challenge: 'Outdated inventory and POS systems causing stock issues and lost sales',
    solution: 'Cloud-based integration of inventory, sales, and customer data',
    results: ['22% increase in sales', '18% reduction in inventory costs', 'Real-time visibility across all locations'],
    image: '/placeholder.svg'
  },
  {
    id: 'manufacturing-company',
    title: 'Manufacturing Excellence: Optimizing Production for Global Manufacturer',
    industry: 'Manufacturing',
    challenge: 'Inefficient production scheduling leading to delays and excess costs',
    solution: 'AI-powered production optimization with predictive maintenance',
    results: ['35% decrease in production downtime', '20% reduction in maintenance costs', 'Improved on-time delivery by 47%'],
    image: '/placeholder.svg'
  }
];

const CaseStudies: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-muted-foreground">
                Discover how businesses across industries have transformed their operations with Ibex.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section ref={sectionRef} className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {caseStudies.map((study, index) => (
                <div 
                  key={study.id}
                  className={`feature-card bg-card rounded-xl overflow-hidden shadow-md border border-border/20 ${getAnimationClass(isInView, 'fade-up', index * 100)}`}
                >
                  <div className="aspect-w-16 aspect-h-9 bg-muted/20">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      <Link to={`/case-studies/${study.id}`} className="hover:text-primary transition-colors">
                        {study.title}
                      </Link>
                    </h3>
                    
                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Challenge:</h4>
                        <p className="text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Solution:</h4>
                        <p className="text-sm">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-muted-foreground">Results:</h4>
                        <ul className="text-sm list-disc pl-5 space-y-1">
                          {study.results.map((result, i) => (
                            <li key={i}>{result}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Link to={`/case-studies/${study.id}`} className="text-sm font-medium text-primary hover:underline inline-flex items-center">
                      Read Full Case Study
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join these success stories and discover how Ibex can help your organization achieve similar results.
              </p>
              <Link to="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
