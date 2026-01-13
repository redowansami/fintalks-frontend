import type { User } from '../services/user';

export interface UserProfile extends User {
	bio: string | null;
	profilePictureUrl: string | null;
}

export interface UpdateProfileInput {
	name: string;
	bio: string;
}

export interface ChangePasswordInput {
	currentPassword: string;
	newPassword: string;
}
