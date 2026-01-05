import { ReactNode } from 'react';

export interface Media {
  type: 'image' | 'code' | 'quote' | 'video' | 'audio';
  content?: string; // For text/code content within case studies
  language?: string; // For code blocks
  src?: string; // For archive media sources
  caption?: string; // For image captions
  description?: string; // For archive descriptions
}

export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  media?: Media;
}

export interface Testimonial {
  text: string;
  author: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  client: string;
  role: string;
  timeline: string;
  team: string;
  category: string;
  tags: string[];
  icon: ReactNode;
  color: string;
  summary: string;
  context: string;
  challenge: string;
  solution: string;
  process: ProcessStep[];
  techStack: string[];
  impact: string;
  stats: Stat[];
  testimonial: Testimonial;
}

export interface ArchiveItem {
  id: number;
  year: string;
  title: string;
  category: string;
  link: string | null;
  client: string;
  media?: Media;
}