import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { profileService } from '../../services/profileService';
import { ApiError } from '../../lib/apiClient';

interface PasswordForm {
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
}

const INITIAL_STATE: PasswordForm = {
	currentPassword: '',
	newPassword: '',
	confirmPassword: '',
};

export const useChangePassword = (onClose: () => void) => {
	const [formData, setFormData] = useState<PasswordForm>(INITIAL_STATE);
	const [showSuccess, setShowSuccess] = useState(false);

	const mutation = useMutation({
		mutationFn: () =>
			profileService.changePassword({
				currentPassword: formData.currentPassword,
				newPassword: formData.newPassword,
			}),
		onSuccess: () => {
			setShowSuccess(true);

			setTimeout(() => {
				resetAndClose();
			}, 2000);
		},
	});

	const updateField = (field: keyof PasswordForm, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		if (formData.newPassword !== formData.confirmPassword) {
			alert('New passwords do not match');
			return;
		}

		mutation.mutate();
	};

	const resetAndClose = () => {
		setFormData(INITIAL_STATE);
		setShowSuccess(false);
		onClose();
	};

	return {
		formData,
		showSuccess,
		isPending: mutation.isPending,
		error: mutation.error as ApiError | null,
		updateField,
		handleSubmit,
		resetAndClose,
	};
};
