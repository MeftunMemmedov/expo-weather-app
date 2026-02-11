import axios from "axios";

export const baseURL = process.env.EXPO_PUBLIC_API_URL;
export const apikey = process.env.EXPO_PUBLIC_API_KEY;

const axiosInstance = axios.create({
  baseURL,
  params: {
    key: apikey,
    aqi: "yes",
  },
});

export default axiosInstance;
