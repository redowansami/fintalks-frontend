import { apiClient } from '../services/apiClient';
import type {
	GetAllUsersResponse,
	GetAllUsersParams,
	GetUserByIdResponse,
} from '../interfaces/services/user';

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
	getUserById: (userId: string) => apiClient.get<never, GetUserByIdResponse>(`/users/${userId}`),
	deleteUser: (userId: string) =>
		apiClient.delete<never, { message: string }>(`/users/${userId}`),
};
