export type SkillCategory = 'os' | 'frontend' | 'backend' | 'database' | 'tools';

export interface Skill {
    name: string;
    image: string;
    category: SkillCategory;
    url: string;
    invertOnDark?: boolean;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    logo: string;
    start: string;
    end?: string;
}

export interface Education {
    title: string;
    company: string;
    date: string;
    image: string;
}

export interface Certificate {
    title: string;
    company: string;
    location: string;
    date: string;
    image: string;
}

export interface Project {
    id: string;
    title: string;
    image?: string;
    tags: string[];
    demoUrl?: string;
    repoUrl?: string;
}

export interface SocialNetwork {
    href: string;
    src: string;
    alt: string;
}

export interface Language {
    code: string;
    name: string;
    flag: string;
}

export interface SectionHeaderProps {
    title: string;
}