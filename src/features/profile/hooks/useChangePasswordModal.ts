import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { changePasswordService } from '../services';

type ChangePasswordStep = 'oldPassword' | 'verification' | 'newPassword' | 'success';

interface PasswordChangeState {
	currentStep: ChangePasswordStep;
	verificationToken: string;
	oldPassword: string;
	code: string;
	newPassword: string;
	confirmPassword: string;
}

const INITIAL_STATE: PasswordChangeState = {
	currentStep: 'oldPassword',
	verificationToken: '',
	oldPassword: '',
	code: '',
	newPassword: '',
	confirmPassword: '',
};

export const useChangePassword = (onClose: () => void) => {
	const [state, setState] = useState<PasswordChangeState>(INITIAL_STATE);

	const goToStep = (step: ChangePasswordStep) => {
		setState((prev) => ({ ...prev, currentStep: step }));
	};

	const goToPreviousStep = () => {
		const stepSequence: ChangePasswordStep[] = ['oldPassword', 'verification', 'newPassword'];
		const currentIndex = stepSequence.indexOf(state.currentStep);
		if (currentIndex > 0) {
			goToStep(stepSequence[currentIndex - 1]);
		}
	};

	const resetAndClose = () => {
		setState(INITIAL_STATE);
		onClose();
	};

	const updateField = (field: keyof PasswordChangeState, value: string) => {
		setState((prev) => ({ ...prev, [field]: value }));
	};

	const changePasswordMutation = useMutation({
		mutationFn: (password: string) => changePasswordService.requestPasswordChange(password),
		onSuccess: () => goToStep('verification'),
	});

	const verifyCodeMutation = useMutation({
		mutationFn: (verificationCode: string) =>
			changePasswordService.verifyPasswordCode(verificationCode),
		onSuccess: (data) => {
			setState((prev) => ({ ...prev, verificationToken: data.token }));
			goToStep('newPassword');
		},
	});

	const confirmChangeMutation = useMutation({
		mutationFn: () =>
			changePasswordService.confirmPasswordChange(state.verificationToken, state.newPassword),
		onSuccess: () => goToStep('success'),
	});

	const handleOldPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateField('oldPassword', e.target.value);
	};

	const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateField('code', e.target.value);
	};

	const handleNewPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateField('newPassword', e.target.value);
	};

	const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		updateField('confirmPassword', e.target.value);
	};

	const handleOldPasswordSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!state.oldPassword.trim()) {
			alert('Please enter your current password');
			return;
		}
		changePasswordMutation.mutate(state.oldPassword);
	};

	const handleCodeSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!state.code.trim()) {
			alert('Please enter the verification code');
			return;
		}
		verifyCodeMutation.mutate(state.code);
	};

	const handleNewPasswordSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (state.newPassword !== state.confirmPassword) {
			alert('Passwords do not match');
			return;
		}
		confirmChangeMutation.mutate();
	};

	return {
		step: state.currentStep,
		formData: state,
		mutations: {
			request: changePasswordMutation,
			verify: verifyCodeMutation,
			confirm: confirmChangeMutation,
		},
		handlers: {
			handleOldPasswordChange,
			handleCodeChange,
			handleNewPasswordChange,
			handleConfirmPasswordChange,
			handleOldPasswordSubmit,
			handleCodeSubmit,
			handleNewPasswordSubmit,
		},
		helpers: {
			goToStep,
			goToPrevious: goToPreviousStep,
			updateField,
			resetAndClose,
		},
	};
};
