interface BaseProps {
	label: string;
	error?: string;
	validationCriteria?: string[];
	rightElement?: React.ReactNode;
	className?: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, BaseProps {
	type: 'textarea';
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, BaseProps {
	type?: 'text' | 'email' | 'password';
}

export type InputFieldProps = TextAreaProps | InputProps;
