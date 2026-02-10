// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../providers';
import { LenisProvider } from '../providers/LenisProvider';
import { LanguageProvider } from '../providers/LanguageProvider';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.khannda.com'),
  title: {
    default: 'Khannda - Desarrollo de Software y Estrategia Digital',
    template: '%s | Khannda',
  },
  description: 'Transformamos negocios con software a medida y estrategias digitales de alto impacto. Expertos en desarrollo web, aplicaciones móviles y automatización de procesos.',
  keywords: 'desarrollo de software, software a medida, aplicaciones web, apps móviles, transformación digital, consultoría tecnológica, automatización, diseño ux ui, khannda',
  authors: [{ name: 'Khannda' }],
  creator: 'Khannda',
  icons: {
    icon: [
      {
        url: '/icon-light.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  openGraph: {
    title: 'Khannda - Desarrollo de Software y Estrategia Digital',
    description: 'Impulsamos tu empresa con tecnología de vanguardia. Desarrollo a medida, inteligencia artificial y estrategias digitales.',
    url: 'https://www.khannda.com',
    siteName: 'Khannda',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Khannda - Software y Estrategia Digital',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khannda - Desarrollo de Software y Estrategia Digital',
    description: 'Impulsamos tu empresa con tecnología de vanguardia. Desarrollo a medida, inteligencia artificial y estrategias digitales.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.khannda.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD structured data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Khannda',
  url: 'https://www.khannda.com',
  logo: 'https://www.khannda.com/logo-khannda.png',
  description: 'Desarrollo de software a medida y estrategia digital. Automatización, aplicaciones web y móviles, consultoría tecnológica.',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+593995498636',
    contactType: 'sales',
    availableLanguage: ['Spanish', 'English'],
  },
  service: [
    {
      '@type': 'Service',
      name: 'Desarrollo de Software',
      description: 'Aplicaciones web y móviles a medida con tecnologías modernas.',
    },
    {
      '@type': 'Service',
      name: 'Automatización de Procesos',
      description: 'Flujos de trabajo automatizados con n8n y herramientas de integración.',
    },
    {
      '@type': 'Service',
      name: 'Consultoría Tecnológica',
      description: 'Análisis, optimización y transformación digital de procesos empresariales.',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider defaultLanguage="es">
            <LenisProvider>
              {children}
            </LenisProvider>
          </LanguageProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
