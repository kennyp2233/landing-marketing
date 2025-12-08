// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../providers';

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
    <html lang="es">
  <body>
        <ThemeProvider defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
