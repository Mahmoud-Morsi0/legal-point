"use client"

import { useLocale } from 'next-intl'
import { useEffect } from 'react'

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale()

  useEffect(() => {
    // Set the document language and direction based on locale
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
  }, [locale])

  return <>{children}</>
} 