"use client";

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              {t('contact.title')}
            </h1>
            <p className="text-lg text-obsidian max-w-2xl mx-auto">
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-pure-white p-8 rounded-lg shadow-lg border border-cape-cod"
            >
              <h2 className="text-2xl font-bold text-cape-cod mb-6">
                {t('contact.form.title')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-cape-cod mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-cape-cod mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                {/* Phone */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="countryCode" className="block text-sm font-medium text-cape-cod mb-2">
                      {t('contact.form.countryCode')}
                    </label>
                    <select
                      id="countryCode"
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                    >
                      <option value="+1">+1 (US)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+33">+33 (FR)</option>
                      <option value="+49">+49 (DE)</option>
                      <option value="+966">+966 (SA)</option>
                      <option value="+971">+971 (UAE)</option>
                      <option value="+20">+20 (EG)</option>
                    </select>
                  </div>
                  <div className="col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-cape-cod mb-2">
                      {t('contact.form.phone')}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                      placeholder={t('contact.form.phonePlaceholder')}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-cape-cod mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-cape-cod rounded-lg focus:ring-2 focus:ring-pure-mint focus:border-transparent"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                {/* Submit Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-cape-cod text-pure-white py-3 rounded-lg hover:bg-obsidian transition-colors text-lg font-semibold"
                  >
                    {t('contact.form.submit')}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-cape-cod mb-6">
                  {t('contact.info.title')}
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pure-mint rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cape-cod text-sm">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cape-cod">{t('contact.info.address.title')}</h3>
                      <p className="text-obsidian">{t('contact.info.address.value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pure-mint rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cape-cod text-sm">📧</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cape-cod">{t('contact.info.email.title')}</h3>
                      <p className="text-obsidian">{t('contact.info.email.value')}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-pure-mint rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-cape-cod text-sm">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-cape-cod">{t('contact.info.phone.title')}</h3>
                      <p className="text-obsidian">{t('contact.info.phone.value')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div>
                <h3 className="text-xl font-bold text-cape-cod mb-4">
                  {t('contact.hours.title')}
                </h3>
                <div className="space-y-2 text-obsidian">
                  <p>{t('contact.hours.weekdays')}</p>
                  <p>{t('contact.hours.weekend')}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 