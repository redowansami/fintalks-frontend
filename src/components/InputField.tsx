import React from 'react';
import { ValidationTooltip } from './ValidationTooltip';
import '../styles/InputField.css';

interface InputFieldProps {
	label: string;
	id: string;
	name: string;
	type: 'text';
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	error?: string;
	validationCriteria?: string[];
}

export const InputField: React.FC<InputFieldProps> = ({
	label,
	id,
	name,
	type = 'text',
	placeholder,
	value,
	onChange,
	required = false,
	error,
	validationCriteria,
}) => {
	return (
		<div className="input-field-group">
			<div className="input-field-header">
				<label className="input-field-label" htmlFor={id}>
					{label}
				</label>
				{validationCriteria && <ValidationTooltip criteria={validationCriteria} />}
			</div>
			<input
				type={type}
				id={id}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
				required={required}
				className={`input-field-input ${error ? 'error' : ''}`}
			/>
			{error && <p className="input-field-error">{error}</p>}
		</div>
	);
};
