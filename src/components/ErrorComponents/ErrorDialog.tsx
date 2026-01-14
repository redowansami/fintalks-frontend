import { ErrorList } from './ErrorList';
import type { ErrorDialogProps } from '../../interfaces/components/errorComponents';
import '../../styles/components/ErrorComponents/ErrorDialog.css';
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
