import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Homepage({ data }) {
    const navigate = useNavigate();
    return (
        <div className='p-20'>
    <ul className="grid grid-cols-3 gap-4">
        {data?.map((place) =>
            <li key={place.id} className="relative" 
                onClick={() => navigate(`/details/${place.id}`)}>
                <img 
                    src={place.image} 
                    alt={place.place} 
                    className="w-full h-auto cursor-pointer"
                    onClick={() => navigate(`/details/${place.id}`)}
                />
                <div className="absolute inset-0 flex items-center justify-center 
                text-white text-4xl font-bold bg-black opacity-40 hover:opacity-50 
                 transition-opacity duration-300 cursor-pointer">
                    {place.place}
                </div>
            </li>
        )}
    </ul>
</div>
    );
}