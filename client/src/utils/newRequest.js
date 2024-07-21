// newRequest.js
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const newRequest = axios.create({
    baseURL: 'http://localhost:8800/',
    withCredentials: true
});

// Add a request interceptor to include token if necessary
newRequest.interceptors.request.use(config => {
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Add a response interceptor to handle token expiration
newRequest.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response && error.response.status === 401) {
        // Handle token expiration and redirect to login
        localStorage.removeItem('authToken');
        window.location.href = '/login'; // or use navigate hook if inside a component
    }
    return Promise.reject(error);
});

export default newRequest;
