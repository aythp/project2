import { useState, useEffect } from 'react';
import { fetchData, addActivities } from './api/Api';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ErrorPage from './pages/ErrorPage';

export default function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData()
            .then((result) => setData(result))
            .catch((error) => console.error("Error al cargar los datos:", error));
    }, []);

    const handleAddActivity = async (id, activity) => {
        try {
            const updatedPlace = await addActivities(id, activity);
            setData(prevData => 
                prevData.map(place => 
                    place.id === id ? updatedPlace : place
                )
            );
        } catch (error) {
            console.error("Error al agregar la actividad:", error);
        }
    };

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage data={data} />} />
                <Route
                    path="/details/:id"
                    element={<DetailsPage data={data} onAddActivity={handleAddActivity} />}
                />
                <Route
                    path="/activities"
                    element={<ActivitiesPage 
                        activities={data.flatMap(place => place.activities)} 
                    />}
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
    );
}