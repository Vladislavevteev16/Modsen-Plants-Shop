import axios from 'axios';

const TIME_OUT = 5000;

const BASE_URL = import.meta.env.VITE_API_URL;

export const plantsClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: TIME_OUT,
});
