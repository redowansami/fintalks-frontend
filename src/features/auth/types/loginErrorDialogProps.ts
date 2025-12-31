export interface LoginErrorDialogProps {
	message: string;
	validationErrors?: Record<string, string | string[]>;
	email: string;
	onResend: (email: string) => Promise<unknown>;
	children?: React.ReactNode;
}
