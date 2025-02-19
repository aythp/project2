import axios from 'axios';
const URL = 'http://localhost:5005/granCanaria';
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