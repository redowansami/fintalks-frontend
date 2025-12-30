import { Footer } from '../components';
import { Header } from '../components/Blank_Header';
import { LoginPageContent } from '../components/LoginPageContent';
import { Spinner } from '../components/Spinner';
import { useLoginForm } from '../hooks/useLoginForm';
import { useLoginHandler } from '../hooks/useLoginHandler';
import { resendConfirmationEmail } from '../services/authService';
import '../styles/Login.css';

export const Login = () => {
	const { formData, errors, handleInputChange, validateForm } = useLoginForm();

	const { isPending, isError, error, validationErrors, mutate } = useLoginHandler();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateForm()) return;
		mutate(formData);
	};

	return (
		<>
			{isPending && <Spinner />}
			<Header />
			<LoginPageContent
				formData={formData}
				errors={errors}
				isPending={isPending}
				isError={isError}
				error={error}
				validationErrors={validationErrors}
				onInputChange={handleInputChange}
				onSubmit={handleSubmit}
				onResend={resendConfirmationEmail}
			/>
			<Footer />
		</>
	);
};
