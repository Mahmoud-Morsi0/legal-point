"use client";

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer className="bg-cape-cod text-pure-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4">
                {t('footer.brandName')}
              </h3>
              <p className="text-pure-mint mb-6 max-w-md">
                {t('footer.description')}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href={`/${locale}/contact`}>
                  <Button className="bg-pure-mint text-cape-cod hover:bg-obsidian hover:text-pure-white transition-colors">
                    {t('footer.cta')} →
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/services`} className="text-pure-mint hover:text-pure-white transition-colors">
                  {t('footer.services.corporate')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-pure-mint hover:text-pure-white transition-colors">
                  {t('footer.services.contracts')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-pure-mint hover:text-pure-white transition-colors">
                  {t('footer.services.employment')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/services`} className="text-pure-mint hover:text-pure-white transition-colors">
                  {t('footer.services.litigation')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">{t('footer.contact.title')}</h4>
            <div className="space-y-2 text-pure-mint">
              <p>{t('footer.contact.email')}</p>
              <p>{t('footer.contact.phone')}</p>
              <p className="text-sm">{t('footer.contact.address')}</p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-obsidian mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-pure-mint text-sm">
            © 2024 {t('footer.brandName')}. {t('footer.copyright')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href={`/${locale}/privacy`} className="text-pure-mint hover:text-pure-white transition-colors text-sm">
              {t('footer.privacy')}
            </Link>
            <Link href={`/${locale}/terms`} className="text-pure-mint hover:text-pure-white transition-colors text-sm">
              {t('footer.terms')}
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
} 