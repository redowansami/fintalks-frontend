import React from 'react';

export interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
	validationCriteria?: string[];
}
