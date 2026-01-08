import { apiClient } from '../lib/apiClient';
import type { CategoryResponse } from '../types/category';

export const categoryApi = {
	getAll: () => apiClient.get<never, CategoryResponse>('/categories'),
};
