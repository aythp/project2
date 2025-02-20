import React, { useState } from 'react';
import { updateActivity } from '../api/Api';

export default function UpdateActivityForm({ placeId, activityId, initialActivity, onUpdate, onClose }) {
    const [updatedActivity, setUpdatedActivity] = useState(initialActivity);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedActivity(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onUpdate(placeId, activityId, updatedActivity);
        } catch (error) {
            console.error('Error updating activity:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <input
                    type="text"
                    name="name"
                    value={updatedActivity.name}
                    placeholder="Nombre"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="description"
                    value={updatedActivity.description}
                    placeholder="Descripción"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="type"
                    value={updatedActivity.type}
                    placeholder="Tipo"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    name="ubication"
                    value={updatedActivity.ubication}
                    placeholder="Ubicación"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="mb-6">
                <input
                    type="text"
                    name="image"
                    value={updatedActivity.image}
                    placeholder="URL de la imagen"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Actualizar Actividad
            </button>
        </form>
    );
}