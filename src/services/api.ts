import axios from "axios"

export const api = axios.create({
    baseURL: "https://tasks-backend-h0py.onrender.com"
})