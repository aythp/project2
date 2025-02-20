import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const isHomepage = location.pathname === '/';
    const [isHovered, setIsHovered] = useState(false);

    const navbarHeight = isHomepage ? '100px' : isHovered ? '100px' : '20px';

    return (
        <div
            onMouseEnter={() => !isHomepage && setIsHovered(true)}
            onMouseLeave={() => !isHomepage && setIsHovered(false)}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: navbarHeight,
                overflow: 'hidden',
                transition: 'height 0.3s ease',
                zIndex: 1000,
            }}
        >
            <nav className="bg-black p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <Link to="/" className="text-white text-xl font-bold">
                        Inicio
                    </Link>
                    <div className="space-x-4">
                        <Link to="/activities" className="text-white hover:text-gray-200 font-bold">
                            Actividades
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}