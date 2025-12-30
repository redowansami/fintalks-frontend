import { createContext } from 'react';

export interface Category {
	categoryId: string;
	name: string;
}

export interface CategoryContextType {
	categories: Category[];
	loading: boolean;
	error: Error | null;
}

export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);
