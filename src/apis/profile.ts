import { apiClient } from '../lib/apiClient';
import type {
	ProfileResponse,
	UpdateProfileRequest,
	ChangePasswordRequest,
	ChangePasswordResponse,
} from '../types/profile';

export const profileApi = {
	getProfile: () => apiClient.get<never, ProfileResponse>('/users/profile'),

	updateProfile: (data: UpdateProfileRequest) =>
		apiClient.patch<UpdateProfileRequest, ProfileResponse>('/users/profile', data),

	changePassword: (data: ChangePasswordRequest) =>
		apiClient.post<ChangePasswordRequest, ChangePasswordResponse>(
			'/users/change-password',
			data,
		),
};
