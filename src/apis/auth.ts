import { apiClient } from '../services/apiClient';
import type { LoginResponse } from '../interfaces/services/auth';
import type { LoginData, RegisterData } from '../interfaces/common/auth';
import type { BaseResponse } from '../interfaces/services/base';

export const authApi = {
	login: (credentials: LoginData) =>
		apiClient.post<LoginData, LoginResponse>('/auth/login', credentials),

	signUp: (data: RegisterData) =>
		apiClient.post<RegisterData, BaseResponse>('/auth/signup', data),

	resendConfirmation: (email: string) =>
		apiClient.post<{ email: string }, BaseResponse>('/auth/resend-confirmation-email', {
			email,
		}),

	logout: () => apiClient.post<never, BaseResponse>('/auth/logout'),
};
