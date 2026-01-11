export interface LoginFormProps {
	formData: {
		email: string;
		password: string;
	};
	errors: {
		email?: string;
		password?: string;
		[key: string]: string | undefined;
	};
	isPending: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface RegisterFormProps {
	formData: {
		username: string;
		name: string;
		email: string;
		password: string;
		confirmPassword: string;
	};
	errors: {
		email?: string;
		password?: string;
		confirmPassword?: string;
		username?: string;
		name?: string;
		[key: string]: string | undefined;
	};
	isPending: boolean;
	onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface AuthLayoutProps {
	title: string;
	subtitle?: string;
	footerText: string;
	footerLink: string;
	footerLinkText: string;
	children: React.ReactNode;
}
