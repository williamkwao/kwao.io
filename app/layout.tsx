import type { Metadata } from 'next';
import { Oxygen, Mulish, Source_Serif_4 } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import './globals.css';

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-oxygen',
  display: 'swap',
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-mulish',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'kwao.io',
    template: '%s | kwao.io',
  },
  description:
    "Hi I'm William Kwao. A software Engineer, minimalist & side-project junkie. Currently working @ Apple, previously @ Meta & Walmart.",
  metadataBase: new URL('https://kwao.io'),
  openGraph: {
    title: 'kwao.io',
    description:
      "Hi I'm William Kwao. A software Engineer, minimalist & side-project junkie.",
    url: 'https://kwao.io',
    siteName: 'kwao.io',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'kwao.io',
    description:
      "Hi I'm William Kwao. A software Engineer, minimalist & side-project junkie.",
    creator: '@therealkwao',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${oxygen.variable} ${mulish.variable} ${sourceSerif.variable}`}
    >
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
