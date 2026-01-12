import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../services/categoryService';
import type { CategoryContextType } from '../interfaces/hooks/common';

const CATEGORY_QUERY_KEY = ['categories'] as const;

export const useCategory = (): CategoryContextType => {
	const {
		data: categories = [],
		isPending: loading,
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
