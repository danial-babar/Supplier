import Page from "@/Dummy/page";
import axios from "axios";

// const BASE_URL = "http://projects.microrage.com/moward/api";
export const BASE_URL = "http://manage.mowarrd.sa/index.php/api/";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
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
export const getProductsById = async (id: any) => {
  try {
    const response = await api.get(`/get_products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while getting products agains category:", error);
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
export const getStatus = async () => {
  try {
    const response = await api.get(`/get_status`);
    return response.data;
  } catch (error) {
    console.error("Error while getting status:", error);
    throw error;
  }
};
export const getUnits = async () => {
  try {
    const response = await api.get(`/get_units`);
    return response.data;
  } catch (error) {
    console.error("Error while getting units:", error);
    throw error;
  }
};
export const getAllLeads = async (page: any) => {
  // console.log("query", `/get_leads?page=${page}`);

  try {
    const response = await api.get(`/get_leads?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error while getting all leads:", error);
    throw error;
  }
};
export const filterLeads = async (data: any) => {
  try {
    const response = await api.get(
      `/get_leads_filter?category=${data.category?.id || ""}&city=${
        data?.city?.id || ""
      }&order_status=${data?.status?.id || ""}&sort_by=${data?.sortBy?.id}&page=${
        data?.page
      }`
    );
    return response.data;
  } catch (error) {
    console.error("Error while getting filter leads:", error);
    throw error;
  }
};
export const singleLeadById = async (id: string, userId: string) => {
  try {
    const response = await api.get(`/get_leads/${id}?user_id=${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error while getting single lead:", error);
    throw error;
  }
};
export const addLead = async (data: any) => {
  try {
    const response = await api.post(`/add_lead`, data);
    return response.data;
  } catch (error) {
    console.error("Error while adding lead:", error);
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
  login: async (data: any) => {
    try {
      const response = await api.post(`/login`, data);
      return response.data;
    } catch (error) {
      console.error("Error login user:", error);
      throw error;
    }
  },
};
export const bidsFLow = {
  addBid: async (data: any) => {
    try {
      const response = await api.post(`/add_bid`, data);
      return response.data;
    } catch (error) {
      console.error("Error while adding bid:", error);
      throw error;
    }
  },
  userBids: async (id: string) => {
    try {
      const response = await api.post(`/user_bids/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error while getting user bids:", error);
      throw error;
    }
  },
  bidsOnLead: async (id: string) => {
    try {
      const response = await api.get(`/view_bids/${id}`);
      // console.log('bids on lead api',`/view_bids/${id}`)
      return response.data;
    } catch (error) {
      console.error("Error while getting bids on a lead:", error);
      throw error;
    }
  },
  completeDeal: async (data: any) => {
    try {
      const response = await api.post(`/complete_deal`, data);
      return response.data;
    } catch (error) {
      console.error("Error while completing deal", error);
      throw error;
    }
  },
  cancelLead: async (data: any) => {
    try {
      const response = await api.post(`/cancel_lead`, data);
      return response.data;
    } catch (error) {
      console.error("Error while cancel lead", error);
      throw error;
    }
  },
};
export const leadsFLow = {
  addLead: async (data: any) => {
    try {
      const response = await api.post(`/add_lead`, data);
      console.log("response while add lead in api calling", response);

      return response.data;
    } catch (error) {
      console.error("Error while adding lead:", error);
      throw error;
    }
  },
  userLeads: async (id: "") => {
    try {
      const response = await api.get(`/leads_user/${id}`);
      return response.data;
    } catch (error) {
      console.error("Error while getting user leads:", error);
      throw error;
    }
  },
};

export default api;
