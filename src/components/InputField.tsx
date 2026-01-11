import React, { forwardRef } from 'react';
import { ValidationTooltip } from './ValidationTooltip';
import '../styles/components/InputField.css';
import { Typography } from './Typography';
import type { InputFieldProps } from '../interfaces/components/inputField';

export const InputField = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputFieldProps>(
	(props, ref) => {
		const {
			label,
			id,
			error,
			validationCriteria,
			className = '',
			rightElement,
			type = 'text',
			...rest
		} = props;

		const wrapperClass = `input-control ${error ? 'is-invalid' : ''} ${
			rightElement ? 'with-right-element' : ''
		} ${className}`;

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
							className={wrapperClass}
							{...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
							ref={ref as React.Ref<HTMLTextAreaElement>}
							aria-invalid={!!error}
						/>
					) : (
						<input
							id={id}
							type={type}
							className={wrapperClass}
							{...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
							ref={ref as React.Ref<HTMLInputElement>}
							aria-invalid={!!error}
						/>
					)}

					{rightElement && <div className="input-right-element">{rightElement}</div>}
				</div>

				{error && (
					<Typography variant="muted" color="error">
						{error}
					</Typography>
				)}
			</div>
		);
	},
);
