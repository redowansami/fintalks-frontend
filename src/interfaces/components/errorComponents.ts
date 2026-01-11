import type { ReactNode } from 'react';

export interface ErrorDialogProps {
	message: string;
	validationErrors?: Record<string, string | string[]>;
	children?: ReactNode;
}

export interface ErrorListProps {
	errors: Record<string, string | string[]>;
}
