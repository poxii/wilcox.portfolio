import RootLayout from '@/components/layouts/RootLayout';

import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://wilcox-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
    type: 'website',
    images: '/avatar.webp',
  },
  twitter: {
    images: '/avatar.webp',
  },
  verification: {
    google: '',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/logo192.png',
    apple: '/logo192.png',
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
};

export const viewport: Viewport = {
  themeColor: 'black',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
