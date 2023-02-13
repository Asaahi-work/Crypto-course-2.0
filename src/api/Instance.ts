import axios from "axios"

const BASE_URL = `https://api.coingecko.com/api/v3`

export const getHeaders = () => ({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS" 
})

export const axiosClassic = axios.create({
    baseURL: BASE_URL,
    headers: getHeaders(),
})