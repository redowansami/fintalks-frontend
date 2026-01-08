import { useNavigate } from 'react-router-dom';
import { Modal, ErrorDialog } from '../../../components';
import { RegisterForm } from './RegisterForm';
import { ResendEmailLink } from './ResendEmailLink';
import { useRegistrationForm, useRegisterHandler } from '../hooks';
import { signUp, resendConfirmationEmail } from '../services';

export const RegisterSection = () => {
	const navigate = useNavigate();

	const registerForm = useRegistrationForm();
	const registerHandler = useRegisterHandler(registerForm.validateForm, async () => {
		const { username, name, email, password } = registerForm.formData;
		await signUp({ username, name, email, password });
	});

	const handleRegisterClose = () => {
		registerForm.resetForm();
		registerHandler.setShowSuccessModal(false);
		navigate('/login');
	};

	return (
		<>
			<Modal
				isOpen={registerHandler.showSuccessModal}
				onClose={handleRegisterClose}
				message="The registration email was sent successfully, check your email address"
				actionButtonText="OK"
			>
				<ResendEmailLink
					email={registerForm.formData.email}
					onResend={resendConfirmationEmail}
				/>
			</Modal>

			{registerHandler.error && (
				<ErrorDialog
					message={registerHandler.error}
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
				isPending={registerHandler.loading}
				onInputChange={registerForm.handleInputChange}
				onSubmit={registerHandler.handleSubmit}
			/>
		</>
	);
};
