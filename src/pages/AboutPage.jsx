import LinkedinLogo from '../assets/LinkedIn_Logo.svg.png'
import { Link } from 'react-router-dom'

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-2xl text-center">
            <p className="text-base">Esta aplicación web permite a los usuarios:</p>
            <p className="text-sm">· Explorar diferentes lugares de Gran Canaria</p>
            <p className="text-sm">· Ver y gestionar actividades.</p>
            <p className="text-sm">· Añadir nuevas actividades a lugares específicos.</p>
            <p className="text-sm">· Actualizar o eliminar actividades existentes.</p>
            <br></br>
            <p className="text-lg">Desarrollado con React y Tailwind </p>
            <br></br>
            <Link to="https://www.linkedin.com/in/aytha-pf/" target="_blank">
    <img src={LinkedinLogo} alt="Linkedin Logo" className="w-32 h-auto" />
</Link>

        </div>
    )
}