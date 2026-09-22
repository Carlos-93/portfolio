import type { Skill, SkillCategory, Experience, Education, Certificate, Project, SocialNetwork, Language, SpokenLanguage, NavItem } from "./types";

// Skills Object
export const skills: Skill[] = [
    // Operating Systems
    { name: "Windows", image: "windows.svg", category: "os", url: "https://www.microsoft.com/windows" },
    { name: "Windows Server", image: "windows-server.svg", category: "os", url: "https://www.microsoft.com/windows-server" },
    { name: "Ubuntu", image: "ubuntu.svg", category: "os", url: "https://ubuntu.com" },
    { name: "Ubuntu Server", image: "ubuntu-server.svg", category: "os", url: "https://ubuntu.com/server" },
    // Frontend
    { name: "HTML5", image: "html.svg", category: "frontend", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", image: "css.svg", category: "frontend", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", image: "javascript.svg", category: "frontend", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", image: "typescript.svg", category: "frontend", url: "https://www.typescriptlang.org" },
    { name: "React", image: "react.svg", category: "frontend", url: "https://react.dev" },
    { name: "Angular", image: "angular.svg", category: "frontend", url: "https://angular.dev" },
    { name: "Next.js", image: "nextjs.svg", category: "frontend", url: "https://nextjs.org", invertOnDark: true },
    { name: "Tailwind CSS", image: "tailwind.svg", category: "frontend", url: "https://tailwindcss.com" },
    { name: "Bootstrap", image: "bootstrap.svg", category: "frontend", url: "https://getbootstrap.com" },
    // Backend
    { name: "Node.js", image: "nodejs.svg", category: "backend", url: "https://nodejs.org" },
    { name: "Express.js", image: "express.svg", category: "backend", url: "https://expressjs.com", invertOnDark: true },
    { name: "Java", image: "java.svg", category: "backend", url: "https://www.java.com" },
    { name: "Spring Boot", image: "spring.svg", category: "backend", url: "https://spring.io/projects/spring-boot" },
    { name: "PHP", image: "php.svg", category: "backend", url: "https://www.php.net" },
    { name: "Laravel", image: "laravel.svg", category: "backend", url: "https://laravel.com" },
    { name: "Symfony", image: "symfony.svg", category: "backend", url: "https://symfony.com", invertOnDark: true },
    { name: "C++", image: "cplusplus.svg", category: "backend", url: "https://isocpp.org" },
    { name: "Visual Basic 6.0", image: "visualbasic.svg", category: "backend", url: "https://learn.microsoft.com/en-us/previous-versions/visualstudio/visual-basic-6/visual-basic-6.0-documentation" },
    { name: "SQL & PL/SQL", image: "sql.svg", category: "backend", url: "https://www.oracle.com/database/technologies/appdev/plsql.html" },
    // Databases
    { name: "MySQL", image: "mysql.svg", category: "database", url: "https://www.mysql.com" },
    { name: "PostgreSQL", image: "postgresql.svg", category: "database", url: "https://www.postgresql.org" },
    { name: "MongoDB", image: "mongodb.svg", category: "database", url: "https://www.mongodb.com" },
    { name: "Oracle Database", image: "oracle.svg", category: "database", url: "https://www.oracle.com/database" },
    // Tools
    { name: "Git", image: "git.svg", category: "tools", url: "https://git-scm.com" },
    { name: "GitHub", image: "github.svg", category: "tools", url: "https://github.com", invertOnDark: true },
    { name: "GitLab", image: "gitlab.svg", category: "tools", url: "https://about.gitlab.com" },
    { name: "Bitbucket", image: "bitbucket.svg", category: "tools", url: "https://bitbucket.org" },
    { name: "DBeaver", image: "dbeaver.svg", category: "tools", url: "https://dbeaver.io" },
    { name: "Cypress", image: "cypress.svg", category: "tools", url: "https://www.cypress.io" },
    { name: "Figma", image: "figma.svg", category: "tools", url: "https://www.figma.com" },
    { name: "Vite", image: "vite.svg", category: "tools", url: "https://vite.dev" },
];

// Experiences Object
export const experiences: Experience[] = [
    {
        id: "sece",
        company: "Sociedad Española de Construcciones Eléctricas (SECE)",
        role: "Frontend Web Developer · UX/UI Designer",
        logo: "/assets/images/companies/sece.webp",
        logoScale: 1.35,
        start: "2025-02",
    },
    {
        id: "pkfAttest",
        company: "PKF Attest",
        role: "Full Stack Web Developer",
        logo: "/assets/images/companies/pkf-attest.webp",
        start: "2024-09",
        end: "2025-02",
    },
    {
        id: "essistemas",
        company: "ESSistemas",
        role: "Frontend Web Developer",
        logo: "/assets/images/companies/essistemas.webp",
        start: "2023-10",
        end: "2024-04",
    },
];

// Educations Object
export const educations: Education[] = [
    { id: "daw", institution: "Monlau Centre d'Estudis", logo: "/assets/images/companies/monlau.webp", url: "https://www.monlau.com", file: "/assets/certificates/education-daw.pdf" },
];

// Certificates Object
export const certificates: Certificate[] = [
    { id: "angularTypeScript", issuer: "Monlau Centre d'Estudis", logo: "/assets/images/companies/monlau.webp", file: "/assets/certificates/certificate-angular-typescript.pdf" },
    { id: "javaSeProgramming", issuer: "Monlau Centre d'Estudis", logo: "/assets/icons/oracle.svg", file: "/assets/certificates/certificate-java-se-programming.pdf" },
    { id: "googleWebDev1", issuer: "Google Actívate", logo: "/assets/icons/google.svg", file: "/assets/certificates/certificate-google-web-dev-1.pdf" },
    { id: "googleWebDev2", issuer: "Google Actívate", logo: "/assets/icons/google.svg", file: "/assets/certificates/certificate-google-web-dev-2.pdf" },
    { id: "googleMobileApps", issuer: "Google Actívate", logo: "/assets/icons/google.svg", file: "/assets/certificates/certificate-google-mobile-apps.pdf" },
    { id: "javaSeFundamentals", issuer: "Monlau Centre d'Estudis", logo: "/assets/icons/oracle.svg", file: "/assets/certificates/certificate-java-se-fundamentals.pdf" },
    { id: "oraclePlsql", issuer: "Monlau Centre d'Estudis", logo: "/assets/icons/oracle.svg", file: "/assets/certificates/certificate-oracle-plsql.pdf" },
    { id: "oracleSqlFundamentals", issuer: "Monlau Centre d'Estudis", logo: "/assets/icons/oracle.svg", file: "/assets/certificates/certificate-oracle-sql-fundamentals.pdf" },
    { id: "aspIntro", issuer: "Monlau Centre d'Estudis", logo: "/assets/images/companies/monlau.webp", file: "/assets/certificates/certificate-asp-intro.pdf" },
    { id: "udemyHtml5", issuer: "Udemy", logo: "/assets/images/companies/udemy.png", file: "/assets/certificates/certificate-udemy-html5.pdf" },
    { id: "linux", issuer: "Monlau Centre d'Estudis", logo: "/assets/icons/lpi.svg", file: "/assets/certificates/certificate-linux.pdf" },
    { id: "windows", issuer: "Monlau Centre d'Estudis", logo: "/assets/icons/windows.svg", file: "/assets/certificates/certificate-windows.pdf" },
    { id: "googleCybersecurity", issuer: "Google Actívate", logo: "/assets/icons/google.svg", file: "/assets/certificates/certificate-google-cybersecurity.pdf" },
];

// Projects Object
export const projects: Project[] = [
    {
        id: "reactPokedex",
        title: "React Pokédex",
        tags: ["React", "JavaScript", "PokeAPI", "CSS3"],
        demoUrl: "https://react-pokedex-rose.vercel.app",
        repoUrl: "https://github.com/Carlos-93/react-pokedex",
    },
    {
        id: "reactWeatherMap",
        title: "React Weather Map",
        tags: ["React", "JavaScript", "API", "CSS3"],
        demoUrl: "https://react-weather-map-gamma.vercel.app",
        repoUrl: "https://github.com/Carlos-93/react-weather-map",
    },
    {
        id: "angularRouting",
        title: "Angular Routing, Services & Forms",
        tags: ["Angular", "TypeScript", "Tailwind CSS", "HTML5"],
        demoUrl: "https://angular-routing-services-forms.vercel.app",
        repoUrl: "https://github.com/Carlos-93/angular-routing-services-forms",
    },
];

// Social Networks Object

// Contact email, linked from the hero and the footer
export const EMAIL = 'ca.galvan@outlook.com';

export const socialNetworks: SocialNetwork[] = [
    { href: "https://www.linkedin.com/in/carlos-araujo-galvan/", src: `/assets/icons/linkedin.svg`, alt: "LinkedIn" },
    { href: "https://www.github.com/Carlos-93", src: `/assets/icons/github_dark.svg`, alt: "GitHub", invertOnLight: true },

    { href: `mailto:${EMAIL}`, src: `/assets/icons/outlook.svg`, alt: "Outlook" },
];

// Languages Object
export const languages: Language[] = [
    { code: 'es', name: 'Español', flag: `/assets/images/flags/spain.webp` },
    { code: 'ca', name: 'Català', flag: `/assets/images/flags/catalonia.webp` },
    { code: 'en', name: 'English', flag: `/assets/images/flags/united-kingdom.webp` },
    { code: 'de', name: 'Deutsch', flag: `/assets/images/flags/germany.webp` },
    { code: 'it', name: 'Italiano', flag: `/assets/images/flags/italy.webp` },
    { code: 'fr', name: 'Français', flag: `/assets/images/flags/france.webp` },
];

// Spoken Languages Object
export const spokenLanguages: SpokenLanguage[] = [
    { id: "spanish", flag: `/assets/images/flags/spain.webp` },
    { id: "catalan", flag: `/assets/images/flags/catalonia.webp` },
    { id: "english", flag: `/assets/images/flags/united-kingdom.webp` },
];

// Navigation Object
export const navItems: NavItem[] = [
    {
        id: 'home',
        paths: [
            'M5 12l-2 0l9 -9l9 9l-2 0',
            'M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7',
            'M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6',
        ],
    },
    {
        id: 'about',
        paths: [
            'M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0',
            'M6 21v-2a4 4 0 0 1 4 -4h3',
            'M16 22l5 -5',
            'M21 21.5v-4.5h-4.5',
        ],
    },
    {
        id: 'experience',
        paths: [
            'M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z',
            'M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2',
            'M12 12l0 .01',
            'M3 13a20 20 0 0 0 18 0',
        ],
    },
    {
        id: 'projects',
        paths: [
            'M3 4l18 0',
            'M4 4v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-10',
            'M12 16l0 4',
            'M9 20l6 0',
            'M8 12l3 -3l2 2l3 -3',
        ],
    },
    {
        id: 'skills',
        paths: [
            'M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z',
        ],
    },
    {
        id: 'education',
        paths: [
            'M22 9l-10 -4l-10 4l10 4l10 -4v6',
            'M6 10.6v5.4a6 3 0 0 0 12 0v-5.4',
        ],
    },
    {
        id: 'certifications',
        paths: [
            'M15 15m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0',
            'M13 17.5v4.5l2 -1.5l2 1.5v-4.5',
            'M10 19h-5a2 2 0 0 1 -2 -2v-10c0 -1.1 .9 -2 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -1 1.73',
            'M6 9l12 0',
            'M6 12l3 0',
            'M6 15l2 0',
        ],
    },
    {
        id: 'languages',
        paths: [
            'M4 5h7',
            'M9 3v2c0 4.418 -2.239 8 -5 8',
            'M5 9c0 2.144 2.952 3.908 6.7 4',
            'M12 20l4 -9l4 9',
            'M19.1 18h-6.2',
        ],
    },
    {
        id: 'contact',
        paths: [
            'M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2',
            'M15 7a2 2 0 0 1 2 2',
            'M15 3a6 6 0 0 1 6 6',
        ],
    },
];

// Skill Categories Object — render order for the skill categories (each maps to an i18n label key)
export const skillCategories: SkillCategory[] = ['os', 'frontend', 'backend', 'database', 'tools'];

// Language Colors Object — GitHub linguist colors for the languages used in the featured repos
export const languageColors: Record<string, string> = {
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    HTML: '#e34c26',
    CSS: '#663399',
};

// Full name used to build the document title
export const FULL_NAME = 'Carlos Araujo Galván';

// Storage Key for the dark mode
export const STORAGE_KEY = 'dark-mode';

// Session Storage Key for the cached GitHub stats
export const GITHUB_STATS_CACHE_KEY = 'github-stats';