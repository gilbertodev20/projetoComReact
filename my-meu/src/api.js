 import axios from 'axios';
const url = import.meta.env.VITE_API

 const api = axios.create({
     baseURL: url
 })
 export default api;
