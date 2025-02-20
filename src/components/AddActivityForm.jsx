import React, { useState } from 'react';
import '../App.css';

export default function AddActivityForm({ placeId, onAddActivity }) {
    const [activity, setActivity] = useState({
        name: '',
        description: '',
        type: '',
        ubication: '',
        image: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setActivity(prevActivity => ({
            ...prevActivity,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await onAddActivity(placeId, activity);
            setActivity({ 
                name: '',
                description: '',
                type: '',
                ubication: '',
                image: ''
            });
        } catch (error) {
            console.error("Error al agregar la actividad:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-gray backdrop-blur-md rounded-lg shadow-xl border border-gray-200">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <input
                    type="text"
                    name="name"
                    value={activity.name}
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
                    value={activity.description}
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
                    value={activity.type}
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
                    value={activity.ubication}
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
                    value={activity.image}
                    placeholder="URL de la imagen"
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
            >
                Agregar Actividad
            </button>
        </form>
    );
}