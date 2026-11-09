import axios from 'axios';

const TIME_OUT = 5000;

export const plantsClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: TIME_OUT,
});
