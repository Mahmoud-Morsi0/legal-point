"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useParams, useRouter } from 'next/navigation';
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

export default function EditBlogPage() {
  const t = useTranslations();
  const locale = useLocale();
  const params = useParams();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tags: '',
    imageUrl: ''
  });

  const blogId = params.id as string;

  // Mock data - in real app, this would fetch from API based on blogId
  useEffect(() => {
    const mockPosts: BlogPost[] = [
      {
        id: '1',
        title: 'Understanding Corporate Law Fundamentals',
        excerpt: 'A comprehensive guide to the basics of corporate law and how it affects your business operations.',
        content: 'Corporate law is a complex and multifaceted area of legal practice...',
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
    if (post) {
      setBlogPost(post);
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        tags: post.tags.join(', '),
        imageUrl: post.imageUrl || ''
      });
    }
    setIsLoading(false);
  }, [blogId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call - in real app, this would be an actual API request
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Navigate back to blog detail
    router.push(`/${locale}/blog/${blogId}`);
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
          <Button 
            onClick={() => router.push(`/${locale}/blog`)}
            className="bg-cape-cod text-pure-white hover:bg-obsidian transition-colors"
          >
            {t('blog.backToList')}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cape-cod mb-4">
              {t('blog.edit.title')}
            </h1>
            <p className="text-lg text-obsidian max-w-2xl mx-auto">
              {t('blog.edit.subtitle')}
            </p>
          </div>

          {/* Edit Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-pure-white p-8 rounded-lg shadow-lg border border-cape-cod"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.edit.form.title')} *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.edit.form.titlePlaceholder')}
                />
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.edit.form.excerpt')} *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.edit.form.excerptPlaceholder')}
                />
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.edit.form.content')} *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={12}
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.edit.form.contentPlaceholder')}
                />
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.edit.form.tags')}
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.edit.form.tagsPlaceholder')}
                />
                <p className="text-sm text-gray-500 mt-1">
                  {t('blog.edit.form.tagsHelp')}
                </p>
              </div>

              {/* Image URL */}
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.edit.form.imageUrl')}
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.edit.form.imageUrlPlaceholder')}
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-cape-cod text-pure-white py-3 rounded-lg hover:bg-obsidian transition-colors text-lg font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? t('blog.edit.form.updating') : t('blog.edit.form.update')}
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push(`/${locale}/blog/${blogId}`)}
                    className="px-8 py-3 border-cape-cod text-cape-cod hover:bg-cape-cod hover:text-pure-white transition-colors"
                  >
                    {t('blog.edit.form.cancel')}
                  </Button>
                </motion.div>
              </div>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 