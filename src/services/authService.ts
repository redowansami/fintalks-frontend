import { authApi } from '../apis/auth';
import type { LoginRequest, SignUpRequest } from '../interfaces/services/auth';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const authService = {
	async login(credentials: LoginRequest) {
		const data = await authApi.login(credentials);

		if (data.success && data.token) {
			localStorage.setItem(TOKEN_KEY, data.token);
			localStorage.setItem(USER_KEY, JSON.stringify(data.user));
		}

		return data;
	},

	async signUp(data: SignUpRequest) {
		return await authApi.signUp(data);
	},

	logout() {
		localStorage.removeItem(TOKEN_KEY);
		localStorage.removeItem(USER_KEY);
	},

	async resendConfirmationEmail(email: string) {
		return await authApi.resendConfirmation(email);
	},

	getToken() {
		return localStorage.getItem(TOKEN_KEY);
	},
};
