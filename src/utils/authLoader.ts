import { AUTH_TOKENS } from '../constants/authConstants';
import type { AuthUser } from '../types/AuthContextType';

export const loadAuth = async (): Promise<{ token: string | null; user: AuthUser | null }> => {
	const token = localStorage.getItem(AUTH_TOKENS.TOKEN);
	const userString = localStorage.getItem(AUTH_TOKENS.USER);

	let user: AuthUser | null = null;
	if (userString) {
		try {
			user = JSON.parse(userString) as AuthUser;
		} catch {
			console.warn('Failed to parse stored user data');
		}
	}

	return { token, user };
};
