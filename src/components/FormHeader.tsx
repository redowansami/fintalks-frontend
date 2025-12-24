import '../styles/FormHeader.css';

interface FormHeaderProps {
	title?: string;
	subtitle?: string;
}

export const FormHeader = ({ title = 'Form', subtitle }: FormHeaderProps) => (
	<div className="form-header">
		<h2>{title}</h2>
		{subtitle && <p>{subtitle}</p>}
	</div>
);
