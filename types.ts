export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  location: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  SERVICES = 'services',
  PROCESS = 'process',
  WORK = 'work',
  CONTACT = 'contact'
}