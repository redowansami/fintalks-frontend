import { ErrorList } from './ErrorList';
import type { ErrorDialogProps } from '../../types/errorComponents/errorDialogProps';
import '../../styles/errorComponents/errorDialog.css';
import { Typography } from '../Typography';

export const ErrorDialog = ({ message, validationErrors, children }: ErrorDialogProps) => {
	return (
		<div className="error-dialog">
			<Typography color="error">{message}</Typography>
			{validationErrors && <ErrorList errors={validationErrors} />}
			{children}
		</div>
	);
};
