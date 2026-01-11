import type { User } from './auth';
import type { BaseResponse } from './base';

export interface UserProfile extends User {
	bio: string | null;
	profilePictureUrl: string | null;
}

export interface ProfileResponse extends BaseResponse {
	profile: UserProfile;
}

export interface UpdateProfileRequest {
	name?: string;
	bio?: string;
	profilePictureUrl?: string;
}

export interface ChangePasswordRequest {
	currentPassword: string;
	newPassword: string;
}
