import { ErrorDialog } from './ErrorDialog';
import { ResendEmailLink } from '../ResendEmailLink';
import type { LoginErrorDialogProps } from '../../types/components/errorComponents/loginErrorDialogProps';

export const LoginErrorDialog = ({
	message,
	validationErrors,
	email,
	onResend,
	children,
}: LoginErrorDialogProps) => {
	const isEmailConfirmationError = message.includes('confirm your email');

	return (
		<ErrorDialog message={message} validationErrors={validationErrors}>
			{isEmailConfirmationError && <ResendEmailLink email={email} onResend={onResend} />}
			{children}
		</ErrorDialog>
	);
};
