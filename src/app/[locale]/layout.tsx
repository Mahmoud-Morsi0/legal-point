import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {ThemeProvider} from '@/components/theme-provider';
import {LocaleProvider} from '@/components/locale-provider';
import '../globals.css';

import { Inter, Roboto } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({ 
  weight: ['400', '700'],
  subsets: ['latin'] 
})

const locales = ['ar', 'en'] as const;
type Locale = typeof locales[number];

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <NextIntlClientProvider messages={messages}>
                     <LocaleProvider>
               <Header />
               <main className="flex-1" style={{fontFamily: roboto.style.fontFamily}}>
                 {children}
               </main>
               <Footer />
             </LocaleProvider>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
} 