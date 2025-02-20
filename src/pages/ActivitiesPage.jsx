import React, { useState, useRef } from 'react';
import UpdateActivityForm from '../components/UpdateActivityForm';

export default function ActivitiesPage({ activities, onDeleteActivity, onUpdateActivity }) {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const formRef = useRef(null);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = activities.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(activities.length / itemsPerPage);

    const handleUpdateActivity = async (placeId, activityId, updatedData) => {
        try {
            await onUpdateActivity(placeId, activityId, updatedData);
            setSelectedActivity(null);
        } catch (error) {
            console.error("Error updating activity:", error);
        }
    };

    const handleDelete = async (placeId, activityId) => {
        try {
            await onDeleteActivity(placeId, activityId);
        } catch (error) {
            console.error("error deleting:", error);
        }
    };

    return (
        <div className="p-20">
            <h1 className="text-3xl font-bold mb-6 text-center outline-color">Todas las Actividades</h1>

            {currentItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {currentItems.map((activity) => (
                        <div key={activity.id} className="relative border border-gray-200 rounded-lg p-4 shadow-sm bg-white">
                            <h2 className="text-xl font-bold">{activity.name}</h2>
                            <p className="text-gray-600 mt-2">{activity.description}</p>
                            <p className="text-sm text-gray-500 mt-2 font-semibold">Tipo: {activity.type}</p>
                            <p className="text-sm text-gray-500 font-semibold">Ubicación: {activity.ubication}</p>
                            {activity.image && (
                                <img
                                    src={activity.image}
                                    alt={activity.name}
                                    className="mt-4 rounded-lg w-full h-32 object-cover"
                                />
                            )}

                            <div className="mt-4 flex space-x-2">
                                <button
                                    onClick={() => setSelectedActivity(activity)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Actualizar
                                </button>
                                <button
                                    onClick={() => handleDelete(activity.placeId, activity.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Borrar
                                </button>
                            </div>

                            {selectedActivity?.id === activity.id && (
                                <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl bg-black/40 z-50">
                                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/70 p-6 rounded-lg shadow-lg w-full max-w-lg backdrop-blur-lg">
                                        <button
                                            onClick={() => setSelectedActivity(null)}
                                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                        >
                                            ×
                                        </button>
                                        <UpdateActivityForm
                                            placeId={selectedActivity.placeId}
                                            activityId={selectedActivity.id}
                                            initialActivity={selectedActivity}
                                            onUpdate={handleUpdateActivity}
                                            onClose={() => setSelectedActivity(null)}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500 text-center">No hay actividades disponibles.</p>
            )}

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
        </div>
    );
}