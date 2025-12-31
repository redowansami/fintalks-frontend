import { LoginErrorDialog } from './LoginErrorDialog';
import { FormHeader } from '../../../components/FormComponents/FormHeader';
import { FormFooter } from '../../../components/FormComponents/FormFooter';
import { LoginForm } from './LoginForm';
import type { LoginPageContentProps } from '../types';
import '../styles/Login.css';

export const LoginPageContent = ({
	formData,
	errors,
	isPending,
	isError,
	error,
	validationErrors,
	onInputChange,
	onSubmit,
	onResend,
}: LoginPageContentProps) => {
	return (
		<div className="login-page-layout">
			<div className="login-card">
				<FormHeader title="Log in" />
				{isError && (
					<LoginErrorDialog
						message={error?.message || 'Login failed. Please try again.'}
						validationErrors={validationErrors}
						email={formData.email}
						onResend={onResend}
					/>
				)}
				<LoginForm
					formData={formData}
					errors={errors}
					isPending={isPending}
					onInputChange={onInputChange}
					onSubmit={onSubmit}
				/>
				<FormFooter text="Don't have an account?" linkText="Sign Up" link="/signup" />
			</div>
		</div>
	);
};
