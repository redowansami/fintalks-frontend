import { userApi } from '../apis/user';
import type { GetAllUsersParams, GetAllUsersResponse } from '../interfaces/services/user';

export const userService = {
	getAllUsers: async (params: GetAllUsersParams = {}): Promise<GetAllUsersResponse> => {
		const queryParams: GetAllUsersParams = {
			limit: 12,
			...params,
		};
		const response = await userApi.getAllUsers(queryParams);
		return response.data;
	},
};
