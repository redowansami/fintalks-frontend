export {
	PasswordRequirements,
	ResendEmailLink,
	AuthFormLayout,
	LoginForm,
	RegisterForm,
} from './components';

export {
	useLoginForm,
	useLoginHandler,
	useRegistrationForm,
	useRegisterHandler,
	useResendEmail,
} from './hooks';

export {
	login,
	signUp,
	resendConfirmationEmail,
	type LoginResponse,
	LoginError,
	type ValidationError,
} from './services';

export type { LoginFormProps, LoginPageContentProps, PasswordInputProps } from './types';

export { checkPasswordRequirements, validateRegistrationForm, getPasswordChecks } from './utils';
