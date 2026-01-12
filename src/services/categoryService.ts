import { categoryApi } from '../apis/category';
import type { Category } from '../interfaces/services/category';

export const categoryService = {
	getCategories: async (): Promise<Category[]> => {
		const response = await categoryApi.getAll();
		return response.data || [];
	},
};
