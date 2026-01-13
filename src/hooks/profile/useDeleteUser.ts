import { useMutation } from '@tanstack/react-query';
import { userService } from '../../services/userService';

export const useDeleteUser = () => {
	const mutation = useMutation({
		mutationFn: (userId: string) => userService.deleteUser(userId),
	});

	return {
		deleteUser: mutation.mutate,
		deleteUserAsync: mutation.mutateAsync,
		loading: mutation.isPending,
		error: mutation.error?.message || null,
		success: mutation.isSuccess,
		isError: mutation.isError,
		reset: mutation.reset,
	};
};
