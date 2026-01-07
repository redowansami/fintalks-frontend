import React from 'react';
import { ValidationTooltip } from './ValidationTooltip';
import '../styles/InputField.css';
import { Typography } from './Typography';

interface TextAreaFieldProps {
	label: string;
	id: string;
	name: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	required?: boolean;
	error?: string;
	validationCriteria?: string[];
	rows?: number;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
	label,
	id,
	name,
	placeholder,
	value,
	onChange,
	required = false,
	error,
	validationCriteria,
	rows = 4,
}) => {
	return (
		<div className="input-group">
			<div className="input-header">
				<label htmlFor={id}>{label}</label>
				{validationCriteria && <ValidationTooltip criteria={validationCriteria} />}
			</div>
			<textarea
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
				rows={rows}
				className={`input-control ${error ? 'is-invalid' : ''}`}
			/>
			{error && (
				<Typography variant="muted" color="error">
					{error}
				</Typography>
			)}
		</div>
	);
};
