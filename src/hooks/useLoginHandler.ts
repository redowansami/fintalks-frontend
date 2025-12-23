import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/loginService';

interface UseLoginHandlerReturn {
	loading: boolean;
	apiError: string;
	successMessage: string;
	showResponse: boolean;
	token: string | null;
	handleSubmit: (
		formData: { email: string; password: string },
		validateForm: () => boolean,
	) => (e: React.FormEvent) => Promise<void>;
}

export const useLoginHandler = (): UseLoginHandlerReturn => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [showResponse, setShowResponse] = useState(false);
	const [token, setToken] = useState<string | null>(null);

	const handleSubmit =
		(formData: { email: string; password: string }, validateForm: () => boolean) =>
		async (e: React.FormEvent) => {
			e.preventDefault();
			if (!validateForm()) return;

			setLoading(true);
			try {
				const response = await login(formData);
				setToken(response.token);
				setShowResponse(true);
				setSuccessMessage('Login successful!');
				setTimeout(() => navigate('/'), 2000);
			} catch (error) {
				setApiError(error instanceof Error ? error.message : 'Login failed');
			} finally {
				setLoading(false);
			}
		};

	return { loading, apiError, successMessage, showResponse, token, handleSubmit };
};
