export default function Contact() {
    return (
        <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-5">
                <p className="text-cyan-400 text-xl text-center">Contacto</p>
                <p className="flex flex-col gap-1 text-gray-300 text-center text-md">
                    Si necesitas un servicio de desarrollo web, no dudes en contactarme:
                    <a href="mailto:ca.galvan@outlook.com" className="text-cyan-400 hover:underline">ca.galvan@outlook.com</a>
                </p>
            </div>
        </div>
    );
}