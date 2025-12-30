import { Footer } from '../components';
import { Header } from '../components/Blank_Header';
import { LoginForm } from '../components/LoginForm';
import { Spinner } from '../components/Spinner';
import { LoginErrorDialog } from '../components/ErrorComponents/LoginErrorDialog';
import { FormHeader } from '../components/FormHeader';
import { FormFooter } from '../components/FormFooter';
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
			<div className="auth-page-layout">
				<div className="login-card">
					<FormHeader title="Log in" />
					{isError && (
						<LoginErrorDialog
							message={error?.message || 'Login failed. Please try again.'}
							validationErrors={validationErrors}
							email={formData.email}
							onResend={resendConfirmationEmail}
						/>
					)}
					<LoginForm
						formData={formData}
						errors={errors}
						isPending={isPending}
						onInputChange={handleInputChange}
						onSubmit={handleSubmit}
					/>
					<FormFooter text="Don't have an account?" linkText="Sign Up" link="/signup" />
				</div>
			</div>
			<Footer />
		</>
	);
};
