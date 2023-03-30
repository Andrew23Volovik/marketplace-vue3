import axios from 'axios';

const URL = 'http://localhost:3000/';

export const API = axios.create({
  baseURL: URL,
});
