import type { ErrorListProps } from '../../types/errorComponents/errorListProps';
import { List, ListItem } from '../List';
import { Typography } from '../Typography';

export const ErrorList = ({ errors }: ErrorListProps) => {
	const allErrors = Object.values(errors).flat();

	return (
		<List variant="unordered">
			{allErrors.map((error, idx) => (
				<ListItem key={idx}>
					<Typography variant="muted" color="error">
						{'-  ' + error.trim()}{' '}
					</Typography>
				</ListItem>
			))}
		</List>
	);
};
