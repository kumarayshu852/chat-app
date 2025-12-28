import axios from "axios";


export const axiosInstance=axios.create({
    baseURL: import.meta.env.MODE==="development"? "https://chat-app-three-snowy-79.vercel.app/api":"/api",
    withCredentials: true,
});
