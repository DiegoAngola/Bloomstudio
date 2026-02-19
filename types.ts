import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  duration?: string;
  image?: string;
}

export interface EducationTip {
  id: string;
  title: string;
  content: string;
  icon: LucideIcon;
}

export interface NavLink {
  label: string;
  href: string;
}