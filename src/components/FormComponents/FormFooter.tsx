import '../../styles/form.css';
import type { FormFooterProps } from '../../types/formProps';
import { Typography } from '../Typography';

export const FormFooter = ({ text = '', linkText = '', link = '' }: FormFooterProps) => (
	<div className="form-footer">
		<Typography variant="body">
			{text}{' '}
			<Typography variant="link" href={link}>
				{linkText}
			</Typography>
		</Typography>
	</div>
);
