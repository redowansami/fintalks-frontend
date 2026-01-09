import { apiClient } from '../services/apiClient';
import type { CategoryResponse } from '../types/category';

export const categoryApi = {
	getAll: () => apiClient.get<never, CategoryResponse>('/categories'),
};
