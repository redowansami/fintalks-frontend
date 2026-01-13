import { userApi } from '../apis/user';
import type {
	GetAllUsersParams,
	GetAllUsersResponse,
	GetUserByIdResponse,
} from '../interfaces/services/user';

export const userService = {
	getAllUsers: async (params: GetAllUsersParams = {}): Promise<GetAllUsersResponse> => {
		return await userApi.getAllUsers(params);
	},
	getUserById: async (userId: string): Promise<GetUserByIdResponse> => {
		return await userApi.getUserById(userId);
	},
	deleteUser: async (userId: string): Promise<{ message: string }> => {
		return await userApi.deleteUser(userId);
	},
};
