// lib/constants/colors.ts
export const COLORS = {
    brand: {
        white: '#ffffff',
        purple: '#6c26f9',
        magenta: '#d507fa',
        darkBlue: '#1332e9',
        lightBlue: '#0586fd',
    },
    gradients: {
        // Gradiente principal consistente con la paleta
        primary: 'from-[#6c26f9] via-[#d507fa] to-[#0586fd]',
        // Gradiente para estrellas
        stars: 'from-[#6c26f9] to-[#d507fa]',
        // Gradiente para texto hero (vertical)
        heroText: 'bg-gradient-to-b from-[#6c26f9] via-[#d507fa] to-[#0586fd]',
        // Gradiente para badge (plomo a transparente)
        badge: 'bg-gradient-to-t from-gray-900/80 to-transparent',
    },
    neutral: {
        // Tonos grises para badges y bordes
        gray: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
        },
    },
    themes: {
        light: {
            background: 'transparent', // Fondo limpio
            foreground: '#000000',
            muted: '#f8f9fa',
            border: '#e9ecef',
        },
        dark: {
            background: 'transparent', // Fondo limpio
            foreground: '#ffffff',
            muted: '#1a1a2e',
            border: '#16213e',
        },
    },
} as const;