import { AuthFormLayout } from '../features/auth/components/AuthFormLayout';
import { AuthForm } from '../features/auth/components/AuthForm';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import { ResendEmailLink } from '../features/auth/components/ResendEmailLink';
import { useLoginForm, useLoginHandler } from '../features/auth/hooks';
import { resendConfirmationEmail } from '../features/auth';

export const Login = () => {
	const { formData, errors, handleInputChange, validateForm } = useLoginForm();
	const { isPending, isError, error, validationErrors, mutate } = useLoginHandler();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) return;
		mutate(formData);
	};

	return (
		<AuthFormLayout
			title="Log in"
			footerText="Don't have an account?"
			footerLink="/signup"
			footerLinkText="Sign Up"
		>
			{isError && (
				<ErrorDialog message={error?.message || ''} validationErrors={validationErrors}>
					{error?.message.includes('confirm your email') && (
						<ResendEmailLink
							email={formData.email}
							onResend={resendConfirmationEmail}
						/>
					)}
				</ErrorDialog>
			)}
			<AuthForm
				mode="login"
				formData={formData}
				errors={errors}
				isPending={isPending}
				onInputChange={handleInputChange}
				onSubmit={handleSubmit}
			/>
		</AuthFormLayout>
	);
};
