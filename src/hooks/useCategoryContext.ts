import { useContext } from 'react';
import { CategoryContext, type CategoryContextType } from '../types/CategoryContextType';

export const useCategoryContext = (): CategoryContextType => {
	const context = useContext(CategoryContext);
	if (!context) {
		throw new Error('useCategoryContext must be used within CategoryContextProvider');
	}
	return context;
};
