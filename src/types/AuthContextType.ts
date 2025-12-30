import { createContext } from 'react';

export interface AuthUser {
	userId: string;
	username: string;
	name: string;
	email: string;
	joinDate: string;
	role: string;
}

export interface AuthContextType {
	user: AuthUser | null;
	token: string | null;
	loading: boolean;
	isAuthenticated: boolean;
	login: (token: string, user: AuthUser) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
