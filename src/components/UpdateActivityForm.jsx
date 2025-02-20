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
            onClose();
        } catch (error) {
            console.error('Error updating activity:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-white rounded-lg shadow-xl">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                    Descripción
                </label>
                <textarea
                    name="description"
                    value={updatedActivity.description}
                    placeholder="Descripción"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
                    Tipo
                </label>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ubication">
                    Ubicación
                </label>
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
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                    URL de la imagen
                </label>
                <input
                    type="text"
                    name="image"
                    value={updatedActivity.image}
                    placeholder="URL de la imagen"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onClose}
                    className="mr-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Actualizar Actividad
                </button>
            </div>
        </form>
    );
}