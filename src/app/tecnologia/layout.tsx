import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stack Tecnológico',
  description: 'Conoce las tecnologías que usamos: React, Next.js, Node.js, Python, n8n, PostgreSQL y más. Herramientas modernas para soluciones robustas.',
  openGraph: {
    title: 'Stack Tecnológico | Khannda',
    description: 'Conoce las tecnologías que usamos para construir soluciones robustas y escalables.',
    url: 'https://www.khannda.com/tecnologia',
  },
  alternates: {
    canonical: 'https://www.khannda.com/tecnologia',
  },
};

export default function TecnologiaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
