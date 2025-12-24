import { useResendEmail } from '../hooks/useResendEmail';
import '../styles/ResendEmailLink.css';

interface ResendEmailLinkProps {
	email: string;
	onResend: (email: string) => Promise<unknown>;
}

export const ResendEmailLink = ({ email, onResend }: ResendEmailLinkProps) => {
	const { isPending, message, mutate } = useResendEmail(onResend);

	const handleResendEmail = () => {
		mutate(email);
	};

	return (
		<div className="resend-email-container">
			<p>
				Didn't receive the email?{' '}
				<a
					onClick={(e) => {
						e.preventDefault();
						handleResendEmail();
					}}
					className={`resend-email-link ${isPending ? 'pending' : ''}`}
				>
					{isPending ? 'Resending...' : 'Resend Email'}
				</a>
			</p>
			{message && <p className="resend-message">{message}</p>}
		</div>
	);
};
