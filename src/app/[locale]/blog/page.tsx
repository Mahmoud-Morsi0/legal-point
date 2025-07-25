"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
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

export default function BlogPage() {
  const t = useTranslations();
  const locale = useLocale();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This would be replaced with real auth

  // Mock data - in real app, this would come from an API
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Understanding Corporate Law Fundamentals',
        excerpt: 'A comprehensive guide to the basics of corporate law and how it affects your business operations.',
        content: 'Full content here...',
        author: 'Sarah Johnson',
        createdAt: '2024-01-15',
        updatedAt: '2024-01-15',
        tags: ['Corporate Law', 'Business', 'Legal Guide']
      },
      {
        id: '2',
        title: 'Employment Law Updates 2024',
        excerpt: 'Stay updated with the latest changes in employment legislation and what it means for employers.',
        content: 'Full content here...',
        author: 'Michael Chen',
        createdAt: '2024-01-10',
        updatedAt: '2024-01-10',
        tags: ['Employment Law', 'Updates', 'HR']
      },
      {
        id: '3',
        title: 'Intellectual Property Protection Strategies',
        excerpt: 'Learn how to protect your intellectual property and navigate the complex world of IP law.',
        content: 'Full content here...',
        author: 'Emily Rodriguez',
        createdAt: '2024-01-05',
        updatedAt: '2024-01-05',
        tags: ['IP Law', 'Protection', 'Strategy']
      }
    ];

    setBlogPosts(mockPosts);
    setIsLoading(false);
    // Mock authentication - in real app, check actual auth status
    setIsAuthenticated(true);
  }, []);

  const handleDelete = async (id: string) => {
    if (confirm(t('blog.deleteConfirm'))) {
      setBlogPosts(prev => prev.filter(post => post.id !== id));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-pure-white flex items-center justify-center">
        <div className="text-cape-cod text-xl">{t('status.loading')}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cape-cod to-obsidian text-pure-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            {t('blog.title')}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('blog.subtitle')}
          </p>
          {isAuthenticated && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href={`/${locale}/blog/create`}>
                <Button className="bg-pure-mint text-cape-cod hover:bg-obsidian hover:text-pure-white transition-colors px-8 py-4 rounded-full text-lg font-semibold">
                  {t('blog.createNew')} +
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-cape-cod mb-4">
                {t('blog.noPosts')}
              </h2>
              <p className="text-obsidian mb-8">
                {t('blog.noPostsDescription')}
              </p>
              {isAuthenticated && (
                <Link href={`/${locale}/blog/create`}>
                  <Button className="bg-cape-cod text-pure-white hover:bg-obsidian transition-colors">
                    {t('blog.createFirst')}
                  </Button>
                </Link>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Blog Image */}
                  <div className="h-48 bg-gradient-to-br from-pure-mint to-cape-cod flex items-center justify-center">
                    <div className="text-4xl">📄</div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-pure-mint text-cape-cod text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-obsidian text-pure-white text-xs rounded-full">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-cape-cod mb-3 line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-obsidian mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2">
                      <Link href={`/${locale}/blog/${post.id}`} className="flex-1">
                        <Button className="w-full bg-cape-cod text-pure-white hover:bg-obsidian transition-colors">
                          {t('blog.readMore')}
                        </Button>
                      </Link>
                      
                      {isAuthenticated && (
                        <>
                          <Link href={`/${locale}/blog/${post.id}/edit`}>
                            <Button variant="outline" className="px-3">
                              ✏️
                            </Button>
                          </Link>
                          <Button
                            variant="outline"
                            className="px-3 text-red-600 hover:bg-red-50"
                            onClick={() => handleDelete(post.id)}
                          >
                            🗑️
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
} 