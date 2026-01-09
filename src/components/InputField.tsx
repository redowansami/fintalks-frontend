import React, { forwardRef } from 'react';
import { ValidationTooltip } from './ValidationTooltip';
import '../styles/InputField.css';
import { Typography } from './Typography';

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
