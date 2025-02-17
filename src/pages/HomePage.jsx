import '../App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.jsx';

export default function Homepage({ data }) {
    return (
        <div className='p-10'>
            <ul className="grid grid-cols-3 gap-4">
                {data?.map((place) =>
                    <li key={place.id} className="relative">
                        <img src={place.image} alt={place.place} className="w-full h-auto hover:opacity-90 cursor-pointer"
                        /* onClick ={() => } */ />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                            {place.place}
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}