// lib/constants/navigation.ts
export const NAVIGATION_ITEMS = [
    { id: 'services', label: 'Servicios', href: '#servicios' },
    { id: 'cases', label: 'Casos de Éxito', href: '#casos' },
    { id: 'portfolio', label: 'Portafolio', href: '#portafolio' },
] as const;

export const BRAND_INFO = {
    name: 'GlowUp Media',
    tagline: 'Impulsa tu marca. Eleva tu impacto',
    description: 'Agencia de marketing digital innovadora y estratégica, especializada en crear experiencias de alto impacto.',
    hero: {
        title: 'Aumenta tus Ventas',
        subtitle: '300% en X Días.',
        description: 'Creamos estrategias digitales que multiplican tus clientes garantizando resultados medibles y rentables.',
        cta: 'Agenda tu Auditoría GRATIS',
        rating: 'Basado en x opiniones.',
    },
} as const;