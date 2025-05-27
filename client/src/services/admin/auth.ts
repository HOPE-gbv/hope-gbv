import axios from 'axios';

const API_BASE_URL = '/api/admin/auth'; // Assuming API routes are proxied or served from here
interface Credentials {
  email: string;
  password: string;
}

export const authService = {
  login: async (credentials: Credentials) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, credentials);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout: async () => {
    try {
      const response = await axios.post(`${API_BASE_URL}/logout`);
      return response.data;
    } catch (error) {
      console.error('Logout error:', error);
      throw error;
    }
  },

};
