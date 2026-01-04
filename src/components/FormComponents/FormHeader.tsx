import '../../styles/form.css';
import type { FormHeaderProps } from '../../types/formProps';
import { Typography } from '../Typography';

export const FormHeader = ({ title = 'Form', subtitle }: FormHeaderProps) => (
	<div className="form-header">
		<Typography variant="h2">{title}</Typography>
		{subtitle && <Typography variant="muted">{subtitle}</Typography>}
	</div>
);
