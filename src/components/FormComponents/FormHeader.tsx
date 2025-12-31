import '../../styles/components/FormComponents/formHeader.css';
import type { FormHeaderProps } from '../../types/formProps';

export const FormHeader = ({ title = 'Form', subtitle }: FormHeaderProps) => (
	<div className="form-header">
		<h2>{title}</h2>
		{subtitle && <p>{subtitle}</p>}
	</div>
);
