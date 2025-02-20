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
            <nav className="bg-gray-800 h-full rounded-b-lg relative">
                {!isHomepage && !isHovered && (
                    <div className="absolute inset-x-0 bottom-1 flex justify-center space-y-1 flex-col items-center">
                        <div className="w-16 h-3.25 bg-white/30 rounded-full animate-pulse"></div>
                        <div className="w-12 h-2.5 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-8 h-2 bg-white/10 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
                    </div>
                )}
            
                <div className={`h-full flex items-center px-8 transition-opacity duration-300 ${!isHomepage && !isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <div className="flex space-x-8">
                        <Link to="/" className="text-white text-xl font-bold relative overflow-hidden group py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-110">
                            <span className="relative z-10">Home</span>
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                        </Link>
                        <Link to="/activities" className="text-white text-xl font-bold relative overflow-hidden group py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-110">
                            <span className="relative z-10">Activities</span>
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                        </Link>
                        <Link to="/about" className="text-white text-xl font-bold relative overflow-hidden group py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:scale-110">
                            <span className="relative z-10">About</span>
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-lg"></div>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}