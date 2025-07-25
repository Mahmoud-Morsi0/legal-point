/**
 * Localization utility functions for the Legal Point project
 */

import { useTranslations } from 'next-intl';

/**
 * Hook to validate that all required translation keys exist
 * Use this in development to catch missing translations
 */
export function useTranslationValidation(requiredKeys: string[]) {
  const t = useTranslations();
  
  if (process.env.NODE_ENV === 'development') {
    const missingKeys: string[] = [];
    
    requiredKeys.forEach(key => {
      try {
        t(key);
      } catch (error) {
        missingKeys.push(key);
      }
    });
    
    if (missingKeys.length > 0) {
      console.warn('Missing translation keys:', missingKeys);
    }
  }
  
  return t;
}

/**
 * Utility to check if a translation key exists
 */
export function hasTranslation(t: any, key: string): boolean {
  try {
    t(key);
    return true;
  } catch {
    return false;
  }
}

/**
 * Utility to get translation with fallback
 */
export function getTranslationWithFallback(t: any, key: string, fallback: string): string {
  try {
    return t(key);
  } catch {
    console.warn(`Translation key "${key}" not found, using fallback`);
    return fallback;
  }
}

/**
 * Utility to format translation keys for better organization
 */
export function formatTranslationKey(component: string, section: string, key: string): string {
  return `${component}.${section}.${key}`;
}

/**
 * Common translation key patterns
 */
export const TRANSLATION_PATTERNS = {
  // Component structure
  COMPONENT: {
    TITLE: (component: string) => `${component}.title`,
    SUBTITLE: (component: string) => `${component}.subtitle`,
    DESCRIPTION: (component: string) => `${component}.description`,
  },
  
  // CTA patterns
  CTA: {
    BUTTON: (component: string) => `${component}.cta.button`,
    LINK: (component: string) => `${component}.cta.link`,
    TEXT: (component: string) => `${component}.cta.text`,
  },
  
  // Feature patterns
  FEATURES: {
    TITLE: (component: string) => `${component}.features.title`,
    LIST: (component: string) => `${component}.features.list`,
    ITEM: (component: string, index: number) => `${component}.features.items.${index}`,
  },
  
  // Card patterns
  CARDS: {
    TITLE: (component: string, card: string) => `${component}.cards.${card}.title`,
    DESCRIPTION: (component: string, card: string) => `${component}.cards.${card}.description`,
    CTA: (component: string, card: string) => `${component}.cards.${card}.cta`,
  },
  
  // Form patterns
  FORM: {
    LABEL: (component: string, field: string) => `${component}.form.${field}.label`,
    PLACEHOLDER: (component: string, field: string) => `${component}.form.${field}.placeholder`,
    ERROR: (component: string, field: string) => `${component}.form.${field}.error`,
    SUBMIT: (component: string) => `${component}.form.submit`,
  },
  
  // Navigation patterns
  NAV: {
    ITEM: (item: string) => `navigation.${item}`,
    BREADCRUMB: (item: string) => `breadcrumb.${item}`,
  },
  
  // Common actions
  COMMON: {
    LEARN_MORE: 'common.learnMore',
    GET_STARTED: 'common.getStarted',
    CONTACT_US: 'common.contactUs',
    READ_MORE: 'common.readMore',
    DOWNLOAD: 'common.download',
    VIEW_ALL: 'common.viewAll',
    CLOSE: 'common.close',
    SAVE: 'common.save',
    CANCEL: 'common.cancel',
    DELETE: 'common.delete',
    EDIT: 'common.edit',
    ADD: 'common.add',
    REMOVE: 'common.remove',
  },
  
  // Status messages
  STATUS: {
    LOADING: 'status.loading',
    SUCCESS: 'status.success',
    ERROR: 'status.error',
    NO_DATA: 'status.noData',
    NOT_FOUND: 'status.notFound',
  },
} as const;

/**
 * Type for translation key patterns
 */
export type TranslationPattern = typeof TRANSLATION_PATTERNS;

/**
 * Hook to get common translation keys
 */
export function useCommonTranslations() {
  const t = useTranslations();
  
  return {
    learnMore: t(TRANSLATION_PATTERNS.COMMON.LEARN_MORE),
    getStarted: t(TRANSLATION_PATTERNS.COMMON.GET_STARTED),
    contactUs: t(TRANSLATION_PATTERNS.COMMON.CONTACT_US),
    readMore: t(TRANSLATION_PATTERNS.COMMON.READ_MORE),
    download: t(TRANSLATION_PATTERNS.COMMON.DOWNLOAD),
    viewAll: t(TRANSLATION_PATTERNS.COMMON.VIEW_ALL),
    close: t(TRANSLATION_PATTERNS.COMMON.CLOSE),
    save: t(TRANSLATION_PATTERNS.COMMON.SAVE),
    cancel: t(TRANSLATION_PATTERNS.COMMON.CANCEL),
    delete: t(TRANSLATION_PATTERNS.COMMON.DELETE),
    edit: t(TRANSLATION_PATTERNS.COMMON.EDIT),
    add: t(TRANSLATION_PATTERNS.COMMON.ADD),
    remove: t(TRANSLATION_PATTERNS.COMMON.REMOVE),
  };
}

/**
 * Hook to get status translations
 */
export function useStatusTranslations() {
  const t = useTranslations();
  
  return {
    loading: t(TRANSLATION_PATTERNS.STATUS.LOADING),
    success: t(TRANSLATION_PATTERNS.STATUS.SUCCESS),
    error: t(TRANSLATION_PATTERNS.STATUS.ERROR),
    noData: t(TRANSLATION_PATTERNS.STATUS.NO_DATA),
    notFound: t(TRANSLATION_PATTERNS.STATUS.NOT_FOUND),
  };
}

/**
 * Utility to generate translation key suggestions
 */
export function suggestTranslationKeys(componentName: string): Record<string, string> {
  return {
    title: TRANSLATION_PATTERNS.COMPONENT.TITLE(componentName),
    subtitle: TRANSLATION_PATTERNS.COMPONENT.SUBTITLE(componentName),
    description: TRANSLATION_PATTERNS.COMPONENT.DESCRIPTION(componentName),
    ctaButton: TRANSLATION_PATTERNS.CTA.BUTTON(componentName),
    featuresTitle: TRANSLATION_PATTERNS.FEATURES.TITLE(componentName),
    featuresList: TRANSLATION_PATTERNS.FEATURES.LIST(componentName),
  };
}

/**
 * Debug utility to log all translation keys for a component
 */
export function debugTranslations(t: any, componentName: string) {
  if (process.env.NODE_ENV === 'development') {
    const suggestions = suggestTranslationKeys(componentName);
    const existingKeys: string[] = [];
    const missingKeys: string[] = [];
    
    Object.entries(suggestions).forEach(([key, translationKey]) => {
      if (hasTranslation(t, translationKey)) {
        existingKeys.push(translationKey);
      } else {
        missingKeys.push(translationKey);
      }
    });
    
    console.group(`Translation Debug: ${componentName}`);
    console.log('Existing keys:', existingKeys);
    console.log('Missing keys:', missingKeys);
    console.log('Suggestions:', suggestions);
    console.groupEnd();
  }
} 