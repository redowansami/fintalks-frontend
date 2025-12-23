export interface AuthUser {
	userId: string;
	username: string;
	name: string;
	email: string;
	joinDate: string;
	role: string;
}

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

export const saveAuth = (token: string, user: AuthUser): void => {
	localStorage.setItem(TOKEN_KEY, token);
	localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getAuth = (): { token: string | null; user: AuthUser | null } => {
	const token = localStorage.getItem(TOKEN_KEY);
	const userStr = localStorage.getItem(USER_KEY);
	const user = userStr ? JSON.parse(userStr) : null;
	return { token, user };
};

export const clearAuth = (): void => {
	localStorage.removeItem(TOKEN_KEY);
	localStorage.removeItem(USER_KEY);
};

export const isAuthenticated = (): boolean => {
	return !!localStorage.getItem(TOKEN_KEY);
};
