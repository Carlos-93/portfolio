import type { Skill, Experience, Education, Certificate, Project, SocialNetwork, Language } from "./types";

// Skills Object
export const skills: Skill[] = [
    // Frontend
    { name: "HTML", image: "html.svg", category: "frontend", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS", image: "css.svg", category: "frontend", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "JavaScript", image: "javascript.svg", category: "frontend", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "TypeScript", image: "typescript.svg", category: "frontend", url: "https://www.typescriptlang.org" },
    { name: "React", image: "react.svg", category: "frontend", url: "https://react.dev" },
    { name: "Angular", image: "angular.svg", category: "frontend", url: "https://angular.dev" },
    { name: "Tailwind CSS", image: "tailwind.svg", category: "frontend", url: "https://tailwindcss.com" },
    { name: "Bootstrap", image: "bootstrap.svg", category: "frontend", url: "https://getbootstrap.com" },
    // Backend
    { name: "Node.js", image: "nodejs.svg", category: "backend", url: "https://nodejs.org" },
    { name: "Java", image: "java.svg", category: "backend", url: "https://www.java.com" },
    { name: "Spring Boot", image: "spring.svg", category: "backend", url: "https://spring.io/projects/spring-boot" },
    { name: "PHP", image: "php.svg", category: "backend", url: "https://www.php.net" },
    { name: "Laravel", image: "laravel.svg", category: "backend", url: "https://laravel.com" },
    // Databases
    { name: "MySQL", image: "mysql.svg", category: "database", url: "https://www.mysql.com" },
    { name: "PostgreSQL", image: "postgresql.svg", category: "database", url: "https://www.postgresql.org" },
    { name: "MongoDB", image: "mongodb.svg", category: "database", url: "https://www.mongodb.com" },
    // Tools
    { name: "Git", image: "git.svg", category: "tools", url: "https://git-scm.com" },
    { name: "GitLab", image: "gitlab.svg", category: "tools", url: "https://about.gitlab.com" },
    { name: "Figma", image: "figma.svg", category: "tools", url: "https://www.figma.com" },
    { name: "Vite", image: "vite.svg", category: "tools", url: "https://vite.dev" },
];

// Experiences Object
export const experiences: Experience[] = [
    { title: "Desarrollador Web Full Stack", company: "PKF Attest", location: "Barcelona", date: "Septiembre 2024 - Actual", description: "Desarrollo de aplicaciones web y móviles", image: "profile.png" },
    { title: "Desarrollador Web Frontend", company: "Excelsus Cic Grup SL", location: "Barcelona", date: "Octubre 2023 - Abril 2024", description: "Desarrollo de aplicaciones web y móviles", image: "profile.png" },
];

// Educations Object
export const educations: Education[] = [
    { title: "Técnico Superior en Desarrollo de Aplicaciones Web", company: "Monlau Centro de Estudios", date: "Septiembre 2022 - Junio 2024", image: `/assets/images/certificates/education-daw.jpg` },
];

// Certificates Object
export const certificates: Certificate[] = [
    { title: "Administración de SO Linux", company: "Monlau Centre d'Estudis", location: "Presencial", date: "Junio 2024", image: `/assets/images/certificates/certificate-linux.png` },
    { title: "Administración de Windows 10", company: "Monlau Centre d'Estudis", location: "Presencial", date: "Junio 2024", image: `/assets/images/certificates/certificate-windows.png` },
];

// Projects Object
export const projects: Project[] = [
    { title: "Portfolio", description: "Mi portfolio personal", image: "profile.png", href: "https://www.carlosaraujogalvan.com" },
    { title: "Blog", description: "Mi blog personal", image: "profile.png", href: "https://www.carlosaraujogalvan.com/blog" },
    { title: "Tienda Online", description: "Mi tienda online", image: "profile.png", href: "https://www.carlosaraujogalvan.com/tienda" }
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

// Storage Key for the dark mode
export const STORAGE_KEY = 'dark-mode';