import { AUTH_TOKENS } from '../constants/authConstants';
import type { User } from '../interfaces/services/user';

export const loadAuth = async (): Promise<{ token: string | null; user: User | null }> => {
	const token = localStorage.getItem(AUTH_TOKENS.TOKEN);
	const userString = localStorage.getItem(AUTH_TOKENS.USER);

	let user: User | null = null;
	if (userString) {
		try {
			user = JSON.parse(userString) as User;
		} catch {
			console.warn('Failed to parse stored user data');
		}
	}

	return { token, user };
};
