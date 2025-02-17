import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    return (
        <>
            <nav className="flex justify-between items-center p-15 bg-blue-500">
                <Link to="/" className="text-white text-2xl ">Home</Link>
                <Link to="/about" className="text-white text-2xl">About</Link>
                <Link to="/contact" className="text-white text-2xl">undefined</Link>
            </nav>
        </>
    )
}