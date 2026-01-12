import axios, { AxiosError } from 'axios';

export class ApiError extends Error {
	status: number;
	validationErrors?: Record<string, string | string[]>;

	constructor(
		message: string,
		status: number,
		validationErrors?: Record<string, string | string[]>,
	) {
		super(message);
		this.name = 'ApiError';
		this.status = status;
		this.validationErrors = validationErrors;
	}
}

export const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api/v1',
	headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
	const token = localStorage.getItem('auth_token');
	if (token && config.headers) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

apiClient.interceptors.response.use(
	(response) => response.data,
	(error: AxiosError<{ message?: string; errors?: Record<string, string[]> }>) => {
		const message = error.response?.data?.message || 'An unexpected error occurred';
		const status = error.response?.status || 500;
		const validationErrors = error.response?.data?.errors;
		throw new ApiError(message, status, validationErrors);
	},
);
