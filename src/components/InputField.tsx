import React from 'react';
import '../styles/InputField.css';

interface InputFieldProps {
	label: string;
	id: string;
	name: string;
	type?: string;
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	error?: string;
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
}) => {
	return (
		<div className="input-field-group">
			<label className="input-field-label" htmlFor={id}>
				{label}
			</label>
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
