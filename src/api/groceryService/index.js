import axios from 'axios';
import { API_URL } from '../../Constants';

export const getAllGroceries = () => {
    return axios.get(`${API_URL}/grocery`);
};

export const deleteGroceryById = (id) => {
    return axios.delete(`${API_URL}/grocery/${id}`);
};

export const updateGroceryById = (id, grocery) => {
    return axios.put(`${API_URL}/grocery/${id}`, grocery);
};

export const getGroceriesByCategory = (category) => {
    return axios.get(`${API_URL}/grocery`, { params: { category }});
};

export const addGrocery = (grocery) => {
    return axios.post(`${API_URL}/grocery`, grocery)
}