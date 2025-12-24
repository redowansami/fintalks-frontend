import {
	Footer,
	Modal,
	ErrorDialog,
	RegisterHeader,
	RegisterFooter,
	RegisterForm,
} from '../components';
import { Header } from '../components/Blank_Header';
import { ResendEmailLink } from '../components/ResendEmailLink';
import { useForm } from '../hooks/useRegistrationForm';
import { useRegister } from '../hooks/useRegisterHandler';
import { signUp, resendConfirmationEmail } from '../services/authService';
import { useNavigate } from 'react-router-dom';
import '../styles/Register.css';

export const Register = () => {
	const { formData, errors, handleInputChange, validateForm, resetForm } = useForm();
	const {
		error,
		validationErrors,
		loading,
		handleSubmit,
		showSuccessModal,
		setShowSuccessModal,
	} = useRegister(validateForm, async () => {
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
					<RegisterHeader />

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

					<RegisterFooter />
				</div>
			</div>
			<Footer />
		</>
	);
};
