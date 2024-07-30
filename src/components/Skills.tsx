export default function Skills() {

    return (
        <div className="flex gap-16 p-16 lg:ml-72">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl text-gray-100">Habilidades</h1>
                <h2 className="text-2xl text-gray-200 font-medium">Desarrollador Full Stack</h2>
                <p className="text-gray-300">Soy un apasionado de la tecnología y la programación. Me encanta aprender cosas nuevas y compartir mis conocimientos con los demás.</p>
            </div>
            <div>
                <img src="assets/skills.jpg" alt="Imagen de mis habilidades" className="rounded-full w-96" />
            </div>
        </div>
    );
}