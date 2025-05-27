import type { CasesList } from '@/types/type-cases';
import axios from 'axios';

const API_BASE_URL = '/api/admin/cases';

export const casesService = {
  getAllCases: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching cases:', error);
      throw error;
    }
  },

  getCaseById: async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching case ${id}:`, error);
      throw error;
    }
  },

  createCase: async (caseData: CasesList) => {
    try {
      const response = await axios.post(API_BASE_URL, caseData);
      return response.data;
    } catch (error) {
      console.error('Error creating case:', error);
      throw error;
    }
  },

  updateCase: async (id: string, caseData: CasesList) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, caseData);
      return response.data;
    } catch (error) {
      console.error(`Error updating case ${id}:`, error);
      throw error;
    }
  },

  deleteCase: async (id: string) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting case ${id}:`, error);
      throw error;
    }
  },
};
