import { useMutation } from '@tanstack/react-query';

interface UseRegisterReturn {
	loading: boolean;
	apiError: string;
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

	return {
		loading: mutation.isPending,
		apiError: mutation.error instanceof Error ? mutation.error.message : '',
		handleSubmit,
		showSuccessModal: mutation.isSuccess,
		setShowSuccessModal,
	};
};
