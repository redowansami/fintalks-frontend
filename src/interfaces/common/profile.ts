export interface UpdateProfileInput {
	name?: string;
	bio?: string;
}

export interface ChangePasswordInput {
	currentPassword: string;
	newPassword: string;
}
