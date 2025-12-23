interface RegisterFooterProps {
	loginLink?: string;
	text?: string;
}

export const RegisterFooter = ({
	loginLink = '/login',
	text = 'Already have an account?',
}: RegisterFooterProps) => (
	<div className="register-footer">
		<p>
			{text} <a href={loginLink}>Log in</a>
		</p>
	</div>
);
