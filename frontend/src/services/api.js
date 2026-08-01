import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/api",
    withCredentials:true
})
export default api

//https://medimind-1-8tj8.onrender.com