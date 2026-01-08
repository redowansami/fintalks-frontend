import React from 'react';
import { ValidationTooltip } from './ValidationTooltip';
import { type InputFieldProps } from '../types/components/inputFieldProps';
import '../styles/InputField.css';
import { Typography } from './Typography';

interface ExtendedInputFieldProps extends Omit<InputFieldProps, 'onChange'> {
	type?: 'text' | 'email' | 'password' | 'textarea';
	rows?: number;
	onChange?:
		| ((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void)
		| ((e: React.ChangeEvent<HTMLInputElement>) => void)
		| ((e: React.ChangeEvent<HTMLTextAreaElement>) => void);
}

export const InputField: React.FC<ExtendedInputFieldProps> = ({
	label,
	id,
	error,
	validationCriteria,
	className = '',
	rightElement,
	type = 'text',
	rows = 4,
	...rest
}) => {
	return (
		<div className="input-group">
			<div className="input-header">
				<label htmlFor={id}>{label}</label>
				{validationCriteria && <ValidationTooltip criteria={validationCriteria} />}
			</div>

			<div className="input-wrapper">
				{type === 'textarea' ? (
					<textarea
						id={id}
						rows={rows}
						className={`input-control ${error ? 'is-invalid' : ''} ${className}`}
						{...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
					/>
				) : (
					<input
						id={id}
						type={type}
						className={`input-control ${error ? 'is-invalid' : ''} ${
							rightElement ? 'with-right-element' : ''
						} ${className}`}
						{...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
					/>
				)}
				{rightElement && <div className="input-right-element">{rightElement}</div>}
			</div>

			{error && (
				<Typography variant="muted" color="error" className="input-error">
					{error}
				</Typography>
			)}
		</div>
	);
};
