// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../providers';
import { LenisProvider } from '../providers/LenisProvider';
import { LanguageProvider } from '../providers/LanguageProvider';

export const metadata: Metadata = {
  title: 'Khannda - Tu Software, hecho a medida',
  description: 'Agencia de marketing digital innovadora y estratégica. Creamos estrategias digitales que multiplican tus clientes garantizando resultados medibles y rentables.',
  keywords: 'marketing digital, agencia marketing, estrategias digitales, redes sociales, contenido creativo',
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
