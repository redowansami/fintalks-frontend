import { useMutation } from '@tanstack/react-query';
import { authService } from '../../services/authService';
import { ApiError } from '../../services/apiClient';
import { useAuthContext } from '../../hooks/useAuthContext';
import type { LoginData } from '../../interfaces/common/auth';
import type { UseLoginHandlerReturn } from '../../interfaces/hooks/auth';

export const useLoginHandler = (): UseLoginHandlerReturn => {
	const { login: syncContext } = useAuthContext();

	const mutation = useMutation({
		mutationFn: (credentials: LoginData) => authService.login(credentials),

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
