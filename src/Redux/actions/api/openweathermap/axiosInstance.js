/// axiosInstance.js
import axios from "axios";

export const AxiosConf = {
  baseURL:'http://api.openweathermap.org'
}

export const axiosInstance = axios.create({
  baseURL: AxiosConf.baseURL,
//   timeout: 1000,
});
