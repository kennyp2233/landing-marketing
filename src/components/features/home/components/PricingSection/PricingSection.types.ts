export interface PricingPlan {
  name: string;
  tier: string;
  description: string;
  features: string[];
  highlight: boolean;
}

export interface PricingSectionProps {
  isDark?: boolean;
}