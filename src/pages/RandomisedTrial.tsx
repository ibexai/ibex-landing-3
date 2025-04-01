
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const RandomisedTrial: React.FC = () => {
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
                  Randomised Trial: Ibex vs Optimove
                </h2>
                <div className="mb-6 text-center text-lg">
                  A head-to-head comparison of Ibex and Optimove platforms, with Ibex showing <span className="font-semibold text-primary">23% better retention metrics</span> across all key performance indicators.
                </div>

                {/* The Challenge Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">📊</span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground">
                    A leading European online gaming operator wanted to objectively evaluate the effectiveness of different CRM automation platforms. They were looking to optimize their retention marketing while minimizing costs and operational complexity. The operator needed concrete data to inform their decision on which platform would deliver the best results.
                  </p>
                </section>

                {/* Our Solution Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">🚀</span>
                    The Solution: A Randomised Trial
                  </h3>
                  <p className="text-muted-foreground">
                    We proposed a randomized controlled trial (RCT) comparing Ibex against Optimove, a leading competitor in the market. The operator agreed to split their player base into two equal segments, each managed by one of the platforms for a period of three months.
                  </p>
                </section>

                {/* What We Did Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">🛠️</span>
                    The Methodology
                  </h3>
                  <p className="text-muted-foreground mb-5">
                    The trial was carefully designed to ensure a fair and accurate comparison:
                  </p>
                  <ul className="list-disc pl-6 mb-5 text-muted-foreground">
                    <li>Customer base was randomly divided into two statistically identical groups</li>
                    <li>Both platforms were given the same objectives and KPIs to optimize</li>
                    <li>Each platform was allowed to use its full suite of features and capabilities</li>
                    <li>The operator's team monitored both platforms with equal attention</li>
                    <li>Performance was measured across multiple dimensions: retention rates, player activity, and revenue impact</li>
                  </ul>
                  <p className="text-muted-foreground mb-5">
                    Both Ibex and Optimove were integrated with the operator's systems and given a one-month calibration period before the three-month trial officially began. This ensured both platforms had sufficient data and time to optimize their strategies.
                  </p>
                </section>

                {/* The Results Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">📈</span>
                    The Results: Clear Advantage for Ibex
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    After the three-month trial, the results showed a significant advantage for Ibex across all key performance indicators:
                  </p>
                  
                  {/* Chart Card 1 */}
                  <div className="bg-card/95 border border-border rounded-lg overflow-hidden p-6 mb-8">
                    <h3 className="font-bold text-foreground mb-2">Retention Improvement by Platform</h3>
                    <div className="text-sm text-muted-foreground mb-4">Percentage improvement in retention rates compared to pre-trial baseline</div>
                    
                    <div className="flex flex-col md:flex-row gap-4 mb-8">
                      <div className="flex-1 bg-secondary/20 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-primary mb-2">+23%</div>
                          <div className="text-lg font-semibold mb-1">Ibex</div>
                          <div className="text-sm text-muted-foreground">Average retention improvement</div>
                        </div>
                      </div>
                      <div className="flex-1 bg-secondary/20 p-4 rounded-lg">
                        <div className="text-center">
                          <div className="text-5xl font-bold text-muted-foreground mb-2">+16%</div>
                          <div className="text-lg font-semibold mb-1">Optimove</div>
                          <div className="text-sm text-muted-foreground">Average retention improvement</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-4">
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>30-Day Retention</div>
                          <div className="text-sm">Ibex +24%, Optimove +17%</div>
                        </div>
                        <div className="flex h-4 mb-4">
                          <div className="w-[68%] bg-primary rounded-l-full"></div>
                          <div className="w-[32%] bg-gray-300 rounded-r-full"></div>
                        </div>
                      </div>
                      
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>60-Day Retention</div>
                          <div className="text-sm">Ibex +22%, Optimove +15%</div>
                        </div>
                        <div className="flex h-4 mb-4">
                          <div className="w-[66%] bg-primary rounded-l-full"></div>
                          <div className="w-[34%] bg-gray-300 rounded-r-full"></div>
                        </div>
                      </div>
                      
                      <div className="relative pt-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>90-Day Retention</div>
                          <div className="text-sm">Ibex +25%, Optimove +16%</div>
                        </div>
                        <div className="flex h-4 mb-4">
                          <div className="w-[71%] bg-primary rounded-l-full"></div>
                          <div className="w-[29%] bg-gray-300 rounded-r-full"></div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-muted-foreground mt-4 italic">
                        Note: All measurements normalized against the control period before the trial
                      </div>
                    </div>
                  </div>

                  {/* Additional Results */}
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Key Performance Metrics</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-secondary/40 p-4 rounded-lg">
                      <div className="text-xl font-bold text-primary mb-1">+28%</div>
                      <div className="font-medium mb-1">Player Activity</div>
                      <div className="text-sm text-muted-foreground">Average sessions per player in Ibex group vs. +18% in Optimove group</div>
                    </div>
                    
                    <div className="bg-secondary/40 p-4 rounded-lg">
                      <div className="text-xl font-bold text-primary mb-1">+19%</div>
                      <div className="font-medium mb-1">Deposit Frequency</div>
                      <div className="text-sm text-muted-foreground">Increase in deposit frequency in Ibex group vs. +12% in Optimove group</div>
                    </div>
                    
                    <div className="bg-secondary/40 p-4 rounded-lg">
                      <div className="text-xl font-bold text-primary mb-1">+31%</div>
                      <div className="font-medium mb-1">Customer Lifetime Value</div>
                      <div className="text-sm text-muted-foreground">Projected LTV increase in Ibex group vs. +20% in Optimove group</div>
                    </div>
                    
                    <div className="bg-secondary/40 p-4 rounded-lg">
                      <div className="text-xl font-bold text-primary mb-1">-42%</div>
                      <div className="font-medium mb-1">Implementation Time</div>
                      <div className="text-sm text-muted-foreground">Ibex required 58% of the setup time compared to Optimove</div>
                    </div>
                  </div>
                </section>

                {/* The Impact Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-4 flex items-center text-foreground">
                    <span className="text-2xl mr-2">🎯</span>
                    The Impact: Beyond the Numbers
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex gap-3">
                      <div className="text-primary text-xl">✅</div>
                      <div>
                        <strong>Superior Personalization</strong> – Ibex's AI engine demonstrated more precise targeting, resulting in higher engagement rates and better customer responses.
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex gap-3">
                      <div className="text-primary text-xl">✅</div>
                      <div>
                        <strong>Operational Efficiency</strong> – The operator's team reported that Ibex required <span className="font-semibold text-primary">65% less manual intervention</span> compared to Optimove.
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 flex gap-3">
                      <div className="text-primary text-xl">✅</div>
                      <div>
                        <strong>Faster Time-to-Value</strong> – Ibex campaigns began showing positive results within days rather than weeks, accelerating the ROI timeline.
                      </div>
                    </div>
                  </div>
                </section>

                {/* Conclusion */}
                <div className="bg-secondary/50 p-6 rounded-lg border-l-4 border-primary italic text-muted-foreground">
                  Based on the results of this randomized trial, the operator made the decision to fully migrate to Ibex, citing not only the superior retention metrics but also the reduced operational complexity and faster time-to-value as key factors in their decision.
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

export default RandomisedTrial;
