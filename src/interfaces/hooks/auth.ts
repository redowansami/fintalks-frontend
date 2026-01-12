import type { AsyncState } from './common';
import type { LoginData, RegisterData } from '../common/auth';

export interface UseLoginFormReturn {
	formData: LoginData;
	errors: { [key: string]: string };
	showPassword: boolean;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	validateForm: () => boolean;
	togglePasswordVisibility: () => void;
}

export interface UseLoginHandlerReturn extends AsyncState {
	validationErrors: Record<string, string | string[]> | undefined;
	mutate: (credentials: LoginData) => void;
}

export interface FormErrors {
	[key: string]: string;
}

export interface UseFormReturn {
	formData: RegisterData;
	errors: FormErrors;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
	validateForm: () => boolean;
	resetForm: () => void;
}

export interface UseRegisterHandlerReturn extends AsyncState {
	validationErrors?: Record<string, string | string[]>;
	showSuccessModal: boolean;
	setShowSuccessModal: (show: boolean) => void;
	register: (data: RegisterData) => void;
}
