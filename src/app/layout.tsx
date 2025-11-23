
"use client";
import { Geist, Geist_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import enMessages from './locales/en.json';
import arMessages from './locales/ar.json';
import { useState } from "react";
import './globals.css';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<'en' | 'ar'>('en');

  const messages = locale === 'en' ? enMessages : arMessages;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
 
          <div className="p-2">
            <button
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className="border px-3 py-1 rounded"
            >
              Switch to {locale === 'en' ? 'Arabic' : 'English'}
            </button>
          </div>

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
