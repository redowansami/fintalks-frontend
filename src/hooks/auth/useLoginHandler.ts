import { useMutation } from '@tanstack/react-query';
import { authService } from '../../services/authService';
import { ApiError } from '../../services/apiClient';
import { useAuthContext } from '../../hooks/useAuthContext';
import type { LoginRequest } from '../../types/auth';

interface UseLoginHandlerReturn {
	isPending: boolean;
	isError: boolean;
	error: Error | null;
	validationErrors: Record<string, string | string[]> | undefined;
	mutate: (credentials: LoginRequest) => void;
}

export const useLoginHandler = (): UseLoginHandlerReturn => {
	const { login: syncContext } = useAuthContext();

	const mutation = useMutation({
		mutationFn: (credentials: LoginRequest) => authService.login(credentials),

		onSuccess: (data) => {
			syncContext(data.token, data.user);
		},
	});

	const validationErrors =
		mutation.error instanceof ApiError ? mutation.error.validationErrors : undefined;

	return {
		isPending: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error,
		validationErrors,
		mutate: mutation.mutate,
	};
};
