import { Modal, ErrorDialog } from '../components';
import {
	ResendEmailLink,
	useRegistrationForm,
	useRegisterHandler,
	signUp,
	resendConfirmationEmail,
	AuthFormLayout,
	AuthForm,
} from '../features/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

export const Register = () => {
	const { formData, errors, handleInputChange, validateForm, resetForm } = useRegistrationForm();
	const {
		error,
		validationErrors,
		loading,
		handleSubmit,
		showSuccessModal,
		setShowSuccessModal,
	} = useRegisterHandler(validateForm, async () => {
		const { username, name, email, password } = formData;
		await signUp({ username, name, email, password });
	});
	const navigate = useNavigate();
	return (
		<>
			<Modal
				isOpen={showSuccessModal}
				onClose={() => {
					resetForm();
					setShowSuccessModal(false);
					navigate('/login');
				}}
				message="The registration email was sent successfully, check your email address"
				actionButtonText="OK"
			>
				<ResendEmailLink email={formData.email} onResend={resendConfirmationEmail} />
			</Modal>
			<AuthFormLayout
				title="Register"
				subtitle="Join Us!!"
				footerText="Already have an account?"
				footerLinkText="Log in"
				footerLink="/login"
			>
				{error && (
					<ErrorDialog
						message={error}
						validationErrors={
							validationErrors ||
							(Object.keys(errors).length > 0 ? errors : undefined)
						}
					/>
				)}

				<AuthForm
					mode="register"
					formData={formData}
					errors={errors}
					isPending={loading}
					onInputChange={handleInputChange}
					onSubmit={handleSubmit}
				/>
			</AuthFormLayout>
		</>
	);
};
