import { useState } from 'react';

interface UseRegisterReturn {
	loading: boolean;
	apiError: string;
	handleSubmit: (e: React.FormEvent) => Promise<void>;
	showSuccessModal: boolean;
	setShowSuccessModal: (show: boolean) => void;
}

export const useRegister = (
	validateForm: () => boolean,
	onSuccess: () => Promise<void>,
): UseRegisterReturn => {
	const [loading, setLoading] = useState(false);
	const [apiError, setApiError] = useState('');
	const [showSuccessModal, setShowSuccessModal] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;

		setLoading(true);
		try {
			await onSuccess();
			setShowSuccessModal(true);
		} catch (error) {
			setApiError(error instanceof Error ? error.message : 'Registration failed');
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		apiError,
		handleSubmit,
		showSuccessModal,
		setShowSuccessModal,
	};
};
