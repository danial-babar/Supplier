import axios from "axios";

const BASE_URL = "http://projects.microrage.com/moward/api";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getCategories = async () => {
  try {
    const response = await api.get(`/get_categories`);
    return response.data;
  } catch (error) {
    console.error("Error while getting categories:", error);
    throw error;
  }
};

export default api;
