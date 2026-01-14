import type { BaseResponse } from './base';
import type { FilterOption } from '../../constants/userFilterConstants';
import type { User } from '../common/auth';

export interface GetAllUsersParams {
	search?: string;
	orderBy?: FilterOption;
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
