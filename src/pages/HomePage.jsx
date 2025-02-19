import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Homepage({ data }) {
    const navigate = useNavigate();
    return (
        <div className='p-10'>
            <ul className="grid grid-cols-3 gap-4">
                {data?.map((place) =>
                    <li key={place.id} className="relative">
                        <img 
                            src={place.image} 
                            alt={place.place} 
                            className="w-full h-auto cursor-pointer"
                            onClick={() => navigate(`/details/${place.id}`)}
                        />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2 text-sm hover:opacity-90 cursor-pointer">
                            {place.place} 
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}