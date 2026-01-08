import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1/users';

export interface ChangePasswordResponse {
	success: boolean;
	message: string;
}

export class ChangePasswordError extends Error {
	validationErrors?: Record<string, string | string[]>;

	constructor(message: string, validationErrors?: Record<string, string | string[]>) {
		super(message);
		this.name = 'ChangePasswordError';
		this.validationErrors = validationErrors;
	}
}

const getAuthHeaders = () => ({
	Authorization: `Bearer ${localStorage.getItem('auth_token')}`,
});

export const changePasswordService = {
	async changePassword(
		currentPassword: string,
		newPassword: string,
	): Promise<ChangePasswordResponse> {
		try {
			const response = await axios.post<ChangePasswordResponse>(
				`${API_BASE_URL}/change-password`,
				{ currentPassword, newPassword },
				{ headers: getAuthHeaders() },
			);
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const message = error.response?.data?.message || 'Failed to change password';
				const validationErrors = error.response?.data?.errors as
					| Record<string, string | string[]>
					| undefined;
				throw new ChangePasswordError(message, validationErrors);
			}
			throw error instanceof Error ? error : new Error('An unexpected error occurred');
		}
	},
};
