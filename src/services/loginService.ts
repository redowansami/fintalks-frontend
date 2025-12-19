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

const API_URL = 'http://localhost:3000/api/v1/auth/login';

export const login = async (credentials: LoginRequest): Promise<LoginResponse> => {
	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(credentials),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error(data.message || 'Login failed');
		}

		return data;
	} catch (error) {
		throw error instanceof Error ? error : new Error('An unexpected error occurred');
	}
};
