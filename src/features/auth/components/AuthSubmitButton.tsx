import { Button } from '../../../components';

interface AuthSubmitButtonProps {
	isPending: boolean;
	isDisabled?: boolean;
	label: string;
	pendingLabel: string;
}

export const AuthSubmitButton = ({
	isPending,
	isDisabled,
	label,
	pendingLabel,
}: AuthSubmitButtonProps) => (
	<Button type="submit" disabled={isDisabled || isPending}>
		{isPending ? pendingLabel : label}
	</Button>
);
