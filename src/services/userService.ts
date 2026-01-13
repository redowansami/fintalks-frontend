import { userApi } from '../apis/user';
import type { GetAllUsersParams, GetAllUsersResponse } from '../interfaces/services/user';

export const userService = {
	getAllUsers: async (params: GetAllUsersParams = {}): Promise<GetAllUsersResponse> => {
		return await userApi.getAllUsers(params);
	},
};
