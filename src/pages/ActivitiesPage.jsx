import React, { useState } from 'react';
import UpdateActivityForm from '../components/UpdateActivityForm';
import AddActivityForm from '../components/AddActivityForm';
import { deleteActivity } from '../api/Api';

export default function ActivitiesPage({ activities, onDeleteActivity, onAddActivity }) {
    const [selectedActivity, setSelectedActivity] = useState(null);
    const [showAddForm, setShowAddForm] = useState(false);

    const placeId = 1; 

    const handleDelete = async (placeId, activityId) => {
        try {
            await onDeleteActivity(placeId, activityId);
        } catch (error) {
            console.error("error deleting:", error);
        }
    };

    return (
        <div className="p-10">
            <h1 className="text-3xl font-bold mb-6">Todas las Actividades</h1>

            <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="mb-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
                {showAddForm ? "Ocultar formulario" : "Agregar nueva actividad"}
            </button>

            {showAddForm && (
                <div className="mb-6">
                    <AddActivityForm placeId={placeId} onAddActivity={onAddActivity} />
                </div>
            )}

            {activities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activities.map((activity) => (
                        <div key={activity.id} className="border border-gray-200 rounded-lg p-4 shadow-sm">
                            <h2 className="text-xl font-semibold">{activity.name}</h2>
                            <p className="text-gray-600 mt-2">{activity.description}</p>
                            <p className="text-sm text-gray-500 mt-2">Tipo: {activity.type}</p>
                            <p className="text-sm text-gray-500">Ubicación: {activity.ubication}</p>
                            {activity.image && (
                                <img
                                    src={activity.image}
                                    alt={activity.name}
                                    className="mt-4 rounded-lg w-full h-32 object-cover"
                                />
                            )}

                            <div className="mt-4 flex space-x-2">
                                <button
                                    onClick={() => handleDelete(activity.placeId, activity.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Borrar
                                </button>
                                <button
                                    onClick={() => setSelectedActivity(activity)}
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Actualizar
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-gray-500">No hay actividades disponibles.</p>
            )}

            {selectedActivity && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
                        <button
                            onClick={() => setSelectedActivity(null)}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                        >
                            &times; 
                        </button>
                        <UpdateActivityForm
                            placeId={selectedActivity.placeId}
                            activityId={selectedActivity.id}
                            initialActivity={selectedActivity}
                            onUpdate={onUpdateActivity}
                            onClose={() => setSelectedActivity(null)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}