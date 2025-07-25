"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function CreateBlogPage() {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tags: '',
    imageUrl: ''
  });

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

    // Navigate back to blog list
    router.push(`/${locale}/blog`);
  };

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
              {t('blog.create.title')}
            </h1>
            <p className="text-lg text-obsidian max-w-2xl mx-auto">
              {t('blog.create.subtitle')}
            </p>
          </div>

          {/* Create Form */}
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
                  {t('blog.create.form.title')} *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.create.form.titlePlaceholder')}
                />
              </div>

              {/* Excerpt */}
              <div>
                <label htmlFor="excerpt" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.create.form.excerpt')} *
                </label>
                <textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.create.form.excerptPlaceholder')}
                />
              </div>

              {/* Content */}
              <div>
                <label htmlFor="content" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.create.form.content')} *
                </label>
                <textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={12}
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.create.form.contentPlaceholder')}
                />
              </div>

              {/* Tags */}
              <div>
                <label htmlFor="tags" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.create.form.tags')}
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.create.form.tagsPlaceholder')}
                />
                <p className="text-sm text-gray-500 mt-1">
                  {t('blog.create.form.tagsHelp')}
                </p>
              </div>

              {/* Image URL */}
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-cape-cod mb-2">
                  {t('blog.create.form.imageUrl')}
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                  placeholder={t('blog.create.form.imageUrlPlaceholder')}
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
                    {isSubmitting ? t('blog.create.form.publishing') : t('blog.create.form.publish')}
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => router.push(`/${locale}/blog`)}
                    className="px-8 py-3 border-cape-cod text-cape-cod hover:bg-cape-cod hover:text-pure-white transition-colors"
                  >
                    {t('blog.create.form.cancel')}
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