import '../styles/FormFooter.css';

interface FormFooterProps {
	text?: string;
	linkText?: string;
	link?: string;
}

export const FormFooter = ({ text = '', linkText = '', link = '' }: FormFooterProps) => (
	<div className="form-footer">
		<p>
			{text} <a href={link}>{linkText}</a>
		</p>
	</div>
);
