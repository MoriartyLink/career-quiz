export type RoleId =
  | 'architect'
  | 'devops'
  | 'pm'
  | 'tech_lead'
  | 'backend'
  | 'software_engineer'
  | 'ai_engineer'
  | 'data_analyst'
  | 'other';

export interface Option {
  text: string;
  scores: Partial<Record<RoleId, number>>;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface RoadmapStep {
  title: string;
  description: string;
  resources?: string[];
}

export interface CareerRoadmap {
  id: RoleId;
  title: string;
  description: string;
  traits: string; // How this fits INTJ/ADHD/Plant
  steps: RoadmapStep[];
}

export interface ExampleFigure {
  region: string;
  name: string;
  role: string;
  linkedinUrl: string;
  similarity: string;
}
