import { useMutation } from '@tanstack/react-query';
import { authService } from '../../services/authService';
import { ApiError } from '../../services/apiClient';
import type { SignUpRequest } from '../../types/auth';

interface UseRegisterHandlerReturn {
	isLoading: boolean;
	isError: boolean;
	error: Error | null;
	validationErrors?: Record<string, string | string[]>;
	showSuccessModal: boolean;
	setShowSuccessModal: (show: boolean) => void;
	register: (data: SignUpRequest) => void;
}

export const useRegisterHandler = (validateForm: () => boolean): UseRegisterHandlerReturn => {
	const mutation = useMutation({
		mutationFn: (data: SignUpRequest) => authService.signUp(data),
	});

	const register = (data: SignUpRequest) => {
		if (!validateForm()) return;
		mutation.mutate(data);
	};

	const setShowSuccessModal = (show: boolean) => {
		if (!show) {
			mutation.reset();
		}
	};

	const validationErrors =
		mutation.error instanceof ApiError ? mutation.error.validationErrors : undefined;

	return {
		isLoading: mutation.isPending,
		isError: mutation.isError,
		error: mutation.error,
		validationErrors,
		showSuccessModal: mutation.isSuccess,
		setShowSuccessModal,
		register,
	};
};
