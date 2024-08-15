import axios, { AxiosInstance } from "axios";
import { INKVERSE_URLS } from "./apiUrls";

const InkverseAPI = axios.create({
  baseURL: INKVERSE_URLS.BASE_URL,
  headers: {
    Accept: "application/json",
  },
});

InkverseAPI.interceptors.request.use(
  (config) => {
    const key = import.meta.env.VITE_REACT_BOOK_API_KEY;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default InkverseAPI as AxiosInstance;
