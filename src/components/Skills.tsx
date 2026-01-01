export default function Skills() {
    return (
        <div className="flex flex-col sm:flex-row gap-16">
            <div className="flex flex-col gap-5 w-full">
                <p className="text-cyan-400 text-xl text-center cursor-default">Habilidades Técnicas</p>
                <div className="flex flex-col gap-5 text-justify">
                    <p className="text-gray-200 text-md">Desarrollo Frontend con React y Next.js</p>
                    <p className="text-gray-200 text-md">Desarrollo Backend con Node.js y Express</p>
                    <p className="text-gray-200 text-md">Bases de datos con MongoDB y MySQL</p>
                    <p className="text-gray-200 text-md">Desarrollo de APIs RESTful</p>
                    <p className="text-gray-200 text-md">Desarrollo de aplicaciones web responsivas</p>
                    <p className="text-gray-200 text-md">Manejo de control de versiones con Git</p>
                </div>
            </div>
        </div>
    );
}