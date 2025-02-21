import axios from 'axios';
const URL = `${import.meta.env.VITE_BACK_URL}/granCanaria`;
import { v4 as uuidv4 } from 'uuid';

export const fetchData = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addActivities = async (id, activity) => {
    try {
        
        const response = await axios.get(`${URL}/${id}`);
        const place = response.data;

        if (!place) {
            throw new Error(`Lugar con id ${id} no encontrado`);
        }
        if (!place.activities) {
            place.activities = [];
        }

        const newActivity = {
            id: uuidv4(),
            ...activity
        };

        place.activities.push(newActivity);

        await axios.put(`${URL}/${id}`, place);

        return place;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteActivity = async (placeId, activityId) => {
    try {
        
        if (!placeId || !activityId) {
            throw new Error('placeId and activityId are required');
        }

        const response = await axios.get(`${URL}/${placeId}`);
        const place = response.data;

        if (!place) {
            throw new Error(`Lugar con id ${placeId} no encontrado`);
        }

        place.activities = place.activities.filter(
            (activity) => activity.id !== activityId
        );

        await axios.put(`${URL}/${placeId}`, place);
        return place;
    } catch (error) {
        console.error('Error deleting activity:', error);
        throw error;
    }
};

export const updateActivity = async (placeId, activityId, updatedActivityData) => {
    try {
        if (!placeId || !activityId) {
            throw new Error('placeId and activityId are required');
        }

        const response = await axios.get(`${URL}/${placeId}`);
        const place = response.data;

        if (!place) {
            throw new Error(`Lugar con id ${placeId} no encontrado`);
        }

        const activityIndex = place.activities.findIndex(
            (activity) => activity.id === activityId
        );

        if (activityIndex === -1) {
            throw new Error(`Actividad con id ${activityId} no encontrada`);
        }

        place.activities[activityIndex] = {
            ...place.activities[activityIndex],
            ...updatedActivityData
        };

        await axios.put(`${URL}/${placeId}`, place);
        return place;
    } catch (error) {
        console.error('Error updating activity:', error);
        throw error;
    }
};