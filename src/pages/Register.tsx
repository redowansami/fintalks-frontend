import { Footer, Modal, ErrorDialog, FormHeader, FormFooter } from '../components';
import {
	RegisterForm,
	ResendEmailLink,
	useRegistrationForm,
	useRegisterHandler,
	signUp,
	resendConfirmationEmail,
} from '../features/auth';
import { Header } from '../components/Blank_Header';
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
			<Header />
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
			<div className="register-container-wrapper">
				<div className="register-container">
					<FormHeader
						title="Register"
						subtitle="Create your account to join the conversation"
					/>

					{error && (
						<ErrorDialog
							message={error}
							validationErrors={
								validationErrors ||
								(Object.keys(errors).length > 0 ? errors : undefined)
							}
						/>
					)}

					<RegisterForm
						formData={formData}
						errors={errors}
						loading={loading}
						onInputChange={handleInputChange}
						onSubmit={handleSubmit}
					/>

					<FormFooter text="Already have an account?" linkText="Log in" link="/login" />
				</div>
			</div>
			<Footer />
		</>
	);
};
