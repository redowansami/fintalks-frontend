import type { FormHeaderProps } from '../../types/formProps';
import { Typography } from '../Typography';

export const FormHeader = ({ title = 'Form', subtitle }: FormHeaderProps) => (
	<>
		<Typography variant="h2" textAlign="center">
			{title}
		</Typography>
		{subtitle && (
			<Typography variant="muted" textAlign="center">
				{subtitle}
			</Typography>
		)}
	</>
);
