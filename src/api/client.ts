import axios from 'axios';

const BASE_URL = 'https://plants-server-2-xu0k.onrender.com';

const TIME_OUT = 5000;

export const plantsClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
  },
  timeout: TIME_OUT,
});
