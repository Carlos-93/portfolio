export interface Skill {
    name: string;
    image: string;
}

export interface Experience {
    title: string;
    company: string;
    location: string;
    date: string;
    description: string;
    image: string;
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
    title: string;
    description: string;
    image: string;
    href: string;
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