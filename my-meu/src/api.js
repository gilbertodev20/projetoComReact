 import axios from 'axios';
const url = import.meta.env.VITE_APP

 const api = axios.create({
     baseURL: url
 })
 export default api;
