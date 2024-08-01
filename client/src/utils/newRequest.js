// newRequest.js
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const newRequest = axios.create({

    baseURL: 'https://taste-book-api.onrender.com/',
    withCredentials: true
});



export default newRequest;
