import type { ReactNode } from 'react';

export interface ErrorDialogProps {
	message: string;
	validationErrors?: Record<string, string | string[]>;
	children?: ReactNode;
}
