"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export default function Header() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const switchLocale = locale === 'en' ? 'ar' : 'en';
  const switchPath = pathname.replace(`/${locale}`, `/${switchLocale}`);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { href: `/${locale}/services`, label: t('navigation.services') },
    { href: `/${locale}/about`, label: t('navigation.aboutUs') },
    { href: `/${locale}/resources`, label: t('navigation.resources') },
    { href: `/${locale}/client-stories`, label: t('navigation.clientStories') },
    { href: `/${locale}/blog`, label: t('navigation.blog') },
    { href: `/${locale}/contact`, label: t('navigation.contact') },
  ];

  return (
    <header className="bg-cape-cod container mx-auto text-pure-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-xl md:text-2xl font-mona-sans font-bold">
            {t('header.brandName')}
          </span>
        </div>
    
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-pure-mint transition-colors font-mona-sans"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Link
            href={switchPath}
            className="px-3 py-1 border border-pure-white rounded text-sm hover:bg-pure-white hover:text-cape-cod transition-colors font-mona-sans"
          >
            {switchLocale.toUpperCase()}
          </Link>
          <Button className="bg-pure-mint text-cape-cod px-4 py-2 rounded-full flex items-center hover:bg-obsidian hover:text-pure-white transition-colors font-mona-sans">
            {t('navigation.bookCall')} <span className="ml-2">▶</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-pure-white hover:bg-obsidian"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-2 space-y-4 bg-cape-cod border-t border-obsidian">
            {/* Mobile Navigation */}
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="hover:text-pure-mint transition-colors py-2 font-mona-sans"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="flex flex-col space-y-3 pt-4 border-t border-obsidian">
              <Link
                href={switchPath}
                onClick={closeMenu}
                className="px-3 py-2 border border-pure-white rounded text-sm hover:bg-pure-white hover:text-cape-cod transition-colors text-center font-mona-sans"
              >
                {switchLocale.toUpperCase()}
              </Link>
                <Button onClick={() => router.push('/contact')} className="cursor-pointer bg-pure-mint text-cape-cod px-4 py-2 rounded-full hover:bg-obsidian hover:text-pure-white transition-colors">
                BOOK A CALL <span className="ml-2">▶</span>
              </Button>
            </div>    
          </div>
        </div>
      )}
    </header>
  );
} 