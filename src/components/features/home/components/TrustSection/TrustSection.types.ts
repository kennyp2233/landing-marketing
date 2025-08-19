// components/features/home/components/TrustSection/TrustSection.types.ts
export interface TrustSectionProps {
    isDark: boolean;
}

export interface TrustItemProps {
    icon: React.ReactNode;
    text: string;
    description?: string;
    isDark: boolean;
}