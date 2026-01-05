import { useResendEmail } from '../hooks';
import { Typography } from '../../../components/Typography';

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
		<div className="mt-2">
			<Typography variant="muted" color="error" className="text-center">
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
				<Typography variant="muted" color="success" className="text-center">
					{message}
				</Typography>
			)}
		</div>
	);
};
