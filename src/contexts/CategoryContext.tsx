import { type ReactNode } from 'react';
import { useQuery } from '@tanstack/react-query';
import { categoryService } from '../services/categoryService';
import { CategoryContext } from '../types/CategoryContextType';

export const CategoryContextContent: React.FC<{ children: ReactNode }> = ({ children }) => {
	const {
		data: categories = [],
		isLoading: loading,
		error,
	} = useQuery({
		queryKey: ['categories'],
		queryFn: categoryService.getCategories,
	});

	return (
		<CategoryContext.Provider value={{ categories, loading, error }}>
			{children}
		</CategoryContext.Provider>
	);
};
