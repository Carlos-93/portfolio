export default function Home() {
    return (
        <div className="flex gap-16 p-16 lg:ml-72">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl text-gray-300">Hi, I'm <span className="font-bold">Carlos Araujo</span></h1>
                <h2 className="text-2xl text-cyan-400">Full Stack Developer</h2>
                <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero at magna finibus tristique.
                    Donec auctor, ligula eget tincidunt aliquam, mi odio ultricies nunc, eu ultricies odio odio nec nisi.
                    Cras nec nunc auctor, ultricies purus eget, ultricies odio.
                </p>
            </div>
            <div>
                <img src="assets/profile.jpg" alt="Imagen de perfil" />
            </div>
        </div>
    )
}