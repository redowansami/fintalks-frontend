import { ErrorDialog } from '../../../components';
import { LoginForm } from './LoginForm';
import { ResendEmailLink } from './ResendEmailLink';
import { useLoginForm, useLoginHandler } from '../hooks';
import { resendConfirmationEmail } from '../services';

export const LoginSection = () => {
	const loginForm = useLoginForm();
	const loginHandler = useLoginHandler();

	const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!loginForm.validateForm()) return;
		loginHandler.mutate(loginForm.formData);
	};

	return (
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
	);
};
