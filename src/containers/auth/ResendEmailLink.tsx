import { useResendEmail } from '../../hooks/auth';
import { Typography } from '../../components/Typography';

interface ResendEmailLinkProps {
	email: string;
}

export const ResendEmailLink = ({ email }: ResendEmailLinkProps) => {
	const { isPending, message, mutate } = useResendEmail();

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
