import type { BaseResponse } from './base';

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

export interface GetAllUsersParams {
	search?: string;
	orderBy?: 'userId' | 'username' | 'name' | 'email' | 'joinDate';
	page?: number;
	limit?: number;
}

export interface GetAllUsersResponse extends BaseResponse {
	list: User[];
	page: number;
	nextPage?: number;
}

export interface GetUserByIdResponse extends BaseResponse {
	user: User;
}
