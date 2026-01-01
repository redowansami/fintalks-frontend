import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { changePasswordService } from '../services';

interface PasswordChangeFormData {
	currentPassword: string;
	newPassword: string;
	confirmPassword: string;
}

const INITIAL_STATE: PasswordChangeFormData = {
	currentPassword: '',
	newPassword: '',
	confirmPassword: '',
};

export const useChangePassword = (onClose: () => void) => {
	const [formData, setFormData] = useState<PasswordChangeFormData>(INITIAL_STATE);
	const [showSuccess, setShowSuccess] = useState(false);

	const updateField = (field: keyof PasswordChangeFormData, value: string) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const changePasswordMutation = useMutation({
		mutationFn: () =>
			changePasswordService.changePassword(formData.currentPassword, formData.newPassword),
		onSuccess: () => {
			setShowSuccess(true);
			setTimeout(() => {
				resetAndClose();
			}, 2000);
		},
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Validation
		if (!formData.currentPassword.trim()) {
			alert('Please enter your current password');
			return;
		}
		if (!formData.newPassword.trim()) {
			alert('Please enter your new password');
			return;
		}
		if (!formData.confirmPassword.trim()) {
			alert('Please confirm your new password');
			return;
		}
		if (formData.newPassword !== formData.confirmPassword) {
			alert('New passwords do not match');
			return;
		}
		if (formData.currentPassword === formData.newPassword) {
			alert('New password must be different from current password');
			return;
		}

		changePasswordMutation.mutate();
	};

	const resetAndClose = () => {
		setFormData(INITIAL_STATE);
		setShowSuccess(false);
		onClose();
	};

	return {
		formData,
		showSuccess,
		isPending: changePasswordMutation.isPending,
		error: changePasswordMutation.error,
		updateField,
		handleSubmit,
		resetAndClose,
	};
};
