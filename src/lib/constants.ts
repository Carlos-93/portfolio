import type { Skill, Experience, Education, Certificate, Project, SocialNetwork, Language, SpokenLanguage } from "./types";

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
        logo: "/assets/images/companies/sece.png",
        logoScale: 1.35,
        start: "2025-02",
    },
    {
        id: "pkfAttest",
        company: "PKF Attest",
        role: "Full Stack Web Developer",
        logo: "/assets/images/companies/pkf-attest.png",
        start: "2024-09",
        end: "2025-02",
    },
    {
        id: "essistemas",
        company: "ESSistemas",
        role: "Frontend Web Developer",
        logo: "/assets/images/companies/essistemas.png",
        start: "2023-10",
        end: "2024-04",
    },
];

// Educations Object
export const educations: Education[] = [
    { id: "daw", institution: "Monlau Centre d'Estudis", logo: "/assets/images/companies/monlau.png", url: "https://www.monlau.com", file: "/assets/certificates/education-daw.pdf" },
];

// Certificates Object
export const certificates: Certificate[] = [
    { id: "linux", issuer: "Monlau Centre d'Estudis", logo: "/assets/images/companies/monlau.png", file: "/assets/certificates/certificate-linux.pdf" },
    { id: "windows", issuer: "Monlau Centre d'Estudis", logo: "/assets/images/companies/monlau.png", file: "/assets/certificates/certificate-windows.pdf" },
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
export const socialNetworks: SocialNetwork[] = [
    { href: "https://www.instagram.com/carloos_93", src: `/assets/icons/instagram.svg`, alt: "Instagram" },
    { href: "https://www.github.com/Carlos-93", src: `/assets/icons/github_dark.svg`, alt: "GitHub" },
    { href: "https://www.linkedin.com/in/carlos-araujo-galvan/", src: `/assets/icons/linkedin.svg`, alt: "LinkedIn" },
];

// Languages Object
export const languages: Language[] = [
    { code: 'es', name: 'Español', flag: `/assets/images/flags/spain.png` },
    { code: 'ca', name: 'Català', flag: `/assets/images/flags/catalonia.png` },
    { code: 'en', name: 'English', flag: `/assets/images/flags/united-kingdom.png` },
    { code: 'de', name: 'Deutsch', flag: `/assets/images/flags/germany.png` },
    { code: 'it', name: 'Italiano', flag: `/assets/images/flags/italy.png` },
    { code: 'fr', name: 'Français', flag: `/assets/images/flags/france.png` },
];

// Spoken Languages Object
export const spokenLanguages: SpokenLanguage[] = [
    { id: "spanish", flag: `/assets/images/flags/spain.png` },
    { id: "catalan", flag: `/assets/images/flags/catalonia.png` },
    { id: "english", flag: `/assets/images/flags/united-kingdom.png` },
];

// Storage Key for the dark mode
export const STORAGE_KEY = 'dark-mode';