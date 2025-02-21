import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddActivityForm from '../components/AddActivityForm';
import '../App.css';

export default function DetailsPage({ data, onAddActivity }) {
    const { id } = useParams();
    const place = data.find((place) => place.id === parseInt(id));
    const [showForm, setShowForm] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    if (!place) {
        return <div>Place not found</div>;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = place.activities?.slice(indexOfFirstItem, indexOfLastItem) || [];
    const totalPages = Math.ceil((place.activities?.length || 0) / itemsPerPage);

    const handleAddActivity = async (placeId, activity) => {
        try {
            await onAddActivity(placeId, activity);
            setShowForm(false);
        } catch (error) {
            console.error("Error al agregar la actividad:", error);
        }
    };

    return (

        <div className="p-25">
    <div className="flex flex-col items-center justify-center backdrop-filter backdrop-blur-sm bg-white/80 rounded-lg p-6 mb-6 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold">{place.place}</h1>
        <p className="text-lg">{place.description}</p>
    </div>
    <div className="flex justify-center">
        <button
            onClick={() => setShowForm(true)}
            className="mt-4 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            Añadir Actividad
        </button>
    </div>

            {currentItems.length > 0 && (
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((activity) => (
                        <div key={activity.id} className="relative border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
                            <h3 className="text-lg font-medium">{activity.name}</h3>
                            <p className="text-gray-600">{activity.description}</p>
                            <p className="text-sm text-gray-500 mt-2 font-semibold">Tipo: {activity.type}</p>
                            <p className="text-sm text-gray-500 font-semibold">Ubicación: {activity.ubication}</p>
                            {activity.image && (
                                <img
                                    src={activity.image}
                                    alt={activity.name}
                                    className="mt-4 rounded-lg w-full h-32 object-cover"
                                />
                            )}
                        </div>
                    ))}
                </div>
            )}

            {place.activities && place.activities.length > 0 && (
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="px-6 py-2 bg-black text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                    >
                        Anterior
                    </button>
                    <span className="flex items-center px-4">
                         {currentPage} de {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className="px-6 py-2 bg-black text-white rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 transition-colors"
                    >
                        Siguiente
                    </button>
                </div>
            )}

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-black/40 z-50">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 p-6 rounded-lg shadow-lg w-full max-w-lg backdrop-blur-lg">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &times;
                        </button>
                        <AddActivityForm
                            placeId={place.id}
                            onAddActivity={handleAddActivity}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}