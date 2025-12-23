import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login, LoginError, type ValidationError } from '../services/loginService';
import { saveAuth } from '../utils/authUtils';

interface UseLoginHandlerReturn {
	isPending: boolean;
	isError: boolean;
	error: Error | null;
	validationErrors: ValidationError | undefined;
	mutate: (credentials: { email: string; password: string }) => void;
}

export const useLoginHandler = (): UseLoginHandlerReturn => {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: (credentials: { email: string; password: string }) => login(credentials),
		onSuccess: (data) => {
			saveAuth(data.token, data.user);
			navigate('/');
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
