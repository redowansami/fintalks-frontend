import { apiClient } from '../services/apiClient';
import type { GetAllUsersResponse, GetAllUsersParams } from '../interfaces/services/user';

export const userApi = {
	getAllUsers: (params: GetAllUsersParams = {}) =>
		apiClient.get<GetAllUsersResponse>('/api/v1/users', { params }),
};
