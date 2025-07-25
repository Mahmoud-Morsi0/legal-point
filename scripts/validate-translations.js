#!/usr/bin/env node

/**
 * Translation validation script
 * Checks that all keys exist in both English and Arabic translation files
 */

const fs = require('fs');
const path = require('path');

// Load translation files
const enTranslations = JSON.parse(fs.readFileSync(path.join(__dirname, '../messages/en.json'), 'utf8'));
const arTranslations = JSON.parse(fs.readFileSync(path.join(__dirname, '../messages/ar.json'), 'utf8'));

/**
 * Get all nested keys from an object
 */
function getAllKeys(obj, prefix = '') {
  const keys = [];
  
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...getAllKeys(value, fullKey));
    } else {
      keys.push(fullKey);
    }
  }
  
  return keys;
}

/**
 * Get value by nested key
 */
function getNestedValue(obj, key) {
  return key.split('.').reduce((current, k) => current?.[k], obj);
}

/**
 * Validate translations
 */
function validateTranslations() {
  console.log('🔍 Validating translations...\n');
  
  const enKeys = getAllKeys(enTranslations);
  const arKeys = getAllKeys(arTranslations);
  
  const missingInArabic = enKeys.filter(key => !getNestedValue(arTranslations, key));
  const missingInEnglish = arKeys.filter(key => !getNestedValue(enTranslations, key));
  
  let hasErrors = false;
  
  if (missingInArabic.length > 0) {
    console.log('❌ Missing keys in Arabic translations:');
    missingInArabic.forEach(key => console.log(`   - ${key}`));
    hasErrors = true;
  }
  
  if (missingInEnglish.length > 0) {
    console.log('\n❌ Missing keys in English translations:');
    missingInEnglish.forEach(key => console.log(`   - ${key}`));
    hasErrors = true;
  }
  
  if (!hasErrors) {
    console.log('✅ All translation keys are present in both languages!');
    console.log(`📊 Total keys: ${enKeys.length}`);
  }
  
  // Check for empty values
  const emptyEnKeys = enKeys.filter(key => {
    const value = getNestedValue(enTranslations, key);
    return value === '' || value === null || value === undefined;
  });
  
  const emptyArKeys = arKeys.filter(key => {
    const value = getNestedValue(arTranslations, key);
    return value === '' || value === null || value === undefined;
  });
  
  if (emptyEnKeys.length > 0) {
    console.log('\n⚠️  Empty values in English translations:');
    emptyEnKeys.forEach(key => console.log(`   - ${key}`));
  }
  
  if (emptyArKeys.length > 0) {
    console.log('\n⚠️  Empty values in Arabic translations:');
    emptyArKeys.forEach(key => console.log(`   - ${key}`));
  }
  
  return !hasErrors;
}

/**
 * Generate translation key suggestions
 */
function generateSuggestions() {
  console.log('\n💡 Translation key suggestions:');
  console.log('Use these patterns for consistent naming:\n');
  
  const suggestions = [
    'component.title',
    'component.subtitle', 
    'component.description',
    'component.features.title',
    'component.features.list',
    'component.cards.cardName.title',
    'component.cards.cardName.description',
    'component.cta.button',
    'component.form.fieldName.label',
    'component.form.fieldName.placeholder',
    'component.form.submit',
    'navigation.itemName',
    'common.actionName',
    'status.messageType'
  ];
  
  suggestions.forEach(suggestion => {
    console.log(`   ${suggestion}`);
  });
}

// Run validation
const isValid = validateTranslations();

if (isValid) {
  generateSuggestions();
} else {
  console.log('\n❌ Translation validation failed!');
  console.log('Please add missing keys to both language files.');
  process.exit(1);
} 