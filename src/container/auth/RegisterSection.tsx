import { useNavigate } from 'react-router-dom';
import { Modal, ErrorDialog } from '../../components/index';
import { RegisterForm } from './RegisterForm';
import { ResendEmailLink } from './ResendEmailLink';
import { useRegistrationForm, useRegisterHandler } from '../../hooks/auth';

export const RegisterSection = () => {
	const navigate = useNavigate();
	const registerForm = useRegistrationForm();
	const registerHandler = useRegisterHandler(registerForm.validateForm);

	const handleRegisterClose = () => {
		registerForm.resetForm();
		registerHandler.setShowSuccessModal(false);
		navigate('/login');
	};

	const handleFormSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const { confirmPassword, ...submitData } = registerForm.formData;
		registerHandler.register(submitData);
	};

	return (
		<>
			<Modal
				isOpen={registerHandler.showSuccessModal}
				onClose={handleRegisterClose}
				message="The registration email was sent successfully, check your email address"
				actionButtonText="OK"
			>
				<ResendEmailLink email={registerForm.formData.email} />
			</Modal>

			{registerHandler.isError && (
				<ErrorDialog
					message={registerHandler.error?.message || 'Registration failed'}
					validationErrors={
						registerHandler.validationErrors ||
						(Object.keys(registerForm.errors).length > 0
							? registerForm.errors
							: undefined)
					}
				/>
			)}

			<RegisterForm
				formData={registerForm.formData}
				errors={registerForm.errors}
				isPending={registerHandler.isLoading}
				onInputChange={registerForm.handleInputChange}
				onSubmit={handleFormSubmit}
			/>
		</>
	);
};
