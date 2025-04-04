import React, { useRef, useState } from 'react';
import { useInView, getAnimationClass } from '@/lib/animations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef);
  const [openDialog, setOpenDialog] = useState<number | null>(null);

  const steps = [
    {
      title: "AI-Driven Personalization",
      description: "Ibex tailors promotions to individual players using advanced AI algorithms, moving beyond traditional customer segments. Customizable audience targeting ensures each player receives the most relevant promotion, maximizing engagement.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
        </svg>
      ),
      videoId: "jNQXAC9IVRw" // Example YouTube video ID
    },
    {
      title: "Profit Optimization for Maximum ROI",
      description: "Ibex predicts player value based on past behavior and intelligently selects the most effective campaigns. Flexible strategy options let you optimize for short-term gains or long-term profitability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      ),
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    },
    {
      title: "Continuous Learning & A/B Testing",
      description: "Ibex evaluates campaign impact on customer retention and refines promotions for maximum profitability. The AI engine continuously adapts to new data, detecting shifts in player behavior and optimizing strategies in real time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
        </svg>
      ),
      videoId: "8PsG_0DGy2U" // Example YouTube video ID
    },
    {
      title: "Seamless Automation & Scalability",
      description: "Reduce manual workload while scaling retention efforts. Ibex automates campaign selection for high volumes of players. Seamless integrations enable automated communication delivery and bonus crediting, minimizing strain on CRM teams.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      videoId: "9zinZmE3Ogk" // Example YouTube video ID
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">How Ibex Works</h1>
              <p className="text-xl text-muted-foreground">
                Our streamlined process ensures a seamless integration of our retention engine into your gaming platform.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section ref={sectionRef} className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[31px] top-0 bottom-0 w-[2px] bg-primary/20 hidden md:block"></div>
                
                {/* Steps */}
                <div className="space-y-12 md:space-y-24">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex flex-col md:flex-row items-start gap-6 ${getAnimationClass(isInView, 'fade-up', index * 100)}`}
                    >
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center z-10 border border-primary/20">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <div className="pt-1 md:pt-3 flex-1">
                        <h3 className="text-2xl font-display font-semibold mb-3">{step.title}</h3>
                        <p className="text-muted-foreground mb-4">{step.description}</p>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            {/* <Button variant="outline" className="mt-2" onClick={() => setOpenDialog(index)}>
                              Learn More
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                            </Button> */}
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[725px]">
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-display">{step.title}</DialogTitle>
                              <DialogDescription>
                                Watch this short video to learn more about {step.title.toLowerCase()}.
                              </DialogDescription>
                            </DialogHeader>
                            <div className="aspect-video w-full overflow-hidden rounded-md">
                              <iframe 
                                width="100%" 
                                height="100%" 
                                src={`https://www.youtube.com/embed/${step.videoId}`} 
                                title={`${step.title} video`}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                                className="w-full h-full"
                              ></iframe>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
                Common Questions
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "What is Ibex?",
                  answer: "Ibex is an AI-powered CRM automation platform that helps businesses personalise and optimize player engagement without manual segmentation or campaign scheduling."
                },
                {
                  question: "How does Ibex improve marketing performance?",
                  answer: "By analyzing each player’s behavior in real time, Ibex decides the best action, timing, and channel to maximize retention and revenue."
                },
                {
                  question: "Can Ibex replace my existing CRM system?",
                  answer: "No, Ibex works alongside your CRM, automating and optimizing campaigns without disrupting your existing setup."
                },
                {
                  question: "How does Ibex help reduce marketing costs?",
                  answer: "It ensures promotions are only sent when they are likely to drive profit, cutting unnecessary bonuses and inefficient spending."
                },
                {
                  question: "What makes Ibex different from other AI marketing tools?",
                  answer: "Unlike rule-based systems, Ibex continuously learns and adapts to player behavior, eliminating the need for manual optimization."
                },
                {
                  question: "Does Ibex require a long integration process?",
                  answer: "No, you can start with a zero-integration trial to see results before making any technical commitments."
                },
                {
                  question: "How does Ibex handle player segmentation?",
                  answer: "It doesn’t rely on segments. Instead, it makes individualized decisions for each player, adjusting in real time based on their activity."
                },
                {
                  question: "Can Ibex help reactivate inactive players?",
                  answer: "Yes, it detects early signs of churn and automatically adjusts messaging and offers to bring players back."
                },
                {
                  question: "How do I track performance with Ibex?",
                  answer: "The platform provides clear reports on key metrics, including revenue impact, player engagement, and campaign profitability."
                },
                {
                  question: "Who benefits most from using Ibex?",
                  answer: "Ibex is ideal for iGaming operators and other online businesses that want to maximize player lifetime value with minimal manual effort."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 shadow-sm border border-border/20">
                  <h3 className="text-xl font-medium mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-secondary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Ready to transform your business?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how Ibex can streamline your operations and boost efficiency.
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

export default HowItWorks;
