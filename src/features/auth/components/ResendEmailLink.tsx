import { useResendEmail } from '../hooks';
import { Typography } from '../../../components/Typography';
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
			<Typography variant="muted" color="error">
				Didn't receive the email?{' '}
				<Typography
					variant="link"
					onClick={(e) => {
						e.preventDefault();
						handleResendEmail();
					}}
				>
					{isPending ? 'Resending...' : 'Resend Email'}
				</Typography>
			</Typography>
			{message && (
				<Typography variant="muted" color="success">
					{message}
				</Typography>
			)}
		</div>
	);
};
