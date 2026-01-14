import { apiClient } from '../services/apiClient';
import type { CategoryResponse } from '../interfaces/services/category';

export const categoryApi = {
	getAll: () => apiClient.get<never, CategoryResponse>('/categories'),
};
