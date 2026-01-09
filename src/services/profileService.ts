import { profileApi } from '../apis/profile';
import { uploadImageToImgbb } from './imageUploadService';
import { ApiError } from './apiClient';
import type { UpdateProfileRequest, ChangePasswordRequest } from '../types/profile';

export const profileService = {
	getProfile: () => profileApi.getProfile(),

	updateProfile: (data: UpdateProfileRequest) => profileApi.updateProfile(data),

	changePassword: (data: ChangePasswordRequest) => profileApi.changePassword(data),

	async updateProfilePicture(file: File) {
		if (!file.type.startsWith('image/')) {
			throw new ApiError('Please select a valid image file', 400);
		}
		if (file.size > 5 * 1024 * 1024) {
			throw new ApiError('Image size must be less than 5MB', 400);
		}

		const imageUrl = await uploadImageToImgbb(file);

		return await profileApi.updateProfile({ profilePictureUrl: imageUrl });
	},
};
