import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/loginService';
import { saveAuth } from '../utils/authUtils';

interface UseLoginHandlerReturn {
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
	mutate: (credentials: { email: string; password: string }) => void;
}

export const useLoginHandler = (): UseLoginHandlerReturn => {
	const navigate = useNavigate();
	const [isRedirecting, setIsRedirecting] = useState(false);

	const mutation = useMutation({
		mutationFn: (credentials: { email: string; password: string }) => login(credentials),
		onSuccess: (data) => {
			saveAuth(data.token, data.user);
			setIsRedirecting(true);
			setTimeout(() => navigate('/'), 2000);
		},
	});

	return {
		isLoading: mutation.isPending || isRedirecting,
		isError: mutation.isError,
		error: mutation.error,
		mutate: mutation.mutate,
	};
};
