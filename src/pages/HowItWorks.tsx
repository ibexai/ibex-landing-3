
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
      title: "Identify Your Needs",
      description: "We work with you to understand your business requirements and goals, ensuring our solution is perfectly tailored to your specific needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      ),
      videoId: "jNQXAC9IVRw" // Example YouTube video ID
    },
    {
      title: "Custom Implementation",
      description: "Our team of experts implements the solution, configuring and customizing it to match your workflow and business processes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      ),
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID
    },
    {
      title: "Training & Onboarding",
      description: "We provide comprehensive training to ensure your team is comfortable and proficient with all features of the platform.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      videoId: "8PsG_0DGy2U" // Example YouTube video ID
    },
    {
      title: "Ongoing Support",
      description: "Our relationship doesn't end after implementation. We provide continuous support and regular updates to ensure your solution evolves with your business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
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
                Our streamlined process ensures a seamless integration of our platform into your business workflow.
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
                            <Button variant="outline" className="mt-2" onClick={() => setOpenDialog(index)}>
                              Learn More
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                            </Button>
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
                  question: "How long does implementation typically take?",
                  answer: "Implementation time varies based on the complexity of your needs, but typically ranges from 2-6 weeks. Our team works efficiently to minimize disruption to your operations."
                },
                {
                  question: "Can Ibex integrate with our existing systems?",
                  answer: "Yes, Ibex is designed to integrate seamlessly with most popular business software and systems. We offer pre-built connectors for many applications and can develop custom integrations for specialized needs."
                },
                {
                  question: "What kind of support do you provide after implementation?",
                  answer: "We offer multiple support tiers to meet your needs, including standard business hours support, 24/7 premium support, and dedicated account management. All clients receive regular updates and access to our knowledge base."
                },
                {
                  question: "Is training included with implementation?",
                  answer: "Yes, all implementation packages include comprehensive training for your team. We offer both live sessions and on-demand resources to ensure your team feels confident using the platform."
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
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
