import { categoryApi } from '../apis/category';
import type { Category } from '../types/category';

export const categoryService = {
	getCategories: async (): Promise<Category[]> => {
		const response = await categoryApi.getAll();
		return response.data || [];
	},
};
