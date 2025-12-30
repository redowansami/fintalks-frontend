import { type ReactNode, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../services/categoryService';
import { CategoryContext } from '../types/CategoryContextType';

const CATEGORY_QUERY_KEY = ['categories'] as const;

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const {
		data: categories = [],
		isLoading: loading,
		error,
	} = useQuery({
		queryKey: CATEGORY_QUERY_KEY,
		queryFn: categoryService.getCategories,
	});

	const value = useMemo(() => ({ categories, loading, error }), [categories, loading, error]);

	return <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>;
};
