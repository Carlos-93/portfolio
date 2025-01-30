export default function About() {
    return (
        <div className="flex flex-col sm:flex-row gap-16">
            <div className="flex flex-col gap-5 w-full">
                <p className="text-cyan-400 text-xl text-center">Acerca de mí</p>
                <p className="text-gray-200 text-md text-justify">Soy un desarrollador web Full Stack con experiencia en tecnologías como React, Node.js, Express y MongoDB. Me gusta aprender nuevas tecnologías y aplicarlas en proyectos personales.</p>
            </div>
        </div>
    );
}