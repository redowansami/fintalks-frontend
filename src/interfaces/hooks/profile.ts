import type { ChangePasswordInput } from '../common/profile';
import type { AsyncState } from './common';

export interface PasswordForm extends ChangePasswordInput {
	confirmPassword: string;
}

export interface UseProfilePictureUploadResult extends AsyncState {
	uploadProfilePicture: (file: File) => void;
}
