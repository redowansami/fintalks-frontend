import { Footer } from '../components';
import { Header } from '../components/Blank_Header';
import { LoginForm } from '../components/LoginForm';
import { Spinner } from '../components/Spinner';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import { useLoginForm } from '../hooks/useLoginForm';
import { useLoginHandler } from '../hooks/useLoginHandler';
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
					<div className="login-header">
						<h2>Log in</h2>
					</div>

					{isError && (
						<ErrorDialog
							message={error?.message || 'Login failed. Please try again.'}
							validationErrors={validationErrors}
						/>
					)}

					<LoginForm
						formData={formData}
						errors={errors}
						isPending={isPending}
						onInputChange={handleInputChange}
						onSubmit={handleSubmit}
					/>

					<div className="login-footer">
						<p>
							Don't have an account? <a href="/signup">Sign Up</a>
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};
