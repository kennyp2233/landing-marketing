export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  image: string;
}

export interface TeamSectionProps {
  isDark?: boolean;
}

export interface TeamCardProps {
  member: TeamMember;
  isDark?: boolean;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: React.Dispatch<React.SetStateAction<number | null>>;
}