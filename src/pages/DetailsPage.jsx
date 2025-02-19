import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import AddActivityForm from '../components/AddActivityForm';
import '../App.css';

export default function DetailsPage({ data, onAddActivity }) {
    const { id } = useParams();
    const place = data.find((place) => place.id === parseInt(id));
    const [showForm, setShowForm] = useState(false);

    if (!place) {
        return <div>Place not found</div>;
    }

    const handleAddActivity = async (activity) => {
        try {
            await onAddActivity(place.id, activity);
            setShowForm(false);
        } catch (error) {
            console.error("Error al agregar la actividad:", error);
        }
    };

    return (
        <div className="flex flex-col items-center p-10 relative">
            <img className="w-1/3" src={place.image} alt={place.place} />
            <h1 className="text-2xl">{place.place}</h1>
            <p className="text-lg">{place.description}</p>

            <button
                onClick={() => setShowForm(true)}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Añadir Actividad
            </button>

            {/* Mostrar actividades existentes */}
            {place.activities && place.activities.length > 0 && (
                <div className="mt-6 w-full max-w-lg">
                    <h2 className="text-xl font-semibold mb-4">Actividades</h2>
                    {place.activities.map((activity) => (
                        <div key={activity.id} className="mb-4 p-4 border border-gray-200 rounded-lg">
                            <h3 className="text-lg font-medium">{activity.name}</h3>
                            <p className="text-gray-600">{activity.description}</p>
                            <p className="text-gray-600">{activity.type}</p>
                            <p className="text-gray-600">{activity.ubication}</p>
                            <img className="w-full h-auto mt-2" src={activity.image} alt={activity.name} />     
                        </div>
                    ))}
                </div>
            )}

            {showForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
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