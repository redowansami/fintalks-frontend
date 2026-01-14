import type { BaseResponse } from './base';
import type { UpdateProfileInput, ChangePasswordInput } from '../common/profile';
import type { User } from '../common/auth';

export interface ProfileResponse extends BaseResponse {
	profile: User;
}

export interface UpdateProfileRequest extends UpdateProfileInput {
	profilePictureUrl?: string;
}

export type ChangePasswordRequest = ChangePasswordInput;
