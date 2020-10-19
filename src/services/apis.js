import axios from 'axios';

export const picSumApi = axios.create({
    baseURL: process.env.VUE_APP_PICSUM_API,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 60000
});