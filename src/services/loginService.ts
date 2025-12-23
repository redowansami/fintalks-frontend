import axios from 'axios';

interface LoginRequest {
	email: string;
	password: string;
}

interface User {
	userId: string;
	username: string;
	name: string;
	email: string;
	joinDate: string;
	role: string;
}

export interface LoginResponse {
	success: boolean;
	token: string;
	user: User;
	message?: string;
}

export interface ValidationError {
	[key: string]: string;
}

const API_URL = 'http://localhost:3000/api/v1/auth/login';

export class LoginError extends Error {
	validationErrors?: ValidationError;

	constructor(message: string, validationErrors?: ValidationError) {
		super(message);
		this.validationErrors = validationErrors;
	}
}

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
	try {
		const response = await axios.post<LoginResponse>(API_URL, credentials);
		return response.data;
	} catch (error) {
		if (axios.isAxiosError(error) && error.response?.data) {
			const data = error.response.data as Record<string, unknown>;
			const message = (data.message as string) || 'Login failed';
			const validationErrors = (data.errors as ValidationError) || undefined;
			throw new LoginError(message, validationErrors);
		}
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};
