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
    title: 'William Kwao',
    description:
      "Hi I'm William Kwao. A software Engineer, minimalist & side-project junkie.",
    url: 'https://kwao.io',
    siteName: 'kwao.io',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/api/og?title=William%20Kwao&description=Software%20Engineer%2C%20minimalist%20%26%20hustler&type=home',
        width: 1200,
        height: 630,
        alt: 'William Kwao - Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William Kwao',
    description:
      "Hi I'm William Kwao. A software Engineer, minimalist & side-project junkie.",
    creator: '@therealkwao',
    images: ['/api/og?title=William%20Kwao&description=Software%20Engineer%2C%20minimalist%20%26%20hustler&type=home'],
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
