import React from 'react';
import { ValidationTooltip } from './ValidationTooltip';
import { type InputFieldProps } from '../types/components/inputFieldProps';
import '../styles/InputField.css';
import { Typography } from './Typography';

export const InputField: React.FC<InputFieldProps> = ({
	label,
	id,
	error,
	validationCriteria,
	className = '',
	rightElement,
	...rest
}) => {
	return (
		<div className="input-group">
			<div className="input-header">
				<label htmlFor={id}>
					{label}
				</label>
				{validationCriteria && <ValidationTooltip criteria={validationCriteria} />}
			</div>

			<div className="input-wrapper">
				<input
					id={id}
					className={`input-control ${error ? 'is-invalid' : ''} ${
						rightElement ? 'with-right-element' : ''
					} ${className}`}
					{...rest}
				/>
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
