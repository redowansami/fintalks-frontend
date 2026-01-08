import { apiClient } from '../lib/apiClient';
import type {
	LoginRequest,
	LoginResponse,
	SignUpRequest,
	AuthResponse,
	ResendConfirmationResponse,
} from '../types/auth';

export const authApi = {
	login: (credentials: LoginRequest) =>
		apiClient.post<LoginRequest, LoginResponse>('/auth/login', credentials),

	signUp: (data: SignUpRequest) =>
		apiClient.post<SignUpRequest, AuthResponse>('/auth/signup', data),

	resendConfirmation: (email: string) =>
		apiClient.post<{ email: string }, ResendConfirmationResponse>(
			'/auth/resend-confirmation-email',
			{
				email,
			},
		),

	logout: () => apiClient.post<never, AuthResponse>('/auth/logout'),
};
