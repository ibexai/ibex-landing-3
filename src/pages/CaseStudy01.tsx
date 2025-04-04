import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CaseStudy01: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background elements */}
      <div className="light-rays"></div>
      <div className="sunburst-effect"></div>
      <div className="app-background"></div>
      <div className="glow-overlay"></div>
      <div className="backup-pattern"></div>
      
      <Header />
      <main className="pt-24 relative z-10">
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
                {/* Title Section */}
                <div className="text-center mb-12 pb-6 border-b border-border/30">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center text-foreground">
                    Real-Time Automation: Scaling Without Limits
                  </h2>
                  <div className="flex justify-center gap-2 my-4">
                    <span className="block h-1 w-10 bg-primary rounded-full"></span>
                    <span className="block h-1 w-20 bg-secondary rounded-full"></span>
                    <span className="block h-1 w-10 bg-primary rounded-full"></span>
                  </div>
                  <p className="text-xl font-medium text-muted-foreground mt-4">
                    Automating player bonusing and communications to support <span className="font-semibold text-primary">30% month-over-month average player growth</span>—without added operational strain.
                  </p>
                </div>

                {/* The Challenge Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
                    <span className="text-2xl mr-2">📊</span>
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground">
                    A fast-growing gaming operator faced mounting challenges with scalability and rising operational costs due to manual player bonusing. To manage growing demand, they outsourced a large team to process bonuses manually—an approach that was costly, inefficient, and unsustainable. Without an automated system, they struggled to keep up, risking player churn and operational bottlenecks.
                  </p>
                </section>

                {/* Our Solution Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
                    <span className="text-2xl mr-2">🚀</span>
                    Our Solution
                  </h3>
                  <p className="text-muted-foreground">
                    By implementing Ibex's Real-Time System, we fully automated their player bonusing and welcome journey communications, eliminating manual intervention and enabling seamless scaling.
                  </p>
                </section>

                {/* What We Did Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
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
                    With automated, real-time player interactions, the client experienced a significant boost in onboarding engagement and retention.
                  </p>
                </section>

                {/* The Results Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
                    <span className="text-2xl mr-2">📈</span>
                    The Results: Exponential Growth Without Bottlenecks
                  </h3>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">Player Base Growth</h4>
                  <p className="text-muted-foreground mb-6">
                    As the Cumulative Registrations chart illustrates, the client was experiencing rapid player growth, with the base doubling every 2-3 months. Without automation, their manual processes would have quickly become unmanageable. Ibex enabled them to scale without additional operational strain, ensuring a seamless player experience even as numbers surged.
                  </p>
                  
                  {/* Chart Card 1 */}
                  <div className="bg-card/80 border border-border/30 rounded-lg overflow-hidden p-6 mb-8">
                    <h3 className="font-bold text-foreground mb-2">Cumulative Registrations</h3>
                    <div className="text-sm text-muted-foreground mb-4">Figures normalized from a base of 1,000 in April 2023</div>
                    <div className="h-[300px] w-full">
                      <svg className="chart-svg" viewBox="0 0 550 270" xmlns="http://www.w3.org/2000/svg">
                        {/* Grid lines */}
                        <line x1="50" y1="200" x2="500" y2="200" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="50" y1="150" x2="500" y2="150" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="50" y1="100" x2="500" y2="100" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="50" y1="50" x2="500" y2="50" stroke="#E5E7EB" strokeWidth="1" />
                        
                        {/* Y-axis labels */}
                        <text x="40" y="200" textAnchor="end" fontSize="14" fill="#6B7280">0k</text>
                        <text x="40" y="150" textAnchor="end" fontSize="14" fill="#6B7280">50k</text>
                        <text x="40" y="100" textAnchor="end" fontSize="14" fill="#6B7280">100k</text>
                        <text x="40" y="50" textAnchor="end" fontSize="14" fill="#6B7280">150k</text>
                        <text x="40" y="0" textAnchor="end" fontSize="14" fill="#6B7280">200k</text>
                        
                        {/* X-axis labels */}
                        <text x="50" y="220" textAnchor="middle" fontSize="14" fill="#6B7280">Apr '23</text>
                        <text x="125" y="220" textAnchor="middle" fontSize="14" fill="#6B7280">Aug '23</text>
                        <text x="200" y="220" textAnchor="middle" fontSize="14" fill="#6B7280">Dec '23</text>
                        <text x="275" y="220" textAnchor="middle" fontSize="14" fill="#6B7280">Apr '24</text>
                        <text x="350" y="220" textAnchor="middle" fontSize="14" fill="#6B7280">Aug '24</text>
                        <text x="425" y="220" textAnchor="middle" fontSize="14" fill="#6B7280">Dec '24</text>
                        <text x="481.25" y="220" textAnchor="middle" fontSize="14" fill="#6B7280">Mar '25</text>
                        
                        {/* Vertical automation reference line */}
                        <line x1="200" y1="0" x2="200" y2="200" stroke="#10B981" strokeWidth="2" strokeDasharray="4" />
                        <rect x="155" y="10" width="90" height="22" fill="#f1f5f9" rx="3" />
                        <text x="200" y="25" textAnchor="middle" fontSize="14" fill="#10B981" fontWeight="600">Automation Point</text>
                        
                        {/* Before automation line */}
                        <polyline 
                          points="50,199 68.75,196.588 87.5,194.281 106.25,191.955 125,189.352 143.75,185.301 162.5,180.273 181.25,174.196 200,167.694" 
                          fill="none" 
                          stroke="#9CA3AF" 
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* After automation line */}
                        <polyline 
                          points="200,167.694 218.75,160.399 237.5,153.385 256.25,145.636 275,135.863 293.75,124.652 312.5,112.899 331.25,102.824 350,91.123 368.75,79.465 387.5,66.849 406.25,57.593 425,51.928 443.75,45.773 462.5,39.602 481.25,37.363" 
                          fill="none" 
                          stroke="#10B981" 
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Automation point marker */}
                        <circle cx="200" cy="167.694" r="6" fill="#10B981" />
                      </svg>
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
                  <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20 mb-6">
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
                  <div className="bg-card/80 border border-border/30 rounded-lg overflow-hidden p-6 mb-8">
                    <h3 className="font-bold text-foreground mb-2">FTD Conversion Rate</h3>
                    <div className="text-sm text-muted-foreground mb-4">April 2023 - March 2025</div>
                    <div className="h-[300px] w-full">
                      <svg className="chart-svg" viewBox="0 0 850 300" preserveAspectRatio="xMidYMid meet">
                        {/* Grid lines */}
                        <line x1="60" y1="275" x2="800" y2="275" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="60" y1="206" x2="800" y2="206" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="60" y1="137" x2="800" y2="137" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="60" y1="68" x2="800" y2="68" stroke="#E5E7EB" strokeWidth="1" />
                        <line x1="60" y1="0" x2="800" y2="0" stroke="#E5E7EB" strokeWidth="1" />
                        
                        {/* Y-axis labels */}
                        <text x="45" y="280" textAnchor="end" fontSize="14" fill="#6B7280">0%</text>
                        <text x="45" y="211" textAnchor="end" fontSize="14" fill="#6B7280">15%</text>
                        <text x="45" y="142" textAnchor="end" fontSize="14" fill="#6B7280">30%</text>
                        <text x="45" y="73" textAnchor="end" fontSize="14" fill="#6B7280">45%</text>
                        <text x="45" y="10" textAnchor="end" fontSize="14" fill="#6B7280">60%</text>
                        
                        {/* X-axis labels */}
                        <line x1="60" y1="275" x2="60" y2="280" stroke="#E5E7EB" strokeWidth="1" />
                        <text x="60" y="294" textAnchor="middle" fontSize="14" fill="#6B7280">Apr 23</text>
                        
                        <line x1="180" y1="275" x2="180" y2="280" stroke="#E5E7EB" strokeWidth="1" />
                        <text x="180" y="294" textAnchor="middle" fontSize="14" fill="#6B7280">Aug 23</text>
                        
                        <line x1="300" y1="275" x2="300" y2="280" stroke="#E5E7EB" strokeWidth="1" />
                        <text x="300" y="294" textAnchor="middle" fontSize="14" fill="#6B7280" fontWeight="bold">Dec 23</text>
                        
                        <line x1="420" y1="275" x2="420" y2="280" stroke="#E5E7EB" strokeWidth="1" />
                        <text x="420" y="294" textAnchor="middle" fontSize="14" fill="#6B7280">Apr 24</text>
                        
                        <line x1="540" y1="275" x2="540" y2="280" stroke="#E5E7EB" strokeWidth="1" />
                        <text x="540" y="294" textAnchor="middle" fontSize="14" fill="#6B7280">Aug 24</text>
                        
                        <line x1="660" y1="275" x2="660" y2="280" stroke="#E5E7EB" strokeWidth="1" />
                        <text x="660" y="294" textAnchor="middle" fontSize="14" fill="#6B7280">Dec 24</text>
                        
                        <line x1="780" y1="275" x2="780" y2="280" stroke="#E5E7EB" strokeWidth="1" />
                        <text x="780" y="294" textAnchor="middle" fontSize="14" fill="#6B7280">Mar 25</text>
                        
                        {/* Vertical automation reference line */}
                        <line x1="300" y1="0" x2="300" y2="275" stroke="#10B981" strokeWidth="2" strokeDasharray="4" />
                        <rect x="255" y="10" width="90" height="22" fill="#f1f5f9" rx="3" />
                        <text x="300" y="25" textAnchor="middle" fontSize="14" fill="#10B981" fontWeight="600">Automation Point</text>
                        
                        {/* Line before automation */}
                        <polyline 
                          points="60,228 90,228 120,180 150,134 180,166 210,162 240,158 270,134 300,126" 
                          fill="none" 
                          stroke="#9CA3AF" 
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Line after automation */}
                        <polyline 
                          points="300,126 330,134 360,134 390,106 420,111 450,116 480,130 510,126 540,130 570,130 600,130 630,111 660,69 690,96 720,96 750,88" 
                          fill="none" 
                          stroke="#10B981" 
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        
                        {/* Data points */}
                        <circle cx="60" cy="228" r="4" fill="#9CA3AF" />
                        <circle cx="90" cy="228" r="4" fill="#9CA3AF" />
                        <circle cx="120" cy="180" r="4" fill="#9CA3AF" />
                        <circle cx="150" cy="134" r="4" fill="#9CA3AF" />
                        <circle cx="180" cy="166" r="4" fill="#9CA3AF" />
                        <circle cx="210" cy="162" r="4" fill="#9CA3AF" />
                        <circle cx="240" cy="158" r="4" fill="#9CA3AF" />
                        <circle cx="270" cy="134" r="4" fill="#9CA3AF" />
                        <circle cx="300" cy="126" r="6" fill="#10B981" />
                        
                        <circle cx="330" cy="134" r="4" fill="#10B981" />
                        <circle cx="360" cy="134" r="4" fill="#10B981" />
                        <circle cx="390" cy="106" r="4" fill="#10B981" />
                        <circle cx="420" cy="111" r="4" fill="#10B981" />
                        <circle cx="450" cy="116" r="4" fill="#10B981" />
                        <circle cx="480" cy="130" r="4" fill="#10B981" />
                        <circle cx="510" cy="126" r="4" fill="#10B981" />
                        <circle cx="540" cy="130" r="4" fill="#10B981" />
                        <circle cx="570" cy="130" r="4" fill="#10B981" />
                        <circle cx="600" cy="130" r="4" fill="#10B981" />
                        <circle cx="630" cy="111" r="4" fill="#10B981" />
                        <circle cx="660" cy="69" r="4" fill="#10B981" />
                        <circle cx="690" cy="96" r="4" fill="#10B981" />
                        <circle cx="720" cy="96" r="4" fill="#10B981" />
                        <circle cx="750" cy="88" r="4" fill="#10B981" />
                      </svg>
                    </div>
                  </div>
                </section>

                {/* The Impact Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
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
                <div className="bg-secondary/5 p-6 rounded-lg border-l-4 border-secondary italic text-muted-foreground text-center">
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
