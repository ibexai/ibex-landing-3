import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CaseStudy02: React.FC = () => {
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
                {/* Title Section */}
                <div className="text-center mb-12 pb-6 border-b border-border/30">
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center text-foreground">
                    Randomised trial: pitting the Ibex AI against segment-based CRM
                  </h2>
                  <div className="flex justify-center gap-2 my-4">
                    <span className="block h-1 w-10 bg-primary rounded-full"></span>
                    <span className="block h-1 w-20 bg-secondary rounded-full"></span>
                    <span className="block h-1 w-10 bg-primary rounded-full"></span>
                  </div>
                  <p className="text-xl font-medium text-muted-foreground mt-4">
                    How iGaming CRM activities will fundamentally change through AI-driven automation
                  </p>
                </div>

                {/* Highlight Box */}
                <div className="bg-secondary/5 border-l-4 border-secondary rounded-lg p-6 mb-10">
                  <p className="text-lg font-medium text-foreground">
                    CRM processes are evolving and through the introduction of artificial intelligence, this innovative solution can increase
                    Net Gaming Revenue (NGR) by up to <span className="font-semibold text-primary">20%</span> when compared to
                    more traditional processes.
                  </p>
                  <p className="mt-4">
                    Additionally, Ibex.ai has a proven record of decreasing the
                    bonus spend from operators, as well as assisting with
                    numerous challenges faced by marketing and CRM teams.
                  </p>
                  <p className="mt-4">
                    This paper will explore the pain points CRM teams face every
                    day and outline the solutions an AI-driven system can
                    provide, with real-world examples.
                  </p>
                </div>

                {/* Introduction Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
                    <span className="text-2xl mr-2">📘</span>
                    Introduction
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      CRM has been around for a long time, and over the last decade there has been a significant evolution in the
                      tools that marketing teams have access to, providing a new approach to the way companies decide to
                      operate.
                    </p>
                    <p>
                      AI and Machine Learning have quickly made their way into this space, promising to accelerate further
                      development and deliver a more personalised and intelligent marketing approach. It is all made possible with
                      automation which dispels the need for segmentation. AI delivers bespoke, personalised messaging using
                      channels that are unique to the customer.
                    </p>
                    <p>
                      For anyone in the competitive landscape of iGaming CRM, machine learning and AI are extremely exciting
                      concepts with convincing advantages. However, education is required as to how it will provide these benefits
                      to existing processes and teams. Furthermore, challenging the status-quo can cause uncertainty, particularly
                      for management.
                    </p>
                  </div>
                </section>

                {/* Current State Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
                    <span className="text-2xl mr-2">🔍</span>
                    Where are we today and where are we heading
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Presently, the CRM tools used in the iGaming industry offer some level of automation, allowing a user to pre-
                      schedule marketing campaigns across multiple channels and define customer journeys to hit customers at
                      set points in their life cycle.
                    </p>
                    <p>
                      This has allowed marketing teams to become more efficient and automate previously manual tasks, freeing
                      up time for more strategic efforts. However, this still involves defining custom segments and customer
                      journeys. As more segments are created, additional staff are required to manage and orchestrate the
                      growing segments and journeys. This process quickly becomes time-consuming and laborious, as well as
                      having diminishing returns without automated assistance from AI technology.
                    </p>
                    <p>
                      The next step in the evolution of CRM is to incorporate machine learning algorithms and AI to give customers a
                      more personalised experience at every step of their life cycle and further increase the efficiency of the
                      marketing team's efforts.
                    </p>
                    <p>
                      Some tools already incorporate AI, promising to add a higher degree of intelligence to marketing operations.
                      But what exactly are the pain points being solved with AI tools?
                    </p>
                  </div>
                </section>

                {/* Challenges Section */}
                <section className="mb-10">
                  <div className="flex items-center mb-6 pb-4 border-b border-border/30">
                    <h3 className="text-xl font-bold flex items-center text-foreground">
                      <span className="text-2xl mr-2">⚠️</span>
                      CRM challenges & AI-driven Solutions
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Financial Challenge Box */}
                    <div className="bg-secondary/5 rounded-lg p-5 border-t-4 border-secondary shadow-lg transition-all hover:translate-y-[-4px] hover:shadow-xl">
                      <div className="text-lg font-semibold text-foreground mb-3 uppercase">Financial</div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Increasing bonus and retention costs</h4>
                      <p className="text-muted-foreground">
                        Calculating a full P&L for each combination of offers and players allows Ibex to only bonus players
                        when it is profitable to do so. With over 40 models being used, Ibex calculates a P&L
                        for each player which greatly reduces bonus costs.
                      </p>
                    </div>
                    
                    {/* Strategic Challenge Box */}
                    <div className="bg-secondary/5 rounded-lg p-5 border-t-4 border-secondary shadow-lg transition-all hover:translate-y-[-4px] hover:shadow-xl">
                      <div className="text-lg font-semibold text-foreground mb-3 uppercase">Strategic</div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Inflexible marketing strategies</h4>
                      <p className="text-muted-foreground">
                        With most CRM tools, changing strategy involves a significant amount of work, such as updating
                        segments and customer journeys. Ibex can shift its retention strategy with the click of a button to
                        drive the KPIs that are most important for every marketing lifecycle.
                      </p>
                    </div>
                    
                    {/* Operational Challenge Box */}
                    <div className="bg-secondary/5 rounded-lg p-5 border-t-4 border-secondary shadow-lg transition-all hover:translate-y-[-4px] hover:shadow-xl">
                      <div className="text-lg font-semibold text-foreground mb-3 uppercase">Operational</div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">Management of growing segments and journeys</h4>
                      <p className="text-muted-foreground">
                        Ibex automatically A/B tests new templates and campaigns and continuously optimises its
                        recommendations.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Solutions Section */}
                <section className="mb-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
                    <span className="text-2xl mr-2">🚀</span>
                    Solutions in action
                  </h3>
                  
                  <p className="mb-6 text-muted-foreground">
                    We set ourselves a challenge:
                    can we address all of these problems and prove the benefits of
                    using an AI-driven system, comparing against the best possible
                    control group – a human-led marketing team using traditional
                    CRM strategies with a well-known CRM provider.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Goal</h4>
                    <p className="text-muted-foreground">
                      The main goal of this challenge was to assess the impact of an AI-Driven system (Ibex)
                      based on a completely randomised trial against a human led marketing team using
                      traditional CRM strategies.
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Setup</h4>
                    <p className="text-muted-foreground">
                      Before the start of this trial, we agreed on a fair setup with a randomised player split and the
                      same retention options available to both parties.
                    </p>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                      { emoji: "🎰", title: "Vertical", value: "Casino" },
                      { emoji: "🌍", title: "Region", value: "EU" },
                      { emoji: "📈", title: "Main KPI", value: "NGR" },
                      { emoji: "⛔", title: "Exclusions", value: "VIPs" },
                      { emoji: "👥", title: "Player base", value: "+10,000" },
                      { emoji: "⏱️", title: "Time Period", value: "2 months" },
                      { emoji: "⚖️", title: "Player split", value: "50/50" },
                      { emoji: "🎁", title: "Offers", value: "Same for both" }
                    ].map((stat, index) => (
                      <div 
                        key={index} 
                        className="bg-card/80 border border-border/30 rounded-lg p-4 relative shadow-md 
                                   transition-transform hover:translate-y-[-4px]"
                      >
                        <div className="text-2xl opacity-30 absolute top-4 right-4">{stat.emoji}</div>
                        <div className="text-sm text-muted-foreground mb-1">{stat.title}</div>
                        <div className="text-xl font-semibold text-foreground">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="mb-6 text-muted-foreground">
                    Although the overall financial impacts could not be assessed until the two-month trial had concluded,
                    the operational benefits of using an automated AI-driven system became immediately clear.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Operational</h4>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        With the agreed setup Ibex had control of 50% of the player base with no manual execution work
                        needed.
                      </p>
                      <p>
                        Ibex automatically generated recommendations and triggered marketing campaigns for these
                        players daily and only at the exact right time for that player.
                      </p>
                      <p>
                        Conversely, the human-led CRM team (which consisted of around 5 members) manually executed
                        campaigns at set intervals throughout the two-month trial period for the other 50% of players.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-foreground mb-3">Financial</h4>
                    <p className="mb-6 text-muted-foreground">
                      By the end of this test the financial impacts were clear. Ibex had an uplift on NGR across all three
                      defined lifecycle segments of up to 20% compared to the human-led retention team. Also,
                      throughout the test Ibex gave up to 17% less in bonuses while sending around 50% more
                      campaigns. This proved that Ibex was efficiently bonusing players while also managing to increase
                      player values across the board.
                    </p>
                    
                    {/* Updated NGR Uplift Chart with highlighted Ibex bars */}
                    <div className="bg-card/80 border border-border/30 rounded-lg p-6 mb-6">
                      <h4 className="text-lg font-semibold text-center mb-6">NGR Uplift</h4>
                      
                      <div className="grid grid-cols-3 gap-8">
                        {/* New players column */}
                        <div className="flex flex-col items-center">
                          <div className="text-xl md:text-2xl font-bold text-primary mb-3">
                            +11%
                          </div>
                          <div className="flex items-end h-64 space-x-6">
                            <div className="flex flex-col items-center">
                              <div className="w-16 bg-secondary rounded-t-md" style={{ height: '180px' }}>
                                <div className="h-full flex items-center justify-center">
                                  <span className="font-semibold">100</span>
                                </div>
                              </div>
                              <span className="mt-2 text-sm text-muted-foreground">Traditional</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-16 bg-purple-500 rounded-t-md shadow-lg shadow-purple-300 ring-2 ring-purple-600" style={{ height: '200px' }}>
                                <div className="h-full flex items-center justify-center">
                                  <span className="font-semibold">111</span>
                                </div>
                              </div>
                              <span className="mt-2 text-sm text-muted-foreground">Ibex</span>
                            </div>
                          </div>
                          <div className="mt-4 text-sm font-medium">New</div>
                        </div>
                        
                        {/* Retained players column */}
                        <div className="flex flex-col items-center">
                          <div className="text-xl md:text-2xl font-bold text-primary mb-3">
                            +20%
                          </div>
                          <div className="flex items-end h-64 space-x-6">
                            <div className="flex flex-col items-center">
                              <div className="w-16 bg-secondary rounded-t-md" style={{ height: '180px' }}>
                                <div className="h-full flex items-center justify-center">
                                  <span className="font-semibold">100</span>
                                </div>
                              </div>
                              <span className="mt-2 text-sm text-muted-foreground">Traditional</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-16 bg-purple-500 rounded-t-md shadow-lg shadow-purple-300 ring-2 ring-purple-600" style={{ height: '216px' }}>
                                <div className="h-full flex items-center justify-center">
                                  <span className="font-semibold">120</span>
                                </div>
                              </div>
                              <span className="mt-2 text-sm text-muted-foreground">Ibex</span>
                            </div>
                          </div>
                          <div className="mt-4 text-sm font-medium">Retained</div>
                        </div>
                        
                        {/* Reactivated players column */}
                        <div className="flex flex-col items-center">
                          <div className="text-xl md:text-2xl font-bold text-primary mb-3">
                            +7%
                          </div>
                          <div className="flex items-end h-64 space-x-6">
                            <div className="flex flex-col items-center">
                              <div className="w-16 bg-secondary rounded-t-md" style={{ height: '180px' }}>
                                <div className="h-full flex items-center justify-center">
                                  <span className="font-semibold">100</span>
                                </div>
                              </div>
                              <span className="mt-2 text-sm text-muted-foreground">Traditional</span>
                            </div>
                            <div className="flex flex-col items-center">
                              <div className="w-16 bg-purple-500 rounded-t-md shadow-lg shadow-purple-300 ring-2 ring-purple-600" style={{ height: '193px' }}>
                                <div className="h-full flex items-center justify-center">
                                  <span className="font-semibold">107</span>
                                </div>
                              </div>
                              <span className="mt-2 text-sm text-muted-foreground">Ibex</span>
                            </div>
                          </div>
                          <div className="mt-4 text-sm font-medium">Reactivated</div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-center text-muted-foreground mt-8">
                        Traditional CRM performance provided as a benchmark = 100
                      </div>
                    </div>
                  </div>
                </section>

                {/* Summary Section */}
                <section className="mb-6">
                  <h3 className="text-xl font-bold mb-6 flex items-center text-foreground border-b border-border/30 pb-3">
                    <span className="text-2xl mr-2">📝</span>
                    Summary
                  </h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      AI is by no means a replacement for humans or human-led business processes, however it can
                      be leveraged to focus more on VIP Management, specific areas for improvement that were
                      pointed out by Ibex reporting, strategy and overall commercial impact per brand and country.
                    </p>
                    <p>
                      Ibex is the leading iGaming partner for CRM automation to help upgrade CRM Teams to the
                      next level.
                    </p>
                  </div>
                </section>

                {/* CTA */}
                <div className="bg-secondary/5 p-6 rounded-lg border-l-4 border-secondary italic text-muted-foreground text-center">
                  Ready to see how Ibex can transform your retention strategy and boost your NGR? <br />
                  <Link to="/contact" className="text-primary font-semibold hover:underline inline-block mt-2">
                    Get in touch today
                  </Link>
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

export default CaseStudy02;
