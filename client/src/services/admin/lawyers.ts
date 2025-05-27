import type { LawyerProfile } from '@/types/type-lawyer';
import axios from 'axios';

const API_BASE_URL = '/api/admin/lawyers';

type TgetLawyerById = Pick<LawyerProfile,'id'>
export const lawyersService = {
  getAllLawyers: async (params?: LawyerProfile) => {
    try {
      const response = await axios.get(API_BASE_URL, { params });
      return response.data.lawyers;
    } catch (error) {
      console.error('Error fetching lawyers:', error);
      throw error;
    }
  },

  getLawyerById: async (id: TgetLawyerById) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data.lawyer;
    } catch (error) {
      console.error(`Error fetching lawyer ${id}:`, error);
      throw error;
    }
  },

  // Add other lawyer-related functions as needed (create, update, delete)
};
