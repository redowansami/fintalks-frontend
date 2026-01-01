import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api/v1/users';

export interface ChangePasswordResponse {
	success: boolean;
	message: string;
}

export interface VerifyCodeResponse {
	success: boolean;
	message: string;
	token: string;
}

export interface ConfirmPasswordChangeResponse {
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
	async requestPasswordChange(oldPassword: string): Promise<ChangePasswordResponse> {
		try {
			const response = await axios.post<ChangePasswordResponse>(
				`${API_BASE_URL}/change-password`,
				{ currentPassword: oldPassword },
				{ headers: getAuthHeaders() },
			);
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const message =
					error.response?.data?.message || 'Failed to request password change';
				const validationErrors = error.response?.data?.errors as
					| Record<string, string | string[]>
					| undefined;
				throw new ChangePasswordError(message, validationErrors);
			}
			throw error instanceof Error ? error : new Error('An unexpected error occurred');
		}
	},

	async verifyPasswordCode(code: string): Promise<VerifyCodeResponse> {
		try {
			const response = await axios.post<VerifyCodeResponse>(
				`${API_BASE_URL}/confirm-password-code`,
				{ code },
				{ headers: getAuthHeaders() },
			);
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				const message = error.response?.data?.message || 'Failed to verify code';
				const validationErrors = error.response?.data?.errors as
					| Record<string, string | string[]>
					| undefined;
				throw new ChangePasswordError(message, validationErrors);
			}
			throw error instanceof Error ? error : new Error('An unexpected error occurred');
		}
	},

	async confirmPasswordChange(
		token: string,
		newPassword: string,
	): Promise<ConfirmPasswordChangeResponse> {
		try {
			const response = await axios.post<ConfirmPasswordChangeResponse>(
				`${API_BASE_URL}/confirm-password-change/${token}`,
				{ newPassword },
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
