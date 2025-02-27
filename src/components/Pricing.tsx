
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { useInView, getAnimationClass } from '@/lib/animations';

// Pricing plan data
const plans = [
  {
    name: "Starter",
    description: "Perfect for small teams or individuals just getting started.",
    price: "$49",
    billing: "per month",
    features: [
      "5 team members",
      "50GB storage",
      "Basic analytics",
      "24/7 support",
      "API access"
    ],
    isPopular: false,
    cta: "Start Free Trial"
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses with more advanced needs.",
    price: "$99",
    billing: "per month",
    features: [
      "20 team members",
      "200GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Custom integrations",
      "Workflow automation"
    ],
    isPopular: true,
    cta: "Start Free Trial"
  },
  {
    name: "Enterprise",
    description: "For large organizations requiring maximum capability and support.",
    price: "$249",
    billing: "per month",
    features: [
      "Unlimited team members",
      "1TB storage",
      "Enterprise analytics",
      "Dedicated account manager",
      "API access",
      "Advanced integrations",
      "Custom workflow automation",
      "SSO authentication",
      "SLA guarantees"
    ],
    isPopular: false,
    cta: "Contact Sales"
  }
];

const Pricing: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");
  
  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="section-spacing"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-block mb-4 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm font-medium text-primary ${getAnimationClass(isInView, 'fade-in')}`}>
            Simple Pricing
          </div>
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${getAnimationClass(isInView, 'fade-up', 100)}`}>
            Plans for every stage of your business
          </h2>
          <p className={`text-lg text-muted-foreground mb-8 ${getAnimationClass(isInView, 'fade-up', 200)}`}>
            Choose the perfect plan to fit your needs. All plans come with a 14-day free trial.
          </p>
          
          {/* Billing Toggle */}
          <div className={`inline-flex items-center border border-border rounded-full p-1 ${getAnimationClass(isInView, 'fade-up', 300)}`}>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly" 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "annual" 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setBillingCycle("annual")}
            >
              Annual
              <span className="ml-1 text-xs font-normal bg-green-100 text-green-800 rounded-full px-2 py-0.5">Save 20%</span>
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`price-card relative rounded-xl shadow-sm border ${
                plan.isPopular ? 'border-primary/30 shadow-md' : 'border-border/40'
              } bg-card p-8 flex flex-col ${getAnimationClass(isInView, 'fade-up', 400 + index * 100)}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-end">
                  <span className="text-4xl font-display font-bold">
                    {billingCycle === "annual" 
                      ? `$${parseInt(plan.price.substring(1)) * 0.8}` 
                      : plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{plan.billing}</span>
                </div>
                {billingCycle === "annual" && (
                  <div className="text-sm text-green-600 mt-1">
                    {`Save $${parseInt(plan.price.substring(1)) * 2.4} yearly`}
                  </div>
                )}
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.isPopular ? "default" : "outline"} 
                className={`w-full ${plan.isPopular ? "" : "border-primary/30 text-primary hover:bg-primary/5"}`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        {/* Enterprise Contact */}
        <div className={`mt-16 text-center max-w-3xl mx-auto ${getAnimationClass(isInView, 'fade-up', 700)}`}>
          <p className="text-muted-foreground">
            Need a custom solution for your specific requirements?{" "}
            <a href="#contact" className="text-primary font-medium underline underline-offset-4 hover:text-primary/80">
              Contact our sales team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
