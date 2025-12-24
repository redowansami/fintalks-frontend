import { Footer } from '../components';
import { Header } from '../components/Blank_Header';
import { LoginForm } from '../components/LoginForm';
import { Spinner } from '../components/Spinner';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import { ResendEmailLink } from '../components/ResendEmailLink';
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
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					minHeight: 'calc(100vh - 300px)',
					padding: '2rem 1rem',
				}}
			>
				<div className="login-container">
					<FormHeader title="Log in" />

					{isError && (
						<ErrorDialog
							message={error?.message || 'Login failed. Please try again.'}
							validationErrors={validationErrors}
						>
							{error?.message?.includes('confirm your email') && (
								<ResendEmailLink
									email={formData.email}
									onResend={resendConfirmationEmail}
								/>
							)}
						</ErrorDialog>
					)}
					<LoginForm
						formData={formData}
						errors={errors}
						isPending={isPending}
						onInputChange={handleInputChange}
						onSubmit={handleSubmit}
					/>

					<div className="login-footer">
						<FormFooter
							text="Don't have an account?"
							linkText="Sign Up"
							link="/signup"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
