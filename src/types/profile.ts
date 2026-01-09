import type { User } from './auth';

export interface UserProfile extends User {
	bio: string | null;
	profilePictureUrl: string | null;
}

export interface ProfileResponse {
	success: boolean;
	message: string;
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

export interface ChangePasswordResponse {
	success: boolean;
	message: string;
}
