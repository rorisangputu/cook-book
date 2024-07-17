import axios from "axios"

const newRequest = axios.create({
    baseURL: "https://cook-book-api-nu.vercel.app",
    withCredentials: true,
});

export default newRequest;