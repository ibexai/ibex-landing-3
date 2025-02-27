
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useInView, getAnimationClass } from '@/lib/animations';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 'workflow-automation',
    title: 'Top 10 Workflow Automation Strategies for 2023',
    excerpt: 'Discover the latest automation techniques that are transforming how businesses operate and deliver value to customers.',
    category: 'Productivity',
    date: 'April 12, 2023',
    author: 'Sarah Johnson',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'ai-business',
    title: 'How AI is Reshaping Business Intelligence',
    excerpt: 'Artificial intelligence is revolutionizing how companies analyze data and make decisions. Learn how to leverage AI in your business.',
    category: 'Technology',
    date: 'March 28, 2023',
    author: 'Michael Chen',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'remote-collaboration',
    title: 'Building Effective Remote Collaboration Systems',
    excerpt: 'As distributed teams become the norm, implementing the right collaboration tools and practices is more important than ever.',
    category: 'Workplace',
    date: 'March 15, 2023',
    author: 'Emily Rodriguez',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'data-security',
    title: 'Enterprise Data Security: Best Practices for the Modern Workplace',
    excerpt: 'Protecting your business data requires a comprehensive approach. Explore the latest security measures every business should implement.',
    category: 'Security',
    date: 'February 29, 2023',
    author: 'David Patel',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation: A Step-by-Step Guide',
    excerpt: 'Navigate the complexities of digital transformation with this comprehensive guide for businesses of all sizes.',
    category: 'Strategy',
    date: 'February 17, 2023',
    author: 'Rebecca Kim',
    imageUrl: '/placeholder.svg'
  },
  {
    id: 'customer-experience',
    title: 'Enhancing Customer Experience Through Technology',
    excerpt: 'Learn how leading companies are using technology to create exceptional customer experiences that drive loyalty and growth.',
    category: 'Customer Success',
    date: 'February 3, 2023',
    author: 'James Wilson',
    imageUrl: '/placeholder.svg'
  }
];

const Blog: React.FC = () => {
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
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Ibex Blog</h1>
              <p className="text-xl text-muted-foreground">
                Insights, strategies, and best practices to help your business thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section ref={sectionRef} className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id}
                  className={`feature-card bg-card rounded-xl overflow-hidden shadow-md border border-border/20 ${getAnimationClass(isInView, 'fade-up', index * 100)}`}
                >
                  <div className="aspect-w-16 aspect-h-9 bg-muted/20">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      className="object-cover w-full h-48"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="text-xs font-medium bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        By {post.author}
                      </span>
                      <Link to={`/blog/${post.id}`} className="text-sm font-medium text-primary hover:underline">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Looking for more content?
              </p>
              <div className="space-x-4">
                <button className="px-4 py-2 border border-border rounded-md hover:bg-secondary/30 transition-colors">
                  Load More Articles
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
