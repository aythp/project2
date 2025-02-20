import { useState, useEffect } from 'react';
import { fetchData, addActivities, deleteActivity, updateActivity } from './api/Api';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ErrorPage from './pages/ErrorPage';
import UpdateActivityForm from './components/UpdateActivityForm';
import AddActivityForm from './components/AddActivityForm';

export default function App() {
    const [data, setData] = useState([]);
    const [selectedActivity, setSelectedActivity] = useState(null);

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
            window.location.reload();
        } catch (error) {
            console.error("Error al agregar la actividad:", error);
        }
    };

    const handleDeleteActivity = async (placeId, activityId) => {
        try {
            await deleteActivity(placeId, activityId);
            setData(prevData => prevData.map(place => {
                if (place.id === placeId) {
                    return {
                        ...place,
                        activities: place.activities.filter(act => act.id !== activityId)
                    };
                }
                return place;
            }));
            window.location.reload();
        } catch (error) {
            console.error("Error al eliminar la actividad:", error);
        }
    };

    const handleUpdateActivity = async (placeId, activityId, updatedActivityData) => {
        try {
            const updatedPlace = await updateActivity(placeId, activityId, updatedActivityData);
            setData(prevData =>
                prevData.map(place =>
                    place.id === placeId ? updatedPlace : place
                )
            );
            setSelectedActivity(null);
            window.location.reload();
        } catch (error) {
            console.error("Error al actualizar la actividad:", error);
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
                        activities={data.flatMap(place =>
                            place.activities.map(activity => ({
                                ...activity,
                                placeId: place.id
                            }))
                        )}
                        onDeleteActivity={handleDeleteActivity}
                        onUpdateActivity={handleUpdateActivity}
                        onAddActivity={handleAddActivity}
                    />}
                />
                <Route path="*" element={<ErrorPage />} />
            </Routes>

            {selectedActivity && (
                <UpdateActivityForm
                    placeId={selectedActivity.placeId}
                    activityId={selectedActivity.id}
                    initialActivity={selectedActivity}
                    onUpdate={handleUpdateActivity}
                />
            )}
        </div>
    );
}