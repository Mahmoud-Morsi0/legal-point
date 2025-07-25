# Localization Guide

This guide explains how to implement localization for all components in the Legal Point project.

## Overview

We use `next-intl` for internationalization with support for English (en) and Arabic (ar).

## File Structure

```
messages/
├── en.json          # English translations
├── ar.json          # Arabic translations
└── [locale].json    # Additional languages

src/
├── i18n.ts          # i18n configuration
├── middleware.ts    # Locale routing
└── components/      # Localized components
```

## How to Localize a Component

### 1. Add Translation Keys

First, add your translation keys to both language files:

**English (`messages/en.json`):**
```json
{
  "componentName": {
    "title": "English Title",
    "subtitle": "English subtitle text",
    "features": {
      "feature1": "Feature 1",
      "feature2": "Feature 2"
    },
    "cta": {
      "button": "Call to Action"
    }
  }
}
```

**Arabic (`messages/ar.json`):**
```json
{
  "componentName": {
    "title": "العنوان بالعربية",
    "subtitle": "النص الفرعي بالعربية",
    "features": {
      "feature1": "الميزة الأولى",
      "feature2": "الميزة الثانية"
    },
    "cta": {
      "button": "دعوة للعمل"
    }
  }
}
```

### 2. Update Your Component

```tsx
"use client";

import { useTranslations } from 'next-intl';

export default function YourComponent() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('componentName.title')}</h1>
      <p>{t('componentName.subtitle')}</p>
      
      <div>
        <span>{t('componentName.features.feature1')}</span>
        <span>{t('componentName.features.feature2')}</span>
      </div>
      
      <button>{t('componentName.cta.button')}</button>
    </div>
  );
}
```

## Translation Key Naming Convention

Use hierarchical keys for better organization:

- `hero.title` - Main hero section title
- `services.cards.corporate.title` - Corporate service card title
- `about.team.members.sarah.name` - Team member name

## Common Translation Keys

### Navigation
```json
{
  "navigation": {
    "services": "Services",
    "aboutUs": "About us",
    "resources": "Resources",
    "clientStories": "Client stories",
    "bookCall": "BOOK A CALL"
  }
}
```

### Common Actions
```json
{
  "common": {
    "learnMore": "Learn More",
    "getStarted": "Get Started",
    "contactUs": "Contact Us",
    "readMore": "Read More",
    "download": "Download",
    "viewAll": "View All"
  }
}
```

## RTL Support for Arabic

For Arabic components, consider RTL layout:

```tsx
import { useLocale } from 'next-intl';

export default function RTLComponent() {
  const locale = useLocale();
  const isRTL = locale === 'ar';

  return (
    <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'text-right' : 'text-left'}>
      {/* Your content */}
    </div>
  );
}
```

## Best Practices

1. **Always use translation keys** - Never hardcode text
2. **Use descriptive key names** - Make keys self-documenting
3. **Group related translations** - Use hierarchical structure
4. **Test both languages** - Ensure all translations work
5. **Consider text length** - Arabic text can be longer/shorter
6. **Use common keys** - Reuse common phrases across components

## Adding New Languages

1. Create new locale file: `messages/[locale].json`
2. Add locale to `src/i18n.ts`:
   ```ts
   const locales = ['en', 'ar', 'fr'] as const;
   ```
3. Update middleware if needed

## Testing Localization

1. Switch between languages using the language switcher
2. Verify all text is translated
3. Check RTL layout for Arabic
4. Test responsive design in both languages

## Example: Complete Component Localization

Here's a complete example of localizing a new component:

### 1. Add translations to `messages/en.json`:
```json
{
  "pricing": {
    "title": "Choose Your Plan",
    "subtitle": "Flexible pricing options for every business size",
    "plans": {
      "basic": {
        "title": "Basic",
        "price": "$99",
        "period": "per month",
        "features": ["Feature 1", "Feature 2", "Feature 3"]
      },
      "pro": {
        "title": "Professional",
        "price": "$199",
        "period": "per month",
        "features": ["All Basic features", "Feature 4", "Feature 5"]
      }
    },
    "cta": {
      "button": "Get Started"
    }
  }
}
```

### 2. Add translations to `messages/ar.json`:
```json
{
  "pricing": {
    "title": "اختر خطتك",
    "subtitle": "خيارات أسعار مرنة لكل حجم عمل",
    "plans": {
      "basic": {
        "title": "أساسي",
        "price": "99$",
        "period": "شهرياً",
        "features": ["الميزة الأولى", "الميزة الثانية", "الميزة الثالثة"]
      },
      "pro": {
        "title": "احترافي",
        "price": "199$",
        "period": "شهرياً",
        "features": ["جميع الميزات الأساسية", "الميزة الرابعة", "الميزة الخامسة"]
      }
    },
    "cta": {
      "button": "ابدأ الآن"
    }
  }
}
```

### 3. Create the component:
```tsx
"use client";

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';

export default function PricingComponent() {
  const t = useTranslations();

  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{t('pricing.title')}</h2>
        <p className="text-lg mb-8">{t('pricing.subtitle')}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Basic Plan */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{t('pricing.plans.basic.title')}</h3>
            <div className="text-3xl font-bold mb-2">
              {t('pricing.plans.basic.price')}
              <span className="text-sm font-normal">{t('pricing.plans.basic.period')}</span>
            </div>
            <ul className="mb-6">
              {t.raw('pricing.plans.basic.features').map((feature: string, index: number) => (
                <li key={index} className="mb-2">• {feature}</li>
              ))}
            </ul>
            <Button>{t('pricing.cta.button')}</Button>
          </div>
          
          {/* Pro Plan */}
          <div className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{t('pricing.plans.pro.title')}</h3>
            <div className="text-3xl font-bold mb-2">
              {t('pricing.plans.pro.price')}
              <span className="text-sm font-normal">{t('pricing.plans.pro.period')}</span>
            </div>
            <ul className="mb-6">
              {t.raw('pricing.plans.pro.features').map((feature: string, index: number) => (
                <li key={index} className="mb-2">• {feature}</li>
              ))}
            </ul>
            <Button>{t('pricing.cta.button')}</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Checklist for New Components

- [ ] Add translation keys to `messages/en.json`
- [ ] Add translation keys to `messages/ar.json`
- [ ] Import `useTranslations` in component
- [ ] Replace all hardcoded text with `t('key')`
- [ ] Test component in both languages
- [ ] Check RTL layout for Arabic
- [ ] Verify responsive design
- [ ] Update this guide if needed

## Troubleshooting

### Common Issues:

1. **Translation not showing**: Check if key exists in both language files
2. **RTL not working**: Ensure `useLocale` is imported and RTL logic is implemented
3. **Component not updating**: Make sure component is marked with `"use client"`
4. **Build errors**: Verify all translation keys are properly formatted JSON

### Debug Tips:

- Use `console.log(t('key'))` to debug translation keys
- Check browser dev tools for missing keys
- Verify JSON syntax in translation files 