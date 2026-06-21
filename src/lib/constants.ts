import type { Skill, Experience, Education, Certificate, Project, SocialNetwork, Language } from "./types";

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