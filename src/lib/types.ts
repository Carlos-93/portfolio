import type { ReactNode } from 'react';

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
    logoScale?: number;
    start: string;
    end?: string;
}

export interface Education {
    id: string;
    institution: string;
    logo: string;
    url?: string;
    file?: string;
}

export interface Certificate {
    id: string;
    issuer: string;
    logo: string;
    url?: string;
    file?: string;
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

export interface SpokenLanguage {
    id: string;
    flag: string;
}

export interface RepoStats {
    stars: number;
    language: string | null;
}

export interface GithubRepo {
    stargazers_count: number;
    language: string | null;
}

export interface RevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export interface SectionHeaderProps {
    title: string;
}