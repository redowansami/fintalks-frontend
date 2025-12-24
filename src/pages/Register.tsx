import {
	Footer,
	Modal,
	ErrorDialog,
	RegisterHeader,
	RegisterFooter,
	RegisterForm,
} from '../components';
import { Header } from '../components/Blank_Header';
import { useForm } from '../hooks/useRegistrationForm';
import { useRegister } from '../hooks/useRegisterHandler';
import { signUp } from '../services/authService';
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
		await signUp(formData);
		resetForm();
	});

	return (
		<>
			<Header />
			<Modal
				isOpen={showSuccessModal}
				onClose={() => setShowSuccessModal(false)}
				message="The registration email was sent successfully, check your email address"
				actionButtonText="OK"
			/>
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
