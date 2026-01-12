import type { BaseResponse } from './base';
import type { UserProfile, UpdateProfileInput, ChangePasswordInput } from '../common/profile';

export interface ProfileResponse extends BaseResponse {
	profile: UserProfile;
}

export interface UpdateProfileRequest extends UpdateProfileInput {
	profilePictureUrl?: string;
}

export type ChangePasswordRequest = ChangePasswordInput;
