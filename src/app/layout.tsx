// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GlowUp Media - Impulsa tu marca. Eleva tu impacto',
  description: 'Agencia de marketing digital innovadora y estratégica. Creamos estrategias digitales que multiplican tus clientes garantizando resultados medibles y rentables.',
  keywords: 'marketing digital, agencia marketing, estrategias digitales, redes sociales, contenido creativo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
