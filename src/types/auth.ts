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

export interface AuthResponse {
	success: boolean;
	message: string;
}

export interface ResendConfirmationResponse {
	success: boolean;
	message: string;
}
