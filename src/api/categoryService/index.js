import axios from 'axios';
import { API_URL } from '../../Constants';

export const getCategories = () => {
    return axios.get(`${API_URL}/category`);
};