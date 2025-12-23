import {
	Footer,
	Modal,
	ErrorBanner,
	RegisterHeader,
	RegisterFooter,
	RegisterForm,
} from '../components';
import { Header } from '../components/Blank_Header';
import { useForm } from '../hooks/useForm';
import { useRegister } from '../hooks/useRegister';
import { signUp } from '../services/authService';
import '../styles/Register.css';

export const Register = () => {
	const { formData, errors, setFormData, validateForm, resetForm } = useForm();
	const { apiError, loading, handleSubmit, showSuccessModal, setShowSuccessModal } = useRegister(
		validateForm,
		async () => {
			await signUp(formData);
			resetForm();
		},
	);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

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

					{apiError && <ErrorBanner message={apiError} />}

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
