import axios from 'axios';

interface SignUpRequest {
	username: string;
	name: string;
	email: string;
	password: string;
}

interface SignUpResponse {
	success: boolean;
	message: string;
	errors?: Record<string, string | string[]>;
	data?: {
		id: string;
		username: string;
		email: string;
	};
}

interface ResendConfirmationResponse {
	success: boolean;
	message: string;
}

const API_URL = 'http://localhost:3000/api/v1/auth/signup';
const RESEND_EMAIL_URL = 'http://localhost:3000/api/v1/auth/resend-confirmation-email';

export const signUp = async (userData: SignUpRequest): Promise<SignUpResponse> => {
	try {
		const { data } = await axios.post(API_URL, userData);
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			const err = new Error(
				error.response?.data?.message || 'Registration failed',
			) as Error & {
				errors?: Record<string, string | string[]>;
			};
			err.errors = error.response?.data?.errors;
			throw err;
		}
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};

export const resendConfirmationEmail = async (
	email: string,
): Promise<ResendConfirmationResponse> => {
	try {
		const { data } = await axios.post(RESEND_EMAIL_URL, { email });
		return data;
	} catch (error) {
		if (axios.isAxiosError(error)) {
			throw new Error(error.response?.data?.message || 'Failed to resend confirmation email');
		}
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};
