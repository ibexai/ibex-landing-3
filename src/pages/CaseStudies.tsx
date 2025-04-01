
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Background elements */}
      <div className="app-background"></div>
      <div className="glow-overlay"></div>
      
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Case Studies</h1>
              <p className="text-xl text-muted-foreground">
                Ibex has been proven to successfully automate retention campaigns and optimise the LTV impact of iGaming companies across the world.
              </p>
            </div>
          </div>
        </section>
        
        {/* Case Studies Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1 - Real-Time Automation */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-5px]">
                <div className="bg-secondary/40 p-6 flex items-center justify-center border-b">
                  <div className="h-20 w-20 rounded-full bg-primary/10 p-4 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="h-12 w-12 text-primary" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.06152 12C5.55362 8.05369 8.92001 5 12.9996 5C17.4179 5 20.9996 8.58172 20.9996 13C20.9996 17.4183 17.4179 21 12.9996 21H8M13 13V9M11 3H15M3 15H8M5 18H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Real-Time Automation</h3>
                  <p className="text-muted-foreground mb-4">Boosting operational efficiency by 45% through AI-powered analytics.</p>
                  <Link to="/case-studies/real-time-automation" className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </CardContent>
              </Card>
              
              {/* Case Study 2 - Randomised Trial vs Optimove */}
              <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:translate-y-[-5px]">
                <div className="bg-secondary/40 p-6 flex items-center justify-center border-b">
                  <div className="h-20 w-20 rounded-full bg-primary/10 p-4 flex items-center justify-center">
                    <svg viewBox="0 0 64 64" className="h-12 w-12 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M63.8251495,32.9945984c-0.1864853-0.2723999-0.4950981-0.4354973-0.8251991-0.4354973h-1.8331985
                        L52.4423523,16.8237c-0.0451012-0.0813007-0.1013031-0.1539993-0.1653023-0.2182007
                        c-0.0056-0.0056-0.0128975-0.0091-0.0187988-0.0146999c-0.0770988-0.0739994-0.1661987-0.1308002-0.2619019-0.1766987
                        c-0.0278969-0.0132999-0.0550003-0.0247002-0.0842972-0.0354004c-0.1096001-0.0408001-0.224102-0.0696011-0.3446999-0.0696011
                        h-0.0049019h-18.5625v-4.9833994c0-0.5528002-0.4472008-1-1-1c-0.5526981,0-1,0.4471998-1,1v4.9833994H12.4335518
                        c-0.0018892,0-0.0028887,0-0.0048885,0c-0.1191111,0.0006008-0.232111,0.0293007-0.3405113,0.0696011
                        c-0.0300999,0.0110989-0.0573997,0.0231991-0.0857,0.0370998c-0.0906,0.0436993-0.1743002,0.0981998-0.2483006,0.1672001
                        c-0.0102997,0.0095997-0.0226994,0.0160999-0.0326996,0.0261002c-0.0651999,0.0662003-0.1223001,0.1406994-0.1677885,0.2243996
                        L3.043452,32.5591011H0.9999521c-0.33,0-0.6386,0.1630974-0.8252,0.4354973c-0.1865,0.2725029-0.2265,0.6192017-0.1064,0.9267998
                        c1.2704999,3.2685013,6.3554997,5.5508003,12.3652,5.5508003c6.0077991,0,11.0928001-2.282299,12.3633003-5.5508003
                        c0.1201-0.3075981,0.0800991-0.6542969-0.1064014-0.9267998c-0.1865997-0.2723999-0.4951992-0.4354973-0.8251991-0.4354973
                        h-1.8337994l-7.8999004-14.2500019h16.8683987v29.3094997h-5.9628983c-0.1767006,0-0.3505001,0.0469017-0.5029011,0.1357994
                        l-6.9638996,4.0557022c-0.3905888,0.2275009-0.5799999,0.6884003-0.4627991,1.125
                        c0.1180992,0.4365005,0.5135994,0.7392006,0.9657993,0.7392006h27.8514996c0.452198,0,0.8476982-0.3027,0.9659119-0.7392006
                        c0.1170883-0.4365997-0.0723114-0.8974991-0.4629135-1.125l-6.9618988-4.0557022
                        c-0.152401-0.0888977-0.3261871-0.1357994-0.5029984-0.1357994h-5.9629021V18.3090992h16.8889999l-7.7117004,14.2500019h-2.0424995
                        c-0.3300858,0-0.6386986,0.1630974-0.8251991,0.4354973c-0.1865005,0.2725029-0.2266006,0.6192017-0.1063995,0.9267998
                        c1.2705116,3.2685013,6.3554001,5.5508003,12.3642006,5.5508003s11.0937996-2.282299,12.3643112-5.5508003
                        C64.0517502,33.6138,64.0117493,33.2671013,63.8251495,32.9945984z M12.4335518,37.4721985
                        c-4.0448885,0-7.7528892-1.184597-9.5478001-2.9130974h19.0937004
                        C20.1845512,36.2876015,16.4775524,37.4721985,12.4335518,37.4721985z M5.318152,32.5591011l7.1262002-13.1690006
                        l7.3003111,13.1690006H5.318152z M42.2216644,51.6743011h-20.444313l3.5293121-2.0557022h13.3856888L42.2216644,51.6743011z
                        M51.5781517,19.3901005l7.3005104,13.1690006H44.4518509L51.5781517,19.3901005z M51.5673523,37.4721985
                        c-4.0449028,0-7.7518997-1.184597-9.5469017-2.9130974h19.0937996
                        C59.3193512,36.2876015,55.6122513,37.4721985,51.5673523,37.4721985z"/>
                    </svg>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Randomised Trial vs Optimove</h3>
                  <p className="text-muted-foreground mb-4">A comparative study showing 23% better retention metrics with Ibex.</p>
                  <Link to="/case-studies/randomised-trial" className="text-primary hover:underline inline-flex items-center">
                    Read Case Study
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to maximise your player LTV?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how Ibex can work for you.
              </p>
              <Button 
                variant="subtle" 
                size="lg" 
                className="rounded-full px-8 py-6 text-base transition-all hover:shadow-md"
                onClick={() => {
                  window.location.href = '/contact';
                }}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
