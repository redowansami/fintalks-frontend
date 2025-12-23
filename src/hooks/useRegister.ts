import { useMutation } from '@tanstack/react-query';

interface UseRegisterReturn {
	loading: boolean;
	error: string;
	validationErrors?: Record<string, string | string[]>;
	handleSubmit: (e: React.FormEvent) => void;
	showSuccessModal: boolean;
	setShowSuccessModal: (show: boolean) => void;
}

export const useRegister = (
	validateForm: () => boolean,
	onSuccess: () => Promise<void>,
): UseRegisterReturn => {
	const mutation = useMutation({
		mutationFn: onSuccess,
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;
		mutation.mutate();
	};

	const setShowSuccessModal = (show: boolean) => {
		if (!show) {
			mutation.reset();
		}
	};

	const error = mutation.error as Error & { errors?: Record<string, string | string[]> };

	return {
		loading: mutation.isPending,
		error: mutation.error instanceof Error ? mutation.error.message : '',
		validationErrors: error?.errors,
		handleSubmit,
		showSuccessModal: mutation.isSuccess,
		setShowSuccessModal,
	};
};
