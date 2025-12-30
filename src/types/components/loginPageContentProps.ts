export interface LoginPageContentProps {
	formData: { email: string; password: string };
	errors: { [key: string]: string };
	isPending: boolean;
	isError: boolean;
	error: Error | null;
	validationErrors?: Record<string, string | string[]>;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
	onResend: (email: string) => Promise<unknown>;
}
