import React, { useState } from 'react';


export default function UpdateActivityForm({}) {
    
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