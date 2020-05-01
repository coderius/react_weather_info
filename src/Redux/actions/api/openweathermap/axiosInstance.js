/// axiosInstance.js
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'http://api.openweathermap.org',
//   timeout: 1000,
});
