import { ErrorList } from './ErrorList';
import type { ReactNode } from 'react';
import '../../styles/errorComponents/errorDialog.css';
import { Typography } from '../Typography';

export interface ErrorDialogProps {
	message: string;
	validationErrors?: Record<string, string | string[]>;
	children?: ReactNode;
}

export const ErrorDialog = ({ message, validationErrors, children }: ErrorDialogProps) => {
	return (
		<div className="error-dialog">
			<Typography color="error">{message}</Typography>
			{validationErrors && <ErrorList errors={validationErrors} />}
			{children}
		</div>
	);
};
