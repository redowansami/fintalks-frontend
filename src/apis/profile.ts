import { apiClient } from '../services/apiClient';
import type {
	ProfileResponse,
	UpdateProfileRequest,
	ChangePasswordRequest,
} from '../interfaces/services/profile';
import type { BaseResponse } from '../interfaces/services/base';

export const profileApi = {
	getProfile: () => apiClient.get<never, ProfileResponse>('/users/profile'),

	updateProfile: (data: UpdateProfileRequest) =>
		apiClient.patch<UpdateProfileRequest, ProfileResponse>('/users/profile', data),

	changePassword: (data: ChangePasswordRequest) =>
		apiClient.post<ChangePasswordRequest, BaseResponse>('/users/change-password', data),
};
