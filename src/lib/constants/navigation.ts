// lib/constants/navigation.ts
export const NAVIGATION_ITEMS = [
    { id: 'services', label: 'Soluciones', href: '#servicios' },
    { id: 'projects', label: 'Proyectos', href: '#casos' },
    { id: 'tech', label: 'Tecnologías', href: '#tecnologia' },
] as const;

export const BRAND_INFO = {
    name: 'Khannda',
    tagline: 'Built by experts, designed for people', // Tomado de tu logo
    description: 'Desarrollo de software a medida de alto impacto. Transformamos procesos complejos en soluciones digitales intuitivas para cooperativas, gimnasios y empresas en crecimiento.',
    hero: {
        title: 'Software que evoluciona',
        subtitle: 'con tu negocio.',
        description: 'Diseñamos y desarrollamos ecosistemas digitales a la medida. Desde sistemas financieros seguros hasta gestión operativa eficiente.',
        cta: 'Cotizar Proyecto',
        rating: 'Confiado por instituciones financieras.',
    },
} as const;