import axios from "axios";

const api = axios.create({
    baseURL: "https://medimind-ai-rfa8.onrender.com/api",
    withCredentials: true
});

export default api;