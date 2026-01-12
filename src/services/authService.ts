import { authApi } from '../apis/auth';
import type { LoginData, RegisterData } from '../interfaces/common/auth';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const authService = {
	async login(credentials: LoginData) {
		const data = await authApi.login(credentials);

		if (data.success && data.token) {
			localStorage.setItem(TOKEN_KEY, data.token);
			localStorage.setItem(USER_KEY, JSON.stringify(data.user));
		}

		return data;
	},

	async signUp(data: RegisterData) {
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
