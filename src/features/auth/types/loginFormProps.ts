export interface LoginFormProps {
	formData: { email: string; password: string };
	errors: { [key: string]: string };
	isPending: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent) => void;
}
