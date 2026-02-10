import React, { ReactNode } from "react";

export interface CarouselCardData {
  category: string;
  title: string;
  src: string;
  content: ReactNode;
}

export interface CardProps {
  card: CarouselCardData;
  index: number;
  layout?: boolean;
}

export interface CarouselProps {
  items: React.ReactElement[];
  initialScroll?: number;
}
