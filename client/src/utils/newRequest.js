// newRequest.js
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const newRequest = axios.create({

    baseURL: 'http://localhost:8800/',
    withCredentials: true
});



export default newRequest;
