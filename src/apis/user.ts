import { apiClient } from '../services/apiClient';
import type { GetAllUsersResponse, GetAllUsersParams } from '../interfaces/services/user';

export const userApi = {
	getAllUsers: (params: GetAllUsersParams = {}) =>
		apiClient.get<never, GetAllUsersResponse>('/users', {
			params: {
				page: params.page || 1,
				limit: params.limit || 12,
				search: params.search,
				orderBy: params.orderBy,
			},
		}),
};
