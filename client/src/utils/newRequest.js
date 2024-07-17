import axios from "axios"

const newRequest = axios.create({
    baseURL: "https://cook-book-api-0tn7.onrender.com",
    withCredentials: true,
});

export default newRequest;