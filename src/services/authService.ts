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
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userData),
		});

		const data = await response.json();

		if (!response.ok) {
			const error = new Error(data.message || 'Registration failed') as Error & {
				errors?: Record<string, string | string[]>;
			};
			error.errors = data.errors;
			throw error;
		}

		return data;
	} catch (error) {
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};

export const resendConfirmationEmail = async (
	email: string,
): Promise<ResendConfirmationResponse> => {
	try {
		const response = await fetch(RESEND_EMAIL_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email }),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || 'Failed to resend confirmation email');
		}

		return data;
	} catch (error) {
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};
