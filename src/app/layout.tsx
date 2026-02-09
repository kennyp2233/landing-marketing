// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../providers';
import { LenisProvider } from '../providers/LenisProvider';
import { LanguageProvider } from '../providers/LanguageProvider';

export const metadata: Metadata = {
  title: 'Khannda - Desarrollo de Software y Estrategia Digital',
  description: 'Transformamos negocios con software a medida y estrategias digitales de alto impacto. Expertos en desarrollo web, aplicaciones móviles y automatización de procesos.',
  keywords: 'desarrollo de software, software a medida, aplicaciones web, apps móviles, transformación digital, consultoría tecnológica, automatización, diseño ux ui, khannda',
  openGraph: {
    title: 'Khannda - Desarrollo de Software y Estrategia Digital',
    description: 'Impulsamos tu empresa con tecnología de vanguardia. Desarrollo a medida, inteligencia artificial y estrategias digitales.',
    url: 'https://www.khannda.com',
    siteName: 'Khannda',
    images: [
      {
        url: '/og-image.jpg', // Ensure this image exists or use a default one if available, otherwise just keeping the structure is good practice
        width: 1200,
        height: 630,
        alt: 'Khannda - Software y Estrategia Digital',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <LanguageProvider defaultLanguage="es">
            <LenisProvider>
              {children}
            </LenisProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
