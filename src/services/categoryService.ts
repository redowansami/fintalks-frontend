import axios from 'axios';
import type { Category } from '../types/CategoryContextType';

const API_URL = 'http://localhost:3000/api/v1';

export const categoryService = {
	getCategories: async (): Promise<Category[]> => {
		const { data } = await axios.get(`${API_URL}/categories/`);
		const catArray = Array.isArray(data) ? data : data?.data || data?.categories || [];
		return catArray;
	},
};
