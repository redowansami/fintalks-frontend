import { FormHeader, FormFooter } from '../../../components/FormComponents';
import '../styles/Auth.css';

interface AuthLayoutProps {
	title: string;
	subtitle?: string;
	footerText: string;
	footerLink: string;
	footerLinkText: string;
	children: React.ReactNode;
}

export const AuthFormLayout = ({
	title,
	subtitle,
	footerText,
	footerLink,
	footerLinkText,
	children,
}: AuthLayoutProps) => (
	<div className="auth-page-layout">
		<div className="auth-card">
			<FormHeader title={title} subtitle={subtitle} />
			{children}
			<FormFooter text={footerText} linkText={footerLinkText} link={footerLink} />
		</div>
	</div>
);
