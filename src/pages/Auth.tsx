import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Modal, ErrorDialog } from '../components';
import { AuthFormLayout } from '../features/auth/components/AuthFormLayout';
import { LoginForm } from '../features/auth/components/LoginForm';
import { RegisterForm } from '../features/auth/components/RegisterForm';
import { ResendEmailLink } from '../features/auth/components/ResendEmailLink';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLoginForm, useLoginHandler } from '../features/auth/hooks';
import {
	useRegistrationForm,
	useRegisterHandler,
	signUp,
	resendConfirmationEmail,
} from '../features/auth';

export const Auth = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const { isAuthenticated, loading } = useAuthContext();
	const isLoginPage = location.pathname === '/login';

	useEffect(() => {
		if (!loading && isAuthenticated) {
			navigate('/');
		}
	}, [isAuthenticated, loading, navigate]);

	const loginForm = useLoginForm();
	const loginHandler = useLoginHandler();

	const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!loginForm.validateForm()) return;
		loginHandler.mutate(loginForm.formData);
	};

	const registerForm = useRegistrationForm();
	const registerHandler = useRegisterHandler(registerForm.validateForm, async () => {
		const { username, name, email, password } = registerForm.formData;
		await signUp({ username, name, email, password });
	});

	const handleRegisterClose = () => {
		registerForm.resetForm();
		registerHandler.setShowSuccessModal(false);
		navigate('/login');
	};

	return (
		<div className="layout-center">
			{!isLoginPage && (
				<Modal
					isOpen={registerHandler.showSuccessModal}
					onClose={handleRegisterClose}
					message="The registration email was sent successfully, check your email address"
					actionButtonText="OK"
				>
					<ResendEmailLink
						email={registerForm.formData.email}
						onResend={resendConfirmationEmail}
					/>
				</Modal>
			)}

			<AuthFormLayout
				title={isLoginPage ? 'Log in' : 'Register'}
				subtitle={!isLoginPage ? 'Join Us!!' : undefined}
				footerText={isLoginPage ? "Don't have an account?" : 'Already have an account?'}
				footerLink={isLoginPage ? '/signup' : '/login'}
				footerLinkText={isLoginPage ? 'Sign Up' : 'Log in'}
			>
				{isLoginPage ? (
					<>
						{loginHandler.isError && (
							<ErrorDialog
								message={loginHandler.error?.message || ''}
								validationErrors={loginHandler.validationErrors}
							>
								{loginHandler.error?.message.includes('confirm your email') && (
									<ResendEmailLink
										email={loginForm.formData.email}
										onResend={resendConfirmationEmail}
									/>
								)}
							</ErrorDialog>
						)}
						<LoginForm
							formData={loginForm.formData}
							errors={loginForm.errors}
							isPending={loginHandler.isPending}
							onInputChange={loginForm.handleInputChange}
							onSubmit={handleLoginSubmit}
						/>
					</>
				) : (
					<>
						{registerHandler.error && (
							<ErrorDialog
								message={registerHandler.error}
								validationErrors={
									registerHandler.validationErrors ||
									(Object.keys(registerForm.errors).length > 0
										? registerForm.errors
										: undefined)
								}
							/>
						)}
						<RegisterForm
							formData={registerForm.formData}
							errors={registerForm.errors}
							isPending={registerHandler.loading}
							onInputChange={registerForm.handleInputChange}
							onSubmit={registerHandler.handleSubmit}
						/>
					</>
				)}
			</AuthFormLayout>
		</div>
	);
};
