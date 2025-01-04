export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Redes Sociales */}
                    <div className="flex gap-4">
                        <a href="https://github.com/Carlos-93" target="_blank" rel="noopener noreferrer"
                            className="hover:text-white transition-colors">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/carlos-araujo-galvan/" target="_blank" rel="noopener noreferrer"
                            className="hover:text-white transition-colors">
                            LinkedIn
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-xs sm:text-sm md:text-base">
                        © {new Date().getFullYear()} Carlos Araujo Galván. Todos los derechos reservados.
                    </div>
                </div>
            </div>
        </footer>
    );
}