export interface User {
	userId: string;
	username: string;
	name: string;
	email: string;
	bio: string;
	profilePictureUrl: string;
	joinDate: string;
	role: string;
}

export interface LoginData {
	email: string;
	password: string;
}

export interface RegisterData extends LoginData {
	username: string;
	name: string;
}
