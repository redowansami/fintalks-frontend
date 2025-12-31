/**
 * Auth Feature - Public API
 *
 * Only export what other parts of the app need.
 * This prevents deep imports like: import { X } from '@/features/auth/components/SubComponent'
 */

// Components
export {
	LoginForm,
	LoginPageContent,
	RegisterForm,
	PasswordInput,
	PasswordRequirements,
	ResendEmailLink,
	LoginErrorDialog,
} from './components';

// Hooks
export {
	useLoginForm,
	useLoginHandler,
	useRegistrationForm,
	useRegisterHandler,
	useResendEmail,
} from './hooks';

// Services
export {
	login,
	signUp,
	resendConfirmationEmail,
	type LoginResponse,
	LoginError,
	type ValidationError,
} from './services';

// Types
export type { LoginFormProps, LoginPageContentProps, PasswordInputProps } from './types';

// Utils
export { checkPasswordRequirements, validateRegistrationForm, getPasswordChecks } from './utils';
