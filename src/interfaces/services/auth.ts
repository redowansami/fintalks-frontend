import { createContext } from 'react';

export interface User {
	userId: string;
	username: string;
	name: string;
	email: string;
	joinDate: string;
	role: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}

export interface LoginResponse {
	success: boolean;
	token: string;
	user: User;
}

export interface SignUpRequest {
	username: string;
	name: string;
	email: string;
	password: string;
}

export interface AuthContextType {
	user: User | null;
	token: string | null;
	loading: boolean;
	isAuthenticated: boolean;
	login: (token: string, user: User) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
