"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  imageUrl?: string;
}

export default function BlogDetailPage() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const blogId = params.id as string;

  // Mock data - in real app, this would fetch from API based on blogId
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Understanding Corporate Law Fundamentals',
        excerpt: 'A comprehensive guide to the basics of corporate law and how it affects your business operations.',
        content: `Corporate law is a complex and multifaceted area of legal practice that governs the formation, operation, and dissolution of corporations. Understanding the fundamentals of corporate law is essential for any business owner, executive, or legal professional working in the corporate sector.

## What is Corporate Law?

Corporate law encompasses the legal rules and regulations that govern the formation, management, and operation of corporations. It includes:

- **Formation and Structure**: Legal requirements for creating a corporation
- **Governance**: Rules for how corporations are managed and controlled
- **Rights and Responsibilities**: The legal rights and obligations of shareholders, directors, and officers
- **Compliance**: Regulatory requirements and ongoing legal obligations

## Key Components of Corporate Law

### 1. Corporate Formation

The process of forming a corporation involves several legal steps:

1. **Articles of Incorporation**: Legal document filed with the state
2. **Bylaws**: Internal rules governing corporate operations
3. **Shareholder Agreements**: Contracts between shareholders
4. **Board of Directors**: Governing body responsible for major decisions

### 2. Corporate Governance

Effective corporate governance is crucial for:

- Protecting shareholder interests
- Ensuring compliance with laws and regulations
- Maintaining transparency and accountability
- Managing conflicts of interest

### 3. Fiduciary Duties

Directors and officers owe fiduciary duties to the corporation and its shareholders:

- **Duty of Care**: Making informed decisions with reasonable care
- **Duty of Loyalty**: Acting in the best interests of the corporation
- **Duty of Good Faith**: Acting honestly and in good faith

## Why Corporate Law Matters

Understanding corporate law is essential because:

- **Legal Compliance**: Ensures your business operates within the law
- **Risk Management**: Helps identify and mitigate legal risks
- **Strategic Planning**: Informs important business decisions
- **Investor Relations**: Builds confidence with investors and stakeholders

## Conclusion

Corporate law provides the legal framework that enables businesses to operate effectively while protecting the interests of all stakeholders. Whether you're starting a new business or managing an existing corporation, understanding these fundamentals is crucial for long-term success.

For expert guidance on corporate law matters, consult with experienced legal professionals who can provide tailored advice for your specific situation.`,
        author: 'Sarah Johnson',
        createdAt: '2024-01-15',
        updatedAt: '2024-01-15',
        tags: ['Corporate Law', 'Business', 'Legal Guide']
      },
      {
        id: '2',
        title: 'Employment Law Updates 2024',
        excerpt: 'Stay updated with the latest changes in employment legislation and what it means for employers.',
        content: 'Full content for employment law updates...',
        author: 'Michael Chen',
        createdAt: '2024-01-10',
        updatedAt: '2024-01-10',
        tags: ['Employment Law', 'Updates', 'HR']
      },
      {
        id: '3',
        title: 'Intellectual Property Protection Strategies',
        excerpt: 'Learn how to protect your intellectual property and navigate the complex world of IP law.',
        content: 'Full content for IP protection...',
        author: 'Emily Rodriguez',
        createdAt: '2024-01-05',
        updatedAt: '2024-01-05',
        tags: ['IP Law', 'Protection', 'Strategy']
      }
    ];

    const post = mockPosts.find(p => p.id === blogId);
    setBlogPost(post || null);
    setIsLoading(false);
    setIsAuthenticated(true); // Mock authentication
  }, [blogId]);

  const handleDelete = async () => {
    if (confirm(t('blog.deleteConfirm'))) {
      // Mock delete - in real app, this would be an API call
      router.push(`/${locale}/blog`);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-pure-white flex items-center justify-center">
        <div className="text-cape-cod text-xl">{t('status.loading')}</div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="min-h-screen bg-pure-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h1 className="text-2xl font-bold text-cape-cod mb-4">
            {t('blog.notFound')}
          </h1>
          <Link href={`/${locale}/blog`}>
            <Button className="bg-cape-cod text-pure-white hover:bg-obsidian transition-colors">
              {t('blog.backToList')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cape-cod to-obsidian text-pure-white py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <div className="mb-8">
              <Link href={`/${locale}/blog`}>
                <Button variant="outline" className="text-pure-white border-pure-white hover:bg-pure-white hover:text-cape-cod">
                  ← {t('blog.backToList')}
                </Button>
              </Link>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-pure-mint text-cape-cod text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {blogPost.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center justify-between text-pure-mint">
              <div className="flex items-center space-x-4">
                <span>👤 {blogPost.author}</span>
                <span>📅 {new Date(blogPost.createdAt).toLocaleDateString()}</span>
              </div>
              
              {isAuthenticated && (
                <div className="flex gap-2">
                  <Link href={`/${locale}/blog/${blogId}/edit`}>
                    <Button variant="outline" className="text-pure-white border-pure-white hover:bg-pure-white hover:text-cape-cod">
                      ✏️ {t('blog.editButton')}
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    className="text-red-300 border-red-300 hover:bg-red-300 hover:text-cape-cod"
                    onClick={handleDelete}
                  >
                    🗑️ {t('blog.delete')}
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* Excerpt */}
            <div className="bg-pure-mint p-6 rounded-lg mb-8">
              <p className="text-lg text-cape-cod italic">
                {blogPost.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap text-obsidian leading-relaxed">
                {blogPost.content}
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-cape-cod mb-2">
                {t('blog.aboutAuthor')}
              </h3>
              <p className="text-obsidian">
                {blogPost.author} is a legal expert with extensive experience in corporate law and business legal matters.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 