import type { Skill, Experience, Education, Certificate, Project, SocialNetwork } from "./types";

export const skills: Skill[] = [
    { name: "HTML", image: "html.svg" },
    { name: "CSS", image: "css.svg" },
    { name: "JavaScript", image: "javascript.svg" },
    { name: "TypeScript", image: "typescript.svg" },
    { name: "React", image: "react.svg" },
    { name: "Node.js", image: "nodejs.svg" },
];

export const experiences: Experience[] = [
    { title: "Desarrollador Web Full Stack", company: "PKF Attest", location: "Barcelona", date: "Septiembre 2024 - Actual", description: "Desarrollo de aplicaciones web y móviles", image: "profile.png" },
    { title: "Desarrollador Web Frontend", company: "Excelsus Cic Grup SL", location: "Barcelona", date: "Octubre 2023 - Abril 2024", description: "Desarrollo de aplicaciones web y móviles", image: "profile.png" },
];

export const educations: Education[] = [
    { title: "Técnico Superior en Desarrollo de Aplicaciones Web", company: "Monlau Centro de Estudios", date: "Septiembre 2022 - Junio 2024", image: "assets/Images/Certificates/education-daw.jpg" },
];

export const certificates: Certificate[] = [
    { title: "Administración de SO Linux", company: "Monlau Centre d'Estudis", location: "Presencial", date: "Junio 2024", image: "assets/Images/Certificates/certificate-linux.png" },
    { title: "Administración de Windows 10", company: "Monlau Centre d'Estudis", location: "Presencial", date: "Junio 2024", image: "assets/Images/Certificates/certificate-windows.png" },
];

export const projects: Project[] = [
    { title: "Portfolio", description: "Mi portfolio personal", image: "profile.png", href: "https://www.carlosaraujogalvan.com" },
    { title: "Blog", description: "Mi blog personal", image: "profile.png", href: "https://www.carlosaraujogalvan.com/blog" },
    { title: "Tienda Online", description: "Mi tienda online", image: "profile.png", href: "https://www.carlosaraujogalvan.com/tienda" }
];

export const socialNetworks: SocialNetwork[] = [
    { href: "https://www.github.com/Carlos-93", src: "assets/Icons/github.svg", alt: "GitHub" },
    { href: "https://www.instagram.com/carloos_93", src: "assets/Images/SocialNetworks/instagram.png", alt: "Instagram" },
    { href: "https://www.linkedin.com/in/carlos-araujo-galvan/", src: "assets/Images/SocialNetworks/linkedin.png", alt: "LinkedIn" },
];