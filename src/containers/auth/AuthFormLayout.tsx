import { FormHeader, FormFooter } from '../../components/FormComponents';
import type { AuthLayoutProps } from '../../interfaces/containers/auth';
import '../../styles/containers/auth/Auth.css';

export const AuthFormLayout = ({
	title,
	subtitle,
	footerText,
	footerLink,
	footerLinkText,
	children,
}: AuthLayoutProps) => (
	<div className="auth-card">
		<FormHeader title={title} subtitle={subtitle} />
		{children}
		<FormFooter text={footerText} linkText={footerLinkText} link={footerLink} />
	</div>
);
