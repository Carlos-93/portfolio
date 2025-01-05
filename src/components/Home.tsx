export default function Home() {
    return (
        <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col gap-5 w-full">
                <h1 className="text-gray-100 text-lg"><p>¡Bienvenido/a a mi portfolio!</p><p>Soy <span className="text-cyan-400">Carlos Araujo Galván 👋</span></p></h1>
                <h2 className="text-md text-gray-200 font-medium">Desarrollador Web Full Stack</h2>
            </div>
            <div>
                <img src="assets/profile.jpg" alt="Imagen de perfil de Carlos Araujo Galván" className="sm:w-2/3 m-auto rounded-xl" />
            </div>
        </div>
    );
}