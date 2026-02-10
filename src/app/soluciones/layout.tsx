import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soluciones de Software y Automatización',
  description: 'Desarrollo de software a medida, automatización de procesos con IA y consultoría tecnológica. Soluciones que impulsan tu negocio.',
  openGraph: {
    title: 'Soluciones de Software y Automatización | Khannda',
    description: 'Desarrollo de software a medida, automatización de procesos con IA y consultoría tecnológica.',
    url: 'https://www.khannda.com/soluciones',
  },
  alternates: {
    canonical: 'https://www.khannda.com/soluciones',
  },
};

export default function SolucionesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
