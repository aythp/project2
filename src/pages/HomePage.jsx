import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function Homepage({ data }) {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);

    return (
        <div className='p-30'>
            <ul className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
                {currentItems?.map((place) =>
                    <li key={place.id} className="relative overflow-hidden group"
                        onClick={() => navigate(`/details/${place.id}`)}>
                        <img
                            src={place.image}
                            alt={place.place}
                            className="w-full h-auto cursor-pointer transform transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 before:absolute before:inset-0 
                        before:bg-black before:opacity-40 before:transition-opacity before:duration-500
                         group-hover:before:opacity-20 cursor-pointer">
                        </div>

                        <div className="absolute inset-0 flex items-center justify-center text-center cursor-pointer z-10">
                            <span className="text-white font-bold text-lg md:text-2xl lg:text-4xl text-wrap balance transform transition-transform duration-500 group-hover:scale-125">
                                {place.place}
                            </span>
                        </div>
                    </li>
                )}
            </ul>

            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-6 py-2 bg-black text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                >
                    Anterior
                </button>
                <span className="flex items-center px-4">
                    Página {currentPage} de {totalPages}
                </span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-6 py-2 bg-black text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
}