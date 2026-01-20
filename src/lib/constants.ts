import type { Skill, Experience, Education, Certificate, Project, SocialNetwork, Language } from "./types";

// Skills Object
export const skills: Skill[] = [
    { name: "HTML", image: "html.svg" },
    { name: "CSS", image: "css.svg" },
    { name: "JavaScript", image: "javascript.svg" },
    { name: "TypeScript", image: "typescript.svg" },
    { name: "React", image: "react.svg" },
    { name: "Node.js", image: "nodejs.svg" },
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