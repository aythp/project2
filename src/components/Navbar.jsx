import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();
    const [isHomepage, setIsHomepage] = useState(location.pathname === '/');
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsHomepage(location.pathname === '/');
        setIsHovered(false);
    }, [location.pathname]);

    const navbarHeight = isHomepage ? 'h-24' : isHovered ? 'h-24' : 'h-12';

    return (
        <div
            onMouseEnter={() => !isHomepage && setIsHovered(true)}
            onMouseLeave={() => !isHomepage && setIsHovered(false)}
            className={`fixed top-0 left-0 right-0 overflow-hidden transition-all duration-300 ease-in-out z-[1000] flex justify-center ${navbarHeight}`}
        >
            <nav className="bg-gray-800 h-full rounded-b-lg">
                <div className="h-full flex items-center px-8">
                    <div className="flex space-x-8">
                        <Link to="/" className="text-white text-xl font-bold hover:text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                            Home
                        </Link>
                        <Link to="/activities" className="text-white text-xl font-bold hover:text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                            Activities
                        </Link>
                        <Link to="/about" className="text-white text-xl font-bold hover:text-gray-200 py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
                            About
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}