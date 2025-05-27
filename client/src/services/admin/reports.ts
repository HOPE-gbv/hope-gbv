import axios from 'axios';

const API_BASE_URL = '/api/admin/reports';

export const reportsService = {
  getAllReports: async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching reports:', error);
      throw error;
    }
  },

  getReportById: async (id: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching report ${id}:`, error);
      throw error;
    }
  },

  createReport: async (reportData: any) => {
    try {
      const response = await axios.post(API_BASE_URL, reportData);
      return response.data;
    } catch (error) {
      console.error('Error creating report:', error);
      throw error;
    }
  },

  updateReport: async (id: string, reportData: any) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${id}`, reportData);
      return response.data;
    } catch (error) {
      console.error(`Error updating report ${id}:`, error);
      throw error;
    }
  },

  deleteReport: async (id: string) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting report ${id}:`, error);
      throw error;
    }
  },
};
