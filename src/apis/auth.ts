import { apiClient } from '../services/apiClient';
import type {
	LoginRequest,
	LoginResponse,
	SignUpRequest,
} from '../interfaces/services/auth';
import type { BaseResponse } from '../interfaces/services/base';

export const authApi = {
	login: (credentials: LoginRequest) =>
		apiClient.post<LoginRequest, LoginResponse>('/auth/login', credentials),

	signUp: (data: SignUpRequest) =>
		apiClient.post<SignUpRequest, BaseResponse>('/auth/signup', data),

	resendConfirmation: (email: string) =>
		apiClient.post<{ email: string }, BaseResponse>(
			'/auth/resend-confirmation-email',
			{
				email,
			},
		),

	logout: () => apiClient.post<never, BaseResponse>('/auth/logout'),
};
