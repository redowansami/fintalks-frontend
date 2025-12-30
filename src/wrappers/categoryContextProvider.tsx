import type { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CategoryContextContent } from '../contexts/CategoryContext';

const queryClient = new QueryClient();

export const CategoryContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<CategoryContextContent>{children}</CategoryContextContent>
		</QueryClientProvider>
	);
};
