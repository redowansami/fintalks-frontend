import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../services/categoryService';
import type { Category } from '../types/category';

const CATEGORY_QUERY_KEY = ['categories'] as const;

export interface CategoryContextType {
	categories: Category[];
	loading: boolean;
	error: Error | null;
}

export const useCategory = (): CategoryContextType => {
	const {
		data: categories = [],
		isLoading: loading,
		error,
	} = useQuery({
		queryKey: CATEGORY_QUERY_KEY,
		queryFn: categoryService.getCategories,
		staleTime: 1000 * 60 * 10,
	});

	return {
		categories,
		loading,
		error: error as Error | null,
	};
};
