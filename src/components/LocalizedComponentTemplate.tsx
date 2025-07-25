"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';

/**
 * Template component demonstrating proper localization patterns
 * Use this as a starting point for new localized components
 */
export default function LocalizedComponentTemplate() {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <section className="py-16">
      <div className="container mx-auto">
        {/* Example of basic text translation */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            {t('template.title')}
          </h2>
          <p className="text-lg text-gray-600">
            {t('template.subtitle')}
          </p>
        </div>

        {/* Example of RTL-aware layout */}
        <div 
          dir={isRTL ? 'rtl' : 'ltr'} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${
            isRTL ? 'text-right' : 'text-left'
          }`}
        >
          {/* Left/Right content based on language */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('template.features.title')}
            </h3>
            <ul className="space-y-2">
              {t.raw('template.features.list').map((feature: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              {t('template.benefits.title')}
            </h3>
            <ul className="space-y-2">
              {t.raw('template.benefits.list').map((benefit: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Example of call-to-action with translation */}
        <div className="text-center mt-8">
          <Button className="bg-cape-cod text-white px-8 py-3 rounded-lg hover:bg-obsidian transition-colors">
            {t('template.cta.button')}
          </Button>
        </div>

        {/* Example of conditional content based on locale */}
        {locale === 'ar' && (
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-yellow-800">
              {t('template.arabicNote')}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/**
 * Usage Instructions:
 * 
 * 1. Copy this template for new components
 * 2. Replace 'template' with your component name in translation keys
 * 3. Add corresponding translations to messages/en.json and messages/ar.json
 * 4. Update the component logic as needed
 * 5. Remove this comment block when done
 * 
 * Required translations for this template:
 * 
 * messages/en.json:
 * {
 *   "template": {
 *     "title": "Your Component Title",
 *     "subtitle": "Your component subtitle",
 *     "features": {
 *       "title": "Features",
 *       "list": ["Feature 1", "Feature 2", "Feature 3"]
 *     },
 *     "benefits": {
 *       "title": "Benefits", 
 *       "list": ["Benefit 1", "Benefit 2", "Benefit 3"]
 *     },
 *     "cta": {
 *       "button": "Call to Action"
 *     },
 *     "arabicNote": "Special note for Arabic users"
 *   }
 * }
 * 
 * messages/ar.json:
 * {
 *   "template": {
 *     "title": "عنوان المكون الخاص بك",
 *     "subtitle": "النص الفرعي للمكون",
 *     "features": {
 *       "title": "الميزات",
 *       "list": ["الميزة الأولى", "الميزة الثانية", "الميزة الثالثة"]
 *     },
 *     "benefits": {
 *       "title": "الفوائد",
 *       "list": ["الفائدة الأولى", "الفائدة الثانية", "الفائدة الثالثة"]
 *     },
 *     "cta": {
 *       "button": "دعوة للعمل"
 *     },
 *     "arabicNote": "ملاحظة خاصة للمستخدمين العرب"
 *   }
 * }
 */ 