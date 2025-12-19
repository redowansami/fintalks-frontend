interface SignUpRequest {
	username: string;
	name: string;
	email: string;
	password: string;
}

interface SignUpResponse {
	success: boolean;
	message: string;
	data?: {
		id: string;
		username: string;
		email: string;
	};
}

const API_URL = 'http://localhost:3000/api/v1/auth/signup';

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
			throw new Error(data.message || 'Registration failed');
		}

		return data;
	} catch (error) {
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};
