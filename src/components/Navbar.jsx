import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-xl font-bold">
                    Inicio
                </Link>
                <div className="space-x-4">
                    <Link to="/activities" className="text-white hover:text-gray-200">
                        Actividades
                    </Link>
                </div>
            </div>
        </nav>
    );
}