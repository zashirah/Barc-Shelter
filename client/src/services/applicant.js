import api from "./apiConfig";

export const getApplicants = async () => {
  try {
    const response = await api.get("/applicants");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getApplicant = async (id) => {
  try {
    const response = await api.get(`/applicants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createApplicant = async (applicant) => {
  try {
    const response = await api.post("/applicants", applicant);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateApplicant = async (id, applicant) => {
  try {
    const response = await api.put(`/applicants/${id}`, applicant);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteApplicant = async (id) => {
  try {
    const response = await api.delete(`/applicants/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
