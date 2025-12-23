import { Footer } from '../components';
import { Header } from '../components/Blank_Header';
import { LoginForm } from '../components/LoginForm';
import { LoginResponse } from '../components/LoginResponse';
import { useLoginForm } from '../hooks/useLoginForm';
import { useLoginHandler } from '../hooks/useLoginHandler';
import '../styles/Login.css';

export const Login = () => {
	const {
		formData,
		errors,
		showPassword,
		handleInputChange,
		validateForm,
		togglePasswordVisibility,
	} = useLoginForm();

	const {
		loading,
		apiError,
		successMessage,
		showResponse,
		token,
		handleSubmit: createSubmitHandler,
	} = useLoginHandler();

	const handleSubmit = createSubmitHandler(formData, validateForm);

	return (
		<>
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

					<LoginResponse
						apiError={apiError}
						showResponse={showResponse}
						successMessage={successMessage}
						token={token}
					/>

					<LoginForm
						formData={formData}
						errors={errors}
						loading={loading}
						showPassword={showPassword}
						onInputChange={handleInputChange}
						onSubmit={handleSubmit}
						onTogglePassword={togglePasswordVisibility}
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
