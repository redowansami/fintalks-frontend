import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/userService';
import type { UseTopAuthorsReturn } from '../interfaces/hooks';

export const useTopAuthors = (): UseTopAuthorsReturn => {
	const { data, isPending, error } = useQuery({
		queryKey: ['topAuthors'],
		queryFn: () =>
			userService.getAllUsers({
				limit: 3,
				page: 1,
			}),
		staleTime: 1000 * 60 * 10,
	});

	return {
		authors: data?.list || [],
		loading: isPending,
		error: error as Error | null,
	};
};
