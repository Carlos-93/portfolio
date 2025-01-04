export default function Home() {

    return (
        <div className="flex flex-col md:flex-row gap-16">
            <div className="flex flex-col gap-5 w-full">
                <h1 className="text-gray-100 text-xl"><p>¡Bienvenido/a!</p> <p>Soy <span className="text-cyan-400 text">Carlos Araujo Galván 👋</span></p></h1>
                <h2 className="text-lg text-gray-200 font-medium">Desarrollador Web Full Stack</h2>
                <p className="text-gray-300">Soy un apasionado de la tecnología y la programación. Me encanta aprender cosas nuevas y compartir mis conocimientos con los demás.</p>
            </div>
            <div>
                <img src="assets/profile.jpg" alt="Imagen de perfil de Carlos Araujo Galván" className="sm:w-2/3 m-auto rounded-xl" />
            </div>
        </div>
    );
}