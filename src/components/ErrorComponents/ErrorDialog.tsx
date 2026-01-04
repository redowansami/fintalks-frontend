import { ErrorList } from './ErrorList';
import type { ErrorDialogProps } from '../../types/components/errorComponents/errorDialogProps';
import '../../styles/errorComponents/errorDialog.css';

export const ErrorDialog = ({ message, validationErrors, children }: ErrorDialogProps) => {
	return (
		<div className="error-dialog">
			<p className="error-dialog-message">{message}</p>

			{validationErrors && Object.keys(validationErrors).length > 0 && (
				<ErrorList errors={validationErrors} />
			)}
			{children}
		</div>
	);
};
