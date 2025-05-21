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
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <iframe
          src="https://ibex-landing-2-0.webflow.io/blog"
          title="Ibex Blog"
          className="w-full h-full border-0"
          style={{ minHeight: 'calc(100vh - 128px)' }} // Adjust 128px based on header/footer height
        />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
