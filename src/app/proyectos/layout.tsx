import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Proyectos y Casos de Éxito',
  description: 'Descubre cómo Khannda ha transformado negocios con soluciones tecnológicas a medida. Casos de éxito en finanzas, fitness y e-commerce.',
  openGraph: {
    title: 'Proyectos y Casos de Éxito | Khannda',
    description: 'Descubre cómo Khannda ha transformado negocios con soluciones tecnológicas a medida.',
    url: 'https://www.khannda.com/proyectos',
  },
  alternates: {
    canonical: 'https://www.khannda.com/proyectos',
  },
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
