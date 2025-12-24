import React from 'react';
import { ValidationTooltip } from './ValidationTooltip';
import '../styles/InputField.css';

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
		<div className="input-field-group">
			<div className="input-field-header">
				<label className="input-field-label" htmlFor={id}>
					{label}
				</label>
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
				className={`input-field-input ${error ? 'error' : ''}`}
			/>
			{error && <p className="input-field-error">{error}</p>}
		</div>
	);
};
