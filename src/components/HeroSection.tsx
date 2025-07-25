"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="bg-pure-white p-4 md:p-8 border-2  border-red-500 rounded-lg">
      <div className="container mx-auto w-full  ">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 h-[600px] md:h-[700px]">
          
          {/* Left Side - Light Background with Text */}
          <div className="bg-pure-white border border-gray-200 rounded-lg p-8 md:p-10 flex flex-col justify-between shadow-sm">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-cape-cod leading-tight">
                {t('hero.title')}
              </h1>
              <p className="text-lg md:text-xl text-obsidian leading-relaxed">
                {t('hero.subtitle')}
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pure-mint rounded-full"></div>
                  <span className="text-cape-cod font-medium">{t('hero.features.contractReview')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pure-mint rounded-full"></div>
                  <span className="text-cape-cod font-medium">{t('hero.features.compliance')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pure-mint rounded-full"></div>
                  <span className="text-cape-cod font-medium">{t('hero.features.consultation')}</span>
                </div>
              </div>
            </div>
            
            {/* Call to Action Button */}
            <div className="pt-6">
              <Button className="bg-cape-cod text-pure-white px-8 py-3 rounded-lg hover:bg-obsidian transition-colors text-lg font-semibold">
                {t('hero.cta.button')}
              </Button>
            </div>
          </div>

          {/* Right Side - Dark Background with Image */}
          <div className="relative bg-cape-cod rounded-lg overflow-hidden shadow-lg">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image 
                src="/images/hero-legal.jpg" 
                alt="Legal Services" 
                fill
                className="object-cover opacity-20"
                priority
              />
            </div>
            
            {/* Overlay Text */}
            <div className="relative z-10 p-8 md:p-10 h-full flex flex-col justify-between">
              <div className="text-right">
                <h2 className="text-2xl md:text-3xl font-bold text-pure-white mb-4">
                  {t('hero.stats.title')}
                </h2>
                <p className="text-pure-mint text-lg">
                  {t('hero.stats.subtitle')}
                </p>
              </div>
              
              {/* Bottom Content */}
              <div className="text-center">
                <div className="bg-pure-white/10 backdrop-blur-sm rounded-lg p-6 inline-block">
                  <p className="text-pure-white text-sm md:text-base">
                    &quot;{t('hero.testimonial.text')}&quot;
                  </p>
                  <p className="text-pure-mint text-sm mt-2 font-medium">
                    - {t('hero.testimonial.author')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 