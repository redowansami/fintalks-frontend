import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { userService } from '../services/userService';
import type { User } from '../interfaces/services/user';

const USERS_QUERY_KEY = ['users'] as const;

export interface UseGetAllUsersReturn {
	users: User[];
	currentPage: number;
	totalPages: number;
	loading: boolean;
	error: Error | null;
	setPage: (page: number) => void;
}

export const useGetAllUsers = (initialPage: number = 1): UseGetAllUsersReturn => {
	const [page, setPageState] = React.useState(initialPage);

	const {
		data: response,
		isPending: loading,
		error,
	} = useQuery({
		queryKey: [USERS_QUERY_KEY[0], page],
		queryFn: () =>
			userService.getAllUsers({
				page,
				limit: 12,
			}),
		staleTime: 1000 * 60 * 5,
	});

	const setPage = (newPage: number) => {
		setPageState(newPage);
	};

	const calculateTotalPages = () => {
		if (!response) return 1;
		if (response.nextPage) {
			return response.page + 1;
		}
		return response.page;
	};

	return {
		users: response?.list || [],
		currentPage: page,
		totalPages: calculateTotalPages(),
		loading,
		error: error as Error | null,
		setPage,
	};
};
