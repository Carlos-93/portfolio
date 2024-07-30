export default function Education() {
    
    return (
        <div className="flex gap-16 p-16 lg:ml-72">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl text-gray-100">Educación</h1>
                <h2 className="text-2xl text-gray-200 font-medium">Ingeniería en Sistemas Computacionales</h2>
                <p className="text-gray-300">Instituto Tecnológico de Tijuana</p>
                <p className="text-gray-300">2014 - 2019</p>
            </div>
            <div>
                <img src="assets/education.jpg" alt="Imagen de mi educación" className="rounded-full w-96" />
            </div>
        </div>
    );
}