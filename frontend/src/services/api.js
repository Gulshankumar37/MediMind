import axios from "axios";

const api = axios.create({
    baseURL:"https://medimind-2-4x1y.onrender.com/api",
    withCredentials:true
})
export default api

//https://medimind-1-8tj8.onrender.com