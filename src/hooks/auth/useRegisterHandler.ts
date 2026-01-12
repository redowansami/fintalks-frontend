import { useMutation } from '@tanstack/react-query';
import { authService } from '../../services/authService';
import { ApiError } from '../../services/apiClient';
import type { UseRegisterHandlerReturn } from '../../interfaces/hooks/auth';
import type { RegisterData } from '../../interfaces/common/auth';

export const useRegisterHandler = (validateForm: () => boolean): UseRegisterHandlerReturn => {
	const mutation = useMutation({
		mutationFn: (data: RegisterData) => authService.signUp(data),
	});

	const register = (data: RegisterData) => {
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
		isPending: mutation.isPending,
		isSuccess: mutation.isSuccess,
		isError: mutation.isError,
		error: mutation.error,
		validationErrors,
		showSuccessModal: mutation.isSuccess,
		setShowSuccessModal,
		register,
	};
};
