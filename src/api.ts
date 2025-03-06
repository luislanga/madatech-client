import axios from "axios";
export const useApi = () => {
  return axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
  });
};