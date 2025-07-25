import { notFound } from 'next/navigation';
import { getRequestConfig, GetRequestConfigParams } from 'next-intl/server';

// Can be imported from a shared config
const locales = ['en', 'ar'] as const;
type Locale = typeof locales[number];

export default getRequestConfig(async ({ requestLocale }: GetRequestConfigParams) => {
    // Validate that the incoming `locale` parameter is valid
    const locale = await requestLocale;
    if (!locales.includes(locale as Locale)) notFound();

    return {
        locale: locale as Locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
}); 