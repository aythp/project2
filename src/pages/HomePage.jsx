import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Homepage({ data }) {
    const navigate = useNavigate();
    return (
        <div className='p-20'>
            <ul className="grid grid-cols-3 gap-4">
                {data?.map((place) =>
                    <li key={place.id} className="relative overflow-hidden group" 
                        onClick={() => navigate(`/details/${place.id}`)}>
                        
                        <img 
                            src={place.image} 
                            alt={place.place} 
                            className="w-full h-auto cursor-pointer transform transition-transform duration-500 group-hover:scale-110"
                        />
                        
                        <div className="absolute inset-0 before:absolute before:inset-0 
                        before:bg-black before:opacity-40 before:transition-opacity before:duration-500
                         group-hover:before:opacity-20 cursor-pointer"></div>
                        
                        <div className="absolute inset-0 flex items-center justify-center cursor-pointer z-10">
                            <span className="text-white text-4xl font-bold transform transition-transform duration-500 group-hover:scale-125">
                                {place.place}
                            </span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
}