import '../../styles/FormComponents/formFooter.css';
import type { FormFooterProps } from '../../types/formProps';

export const FormFooter = ({ text = '', linkText = '', link = '' }: FormFooterProps) => (
	<div className="form-footer">
		<p>
			{text} <a href={link}>{linkText}</a>
		</p>
	</div>
);
