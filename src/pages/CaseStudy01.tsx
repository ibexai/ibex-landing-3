
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CaseStudy01: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background elements */}
      <div className="app-background"></div>
      <div className="glow-overlay"></div>
      
      <Header />
      <main className="pt-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="my-6">
            <Link 
              to="/case-studies" 
              className="text-primary hover:underline inline-flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="case-study-card rounded-lg overflow-hidden bg-card/95 border border-border shadow-lg mb-12">
              <div className="p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center text-foreground">
                  Real-Time Automation: Scaling Without Limits
                </h2>
                <div className="mb-6 text-center text-lg">
                  Automating player bonusing and communications to support <span className="font-semibold text-primary">30% month-over-month average player growth</span>—without added operational strain.
                </div>

                {/* The Challenge Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">📊</span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground">
                    A fast-growing gaming operator faced mounting challenges with scalability and rising operational costs due to manual player bonusing. To manage growing demand, they outsourced a large team to process bonuses manually—an approach that was costly, inefficient, and unsustainable. Without an automated system, they struggled to keep up, risking player churn and operational bottlenecks.
                  </p>
                </section>

                {/* Our Solution Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">🚀</span>
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground">
                    By implementing Ibex's Real-Time System, we fully automated their player bonusing and welcome journey communications, eliminating manual intervention and enabling seamless scaling.
                  </p>
                </section>

                {/* What We Did Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">🛠️</span>
                    What We Did
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    During onboarding, we first identified where Ibex could provide the most impact:
                  </p>
                  <ul className="list-disc pl-6 mb-5 text-muted-foreground">
                    <li>Were retention rates dropping?</li>
                    <li>Was ineffective marketing a concern?</li>
                    <li>Were scalability issues limiting growth?</li>
                  </ul>
                  <p className="text-muted-foreground mb-5">
                    It quickly became clear that real-time automation was the ideal solution. Activating Ibex instantly streamlined their operations, enabling a smooth transition from manual processes to fully automated Real-Time Marketing Campaigns.
                  </p>
                  <h4 className="text-lg font-semibold mb-4 text-foreground">Key Implementations</h4>
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex gap-3">
                      <div className="text-primary text-xl">✅</div>
                      <div>
                        <strong>Instant Welcome Bonus</strong> – Customers received a welcome bonus within seconds of registration, along with automated communications (all handled by Ibex).
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex gap-3">
                      <div className="text-primary text-xl">✅</div>
                      <div>
                        <strong>Engagement-Driven Secondary Bonus</strong> – Players could redeem a secondary bonus as soon as they met initial deposit requirements, encouraging further activity.
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mt-5">
                    With automated, real-time player interactions, the client experienced a significant boost in onbaording engagement and retention.
                  </p>
                </section>

                {/* The Results Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">📈</span>
                    The Results: Exponential Growth Without Bottlenecks
                  </h3>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Player Base Growth</h4>
                  <p className="text-muted-foreground mb-6">
                    As the Cumulative Registrations chart illustrates, the client was experiencing rapid player growth, with the base doubling every 2-3 months. Without automation, their manual processes would have quickly become unmanageable. Ibex enabled them to scale without additional operational strain, ensuring a seamless player experience even as numbers surged.
                  </p>
                  
                  {/* Chart Card 1 */}
                  <div className="bg-card/95 border border-border rounded-lg overflow-hidden p-6 mb-8">
                    <h3 className="font-bold text-foreground mb-2">Cumulative Registrations</h3>
                    <div className="text-sm text-muted-foreground mb-4">Figures normalized from a base of 1,000 in April 2023</div>
                    <div className="h-[300px] w-full">
                      <img 
                        src="/lovable-uploads/3b77f73e-046e-4192-8154-4b6ac8915a65.png" 
                        alt="Cumulative Registrations Chart" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-400 rounded mr-2"></div>
                        <span className="text-sm">Before</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary rounded mr-2"></div>
                        <span className="text-sm">After</span>
                      </div>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-3 text-foreground">Performance Impact</h4>
                  <p className="text-muted-foreground mb-5">
                    Prior to Ibex's implementation, the client's First-Time Deposit (FTD) conversion rate was inconsistent, often hindered by delays in bonus processing and manual inefficiencies. After deploying our real-time automation:
                  </p>
                  <ul className="list-none space-y-2 mb-5">
                    <li className="flex gap-2">
                      <span>📈</span>
                      <span>FTD conversion rates increased by <span className="font-semibold text-primary">9 percentage points</span>.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>📈</span>
                      <span>Players received bonuses instantly, reducing drop-offs and increasing engagement.</span>
                    </li>
                    <li className="flex gap-2">
                      <span>📈</span>
                      <span>Consistent, automated messaging reinforced deposit incentives, driving sustained improvements in conversion rates.</span>
                    </li>
                  </ul>
                  <p className="text-muted-foreground mb-6">
                    The FTD Conversion Rate chart showcases a clear improvement post-Ibex implementation, with stable and higher conversion rates compared to pre-automation figures.
                  </p>
                  
                  {/* Stats Card */}
                  <div className="bg-secondary p-4 rounded-lg mb-6">
                    <div className="flex flex-wrap gap-4">
                      <div className="flex-1 min-w-[160px]">
                        <div className="text-sm text-muted-foreground mb-1">Before Automation Avg:</div>
                        <div className="text-lg font-semibold">28%</div>
                      </div>
                      <div className="flex-1 min-w-[160px]">
                        <div className="text-sm text-muted-foreground mb-1">After Automation Avg:</div>
                        <div className="text-lg font-semibold text-primary">37%</div>
                      </div>
                      <div className="flex-1 min-w-[160px]">
                        <div className="text-sm text-muted-foreground mb-1">Improvement:</div>
                        <div className="text-lg font-semibold text-primary">+9 percentage points</div>
                      </div>
                    </div>
                  </div>

                  {/* Chart Card 2 */}
                  <div className="bg-card/95 border border-border rounded-lg overflow-hidden p-6 mb-8">
                    <h3 className="font-bold text-foreground mb-2">FTD Conversion Rate</h3>
                    <div className="text-sm text-muted-foreground mb-4">April 2023 - March 2025</div>
                    <div className="h-[450px] w-full">
                      <img 
                        src="/lovable-uploads/258ea354-ade6-48f4-855f-e13a8139bd02.png" 
                        alt="FTD Conversion Rate Chart" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-400 rounded mr-2"></div>
                        <span className="text-sm">Before Automation</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-primary rounded mr-2"></div>
                        <span className="text-sm">After Automation</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* The Impact Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">🎯</span>
                    The Impact
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex gap-3">
                      <div className="text-primary text-xl">✅</div>
                      <div>
                        <strong>Scalability</strong> – Seamlessly managed a <span className="font-semibold text-primary">30% month-over-month</span> increase in players without additional resources.
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex gap-3">
                      <div className="text-primary text-xl">✅</div>
                      <div>
                        <strong>Efficiency</strong> – Achieved a <span className="font-semibold text-primary">9 p.p.</span> increase in FTD conversions, reducing manual workloads and enhancing performance.
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex gap-3">
                      <div className="text-primary text-xl">✅</div>
                      <div>
                        <strong>Improved Marketing</strong> – Freed up teams to focus on creative campaigns instead of administrative tasks.
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-primary italic text-muted-foreground">
                  This success highlights just one aspect of Ibex's product suite. With AI-driven recommendations and CRM optimization features, the client is now expanding their retention efforts to include payday initiatives and other AI-driven strategies.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudy01;
