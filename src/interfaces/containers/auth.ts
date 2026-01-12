import type { RegisterData } from '../common/auth';

export interface AuthLayoutProps {
	title: string;
	subtitle?: string;
	footerText: string;
	footerLink: string;
	footerLinkText: string;
	children: React.ReactNode;
}

export interface RegisterFormData extends RegisterData {
	confirmPassword: string;
}
