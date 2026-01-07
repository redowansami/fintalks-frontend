import { useMutation } from '@tanstack/react-query';
import { login, LoginError, type ValidationError } from '../services';
import { useAuthContext } from '../../../hooks/useAuthContext';

interface UseLoginHandlerReturn {
	isPending: boolean;
	isError: boolean;
	error: Error | null;
	validationErrors: ValidationError | undefined;
	mutate: (credentials: { email: string; password: string }) => void;
}

export const useLoginHandler = (): UseLoginHandlerReturn => {
	const { login: loginToContext } = useAuthContext();

	const mutation = useMutation({
		mutationFn: (credentials: { email: string; password: string }) => login(credentials),
		onSuccess: (data) => {
			loginToContext(data.token, data.user);
		},
	});

	const validationErrors =
		mutation.error instanceof LoginError ? mutation.error.validationErrors : undefined;

	return {
		isPending: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error,
		validationErrors,
		mutate: mutation.mutate,
	};
};
