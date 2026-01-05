import type { FormFooterProps } from '../../types/formProps';
import { Typography } from '../Typography';

export const FormFooter = ({ text = '', linkText = '', link = '' }: FormFooterProps) => (
	<Typography variant="body" textAlign="center">
		{text}{' '}
		<Typography variant="link" href={link}>
			{linkText}
		</Typography>
	</Typography>
);
