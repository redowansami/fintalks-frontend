interface RegisterHeaderProps {
	title?: string;
	subtitle?: string;
}

export const RegisterHeader = ({
	title = 'Register',
	subtitle = 'Create your account to join the conversation',
}: RegisterHeaderProps) => (
	<div className="register-header">
		<h2>{title}</h2>
		<p>{subtitle}</p>
	</div>
);
