import axios from "axios";

const BASE_URL = "http://projects.microrage.com/moward/api";

const api = axios.create({
  baseURL: BASE_URL,
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
export const getCities = async () => {
  try {
    const response = await api.get(`/get_cities`);
    return response.data;
  } catch (error) {
    console.error("Error while getting cities:", error);
    throw error;
  }
};
export const getAllLeads = async () => {
  try {
    const response = await api.get(`/get_leads`);
    return response.data;
  } catch (error) {
    console.error("Error while getting all leads:", error);
    throw error;
  }
};
export const singleLeadById = async (id: string) => {
  try {
    const response = await api.get(`/get_leads/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while getting single lead:", error);
    throw error;
  }
};

export const userFlow = {
  createAccount: async (data: any) => {
    try {
      const response = await api.post(`/new_user`, data);
      return response.data;
    } catch (error) {
      console.error("Error while creating new user:", error);
      throw error;
    }
  },
};

export default api;
