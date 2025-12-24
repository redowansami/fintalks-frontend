import type { ReactNode } from 'react';
import { ErrorList } from './ErrorList';

interface ErrorDialogProps {
	message: string;
	validationErrors?: Record<string, string | string[]>;
	children?: ReactNode;
}

export const ErrorDialog = ({ message, validationErrors, children }: ErrorDialogProps) => {
	return (
		<div
			style={{
				padding: '1rem',
				marginBottom: '1rem',
				backgroundColor: '#fee2e2',
				color: '#dc2626',
				borderRadius: '0.375rem',
				fontSize: '0.875rem',
				border: '1px solid #fca5a5',
			}}
		>
			<p style={{ margin: '0 0 0.5rem 0', fontWeight: '500' }}>{message}</p>

			{validationErrors && Object.keys(validationErrors).length > 0 && (
				<ErrorList errors={validationErrors} />
			)}

			{children}
		</div>
	);
};
