import type { FormFooterProps } from '../../interfaces/components/formComponents';
import { Typography } from '../Typography';

export const FormFooter = ({ text = '', linkText = '', link = '' }: FormFooterProps) => (
	<Typography variant="body" textAlign="center">
		{text}{' '}
		<Typography variant="link" href={link}>
			{linkText}
		</Typography>
	</Typography>
);
